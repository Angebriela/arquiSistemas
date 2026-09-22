from django.db import models
from core.models import BaseModel


class Genero(BaseModel):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField(blank=False)
    activa = models.BooleanField(default=True)


class Subcategoria(BaseModel):
    genero = models.ForeignKey(
        Genero,
        on_delete=models.CASCADE
    )
    nombre = models.CharField(max_length=100)


class Etiqueta(BaseModel):
    nombre = models.CharField(max_length=50)
    color = models.CharField(max_length=20)
    prioridad = models.PositiveIntegerField(default=1)
