from django.shortcuts import render
import os
from django.http import HttpResponse
from Backend import settings

# Create your views here.

# View to return the static front-end code
def index(request):
    try:
        with open(os.path.join(settings.REACT_APP_DIR, 'Frontend/public/index.html')) as f:
            return HttpResponse(f.read())
    except FileNotFoundError:
        return HttpResponse(
            """
            Please build the front-end using cd frontend && npm install && npm run build 
            """,
            status=501,
        )