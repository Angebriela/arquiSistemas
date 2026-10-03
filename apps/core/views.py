from rest_framework import viewsets


class SoftDeleteModelViewSet(viewsets.ModelViewSet):
    """CRUD común para modelos que heredan de BaseModel."""

    def get_queryset(self):
        return self.queryset.filter(is_deleted=False)

    def perform_destroy(self, instance):
        instance.is_deleted = True
        instance.save(update_fields=('is_deleted', 'updated_at'))
