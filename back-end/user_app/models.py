from django.db import models
from django.core.validators import validate_email

class User(models.Model):
  email = models.EmailField(
    max_length=50,
    unique=True,
    verbose_name="email address",
    validators=[validate_email])
  
  USERNAME_FIELD = "email"
  REQUIRED_FIELDS = []

