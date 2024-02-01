from django.urls import path, include
from rest_framework import routers

from .views import PhoneInfoViewSet

router = routers.DefaultRouter()
router.register('info', PhoneInfoViewSet, basename="info")

app_name = "info"
urlpatterns = [
    path("", include(router.urls))
]
