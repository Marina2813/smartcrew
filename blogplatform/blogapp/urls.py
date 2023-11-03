from django.urls import path
from . import views

urlpatterns = [
    path(route= 'login', view= views.loginPageView, name='login'),
]