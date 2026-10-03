from apps.core.serializers import BaseModelSerializer

from .models import DetallePrestamo, Multa, Prestamo


class PrestamoSerializer(BaseModelSerializer):
    class Meta(BaseModelSerializer.Meta):
        model = Prestamo
        fields = '__all__'


class DetallePrestamoSerializer(BaseModelSerializer):
    class Meta(BaseModelSerializer.Meta):
        model = DetallePrestamo
        fields = '__all__'


class MultaSerializer(BaseModelSerializer):
    class Meta(BaseModelSerializer.Meta):
        model = Multa
        fields = '__all__'
