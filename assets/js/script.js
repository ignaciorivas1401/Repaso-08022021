$(function(){

    $("#mostrar").click(function(event){
        event.preventDefault();
        $("p").slideDown();
        $(this).addClass("disabled");
    });

    $("#ocultar").click(function(event){
        event.preventDefault();
        $("p").slideUp();
        $(this).addClass("disabled");
    });

    $( "#doble" ).dblclick(function() {
        alert( "Hello World!" );
    });


    $("a").click(function(event){
        event.preventDefault();

        if (this.hash) {
            
            var gatito = this.hash;
            // alert("En este momento ira a ver al "+gatito);

            $("html, body").animate({
                scrollTop: $(gatito).offset().top
            });

        }

    });


});