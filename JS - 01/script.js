function inicio(){
    var contenido = "Este es el elemento UNO";
    $("#uno").html(contenido);
}

function tomar_datos(){
    var dato = $("#datos").val();
    $(".caja").html(dato);
}
function desaparecer(){
    $(".caja").animate(
        {
            height: "toggle",
            width: "+=50px",
        }
    );
    $(".caja").animate(
        {
            height: "toggle",
            width: "-=50px"
        }
    );
}






