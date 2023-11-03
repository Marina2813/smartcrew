from django.shortcuts import render

# Create your views here.
def loginPageView(request):
    return render(request=request, template_name = 'login.html',context = {})