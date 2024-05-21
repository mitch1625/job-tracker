from django.urls import path
from .views import SignUp, Login, LogOut, UserInfo

urlpatterns = [
  path("signup/", SignUp.as_view()),
  path("login/", Login.as_view()),
  path("logout/", LogOut.as_view()),
  path("userinfo/", UserInfo.as_view())
]