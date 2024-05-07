from rest_framework.serializers import ModelSerializer
from .models import JobsMananger

class JobSerializer(ModelSerializer):
  class Meta:
    model = JobsMananger
    fields =  ['all']