from apps.core.serializers import BaseModelSerializer

from .models import Etiqueta, Genero, Subcategoria


class GeneroSerializer(BaseModelSerializer):
    class Meta(BaseModelSerializer.Meta):
        model = Genero
        fields = '__all__'


class SubcategoriaSerializer(BaseModelSerializer):
    class Meta(BaseModelSerializer.Meta):
        model = Subcategoria
        fields = '__all__'


class EtiquetaSerializer(BaseModelSerializer):
    class Meta(BaseModelSerializer.Meta):
        model = Etiqueta
        fields = '__all__'
