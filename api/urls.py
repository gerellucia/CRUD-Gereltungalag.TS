from django.urls import path
from django.conf.urls import url
from django.urls import path,include
from rest_framework import routers
from . import views

urlpatterns = [
    
    # path('', views.index, name='index'),
    path('book/', views.BookAPIView.as_view(), name='view and create'),
    path('bookDelete/<int:pk>/', views.BookDetialSet.as_view(), name='deleteList'),
    path('bookUpdate/<int:pk>/', views.BookUpdateSet.as_view(), name='updateList'),  
]
