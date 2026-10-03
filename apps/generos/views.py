from apps.core.views import SoftDeleteModelViewSet

from .models import Etiqueta, Genero, Subcategoria
from .serializers import EtiquetaSerializer, GeneroSerializer, SubcategoriaSerializer


class GeneroViewSet(SoftDeleteModelViewSet):
    queryset = Genero.objects.all()
    serializer_class = GeneroSerializer


class SubcategoriaViewSet(SoftDeleteModelViewSet):
    queryset = Subcategoria.objects.all()
    serializer_class = SubcategoriaSerializer


class EtiquetaViewSet(SoftDeleteModelViewSet):
    queryset = Etiqueta.objects.all()
    serializer_class = EtiquetaSerializer
