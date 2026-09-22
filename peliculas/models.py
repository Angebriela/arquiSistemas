from django.db import models
from core.models import BaseModel
from directores.models import Director
from generos.models import Genero


class Pelicula(BaseModel):
    titulo = models.CharField(max_length=300)
    upc = models.CharField(max_length=20, unique=True)
    precio = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )
    duracion = models.DurationField(
        help_text= "Formato: HH:MM:SS como 01:15:00"
    )
    estrenada = models.BooleanField(default=True)

    director = models.ForeignKey(
        Director,
        on_delete=models.PROTECT
    )

    genero = models.ForeignKey(
        Genero,
        on_delete=models.PROTECT
    )


class Productora(BaseModel):
    nombre = models.CharField(max_length=150)
    pais = models.CharField(max_length=100)


class Ejemplar(BaseModel):
    pelicula = models.ForeignKey(
        Pelicula,
        on_delete=models.CASCADE
    )
    codigo_interno = models.CharField(max_length=50)
    disponible = models.BooleanField(default=True)
