/*
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.

*/
function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	let promedio; 

	contador=0;
	acumulador=0;
	
	while(contador < 5)
	{
		numeroIngresado= prompt("ingrese un numero: ");
		numeroIngresado= parseInt(numeroIngresado);
		
		acumulador = acumulador + numeroIngresado;
		
		contador++;
	}

	promedio= acumulador / 5 ;

	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value= promedio;

}//FIN DE LA FUNCIÓN