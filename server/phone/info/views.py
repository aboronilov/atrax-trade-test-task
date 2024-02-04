from rest_framework import status, viewsets
from .serializers import PhoneInfoSerializer
from .models import PhoneInfo
from rest_framework.response import Response
from rest_framework.decorators import action
from django.db import connection
from django.db.models import Q


class PhoneInfoViewSet(viewsets.ModelViewSet):
    serializer_class = PhoneInfoSerializer
    queryset = PhoneInfo.objects.all()

    def create(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        serializer.save()

    @action(detail=False, methods=['post'])
    def stat(self, request):
        phone = request.data.get("phone", None)
        if not phone:
            return Response(status=status.HTTP_400_BAD_REQUEST, data={"Error": "No phone provided"})

        operator_code = int(phone[1:4])
        rest_part = int(phone[4:])

        phone_exists = self.find_number(operator_code, rest_part)
        if not phone_exists:
            return Response(status=status.HTTP_404_NOT_FOUND, data={"Error": "No data found"})

        data = self.serializer_class(phone_exists).data

        return Response(status=status.HTTP_200_OK, data=data)

    def find_number(self, operator_code, rest_code):
        look_up = Q(operator_code=operator_code) & Q(top_limit__gte=rest_code) & Q(bottom_limit__lte=rest_code)
        item = self.queryset.filter(look_up).first()

        return item
