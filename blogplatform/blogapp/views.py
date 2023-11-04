from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def loginPageView(request):
    return render(request=request, template_name = 'login.html',context = {})
def signupPageView(request):
    return render(request=request, template_name = 'signup.html',context = {})
def signout(request):
    pass