from rest_framework import serializers
from ..models.subscribers_model import Subscribers


class SubscribersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscribers
        fields = "__all__"
