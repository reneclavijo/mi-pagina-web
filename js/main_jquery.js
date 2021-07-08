$(document).ready(function (){
    
    // Esto es para el H1
    $("#btn-ocultar").click(
        function () {
            //alert("hola desde h1");
            $(".p-ocultar").slideToggle(4000, 
                function(){
                    alert("canci&oacute;n")
                    $("#btn-ocultar").addClass("fondo-verde")
                }
            )
        }
    )

    // Esto es para agregar etiquetas
    $(".agregar-contenido").click(
        function() {
            $(".dinamico").after("<p>soy el nuevo de aqui</p>")
        }
    )

})
