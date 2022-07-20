/*
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la resta es xxx y superó el 10".
*/
function mostrar()
{
    let numeroUno;
    let numeroDos;
    let suma;
    let resta;
    let mensaje;

    numeroUno=prompt("Ingrese numero uno.");
    numeroUno=parseInt(numeroUno);

    numeroDos=prompt("Ingrese numero dos.");
    numeroDos=parseInt(numeroDos);

    suma= numeroUno + numeroDos;
    resta= numeroUno - numeroDos;

    if(numeroUno == numeroDos)
    {
        mensaje= ("El numero uno es: "+numeroUno + " por lo que es igual al numero dos, que es: "+ numeroDos);

    }
    else
    {
        if(numeroUno > numeroDos)
        {
            mensaje= resta ;
        }
        else
        {
            mensaje= suma;
        }
        if(resta > 10)
        {
            mensaje= "la resta es "+ resta+ " y superó el 10"
        }
    }


    alert(mensaje);
}
