from rest_framework import viewsets, filters
from .serializers import PostSerializer
from .models import Post
from django_filters.rest_framework import DjangoFilterBackend
# Create your views here.

class PostView(viewsets.ModelViewSet):
  serializer_class = PostSerializer
  queryset = Post.objects.all()
  filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
  filterset_fields = ['id', 'title', 'class_and_section', 'description', 'completed']
  search_fields = ['id', 'title', 'class_and_section', 'description', 'completed']
  ordering_fields = ['id', 'title', 'class_and_section', 'description', 'completed']