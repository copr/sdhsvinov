# -*- encoding: utf-8 -*-
from django.db import models
from django.contrib import admin
from django.forms import ModelForm
from django.contrib.auth.models import User

CATEGORIES=(
            ('1', 'hasici'),
            ('2', 'mladez'),
            ('3', 'muzi'),
)

input = '%Y-%m-%d',  


class Post(models.Model): 
    title = models.CharField(max_length=60)
    body = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    category = models.CharField(max_length=20, choices=CATEGORIES)
    author = models.ForeignKey(User)

    def __unicode__(self):
        return self.title
        
class PostAdmin(admin.ModelAdmin):
    search_fields = ["title"]
    
class Comment(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    author = models.CharField(max_length=60)
    body = models.TextField()
    post = models.ForeignKey(Post)
    
    # def __unicode__(self):
        
        # return unicode("%s: %s" % (self.post, self.body[:60]))


class CommentAdmin(admin.ModelAdmin):
    display_fields = ["post", "author", "created"]
    

    
#admin.site.register(Post, PostAdmin)
#admin.site.register(Comment, CommentAdmin)
