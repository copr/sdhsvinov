from django.contrib import admin
from blog.models import *

admin.site.register(Post, PostAdmin)
admin.site.register(Comment, CommentAdmin)

