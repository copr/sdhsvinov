# -*- encoding: utf-8 -*-
from django.core.paginator import Paginator, InvalidPage, EmptyPage
from django.core.urlresolvers import reverse
from django.shortcuts import render_to_response
from django.forms import ModelForm
from django.core.context_processors import csrf
from django.template import RequestContext
from django.http import HttpResponseRedirect
from django.core.exceptions import ObjectDoesNotExist
from functions.string_process import removeOtherP

from blog.models import *

import re

links = [('5', 'seznam', 'static/images/menu/hasici/hasici.png', ''),]


def main(request):
    """Main listing."""
    posts = Post.objects.all().order_by("-created").filter(uvodni_strana=True)
    paginator = Paginator(posts, 10)

    try: page = int(request.GET.get("page", '1'))
    except ValueError: page = 1

    i = 0
    for post in posts:
        posts[i].body = removeOtherP(posts[i].body)
        i = i + 1
    try:
        posts = paginator.page(page)
    except (InvalidPage, EmptyPage):
        posts = paginator.page(paginator.num_pages)

    return render_to_response("blog/list.html", dict(posts=posts, user=request.user, links=links))

def post(request, pk):
    """Single post with comments andøg(x a comment form."""
    try:
        post = Post.objects.get(pk=int(pk))
        comments = Comment.objects.filter(post=post)
    except ObjectDoesNotExist:
        return render_to_response('zaklad.html', dict(obsah = "Neexistuje"))
    link = 'http://www.sdhsvinov.cz/' + pk
    d = dict(post=post, comments=comments, form=CommentForm(), user=request.user, link = link)
    # d.udpate(csrf(request))
    return render_to_response("blog/post.html", d, context_instance=RequestContext(request))

class CommentForm(ModelForm):
    class Meta:
        model = Comment
        exclude = ["post"]
   
def add_comment(request, pk):
    """Add a new comment."""
    p = request.POST
    
    if p.has_key("body") and p["body"]:
        author = "Anonymous"
        
        if p["author"]: author = p["author"]
        
        comment = Comment(post=Post.objects.get(pk=pk))
        cf = CommentForm(p, instance=comment)
        cf.fields["author"].required = False
        
        comment = cf.save(commit=False)
        comment.author = author
        comment.save()
    
    return HttpResponseRedirect(reverse("blog.views.post", args=[pk]))


