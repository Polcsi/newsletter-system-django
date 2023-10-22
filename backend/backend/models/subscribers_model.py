from django.db import models


class Subscribers(models.Model):
    email = models.EmailField(unique=True, error_messages={
        "unique": "This email has already been registered.",
        "blank": "Please enter your email.",
        "null": "Please enter your email.",
        "invalid": "Please enter a valid email address."
    }
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.email
