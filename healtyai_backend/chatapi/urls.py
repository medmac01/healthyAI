from django.urls import path
from .views import ResponseView, DiseaseInfoView, RemediesView

urlpatterns = [
    path('api/get_response/', ResponseView.as_view(), name='get_response'),
    path('api/get_disease_info/', DiseaseInfoView.as_view(), name='get_info'),
    path('api/get_remedies/', RemediesView.as_view(), name='get_remedies'),
]

