from django.db import models
from django.core.validators import validate_email
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
  email = models.EmailField(
    max_length=150,
    unique=True,
    validators=[validate_email],
    )
  
  USERNAME_FIELD = "email"
  REQUIRED_FIELDS = []