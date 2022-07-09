/*
Escobar Raúl Div. G
Bienvenidos.
A una pareja se le pide los datos para mostrar un mensaje " ustedes se 
llaman xxxxx y xxxx pesan xx y xx kilos, que sumados son xx kilos y el 
promedio de peso xx ".
*/
function mostrar()
{
    let nombre1;
    let nombre2;
    let peso1;
    let peso2;
    let sumaPesos;
    let promedio;

    nombre1=prompt("Ingrese Primer nombre");
    
    nombre2=prompt("Ingrese Segundo nombre");

    peso1=prompt("Ingrese Primer peso");
    peso1=parseInt(peso1);

    peso2=prompt("Ingrese Segundo peso");
    peso2=parseInt(peso2);

    sumaPesos=peso1+peso2;
    
    promedio=sumaPesos/2;

    alert("Ustedes se llaman "+ nombre1 + " y " + nombre2 + ", pesan "+peso1+" y "+peso2+ " Kilos, que sumados son "+sumaPesos+" Kilos y el promedio de peso es "+promedio);

}
