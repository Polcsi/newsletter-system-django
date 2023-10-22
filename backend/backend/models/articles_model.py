from django.db import models


class Articles(models.Model):
    author = models.ForeignKey(
        'authors.Authors', on_delete=models.CASCADE, related_name='articles')
    title = models.CharField(max_length=200)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    content = models.TextField()

    def __str__(self):
        return self.title
