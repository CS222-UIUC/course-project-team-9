from django.contrib import admin
from .models import Post
# Register your models here.
class PostAdmin(admin.ModelAdmin):
  list_display = ('title', 'class_and_section', 'description', 'completed')

admin.site.register(Post, PostAdmin)