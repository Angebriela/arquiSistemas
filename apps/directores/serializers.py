from apps.core.serializers import BaseModelSerializer

from .models import Biografia, Director, Nacionalidad


class DirectorSerializer(BaseModelSerializer):
    class Meta(BaseModelSerializer.Meta):
        model = Director
        fields = '__all__'


class BiografiaSerializer(BaseModelSerializer):
    class Meta(BaseModelSerializer.Meta):
        model = Biografia
        fields = '__all__'


class NacionalidadSerializer(BaseModelSerializer):
    class Meta(BaseModelSerializer.Meta):
        model = Nacionalidad
        fields = '__all__'
