from rest_framework import serializers
from .models import FlightDetail


class FlightDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = FlightDetail
        fields = ['aircraft', 'origin', 'destination','departure_dt', 'arrival_dt', 'flight_time']
