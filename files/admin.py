from django.contrib import admin
from files.models import *

class FileAdmin(admin.ModelAdmin):
    i = "ahoj"
    list_display = ["soubor", "__unicode__"]

admin.site.register(Soubor, FileAdmin)
