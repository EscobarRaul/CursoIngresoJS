/*
Escobar Raúl Div.G
Bienvenidos.
Pedir por prompt el precio y el porcentaje de descuento, 
mostrar el precio final con descuento por id.
*/
function mostrar()
{
    let precio;
    let descuento;
    let porcentaje;
    let precioFinal;

    precio=prompt("Ingresar precio");
    precio=parseInt(precio);

    porcentaje=prompt("Ingrese porcentaje de descuento");   
    porcentaje=parseInt(porcentaje);

    descuento=precio * porcentaje/100;

    precioFinal=precio - descuento;

    document.getElementById("elPrecioFinal").value=precioFinal;

}
