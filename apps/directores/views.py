from apps.core.views import SoftDeleteModelViewSet

from .models import Biografia, Director, Nacionalidad
from .serializers import BiografiaSerializer, DirectorSerializer, NacionalidadSerializer


class DirectorViewSet(SoftDeleteModelViewSet):
    queryset = Director.objects.all()
    serializer_class = DirectorSerializer


class BiografiaViewSet(SoftDeleteModelViewSet):
    queryset = Biografia.objects.all()
    serializer_class = BiografiaSerializer


class NacionalidadViewSet(SoftDeleteModelViewSet):
    queryset = Nacionalidad.objects.all()
    serializer_class = NacionalidadSerializer
