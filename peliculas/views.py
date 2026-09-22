from django.shortcuts import render
from rest_framework import viewsets
from .models import Pelicula
from .serializers import PeliculaSerializer

class PeliculaViewSet(viewsets.ModelViewSet):
    queryset = Pelicula.objects.filter(is_deleted=False)
    serializer_class = PeliculaSerializer
    
    def perform_destroy(self, instance):
        instance.is_deleted = True
        instance.save()
    
