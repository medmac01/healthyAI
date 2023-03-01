from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from django.http import JsonResponse
import openai

openai.api_key = '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'

import redis

REDIS_HOST = 'localhost'
REDIS_PORT = 6379
REDIS_DB = 0

r = redis.Redis(host=REDIS_HOST, port=REDIS_PORT, db=REDIS_DB)

def get_response(request):
    if request.method == 'POST':
        prompt = request.POST.get('message')
        response = openai.Completion.create(
            engine="text-davinci-003",
            # prompt= 'give me in bullet points 5 home remedies for ' + prompt,
            prompt= 'give me in bullet points top 5 reasons for ' + prompt,
            max_tokens=1024,
            n=1,
            stop=None,
            temperature=0.1,
        )
        context = {
            'response': response.choices[0].text,
        }
        print(response.choices)
        return render(request, 'message.html', context)

def message(request):
    return render(request, 'message.html')


def login(request):
    if request.method == 'POST':
        fullname = request.POST['fullname']
        age = request.POST['age']
        email = request.POST['email']
        password = request.POST['password']
        gender = request.POST['gender']
        allergies = request.POST['allergies']
        phobias = request.POST['phobias']
        smoker = request.POST.get('smoker', 'No')
        pregnant = request.POST.get('pregnant', 'No')
        drinker = request.POST.get('drinker', 'No')

        user = {
            'fullname': fullname,
            'age': age,
            'email': email,
            'password': password,
            'gender': gender,
            'allergies': allergies,
            'phobias': phobias,
            'smoker': smoker,
            'pregnant': pregnant,
            'drinker': drinker
        }

        # Store user data in Redis database
        for key, value in user.items():
            r.hset(email, key, value)
        print(r.get('ayoub'))

        return redirect('symptoms')

    return render(request, 'login.html')