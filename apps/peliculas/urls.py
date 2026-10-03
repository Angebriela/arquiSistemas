from rest_framework.routers import DefaultRouter
from .views import EjemplarViewSet, PeliculaViewSet, ProductoraViewSet

router = DefaultRouter()

router.register('peliculas', PeliculaViewSet, basename='pelicula')
router.register('productoras', ProductoraViewSet, basename='productora')
router.register('ejemplares', EjemplarViewSet, basename='ejemplar')

urlpatterns = router.urls
