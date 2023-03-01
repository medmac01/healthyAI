from django.urls import path
from .views import ResponseView

urlpatterns = [
    path('api/get_response/', ResponseView.as_view(), name='get_response'),
]

