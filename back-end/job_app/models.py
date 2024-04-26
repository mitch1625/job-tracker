from django.db import models
import datetime

class JobsMananger(models.Model):
  company_name = models.CharField(max_length=70),
  job_title = models.CharField(max_length=50),
  location = models.CharField(max_length=70),
  job_notes = models.CharField(),
  # application_status = models.Value() what to add as model
  applied_date = models.DateField(default=datetime.date.today)
  