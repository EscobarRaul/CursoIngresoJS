/*
Escobar Raúl Div.G
Bienvenidos.
Realizar el algoritmo que pida el ancho y el largo de un rectángulo por 
prompt y que muestre el perímetro por alert.
*/
function mostrar()
{
    let ancho;
    let largo;
    let perimetro;

    ancho=prompt("Ingrese el Ancho");
    ancho=parseInt(ancho);

    largo=prompt("Ingrese el Largo");
    largo=parseInt(largo);

    perimetro=(ancho+largo)*2;

    alert("El perimetro es "+ perimetro);

}
