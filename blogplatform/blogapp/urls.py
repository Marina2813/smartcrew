from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path(route= 'login', view= views.loginPageView, name='login'),
    path(route= 'signup', view= views.signupPageView, name='signup'),
    path(route= 'signout', view= views.signout, name='signout')
]