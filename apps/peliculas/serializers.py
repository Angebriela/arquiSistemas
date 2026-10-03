from apps.core.serializers import BaseModelSerializer

from .models import Ejemplar, Pelicula, Productora


class PeliculaSerializer(BaseModelSerializer):
    class Meta(BaseModelSerializer.Meta):
        model = Pelicula
        fields = '__all__'


class ProductoraSerializer(BaseModelSerializer):
    class Meta(BaseModelSerializer.Meta):
        model = Productora
        fields = '__all__'


class EjemplarSerializer(BaseModelSerializer):
    class Meta(BaseModelSerializer.Meta):
        model = Ejemplar
        fields = '__all__'
