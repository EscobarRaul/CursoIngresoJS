/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let contador;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	let numeroIngresado;
	//let flag = 0;

	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1; // se lo coloca en positivo para no perder el negativo que ingrese el usuario.
	respuesta='si';

	while(respuesta== "si")
	{
		
		numeroIngresado= prompt("ingrese un numero: ");
		numeroIngresado= parseInt(numeroIngresado);
		
		if (numeroIngresado >= 0 )
		{
			sumaPositivos = sumaPositivos + numeroIngresado ;
		}
		else
		{
			//flag = 1 ;
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}

		respuesta= prompt("Desea ingresar mas numeros?");
	}

	/*if (flag == 0)
	{
		multiplicacionNegativos = 0 ;
	}
	*/
	document.getElementById("txtIdSuma").value=sumaPositivos;
	document.getElementById("txtIdProducto").value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN