function change_img(id, img, poradi, width){
    document.getElementById(id).getElementsByTagName("img")[poradi].src = img;
    document.getElementById(id).getElementsByTagName("img")[poradi].width = width;
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
// function change_bgr(id, class_name, color){

var tridy= new Array(".info", ".kolektiv", ".aktuality", ".foto", ".video");	

 window.fbAsyncInit = function() {
  FB.init({
    appId      : 'blog', // App ID
    channelUrl : '/channel.html', // Channel File
    status     : true, // check login status
    cookie     : true, // enable cookies to allow the server to access the session
    xfbml      : true  // parse XFBML
  });
};

/*(function(d){
  var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement('script'); js.id = id; js.async = true;
  js.src = "//connect.facebook.net/en_US/all.js";
  ref.parentNode.insertBefore(js, ref);
}(document));
*/
$(document).ready(function(){

    /////////hlavni menu
    
    
    // Cufon.replace("section.text a", { hover: true });
    // Cufon.replace("h1, h2, h3, h4, section, a");
    
   

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
        
    $(".statistiky_historie").click(
        function(){
            $(this).css({"background": "#5e1f8c"});  
            $.cookies.set("vybrano", ".statistiky_historie");
        }
    ); 
    
    // /historie
    
    var cl = $.cookies.get("vybrano");
    
    
    // hlavni menu
    
    if($.cookies.get("aktualni_menu")== ".menu_mladez"){
        $(".menu_mladez").css({"background": "#97c113"});    
    }
    
    if($.cookies.get("aktualni_menu")== ".menu_muzi"){
        $(".menu_muzi").css({"background": "#9e1674"});    
    }
    
    if($.cookies.get("aktualni_menu")== ".menu_hasici"){
        $(".menu_hasici").css({"background": "#ccc213"});    
    }
    
    if($.cookies.get("aktualni_menu")== ".menu_odkazy"){
        $(".menu_odkazy").css({"background": "#382690"});    
    }
    
    if($.cookies.get("aktualni_menu")== ".menu_historie"){
        $(".menu_historie").css({"background": "#5e1f8c"});    
    }
    
    if($.cookies.get("aktualni_menu")== ".menu_hasici"){
        $(".menu_hasici").css({"background": "#ccc213"});    
    }

    
    
    // /hlavni menu
    
    // muzi
    
    
    
    
    if(cl == ".muzi_kolektiv"){
        $(".muzi_kolektiv").css({"background":"#9e1674" }); 
    }	
    
    if(cl == ".muzi_info"){
        $(".muzi_info").css({"background":"#9e1674" }); 
    }	
  
    if(cl == ".muzi_aktuality"){
        $(".muzi_aktuality").css({"background":"#9e1674" }); 
    }	
     
    if(cl == ".muzi_foto"){
        $(".muzi_foto").css({"background":"#9e1674" }); 
    }
    
    if(cl == ".muzi_video"){
        $(".muzi_video").css({"background":"#9e1674" }); 
    }	
    
    
    // /muzi
    
    // mladez
    
    if(cl == ".aktuality_mladez"){
        $(".aktuality_mladez").css({"background":"#97c113" }); 
    }	
    
    if(cl == ".info_mladez"){
        $(".info_mladez").css({"background":"#97c113" }); 
    }	
  
    if(cl == ".kolektiv_mladez"){
        $(".kolektiv_mladez").css({"background":"#97c113" }); 
    }	
     
    if(cl == ".foto_mladez"){
        $(".foto_mladez").css({"background":"#97c113" }); 
    }
    
    if(cl == ".download_mladez"){
        $(".download_mladez").css({"background":"#97c113" }); 
    }	
    
    if(cl == ".odkazy"){
        $(".odkazy").css({"background":"#382690" });
    }
    
    // hasici
    
    if(cl == ".aktuality_hasici"){
        $(".aktuality_hasici").css({"background":"#ccc213" }); 
    }	
    
    if(cl == ".info_hasici"){
        $(".info_hasici").css({"background":"#ccc213" }); 
    }	
    
    if(cl == ".foto_hasici"){
        $(".foto_hasici").css({"background":"#ccc213" }); 
    }
    
    // /hasici
    
    // historie
    
    if(cl == ".info_historie"){
        $(".info_historie").css({"background":"#5e1f8c" }); 
    }	
    
    if(cl == ".statistiky_historie"){
        $(".statistiky_historie").css({"background":"#5e1f8c" }); 
    }
    
    // /historie
    
    // alert($.cookie("aktualni_menu"));
}
);
    
