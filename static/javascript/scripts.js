function change_img_in(id, img, poradi, width){
    document.getElementById(id).getElementsByTagName("img")[poradi].src = img;
    document.getElementById(id).getElementsByTagName("img")[poradi].className += " side_shadow"; 
}
function change_img_home(id, img, poradi, width){
    document.getElementById(id).getElementsByTagName("img")[poradi].src = img;
}


function change_img_out(id, img, poradi, width) {
    myid = document.getElementById(id).getElementsByTagName("img")[poradi];
    myid.src = img;
    myid.className = myid.className.replace( /(?:^|\s)side_shadow(?!\S)/g, '');
    
}
  var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-38700494-1']);
      _gaq.push(['_trackPageview']);

        (function() {
             var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
             ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
             var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();

function change(id, width, height, src){
    document.getElementById(id).height = height;
    document.getElementById(id).src = src;
    document.getElementById(id).width = width;
}

function change1(id, src){
    document.getElementById(id).src = src;
}

var tridy= new Array(".info", ".kolektiv", ".aktuality", ".foto", ".video");	

$(document).ready(function(){

    /////////hlavni menu
    if(document.URL == "http://sdhsvinov.cz/") {
        $.cookies.set("aktualni_menu", "");
        $.cookies.set("vybrano", "");
    }
    if(document.URL.slice(0,22) == "http://sdhsvinov.cz/0/") {
        $.cookies.set("aktualni_menu", ".menu_hasici");
      /*  $.cookies.set("vybrano", ".aktuality_hasici");*/
    }
    if(document.URL.slice(0,22) == "http://sdhsvinov.cz/1/") {
        $.cookies.set("aktualni_menu", ".menu_mladez");
        /*$.cookies.set("vybrano",".aktuality_mladez");*/
    }
    if(document.URL.slice(0,22) == "http://sdhsvinov.cz/2/") {
        $.cookies.set("aktualni_menu", ".menu_muzi");
        /*$.cookies.set("vybrano", ".muzi_aktuality");*/
    }
    if(document.URL.slice(0,22) == "http://sdhsvinov.cz/3/") {
        $.cookies.set("aktualni_menu", ".menu_historie");
        /*$.cookies.set("vybrano", ".info_historie");*/
    }
    if(document.URL.slice(0,22) == "http://sdhsvinov.cz/4/") {
        $.cookies.set("aktualni_menu", ".menu_odkazy");
        /*$.cookies.set("vybrano", ".odkazy");*/
    }

    
    $(".hasici").colorbox({rel:'hasici', maxWidth:'1200px', maxHeight:'600px', top:'1%', left:'50%', right:'50%' });
    $(".mladez").colorbox({rel:'mladez', maxWidth:'1200px', maxHeight:'600px', top:'1%', left:'50%', right:'50%' }); 

    $(".menu_hasici").click(
        function(){
            // $(this).css({"background": "#ccc213"});
            $.cookies.set("aktualni_menu", ".menu_hasici");
            $.cookies.set("vybrano", ".aktuality_hasici");
        });    

    $(".menu_mladez").click(
        function(){
            // $(this).css({"background": "#97c113"});
            $.cookies.set("aktualni_menu", ".menu_mladez");
            $.cookies.set("vybrano", ".aktuality_mladez");
        });        

    $(".menu_muzi").click(
        function(){
            // $(this).css({"background": "#9e1674"});
            $.cookies.set("aktualni_menu", ".menu_muzi");
            $.cookies.set("vybrano", ".muzi_aktuality");
        });        

    $(".menu_home").click(
        function(){
            // $(this).css({"background": "#ccc213"});
            $.cookies.set("aktualni_menu", "");
            $.cookies.set("vybrano", "");
        });        

    $(".menu_historie").click(
        function(){
            // $(this).css({"background": "#5e1f8c"});
            $.cookies.set("aktualni_menu", ".menu_historie");
            $.cookies.set("vybrano", ".info_historie");
        });        

    $(".menu_odkazy").click(
        function(){
            // $(this).css({"background": "#382690"});
            $.cookies.set("aktualni_menu", ".menu_odkazy");
            $.cookies.set("vybrano", ".odkazy");
        });        

     //////////////////// /hlavni menu       

    
    
    
    /////muzi
    
    
    $(".muzi_aktuality").click(
        function(){
            $(this).css({"background": "#9e1674"});
            $.cookies.set("vybrano", ".muzi_aktuality");
        }
    );
        
    $(".muzi_info").click(
        function(){
            $(this).css({"background": "#9e1674"});
            $.cookies.set("vybrano", ".muzi_info");
        }
    );
        
    $(".muzi_kolektiv").click(
        function(){
            $(this).css({"background": "#9e1674"});
            $.cookies.set("vybrano", ".muzi_kolektiv");
        }
    );
        
    $(".muzi_foto").click(
        function(){
            $(this).css({"background": "#9e1674"});
            $.cookies.set("vybrano", ".muzi_foto");
            
        }
    );
        
    $(".muzi_video").click(
        function(){
            $(this).css({"background": "#9e1674"});  
            $.cookies.set("vybrano", ".muzi_video");
        }
    );
    
    ///// /muzi
    
    
    ///// mladez
        
        
    $(".aktuality_mladez").click(
        function(){
            $(this).css({"background": "#97c113"});
            $.cookies.set("vybrano", ".aktuality_mladez");
        }
    );
        
    $(".aktuality_mladez").click(
        function(){
            $(this).css({"background": "#97c113"});
            $.cookies.set("vybrano", ".aktuality_mladez");
        }
    );
        
    $(".info_mladez").click(
        function(){
            $(this).css({"background": "#97c113"});
            $.cookies.set("vybrano", ".info_mladez");
        }
    );
        
    $(".kolektiv_mladez").click(
        function(){
            $(this).css({"background": "#97c113"});
            $.cookies.set("vybrano", ".kolektiv_mladez");
        }
    );
        
    $(".foto_mladez").click(
        function(){
            $(this).css({"background": "#97c113"});
            $.cookies.set("vybrano", ".foto_mladez");
            
        }
    );
        
    $(".download_mladez").click(
        function(){
            $(this).css({"background": "#97c113"});  
            $.cookies.set("vybrano", ".download_mladez");
        }
    );    
        
    // /mladez    
    
    
    // hasici
    
    $(".aktuality_hasici").click(
        function(){
            $(this).css({"background": "#ccc213"});
            $.cookies.set("vybrano", ".aktuality_hasici");
        }
    );
        
    $(".info_hasici").click(
        function(){
            $(this).css({"background": "#ccc213"});
            $.cookies.set("vybrano", ".info_hasici");
            
        }
    );
        
    $(".foto_hasici").click(
        function(){
            $(this).css({"background": "#ccc213"});  
            $.cookies.set("vybrano", ".foto_hasici");
        }
    );    
    
    // /hasici
    
    // historie
    
        
    $(".info_historie").click(
        function(){
            $(this).css({"background": "#5e1f8c"});
            $.cookies.set("vybrano", ".info_historie");
            
        }
    );
     // /historie
   
    $(".statistiky_historie").click(
        function(){
            $(this).css({"background": "#5e1f8c"});  
            $.cookies.set("vybrano", ".statistiky_historie");
        }
    );
    // odkazy
    $(".kalendar").click(
        function(){
            $(this).css({"background": "rgb(56,38,144)"});  
            $.cookies.set("vybrano", ".kalendar");
        }
    ); 
    
   $(".odkazy").click(
        function(){
            $(this).css({"background": "rgb(56,38,144)"});  
            $.cookies.set("vybrano", ".odkazy");
        }
    ); 
    

    
var cl = $.cookies.get("vybrano");
    
    
    // hlavni menu
   
    if($.cookies.get("aktualni_menu")== ".menu_mladez"){
       $(".menu_mladez").css({"background": "#97c113"});   
       $(".menu_mladez").addClass("shadow2");
    }

    if($.cookies.get("aktualni_menu")== ".menu_muzi"){
        $(".menu_muzi").css({"background": "rgb(158,22,116)"});    
        $(".menu_muzi").addClass("shadow2");
    }

    if($.cookies.get("aktualni_menu")== ".menu_hasici"){
        $(".menu_hasici").css({"background": "#ccc213"});
$(".menu_hasici").addClass("shadow2");
    }
    
    if($.cookies.get("aktualni_menu")== ".menu_odkazy"){
        $(".menu_odkazy").css({"background": "#382690"});
$(".menu_odkazy").addClass("shadow2");
    }
    
    if($.cookies.get("aktualni_menu")== ".menu_historie"){
        $(".menu_historie").css({"background": "#5e1f8c"});    
$(".menu_historie").addClass("shadow2");
    }
    
    if($.cookies.get("aktualni_menu")== ".menu_hasici"){
        $(".menu_hasici").css({"background": "#ccc213"});    
$(".menu_mladez").addClass("side_shadow2");
    }

    
    
    // /hlavni menu
    
    // muzi
    
    
    if(cl == ".muzi_kolektiv"){
        $(".muzi_kolektiv").css({"background":"#9e1674" });
        $(".muzi_kolektiv").css({"-webkit-transition-property":"none" });
        $(".muzi_kolektiv").css({"-moz-transition-property":"none" }); 
    }	
    
    if(cl == ".muzi_info"){
        $(".muzi_info").css({"background":"#9e1674" }); 
        $(".muzi_info").css({"-webkit-transition-property":"none" });
    $(".muzi_info").css({"-moz-transition-property":"none" }); }	
  
    if(cl == ".muzi_aktuality"){
        $(".muzi_aktuality").css({"background":"#9e1674" }); 
        $(".muzi_aktuality").css({"-webkit-transition-property":"none" }); 
         $(".muzi_aktuality").css({"-moz-transition-property":"none" });}	
     
    if(cl == ".muzi_foto"){
        $(".muzi_foto").css({"background":"#9e1674" }); 
    //document.getElementById(id).getElementsByTagName("img")[poradi].width = width;
        $(".muzi_foto").css({"-webkit-transition-property":"none" });
    $(".muzi_foto").css({"-moz-transition-property":"none" });}
    
    if(cl == ".muzi_video"){
        $(".muzi_video").css({"background":"#9e1674" }); 
        $(".muzi_video").css({"-webkit-transition-property":"none" });
    $(".muzi_video").css({"-moz-transition-property":"none" });}	
    
    
    // /muzi
    
    // mladez
    //document.getElementById(id).getElementsByTagName("img")[poradi].width = width;
    //document.getElementById(id).getElementsByTagName("img")[poradi].width = width;
    
    if(cl == ".aktuality_mladez"){
        $(".aktuality_mladez").css({"background":"#97c113" }); 
        $(".aktuality_mladez").css({"-webkit-transition-property":"none" });
        $(".aktuality_mladez").css({"-moz-transition-property":"none" });}	
    
    if(cl == ".info_mladez"){
        $(".info_mladez").css({"background":"#97c113" }); 
        $(".info_mladez").css({"-webkit-transition-property":"none" });
        $(".info_mladez").css({"-moz-transition-property":"none" });}	
    
	
  
    if(cl == ".kolektiv_mladez"){
        $(".kolektiv_mladez").css({"background":"#97c113" }); 
    $(".kolektiv_mladez").css({"-webkit-transition-property":"none" });
        $(".kolektiv_mladez").css({"-moz-transition-property":"none" });}	
    
	
     
    if(cl == ".foto_mladez"){
        $(".foto_mladez").css({"background":"#97c113" }); 
        $(".foto_mladez").css({"-webkit-transition-property":"none" });
        $(".foto_mladez").css({"-moz-transition-property":"none" });}	
    

    
    if(cl == ".download_mladez"){
        $(".download_mladez").css({"background":"#97c113" }); 
        $(".download_mladez").css({"-webkit-transition-property":"none" });
        $(".download_mladez").css({"-moz-transition-property":"none" });}	
    
    if(cl == ".odkazy"){
        $(".odkazy").css({"background":"#382690" });
        $(".odkazy").css({"-webkit-transition-property":"none" });
        $(".odkazy").css({"-moz-transition-property":"none" });}	
    
    
    // hasici
    
    if(cl == ".aktuality_hasici"){
        $(".aktuality_hasici").css({"background":"#ccc213" }); 
        $(cl).css({"-webkit-transition-property":"none" });
        $(cl).css({"-moz-transition-property":"none" });}	
    

    
    if(cl == ".info_hasici"){
        $(".info_hasici").css({"background":"#ccc213" }); 
        $(cl).css({"-webkit-transition-property":"none" });
        $(cl).css({"-moz-transition-property":"none" });}	
    
    
    if(cl == ".foto_hasici"){
        $(".foto_hasici").css({"background":"#ccc213" }); 
        $(cl).css({"-webkit-transition-property":"none" });
        $(cl).css({"-moz-transition-property":"none" });}	
    
    
    // /hasici
    
    // historie
    
    if(cl == ".info_historie"){
        $(".info_historie").css({"background":"#5e1f8c" }); 
        $(cl).css({"-webkit-transition-property":"none" });
        $(cl).css({"-moz-transition-property":"none" });}	
    
    if(cl == ".statistiky_historie"){
        $(".statistiky_historie").css({"background":"#5e1f8c" }); 
        $(cl).css({"-webkit-transition-property":"none" });
        $(cl).css({"-moz-transition-property":"none" });}	
    
    
    //osta}tni 
    if(cl == ".kalendar"){
        $(".kalendar").css({"background":"rgb(56,38,144)" }); 
        $(cl).css({"-webkit-transition-property":"none" });
        $(cl).css({"-moz-transition-property":"none" });}	
    

    if(cl == ".odkazy"){
        $(".odkazy").css({"background":"rgb(56,38,144)" }); 
        $(cl).css({"-webkit-transition-property":"none" });
        $(cl).css({"-moz-transition-property":"none" });}	
    

    // alert($.cookie("aktualni_menu"));
}
);

 
