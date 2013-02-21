from django.db import models
from django.contrib import admin
from django.forms import ModelForm
# Create your models here.
CHOICES=(
            ('1', 'hasici'),
            ('2', 'mladez'),
)
class Fotograf(models.Model):
    jmeno = models.CharField(max_length=100)
    obrazek = models.ImageField(upload_to='photos/Fotografove')
    obrazek_hover = models.ImageField(upload_to='photos/Fotografove')
    url = models.CharField(max_length=200)
    def __unicode__(self):
        return unicode("%s" % self.jmeno)
class Obrazek(models.Model):
    obrazek = models.ImageField(upload_to='photos/galerie')
    kategorie = models.CharField(max_length=20, choices=CHOICES)

#admin.site.register(Fotograf)
#admin.site.register(Obrazek)

