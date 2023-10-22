from django.http import JsonResponse
from ..models.subscribers_model import Subscribers
from ..serializers.subscribers_serializer import SubscribersSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


@api_view(['GET', 'POST'])
def subscribers_list(request):
    if request.method == 'GET':
        subscribers = Subscribers.objects.all()
        serializer = SubscribersSerializer(subscribers, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = SubscribersSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
