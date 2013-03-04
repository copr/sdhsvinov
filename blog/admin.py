from django.contrib import admin
from blog.models import *

from tinymce.widgets import TinyMCE


class MyModelAdmin(admin.ModelAdmin):
   formfield_overrides = {
       models.TextField: {'widget': TinyMCE(attrs={'cols': 80, 'rows': 30})},
       }

admin.site.register(Post, MyModelAdmin)
admin.site.register(Comment, CommentAdmin)
