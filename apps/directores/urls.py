from rest_framework.routers import DefaultRouter

from .views import BiografiaViewSet, DirectorViewSet, NacionalidadViewSet


router = DefaultRouter()
router.register('directores', DirectorViewSet, basename='director')
router.register('biografias', BiografiaViewSet, basename='biografia')
router.register('nacionalidades', NacionalidadViewSet, basename='nacionalidad')

urlpatterns = router.urls
