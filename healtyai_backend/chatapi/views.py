from django.shortcuts import render
from django.http import JsonResponse
import openai

openai.api_key = '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'

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