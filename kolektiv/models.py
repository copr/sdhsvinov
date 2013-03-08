# -*- encoding: utf-8 -*-
from django.db import models
from django.contrib import admin
from django.forms import ModelForm


POZICE = (
            (u'Košař', u'Košař'),
            (u'Namáčeč', u'Namáčeč'),
            (u'Strojník', u'Strojník'),
            (u'Béčkař', u'Béčkař'),
            (u'Rozdělovač', u'Rozdělovač'),
            (u'Proudař', u'Proudař'),
            (u'Přípravka', u'Přípravka'),
            (u'Mladší',u'Mladší'),
            (u'Starší',u'Starší'),
            (u'Mladší-Radní',u'Mladší-Radní'),
            (u'Starší-Radní',u'Starší-Radní'),
        )


TYM = (
        (u'Mládež', 'mladez'),
        (u'Muži A', 'muzi a'),
        (u'Muži B', 'muzi b'),
       )

JMENA_CLANKU = (
            ('0', 'hasici_info'),
            ('1', 'mladez_info'),
            ('2', 'mladez_download'),
            ('3', 'muzi_info'),
            ('4', 'historie_info'),
            ('5', 'odkazy'),
        )


pom = dict(JMENA_CLANKU)

class Clen_kolektivu(models.Model):
    jmeno = models.CharField(max_length=20)
    prijmeni = models.CharField(max_length=20)
    prezdivka = models.CharField(max_length=20, blank=True)
    pozice = models.CharField(max_length=20, choices=POZICE)
    tym = models.CharField(max_length=10, choices=TYM)
    obrazek = models.ImageField(upload_to='photos/kolektiv',blank=True)

    def __unicode__(self):
        return unicode("%s %s" % (self.jmeno, self.prijmeni))

class KolektivAdmin(admin.ModelAdmin):
    display_fields = ["jmeno", "prijmeni", "prezdivka", "pozice", "tym", "obrazek"]

class Staticky_clanek(models.Model):
    jmeno = models.CharField(max_length=20, choices=JMENA_CLANKU)
    text = models.TextField()
    def __unicode__(self):
        return pom[self.jmeno]

#admin.site.register(Clen_kolektivu, KolektivAdmin)
#admin.site.register(Staticky_clanek)

