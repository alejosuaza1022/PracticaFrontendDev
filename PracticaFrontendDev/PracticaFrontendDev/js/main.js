$(".galeria-imagen").click(function(e){
    var enlaceImagen = e.target.src;
    var darClick = '<div class="darClick">'+'<img src="'+enlaceImagen+'" alt="" class="galeria-imagenClick">'+'<div class="btnCerrar">X</div>'+'</div>';

    $("body").append(darClick)
    $(".btnCerrar").click(function(){
        $(".darClick").remove();
    })
    
})