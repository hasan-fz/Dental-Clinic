from django.urls import path
from .views import *
from . import views
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)
from .views import MyTokenObtainPairView

urlpatterns = [
    path('patient-list', PatientView.as_view(), name="list-patients"),
    path('patient-list/<int:pk>', PatientDetailView.as_view(),
         name="retrieve-patients"),
    path('patient-create', CreatePatientView.as_view(), name="create-patients"),
    path('patient-update/<int:pk>',
         UpdatePatientView.as_view(), name="update-patients"),
    path('patient-delete/<int:pk>',
         DeletePatientView.as_view(), name="delete-patients"),

    path('doctor-list', DoctorView.as_view(), name="list-doctors"),
    path('doctor-list/<int:pk>', DoctorDetailView.as_view(),
         name="retrieve-doctors"),
    path('doctor-create', CreateDoctorView.as_view(), name="create-doctors"),
    path('doctor-update/<int:pk>',
         UpdateDoctorView.as_view(), name="update-doctors"),
    path('doctor-delete/<int:pk>',
         DeleteDoctorView.as_view(), name="delete-doctors"),

    path('admin-list', AdminView.as_view(), name="list-admins"),
    path('admin-list/<int:pk>', AdminDetailView.as_view(), name="retrieve-admins"),
    path('admin-create', CreateAdminView.as_view(), name="create-admins"),
    path('admin-update/<int:pk>', UpdateAdminView.as_view(), name="update-admins"),
    path('admin-delete/<int:pk>', DeleteAdminView.as_view(), name="delete-admins"),

    path('receptionist-list', ReceptionistView.as_view(),
         name="list-receptionists"),
    path('receptionist-list/<int:pk>', ReceptionistDetailView.as_view(),
         name="retrieve-receptionists"),
    path('receptionist-create', CreateReceptionistView.as_view(),
         name="create-receptionists"),
    path('receptionist-update/<int:pk>',
         UpdateReceptionistView.as_view(), name="update-receptionists"),
    path('receptionist-delete/<int:pk>',
         DeleteReceptionistView.as_view(), name="delete-receptionists"),

    path('appointment-list', AppointmentView.as_view(), name="list-appointments"),
    path('appointment-list/<int:pk>', AppointmentDetailView.as_view(),
         name="retrieve-appointments"),
    path('appointment-create', CreateAppointmentView.as_view(),
         name="create-appointments"),
    path('appointment-update/<int:pk>',
         UpdateAppointmentView.as_view(), name="update-appointments"),
    path('appointment-delete/<int:pk>',
         DeleteAppointmentView.as_view(), name="delete-appointments"),

    path('prescription-list', PrescriptionView.as_view(),
         name="list-prescriptions"),
    path('prescription-list/<int:pk>', PrescriptionDetailView.as_view(),
         name="retrieve-prescriptions"),
    path('prescription-create', CreatePrescriptionView.as_view(),
         name="create-prescriptions"),
    path('prescription-update/<int:pk>',
         UpdatePrescriptionView.as_view(), name="update-prescriptions"),
    path('prescription-delete/<int:pk>',
         DeletePrescriptionView.as_view(), name="delete-prescriptions"),
    path('r', views.getRoutes),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
