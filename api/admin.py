from django.contrib import admin
from .models import Patient, Doctor, Admin, Receptionist, Appointment, Prescription

admin.site.register(Patient)
admin.site.register(Doctor)
admin.site.register(Admin)
admin.site.register(Receptionist)
admin.site.register(Appointment)
admin.site.register(Prescription)

# Register your models here.
