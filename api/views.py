from __future__ import unicode_literals
from django.http import HttpResponse
from django.shortcuts import render
from api.models import *
from api.serializers import BookSerializer
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
 
class BookAPIView(generics.ListCreateAPIView):
   queryset = Book.objects.all()
   serializer_class = BookSerializer

class BookDetialSet(generics.RetrieveDestroyAPIView):
   queryset = Book.objects.all()
   serializer_class = BookSerializer

class BookUpdateSet(generics.RetrieveUpdateAPIView):
   queryset = Book.objects.all()
   serializer_class = BookSerializer


 