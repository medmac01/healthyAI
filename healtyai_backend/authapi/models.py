from django.db import models
from django_redis import get_redis_connection
from django.contrib.auth.models import AbstractBaseUser


GENDER_CHOICES = (
    ('male','Male'),
    ('female', 'Female'),
    ('other','Other'),
)

redis_conn = get_redis_connection("default")


# Create your models here.
class CustomUser(AbstractBaseUser):


    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name','password']

    name = models.CharField(max_length=30,blank=False)
    email = models.EmailField(blank=False) 
    password = models.CharField(max_length=50)
    age = models.IntegerField(blank=True,null=True)
    gender = models.CharField(choices=GENDER_CHOICES,max_length=20,blank=True,null=True)
    allergies = models.CharField(max_length=100,blank=True,null=True)
    smoker = models.BooleanField(blank=True,null=True)
    pregnant = models.BooleanField(blank=True,null=True)
    drinker = models.BooleanField(blank=True,null=True)

    # def save(self, *args, **kwargs):
    #     # save user data to Redis
    #     redis_conn.hmset("users", self.name, self.email, self.password)
    #     redis_conn.hmset(self.email, self.allergies, self.age, self.gender)
    #     redis_conn.hmset(self.email, self.drinker, self.pregnant, self.smoker)
    #     # super().save(*args, **kwargs)

    def create_user(self, email, name, password, age="NA", gender="NA", allergies="NA", smoker="NA", pregnant="NA", drinker="NA"):
        user = {
            'name': name,
            'age': age,
            'email': email,
            'password': password,
            'gender': gender,
            'allergies': allergies,
            'smoker': str(smoker),
            'pregnant': str(pregnant),
            'drinker': str(drinker)
        }


        # Store user data in Redis database
        for key, value in user.items():
            redis_conn.hset(email, key, value)
        
        print(redis_conn.hget(email,'age'))
        self.save(self)
        return True


    def login(self, email, password):
        pwd = redis_conn.hget(email,'password').decode()
        print(pwd)
        print(type(pwd))
        print('entered:' + str(password))
        if pwd == password:
            return True
        return False
