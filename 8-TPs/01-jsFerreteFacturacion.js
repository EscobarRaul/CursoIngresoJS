/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let resultado;

    precioUno=document.getElementById("txtIdPrecioUno").value;
    precioUno=parseFloat(precioUno);
    
    precioDos=document.getElementById("txtIdPrecioDos").value;
    precioDos=parseFloat(precioDos);
    
    precioTres=document.getElementById("txtIdPrecioTres").value;
    precioTres=parseFloat(precioTres);

    resultado=precioUno+precioDos+precioTres;

    alert("La suma de los precios es "+ resultado);

}
function Promedio () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let resultado;

    precioUno=document.getElementById("txtIdPrecioUno").value;
    precioUno=parseFloat(precioUno);
    
    precioDos=document.getElementById("txtIdPrecioDos").value;
    precioDos=parseFloat(precioDos);
    
    precioTres=document.getElementById("txtIdPrecioTres").value;
    precioTres=parseFloat(precioTres);

    resultado= Math.floor(2);
    resultado=((precioUno+precioDos+precioTres)/3);

    
    alert("El promedio es " + resultado.toFixed(1)); //.toFixed acorta numeros con coma.

}
function PrecioFinal () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let resultado;
    let iva;
    let precioFinal;

    precioUno=document.getElementById("txtIdPrecioUno").value;
    precioUno=parseFloat(precioUno);
    
    precioDos=document.getElementById("txtIdPrecioDos").value;
    precioDos=parseFloat(precioDos);
    
    precioTres=document.getElementById("txtIdPrecioTres").value;
    precioTres=parseFloat(precioTres);

    resultado=precioUno+precioDos+precioTres;
    iva=resultado * 21/100;
    precioFinal= resultado + iva;
    
    alert("El precio final es " + precioFinal.toFixed(1));
}