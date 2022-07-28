/*
Escobar Raúl Div. G
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;

	let numero;
	let sumaNegativos=0;
	let sumaPositivos=0;
	let cantidadPositivos=0;
	let cantidadNegativos=0;
	let cantidadCeros=0;
	let cantidadPares=0;
	let promedioPositivos;
	let promedioNegativos;
	let diferencia;

	respuesta=true;

	while(respuesta==true)
	{
		numero=prompt("Ingrese un numero: ");
		numero=parseInt(numero);
		while(isNaN(numero)==true)
		{
			numero=prompt("ERROR!! Reingrese el numero: ");
		}

		if(numero < 0)
		{
			sumaNegativos += numero;
			cantidadNegativos ++ ;
		}
		if(numero > 0)
		{
			sumaPositivos += numero;
			cantidadPositivos ++ ;
		}
		if(numero == 0)
		{
			cantidadCeros ++ ;
		}
		if(numero %2 == 0)
		{
			cantidadPares ++ ;
		}
		
		respuesta=confirm("desea continuar?");
	}//fin del while

	promedioNegativos=sumaNegativos/cantidadNegativos;
	promedioPositivos=sumaPositivos/cantidadPositivos;

	diferencia=sumaPositivos-sumaNegativos;

	document.write("</br> 1-Suma de los negativos es: "+ sumaNegativos);
	document.write("</br> 2-Suma de los positivos es: "+ sumaPositivos);
	document.write("</br> 3-Cantidad de positivos es: "+ cantidadPositivos);
	document.write("</br> 4-Cantidad de negativos es: "+ cantidadNegativos);
	document.write("</br> 5-Cantidad de ceros es: "+cantidadCeros);
	document.write("</br> 6-Cantidad de números pares es: "+cantidadPares);
	document.write("</br> 7-Promedio de positivos es: "+promedioPositivos.toFixed(2));
	document.write("</br> 8-Promedios de negativos es: "+promedioNegativos.toFixed(2));
	document.write("</br> 9-Diferencia entre positivos y negativos es: "+diferencia);

}//FIN DE LA FUNCIÓN