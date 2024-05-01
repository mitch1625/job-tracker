from django.urls import path
from .views import SignUp, Login, LogOut

urlpatterns = [
  path("signup/", SignUp.as_view()),
  path("login/", Login.as_view()),
  path("logout/", LogOut.as_view())
]