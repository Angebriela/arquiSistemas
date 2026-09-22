from django.db import models
from core.models import BaseModel

class Director(BaseModel):
    nombre = models.CharField(max_length=150)
    fecha_nacimiento = models.DateField()
    activo = models.BooleanField(default=True)

    def __str__(self):
        return self.nombre


class Biografia(BaseModel):
    director = models.OneToOneField(
        Director,
        on_delete=models.CASCADE
    )
    contenido = models.TextField()


class Nacionalidad(BaseModel):
    director = models.ForeignKey(
        Director,
        on_delete=models.CASCADE
    )
    pais = models.CharField(max_length=100)
    codigo = models.CharField(max_length=3)

