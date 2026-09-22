from django.db import models
from core.models import BaseModel
from usuarios.models import Usuario
from peliculas.models import Ejemplar


class Prestamo(BaseModel):
    usuario = models.ForeignKey(
        Usuario,
        on_delete=models.PROTECT
    )
    fecha_prestamo = models.DateField()
    fecha_devolucion = models.DateField(null=True, blank=True)
    activo = models.BooleanField(default=True)


class DetallePrestamo(BaseModel):
    prestamo = models.ForeignKey(
        Prestamo,
        on_delete=models.CASCADE
    )
    ejemplar = models.ForeignKey(
        Ejemplar,
        on_delete=models.PROTECT
    )
    cantidad = models.PositiveIntegerField(default=1)


class Multa(BaseModel):
    prestamo = models.OneToOneField(
        Prestamo,
        on_delete=models.CASCADE
    )
    monto = models.DecimalField(
        max_digits=8,
        decimal_places=2
    )
    pagada = models.BooleanField(default=False)
    fecha_generacion = models.DateTimeField(
        auto_now_add=True
    )