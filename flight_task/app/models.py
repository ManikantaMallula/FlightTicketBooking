from django.db import models

class FlightDetail(models.Model):
    aircraft = models.CharField(max_length=100)
    origin = models.CharField(max_length=100)
    destination = models.CharField(max_length=100)
    departure_dt = models.DateTimeField()
    arrival_dt = models.DateTimeField()
    flight_time = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.aircraft} - {self.origin}"

