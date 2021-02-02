$(document).ready(function(){
  //smooth transition in navigation
    $('a[href^="#"]').click(function smooth() {
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

      //mostrar galeria
      $(".snippetsbtn").click(function() {
        $(".galeria").hide();
        $("#galeria-snippets").css("display", "flex");
        $(this).attr("href", "#galeria-snippets");
      });
      $(".crudbtn").click(function() {
        $(".galeria").hide();
        $("#galeria-crud").css("display", "flex");
        $(this).attr("href", "#galeria-crud");
      });
      $(".centrobtn").click(function() {
        $(".galeria").hide();
        $("#galeria-centro").css("display", "flex");
        $(this).attr("href", "#galeria-centro");
      });
      $(".todobtn").click(function() {
        $(".galeria").hide();
        $("#galeria-todo").css("display", "flex");
        $(this).attr("href", "#galeria-todo");
      });
      $(".terrerobtn").click(function() {
        $(".galeria").hide();
        $("#galeria-terrero").css("display", "flex");
        $(this).attr("href", "#galeria-terrero");
      });
      $(".close").click(function(){$(".galeria").hide();});
      
      //Mostrar la imagen en grande
      $(".galeria img").click(function() {
        let img = $(this).attr("src");
        $(".modal").css("display", "flex");
        $(".modal img").attr("src", img);
      });
      $(".modal").click(function() {
        $(".modal").css("display", "none");
      });
});