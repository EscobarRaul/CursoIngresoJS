/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let fahrenheit;
    let centigrados;

    fahrenheit=document.getElementById("txtIdTemperatura").value;
    fahrenheit=parseInt(fahrenheit);

    centigrados=(fahrenheit -32)* 5/9 ;

    alert(fahrenheit + " fahrenheit son "+ centigrados + " centigrados")

}

function CentigradosFahrenheit () 
{
    let centigrados;
    let fahrenheit;

    centigrados=document.getElementById("txtIdTemperatura").value;
    centigrados=parseInt(centigrados);

    fahrenheit=(centigrados * 9/5) + 32;

    alert(centigrados + " centigrados son " + fahrenheit + " fahrenheit");

}
