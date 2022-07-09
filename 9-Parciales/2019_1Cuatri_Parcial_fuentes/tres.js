/*
Escobar Raúl Div. G
Bienvenidos.
Pedir por prompt el precio y el porcentaje de descuento, mostrar el 
precio final con descuento por id.
*/
function mostrar()
{
    let precio;
    let descuento;
    let porcentaje;
    let precioFinal;

    precio=prompt("Ingrese el precio");
    precio=parseInt(precio);

    descuento=precio * porcentaje/100;

    porcentaje=prompt("Ingrese el porcentaje de descuento");
    porcentaje=parseInt(porcentaje);

    precioFinal=precio-porcentaje;

    document.getElementById("elPrecioFinal").value=precioFinal;


}
