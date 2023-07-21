from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('signup', index),
    path('about', index),
    path('admin-home', index),
    path('admin-home/patient-manage', index),
    path('admin-home/patient-manage/<str:userId>', index),
    path('admin-home/doctor-manage', index),
    path('admin-home/doctor-manage/<str:userId>', index),
    path('admin-home/appointment-manage', index),
    path('admin-home/appointment-manage/<str:userId>', index),
    path('doctor-home', index),
    path('doctor-home/prescription-manage', index),
    path('doctor-home/prescription-create', index),
    path('doctor-home/appointment-view', index),
    path('receptionist-home', index),
    path('receptionist-home/patient-view', index),
    path('receptionist-home/doctor-view', index),
    path('receptionist-home/appointment-view', index),
    path('patient-home', index),
    path('patient-home/prescription-view', index),
    path('patient-home/appointment-view', index),
]
