from django.contrib import admin
from kolektiv.models import *

from tinymce.widgets import TinyMCE

class StaticAdmin(admin.ModelAdmin):
   formfield_overrides = {
       models.TextField: {'widget': TinyMCE(attrs={'cols': 80, 'rows': 30})},
       }


admin.site.register(Clen_kolektivu, KolektivAdmin)
admin.site.register(Staticky_clanek, StaticAdmin)

