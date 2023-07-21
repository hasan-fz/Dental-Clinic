from django.contrib.auth.models import User
from django.db import models


departments = [('Cardiologist', 'Cardiologist'),
               ('Dermatologists', 'Dermatologists'),
               ('Emergency Medicine Specialists',
                'Emergency Medicine Specialists'),
               ('Allergists/Immunologists', 'Allergists/Immunologists'),
               ('Anesthesiologists', 'Anesthesiologists'),
               ('Colon and Rectal Surgeons', 'Colon and Rectal Surgeons')
               ]


class Patient(User):
    age = models.PositiveIntegerField()
    address = models.CharField(max_length=255)
    ailment = models.TextField()
    assigned_doctor = models.ForeignKey(
        'Doctor', on_delete=models.SET_NULL, null=True, related_name='patients')
    is_authorized = models.BooleanField(default=False)


class Doctor(User):
    department = models.CharField(
        max_length=255, choices=departments, default='Cardiologist')


class Admin(User):
    age = models.PositiveIntegerField()


class Receptionist(User):
    age = models.PositiveIntegerField()


class Prescription(models.Model):
    id = models.AutoField(primary_key=True)
    content = models.TextField()
    prescribed_by = models.ForeignKey(
        Doctor, on_delete=models.SET_NULL, null=True, related_name='prescriptions'
    )
    prescribed_to = models.ForeignKey(
        Patient, on_delete=models.CASCADE, related_name='prescriptions'
    )


class Appointment(models.Model):
    id = models.AutoField(primary_key=True)
    assigned_date_time = models.DateTimeField()
    ofpatient = models.ForeignKey(
        Patient, on_delete=models.CASCADE, null=True, related_name='appointments'
    )
    ofdoctor = models.ForeignKey(
        Doctor, on_delete=models.CASCADE, null=True, related_name='appointments'
    )
