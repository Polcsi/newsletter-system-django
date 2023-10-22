from django.db import models


class Authors(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    articles = models.ManyToManyField(
        'articles.Articles', related_name='authors')

    def __str__(self):
        return self.name
