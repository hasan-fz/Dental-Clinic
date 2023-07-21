from django.shortcuts import render
from rest_framework.generics import CreateAPIView, ListAPIView, UpdateAPIView, DestroyAPIView, RetrieveAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, viewsets
from rest_framework.status import *
from .models import *
from .serializers import *
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


# Patient Views


class PatientView(ListAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer


class PatientDetailView(RetrieveAPIView):
    queryset = Patient.objects.all()
    serializer_class = CreatePatientSerializer
    lookup_field = 'pk'


class CreatePatientView(CreateAPIView):
    queryset = Patient.objects.all()
    serializer_class = CreatePatientSerializer


class UpdatePatientView(UpdateAPIView):
    queryset = Patient.objects.all()
    serializer_class = CreatePatientSerializer
    lookup_field = 'pk'

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(
            instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=HTTP_200_OK)


class DeletePatientView(DestroyAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    lookup_field = 'pk'

# Doctor Views


class DoctorView(ListAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer


class DoctorDetailView(RetrieveAPIView):
    queryset = Doctor.objects.all()
    serializer_class = CreateDoctorSerializer
    lookup_field = 'pk'


class CreateDoctorView(CreateAPIView):
    queryset = Doctor.objects.all()
    serializer_class = CreateDoctorSerializer


class UpdateDoctorView(UpdateAPIView):
    queryset = Doctor.objects.all()
    serializer_class = CreateDoctorSerializer
    lookup_field = 'pk'

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(
            instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=HTTP_200_OK)


class DeleteDoctorView(DestroyAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    lookup_field = 'pk'

# Receptionist Views


class ReceptionistView(ListAPIView):
    queryset = Receptionist.objects.all()
    serializer_class = ReceptionistSerializer


class ReceptionistDetailView(RetrieveAPIView):
    queryset = Receptionist.objects.all()
    serializer_class = CreateReceptionistSerializer
    lookup_field = 'pk'


class CreateReceptionistView(CreateAPIView):
    queryset = Receptionist.objects.all()
    serializer_class = CreateReceptionistSerializer


class UpdateReceptionistView(UpdateAPIView):
    queryset = Receptionist.objects.all()
    serializer_class = CreateReceptionistSerializer
    lookup_field = 'pk'


class DeleteReceptionistView(DestroyAPIView):
    queryset = Receptionist.objects.all()
    serializer_class = ReceptionistSerializer
    lookup_field = 'pk'

# Admin Views


class AdminView(ListAPIView):
    queryset = Admin.objects.all()
    serializer_class = AdminSerializer


class AdminDetailView(RetrieveAPIView):
    queryset = Admin.objects.all()
    serializer_class = CreateAdminSerializer
    lookup_field = 'pk'


class CreateAdminView(CreateAPIView):
    queryset = Admin.objects.all()
    serializer_class = CreateAdminSerializer


class UpdateAdminView(UpdateAPIView):
    queryset = Admin.objects.all()
    serializer_class = CreateAdminSerializer
    lookup_field = 'pk'


class DeleteAdminView(DestroyAPIView):
    queryset = Admin.objects.all()
    serializer_class = AdminSerializer
    lookup_field = 'pk'

# Appointment Views


class AppointmentView(ListAPIView):
    queryset = Appointment.objects.all()
    serializer_class = CreateAppointmentSerializer


class AppointmentDetailView(RetrieveAPIView):
    queryset = Appointment.objects.all()
    serializer_class = CreateAppointmentSerializer
    lookup_field = 'pk'


class CreateAppointmentView(CreateAPIView):
    queryset = Appointment.objects.all()
    serializer_class = CreateAppointmentSerializer


class UpdateAppointmentView(UpdateAPIView):
    queryset = Appointment.objects.all()
    serializer_class = CreateAppointmentSerializer
    lookup_field = 'pk'


class DeleteAppointmentView(DestroyAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
    lookup_field = 'pk'


# Prescription Views
class PrescriptionView(ListAPIView):
    queryset = Prescription.objects.all()
    serializer_class = PrescriptionSerializer


class PrescriptionDetailView(RetrieveAPIView):
    queryset = Prescription.objects.all()
    serializer_class = CreatePrescriptionSerializer
    lookup_field = 'pk'


class CreatePrescriptionView(CreateAPIView):
    queryset = Prescription.objects.all()
    serializer_class = CreatePrescriptionSerializer


class UpdatePrescriptionView(UpdateAPIView):
    queryset = Prescription.objects.all()
    serializer_class = CreatePrescriptionSerializer
    lookup_field = 'pk'


class DeletePrescriptionView(DestroyAPIView):
    queryset = Prescription.objects.all()
    serializer_class = PrescriptionSerializer
    lookup_field = 'pk'

# tokens


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['username'] = user.username
        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class: MyTokenObtainPairSerializer


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token',
        '/api/token/refresh',
    ]

    return Response(routes)
