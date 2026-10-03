from apps.core.views import SoftDeleteModelViewSet

from .models import DetallePrestamo, Multa, Prestamo
from .serializers import DetallePrestamoSerializer, MultaSerializer, PrestamoSerializer


class PrestamoViewSet(SoftDeleteModelViewSet):
    queryset = Prestamo.objects.all()
    serializer_class = PrestamoSerializer


class DetallePrestamoViewSet(SoftDeleteModelViewSet):
    queryset = DetallePrestamo.objects.all()
    serializer_class = DetallePrestamoSerializer


class MultaViewSet(SoftDeleteModelViewSet):
    queryset = Multa.objects.all()
    serializer_class = MultaSerializer
