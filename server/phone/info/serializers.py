from rest_framework import serializers

from .models import PhoneInfo


class PhoneInfoSerializer(serializers.ModelSerializer):
    operator_code = serializers.ReadOnlyField()
    bottom_limit = serializers.ReadOnlyField()
    top_limit = serializers.ReadOnlyField()
    operator_name = serializers.ReadOnlyField()
    region = serializers.ReadOnlyField()

    class Meta:
        model = PhoneInfo
        fields = "__all__"

