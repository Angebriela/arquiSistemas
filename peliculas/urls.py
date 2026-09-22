from rest_framework.routers import DefaultRouter
from .views import PeliculaViewSet

router = DefaultRouter()

router.register(
    r'peliculas',
    PeliculaViewSet
)

urlpatterns = router.urls