# -*- encoding: utf-8 -*-
from django.conf.urls import patterns, include, url
from django.views.static import *
import settings

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    url(r'^admin/doc/', include('django.contrib.admindocs.urls')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^(\d)/(\d)/', 'svinov2.views.index'),
    url(r'^2/2/', 'svinov2.views.index'),
    

    
     (r'(?:.*?/)?(?P<path>(css|images|javascript)/.+)$', 'django.views.static.serve', {'document_root': settings.STATIC_ROOT }),
      (r'^media/(?P<path>.*)$', 'django.views.static.serve', { 'document_root': settings.MEDIA_ROOT, }),
)

urlpatterns += patterns('blog.views',
   url(r'^$', "main"),
   url(r'^(\d+)/$', 'post'),
   url(r'^add_comment/(\d+)/$', 'add_comment'),
)
