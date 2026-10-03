from apps.core.serializers import BaseModelSerializer

from .models import Direccion, Perfil, Usuario


class UsuarioSerializer(BaseModelSerializer):
    class Meta(BaseModelSerializer.Meta):
        model = Usuario
        fields = '__all__'


class PerfilSerializer(BaseModelSerializer):
    class Meta(BaseModelSerializer.Meta):
        model = Perfil
        fields = '__all__'


class DireccionSerializer(BaseModelSerializer):
    class Meta(BaseModelSerializer.Meta):
        model = Direccion
        fields = '__all__'
