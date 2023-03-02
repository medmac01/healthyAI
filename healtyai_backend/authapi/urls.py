from django.urls import path
from .views import LoginView, SignupView

urlpatterns = [
    path('api/login/', LoginView.as_view() , name='login'),
    path('api/signup/', SignupView.as_view() , name='signup'),
]