from rest_framework import generics, permissions
from .models import Contact
from .serializers import ContactSerializer


class ContactList(generics.ListCreateAPIView):
    """
    ContactList view to create the contact form
    """
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
