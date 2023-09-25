from django.urls import path
from contact import views

urlpatterns = [
    path('contact/', ContactList.as_view()),
]
