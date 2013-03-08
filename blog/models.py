# -*- encoding: utf-8 -*-
from django.db import models
from django.contrib import admin
from django.forms import ModelForm
from django.contrib.auth.models import User
from tinymce.widgets import TinyMCE

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
    uvodni_strana = models.BooleanField(default=True)
    def __unicode__(self):
        return self.title
#class PostForm(forms.ModelForm):
 #   formfield_overrides = forms.CharField(widget=TinyMCE(attrs={'cols': 80,
  #      'rows': 20})
  #  class Meta:
  #      model = Article
class PostAdmin(admin.ModelAdmin):
    search_fields = ["title"]
    #  form = ArticleForm
  #  class Admin:
  #    js = ('/static/javascript/tinymce/jscripts/tiny_mce/tiny_mce.js',
  #           '/static/javascript/tinymce/jscripts/tiny_mce/textareas.js',
  #           )
    
class Comment(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    author = models.CharField(max_length=60)
    body = models.TextField()
    post = models.ForeignKey(Post)
    
    # def __unicode__(self):
        
        # return unicode("%s: %s" % (self.post, self.body[:60]))


class CommentAdmin(admin.ModelAdmin):
    display_fields = ["post", "created"]
    

    
#admin.site.register(Post, PostAdmin)
#admin.site.register(Comment, CommentAdmin)
