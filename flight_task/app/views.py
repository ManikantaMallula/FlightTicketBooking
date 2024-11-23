from rest_framework.response import Response
from .models import FlightDetail
from .serializers import FlightDetailsSerializer
from rest_framework import status
from rest_framework import viewsets, status
from django.shortcuts import render

class FlightDetailViewSet(viewsets.ModelViewSet):
    queryset = FlightDetail.objects.all()
    serializer_class = FlightDetailsSerializer

    def create(self, request, *args, **kwargs):

        field_mappings = {
            "Select Aircraft": "aircraft",
            "Origin": "origin",
            "Destination": "destination",
            "Flight Time": "flight_time",
            "Departure Date & Time": "departure_dt",
            "Arrival Date & Time": "arrival_dt",
        }

        remapped_data = []
        for entry in request.data:
            remapped_entry = {field_mappings.get(k, k): v for k, v in entry.items()}
            remapped_data.append(remapped_entry)

        serializer = self.get_serializer(data=remapped_data, many=True)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        return Response(
            {"flag": True, "message": "Data Successfully Inserted"},
            status=status.HTTP_201_CREATED
        )

    def list(self, request, *args, **kwargs):
        
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(
            {
                "flag": True,
                "data": [{"headers": ['aircraft', 'origin','destination', 'departure_dt', 'arrival_dt', 'flight_time'], "row_data": serializer.data}]
            },
            status=status.HTTP_200_OK
        )

