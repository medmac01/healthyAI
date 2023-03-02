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

class ResponseView(APIView):
    def post(self,request):
        prompt = request.data.get('message')
        print(str(prompt))
        print(type(prompt))
        response = openai.Completion.create(
            engine="text-davinci-003",
            # prompt= 'give me in bullet points 5 home remedies for ' + prompt,
            prompt= 'give me in bullet points 5 diseases for the following symptoms' + str(prompt),
            max_tokens=1024,
            n=1,
            stop=None,
            temperature=0.1,
        )
        context = {
            'response': response.choices[0].text,
        }
        return Response(context)


class RemediesView(APIView):
    def post(self,request):
        prompt = request.data.get('message')
        print(str(prompt))
        print(type(prompt))
        response = openai.Completion.create(
            engine="text-davinci-003",
            prompt= 'give me five remedies for' + str(prompt),
            max_tokens=1024,
            n=1,
            stop=None,
            temperature=0.1,
        )
        context = {
            'response': response.choices[0].text,
        }
        return Response(context)


class DiseaseInfoView(APIView):
    def post(self,request):
        prompt = request.data.get('message')
        print(str(prompt))
        print(type(prompt))
        response = openai.Completion.create(
            engine="text-davinci-003",
            prompt= 'give me some info about ' + str(prompt),
            max_tokens=1024,
            n=1,
            stop=None,
            temperature=0.1,
        )
        context = {
            'response': response.choices[0].text,
        }
        return Response(context)
