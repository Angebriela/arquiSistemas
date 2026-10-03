from rest_framework.routers import DefaultRouter

from .views import DetallePrestamoViewSet, MultaViewSet, PrestamoViewSet


router = DefaultRouter()
router.register('prestamos', PrestamoViewSet, basename='prestamo')
router.register('detalles-prestamo', DetallePrestamoViewSet, basename='detalle-prestamo')
router.register('multas', MultaViewSet, basename='multa')

urlpatterns = router.urls
