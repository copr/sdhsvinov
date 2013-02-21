﻿# -*- encoding: utf-8 -*-
from django.shortcuts import render_to_response
from django.core.paginator import Paginator, InvalidPage, EmptyPage
from blog.models import *
from kolektiv.models import *
from galerie.models import *
from django.core.exceptions import ObjectDoesNotExist
links = (
            (
                ('/0/0', 'aktuality_hasici', 'width: 33.33%', 'aktuality'),
                ('/0/1', 'info_hasici', 'width: 33.33%', 'info'),
                ('/0/2', 'foto_hasici', 'width: 33.33%', 'foto'),
            ),
            (
                ('/1/0', 'aktuality_mladez', 'width: 20%', 'aktuality'),
                ('/1/1', 'info_mladez', 'width: 20%', 'info'),
                ('/1/2', 'kolektiv_mladez', 'width: 20%', 'kolektiv'),
                ('/1/3', 'foto_mladez', 'width: 20%', 'foto'),
                ('/1/4', 'download_mladez', 'width: 20%', 'download'),
            ),
            (
                ('/2/0', 'muzi_aktuality', 'width: 20%', 'aktuality'),
                ('/2/1', 'muzi_info', 'width: 20%', 'info'),
                ('/2/2', 'muzi_kolektiv', 'width: 20%', 'kolektiv'),
                ('/2/3', 'muzi_foto', 'width: 20%', 'foto'),
                ('/2/4', 'muzi_video', 'width: 20%', 'video'),
            ),
            (
                ('/3/0', 'info_historie', 'width: 50%', 'info'),
                ('/3/1', 'statistiky_historie', 'width: 50%', 'statistiky'),
            ),
            (
                ('/4/0', 'odkazy', 'width: 100%', 'odkazy'),
               
            ),
        )
        
stranka={
            '01': '0',
            '11': '1',
            '14': '2',
            '21': '3',
            '30': '4',
            '40': '5',
        }
            

def index(request, id_sekce, id):
    if id == '2' and id_sekce == '0':
        Obrazky = Obrazek.objects.all().filter(kategorie = '1')
        return render_to_response('galerie/galerie2.html', dict(user=request.user, links = links[int(id_sekce)], Obrazky = Obrazky))
    if id == '3' and id_sekce == '1':
        Obrazky = Obrazek.objects.all().filter(kategorie = '2')
        return render_to_response('galerie/galerie2.html', dict(user=request.user, links = links[int(id_sekce)], Obrazky = Obrazky))

    if id == '3' and id_sekce == '2':
        fotografove = Fotograf.objects.all()
        return render_to_response('galerie/galerie.html', dict(user=request.user, links = links[int(id_sekce)], Fotografove = fotografove))

    if id == '4' and id_sekce == '2':
        return render_to_response('menu/video.html', dict(user=request.user, links = links[int(id_sekce)]))

    if id == '0' and (id_sekce == '0' or id_sekce == '1' or id_sekce == '2'):

        category_dict={ 
                        '0': '1',
                        '1': '2',
                        '2': '3'
                        }

        posts = Post.objects.all().order_by("-created").filter(category = category_dict[id_sekce])
        paginator = Paginator(posts, 5)

        try: page = int(request.GET.get("page", '1'))
        except ValueError: page = 1

        i = 0
        for post in posts:
            posts[i].body = post.body[:200]

            i += 1

        try:
            posts = paginator.page(page)
        except (InvalidPage, EmptyPage):
            posts = paginator.page(paginator.num_pages)

        return render_to_response("blog/list_mine.html", dict(posts=posts, user=request.user, links = links[int(id_sekce)]))

    if id_sekce == '2' and id == '2':
        clenove = Clen_kolektivu.objects.all().filter(tym__contains=u'Muži')
        return render_to_response("kolektiv/kolektiv.html", dict(clenove = clenove, user=request.user, links = links[int(id_sekce)]))

    if id_sekce == '1' and id == '2':
        clenove = Clen_kolektivu.objects.all().filter(tym=u'Mládež')

        return render_to_response("kolektiv/kolektiv.html", dict(clenove = clenove, user=request.user, links = links[int(id_sekce)]))
# if id_sekce == '4' and id == '0':
    try:
        clanek = Staticky_clanek.objects.get(jmeno = stranka[id_sekce+id])
        return render_to_response('menu/odkazy.html', dict(obsah = clanek.text, links = links[int(id_sekce)]))
    except (KeyError, ObjectDoesNotExist) as e:
        return render_to_response('zaklad.html', dict(obsah = 'Sekce zatím ve výstavbě nebo neexistuje', links = links[int(id_sekce)]))

    return render_to_response('zaklad.html', dict(obsah = 'Chyba', links = links[int(id_sekce)]))
