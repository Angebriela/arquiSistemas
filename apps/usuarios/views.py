from apps.core.views import SoftDeleteModelViewSet

from .models import Direccion, Perfil, Usuario
from .serializer import DireccionSerializer, PerfilSerializer, UsuarioSerializer


class UsuarioViewSet(SoftDeleteModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer


class PerfilViewSet(SoftDeleteModelViewSet):
    queryset = Perfil.objects.all()
    serializer_class = PerfilSerializer


class DireccionViewSet(SoftDeleteModelViewSet):
    queryset = Direccion.objects.all()
    serializer_class = DireccionSerializer


