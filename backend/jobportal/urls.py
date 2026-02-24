from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from django.http import JsonResponse

def health_check(req):
    return JsonResponse({"status": "alive", "message": "Render app is awake!"})

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('jobs.urls')),
    path('health/', health_check),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
