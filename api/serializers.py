from rest_framework import serializers
from .models import *


class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = '__all__'


class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = '__all__'


class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = '__all__'


class ReceptionistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Receptionist
        fields = '__all__'


class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'


class PrescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prescription
        fields = '__all__'


class CreatePatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = ['id', 'username', 'password', 'email', 'first_name',
                  'last_name', 'age', 'address', 'ailment', 'assigned_doctor']
        extra_kwargs = {
            'username': {'required': False},
            'age': {'required': False},
            'address': {'required': False},
            'ailment': {'required': False},
        }


class CreateDoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = ['id', 'username', 'password', 'email', 'first_name',
                  'last_name', 'department']
        extra_kwargs = {
            'username': {'required': False},
            'password': {'write_only': True},
            'email': {'required': False},
            'first_name': {'required': False},
            'last_name': {'required': False},
            'department': {'required': False},
        }


class CreateReceptionistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Receptionist
        fields = ('username', 'password', 'email', 'first_name',
                  'last_name', 'age')


class CreateAdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = ('username', 'password', 'email', 'first_name',
                  'last_name', 'age')


class CreatePrescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prescription
        fields = ('id', 'content', 'prescribed_by', 'prescribed_to')


class CreateAppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = ('id', 'assigned_date_time', 'ofpatient', 'ofdoctor')
