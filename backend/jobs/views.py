from rest_framework.response import  Response
from rest_framework.decorators import  api_view
from django.contrib.auth.hashers import make_password,check_password
from .models import *

@api_view(['POST'])
def register(req):
    name = req.data.get('name')
    email = req.data.get('email')
    password = req.data.get('password')
    career_level = req.data.get('career_level')

    if User.objects.filter(email=email).exists():
        return Response({'message':'Email already exists'},status=400)
    
    user = User.objects.create(name=name,email=email,password=make_password(password),career_level=career_level)

    return Response({'message':f'{name} registered successfully'},status=201)

@api_view(['POST'])
def login(req):
    email = req.data.get('email')
    password = req.data.get('password')

    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        return Response({'error': 'Invalid email or password'}, status=400)

    if not check_password(password, user.password):
        return Response({'error': 'Invalid password'}, status=400)

    return Response({
        'message': 'Login successful',
        "user": {
            "id": user.id,
            "name": user.name,
            "email": user.email,
            "career_level": user.career_level
    }},status=200)


