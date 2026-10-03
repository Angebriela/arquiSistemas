from rest_framework.routers import DefaultRouter

from .views import EtiquetaViewSet, GeneroViewSet, SubcategoriaViewSet


router = DefaultRouter()
router.register('generos', GeneroViewSet, basename='genero')
router.register('subcategorias', SubcategoriaViewSet, basename='subcategoria')
router.register('etiquetas', EtiquetaViewSet, basename='etiqueta')

urlpatterns = router.urls
