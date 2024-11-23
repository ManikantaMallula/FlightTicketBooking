from django.urls import path,include
from .views import FlightDetailViewSet
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'api', FlightDetailViewSet, basename='flight')


urlpatterns = [
    path('', include(router.urls)),
]
