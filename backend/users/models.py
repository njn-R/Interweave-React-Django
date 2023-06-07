from django.db import models
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin

# Create your models here.

# Old Model
# class User(models.Model):
#     UserId:models.AutoField(primary_key=True)
#     Username:models.CharField(max_length=100)
#     Email:models.CharField(max_length=100)
#     Password:models.CharField(max_length=100)

class AppUserManager(BaseUserManager):
    def create_user(self, email, password=None):
        """Creates and saves a new user"""
        if not email:
            raise ValueError('Users must have an email address')
        if not password:
            raise ValueError('Users must have a password')
        email = self.normalize_email(email)
        user = self.model(email=email)
        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, email, password=None):
        """Creates and saves a new super user"""
        if not email:
            raise ValueError('Users must have an email address')
        if not password:
            raise ValueError('Users must have a password')
        user = self.create_user(email, password)
        # user.is_staff = True
        user.is_superuser = True
        user.save()

        return user

class AppUser(AbstractBaseUser, PermissionsMixin):
    """Custom user model"""
    user_id = models.AutoField(primary_key=True)
    email = models.EmailField(max_length=50, unique=True)
    username = models.CharField(max_length=50)
    # is_active = models.BooleanField(default=True)
    # is_staff = models.BooleanField(default=False)
    groups = models.ManyToManyField('auth.Group', related_name='app_users', blank=True)
    user_permissions = models.ManyToManyField('auth.Permission', related_name='app_users', blank=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    objects = AppUserManager()

    def __str__(self):
        return self.username