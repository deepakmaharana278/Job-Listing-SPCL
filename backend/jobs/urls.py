from django.urls import path
from .views import *

urlpatterns = [
    path('register/', register),
    path('login/', login),
    path('apply/', apply_job),
    path('check-application/', check_application),
]