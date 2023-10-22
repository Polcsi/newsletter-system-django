from django.contrib import admin
from django.urls import path
from .views import subscribers_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path("subscribers/", subscribers_view.subscribers_list)
]
