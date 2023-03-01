from django.urls import path
from .views import get_response, message, login

urlpatterns = [
    path('message/', message, name='message'),
    path('api/get_response/', get_response, name='get_response'),
]

