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


@api_view(['POST'])
def apply_job(req):
    user_id = req.data.get("user_id")
    job_id = req.data.get("job_id")
    phone = req.data.get("phone")
    cover_letter = req.data.get("cover_letter")
    resume = req.FILES.get("resume")

    if not user_id or not job_id or not phone or not resume:
        return Response({"message":"All required fields must be filled"},status=400)
    
    if JobApplication.objects.filter(user_id=user_id,job_id=job_id).exists():
        return Response({"message":"You already applied for this job"},status=400)
    
    JobApplication.objects.create(
        user_id=user_id,
        job_id=job_id,
        phone=phone,
        cover_letter=cover_letter,
        resume=resume
    )

    return Response({"message":"Application submitted successfully"},status=201)

@api_view(['GET'])
def check_application(request):

    user_id = request.GET.get("user_id")
    job_id = request.GET.get("job_id")

    if not user_id or not job_id:
        return Response({"applied": False})

    exists = JobApplication.objects.filter(
        user_id=user_id,
        job_id=job_id
    ).exists()

    return Response({"applied": exists})


@api_view(['GET'])
def user_applications(request):

    user_id = request.GET.get("user_id")

    if not user_id:
        return Response({"error": "User required"}, status=400)

    applications = JobApplication.objects.filter(
        user_id=user_id
    ).order_by("-applied_at")

    data = []

    for app in applications:
        data.append({
            "job_id": app.job_id,
            "status": app.status,
            "applied_at": app.applied_at,
        })

    return Response(data)