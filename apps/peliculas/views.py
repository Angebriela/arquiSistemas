from apps.core.views import SoftDeleteModelViewSet

from .models import Ejemplar, Pelicula, Productora
from .serializers import EjemplarSerializer, PeliculaSerializer, ProductoraSerializer

class PeliculaViewSet(SoftDeleteModelViewSet):
    queryset = Pelicula.objects.all()
    serializer_class = PeliculaSerializer


class ProductoraViewSet(SoftDeleteModelViewSet):
    queryset = Productora.objects.all()
    serializer_class = ProductoraSerializer


class EjemplarViewSet(SoftDeleteModelViewSet):
    queryset = Ejemplar.objects.all()
    serializer_class = EjemplarSerializer
    
