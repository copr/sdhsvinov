from django.contrib import admin
from django.forms import ModelForm
from django.db import models

class Soubor(models.Model):
    soubor = models.FileField(upload_to='files')
    def file_link(self):
        if self.soubor:
            link = "http://sdhsvinov.cz/" + self.soubor.url
            return "<a href='%s'>%s</a>" % (link,link)
        else:
            return "no attachment"
    file_link.allow_tags = True
    def __unicode__(self):
        return "http://sdhsvinov.cz" + self.soubor.url
