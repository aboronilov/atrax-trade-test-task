from rest_framework import viewsets
from .serializers import PhoneInfoSerializer
from .models import PhoneInfo


class PhoneInfoViewSet(viewsets.ModelViewSet):
    serializer_class = PhoneInfoSerializer
    queryset = PhoneInfo.objects.all()
