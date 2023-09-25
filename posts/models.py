from django.db import models
from django.contrib.auth.models import User
from taggit.managers import TaggableManager


class Post(models.Model):
    """
    Post model, related to 'owner', i.e. a User instance.
    Default image set so that we can always reference image.url.
    """
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    title = models.CharField(max_length=255)
    content = models.TextField(blank=True)
    image = models.ImageField(
        upload_to='images/', default='../default_post_qiqtax', blank=True
    )
    tags = TaggableManager(blank=True)
    team = models.CharField(max_length=150, default="Unknown")
    stadium = models.CharField(max_length=150, default="Unknown")
    location = models.CharField(max_length=150, default="Unknown")

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.id} {self.title}'
