from django.contrib import admin
from kolektiv.models import *

admin.site.register(Clen_kolektivu, KolektivAdmin)
admin.site.register(Staticky_clanek)

