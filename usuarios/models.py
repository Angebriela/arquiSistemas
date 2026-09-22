from django.db import models
from core.models import BaseModel


class Usuario(BaseModel):
    nombre = models.CharField(max_length=100)
    correo = models.EmailField(unique=True)
    edad = models.PositiveIntegerField()
    activo = models.BooleanField(default=True)

    def __str__(self):
        return self.nombre
    
class Perfil(BaseModel):
    usuario = models.OneToOneField(
        Usuario,
        on_delete=models.CASCADE
    )
    biografia = models.TextField(blank=True)
    fecha_nacimiento = models.DateField(null=True, blank=True)
    
    
class Direccion(BaseModel):
    usuario = models.ForeignKey(
        Usuario,
        on_delete=models.CASCADE
    )
    direccion = models.CharField(max_length=200)
    ciudad = models.CharField(max_length=100)
    codigo_postal = models.CharField(max_length=20)