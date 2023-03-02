from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate, login
from .serializer import *
from .models import *

import redis

REDIS_HOST = 'localhost'
REDIS_PORT = 6379
REDIS_DB = 0

r = redis.Redis(host=REDIS_HOST, port=REDIS_PORT, db=REDIS_DB)

class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        user = CustomUser()

        if user.login(email,password):
            return Response({'success': True})
        else:
            return Response({'success': False}, status=status.HTTP_401_UNAUTHORIZED)

        # serializer = ReactSerializer(data=request.data)
        # if serializer.is_valid():
        #     serializer.save()
        #     return Response(serializer.data)




class SignupView(APIView):
    def post(self, request):
        name = request.data.get('name')
        email = request.data.get('email')
        password = request.data.get('password')
        age = request.data.get('age')
        gender = request.data.get('gender')
        allergies = request.data.get('allergies')
        smoker = request.data.get('smoker')
        pregnant = request.data.get('pregnant')
        drinker = request.data.get('drinker')

        if not name or not email or not password:
            return Response({'message': 'All fields are required.'}, status=status.HTTP_400_BAD_REQUEST)
        if CustomUser.objects.filter(name=name).exists():
            return Response({'message': 'name is already taken.'}, status=status.HTTP_400_BAD_REQUEST)
        if CustomUser.objects.filter(email=email).exists():
            return Response({'message': 'Email is already taken.'}, status=status.HTTP_400_BAD_REQUEST)

        user = CustomUser()
        user.create_user(name=name, email=email, password=password, age=age, gender= gender, allergies= allergies,
        smoker=smoker, pregnant=pregnant, drinker=drinker)
        user.save()
        
        return Response({'message': 'User created successfully.'})
