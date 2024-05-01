from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.status import (
  HTTP_201_CREATED,
  HTTP_204_NO_CONTENT,
  HTTP_400_BAD_REQUEST,
  HTTP_404_NOT_FOUND,
  HTTP_200_OK
)
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import get_object_or_404
from .models import User

class SignUp(APIView):
  def post(self, request):
    try:
      data = request.data
      data['username'] = request.data.get("email")
      print(data)
      new_user = User.objects.create_user(**data)
      if new_user is not None:
        new_token = Token.objects.create(user=new_user)
        return Response(
          # {"email": new_user.email, "token": new_token.key},
          status=HTTP_201_CREATED
        )
    except Exception as e:
      print(e)
      return Response('User could not be created', status=HTTP_400_BAD_REQUEST)

class Login(APIView):
  def post(self, request):
    data = request.data
    user = authenticate(username= data.get("email"), password = data.get('password'))
    if user is not None:
      token, created = Token.objects.get_or_create(user=user)
      login(request, user)
      return Response({"user":user.email, "token":token.key})
    return Response("Improper credentials", status=HTTP_404_NOT_FOUND)