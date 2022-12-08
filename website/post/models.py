from email.policy import default
from django.db import models

# Create your models here.
class Post(models.Model):
  title = models.CharField(max_length=128)
  class_and_section = models.TextField()
  description = models.TextField()
  completed = models.BooleanField(default=False)

  def _str_(self):
    return self.title