from rest_framework.routers import DefaultRouter

from .views import DireccionViewSet, PerfilViewSet, UsuarioViewSet


router = DefaultRouter()
router.register('usuarios', UsuarioViewSet, basename='usuario')
router.register('perfiles', PerfilViewSet, basename='perfil')
router.register('direcciones', DireccionViewSet, basename='direccion')

urlpatterns = router.urls
