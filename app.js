$(document).ready(function(){
    //smooth transition in navigation
    $('a[href^="#"]').click(function() {
        var destino = $(this.hash);
        if (destino.length == 0) {
          destino = $('a[name="' + this.hash.substr(1) + '"]');
          destino = $('html');
        }
        $('html, body').animate({ scrollTop: destino.offset().top}, 500);
        return false;
      });
      
      //esto es para poner el background a la barra de navegacion cuando bajemos
      $(document).on("scroll", function() {
          if(window.scrollY>=200){
            $(".navi").css({"background-color":"#191c1a"});
          }else{
            $(".navi").css({"background-color":"transparent"});
          }
      });
      //Efecto para ver el background de las tarjetas de proyecto
      $(".div.-imagen").mouseenter(function(){
        $("div.div.-imagen > div.imagen-bk").css("display", "flex");
      });
      //para bajar y subir el menu de opciones
      $("#menubtn").click(function() {
        $(".menu").slideToggle(300);
      });
      //para subir el menu cuando este en modo responsive
      $(".menu a").click(function(){
        if (window.innerWidth <= 768) {
          $(".menu").slideUp(300);  
        }
      });
});