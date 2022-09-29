/*
Ejercicio 1

Ingresar el nombre de los 5 candidatos a presidente de CusCús,  
la edad de cada uno y la cantidad de votos (no menor a cero)  que sacó en las elecciones.
Informar: 
A)el candidato con más votos
B)el candidato con menos votos
C)el promedio de edades de los candidatos
D)total de votos emitidos.
*/


function mostrar()
{
	let i=0;
	let nombre;
	let edad;
	let cantidadVotos;

	//variables A y B
	let mayorCantidadVotos;
	let nombreMayorCandidato;
	let menorCantidadVotos;
	let nombreMenorCandidato;

	//variables C
	let acumuladorEdades=0;
	let promedioEdades;

	// variables D
	let acumuladorVotos=0;



	for(i=0; i<5 ; i ++)
	{
		nombre=prompt("Ingrese el nombre: ");
		
		edad=prompt("Ingrese la edad(entre 26-70 años): ");
		edad=parseInt(edad);
		while(edad < 26 || edad > 70) //entre 26-70
		{
			edad=prompt("ERROR!! ReIngrese la edad (entre 26-70 años): ");
			edad=parseInt(edad);
		}

		cantidadVotos=prompt("Ingrese cantidad de votos: ");
		cantidadVotos=parseInt(cantidadVotos);
		while(cantidadVotos<0)
		{
			cantidadVotos=prompt("ERROR! ReIngrese cantidad de votos: ");
			cantidadVotos=parseInt(cantidadVotos);
		}

		if(cantidadVotos > mayorCantidadVotos || i == 0) // A)
		{
			mayorCantidadVotos = cantidadVotos;
			nombreMayorCandidato= nombre;
		}
		if(cantidadVotos< menorCantidadVotos | i == 0)// B)
		{
			menorCantidadVotos=cantidadVotos;
			nombreMenorCandidato=nombre;
		}

		acumuladorEdades+=edad;

		acumuladorVotos+=cantidadVotos; // D)


	}// FIN FOR

	promedioEdades= acumuladorEdades/i; // C)

	document.write("El candidato con mayor cantidad de votos es: "+ nombreMayorCandidato);
	document.write("</br> El candidato con mayor cantidad de votos es: "+ nombreMenorCandidato);
	document.write("</br> El promedio de edades de los candidatos es: "+ promedioEdades);
	document.write("</br> El total de voto es: "+ acumuladorVotos);
	
}

/*Ejercicio 2

Una librería que se especializa en venta de libros importados desea calcular ciertas métricas en base
a las ventas de sus productos.
Se ingresa de cada venta:
Título del libro
Género: (ciencia ficción – Drama – Terror)
Material del libro (rústica – tapa dura)
Importe (No pueden ser números negativos ni mayor a los 30000)
Se pide:                          	
a) El libro más barato de drama con su importe.
b) Del libro más caro, el título.
c) Porcentaje de libros de cada género
d) La cantidad de libros que sean de ciencia ficción y cuesten menos de $700.
e) Cantidad de libros de ciencia ficcion o drama que cuesten mas de $500.
*/

/*function mostrar()
{
	let titulo;
	let genero;
	let material;
	let importe;

	let respuesta=true;

	// variables A)
	let tituloBaratoDrama;
	let importeBaratoDrama;
	let banderaBaratoDrama=true;
	//variables B)
	let importeMasCaro;
	let tituloMasCaro;
	let banderaMasCaro=true;
	//variables C)
	let contadorLibros=0;
	let contadorCienciaFiccion=0;
	let porcentajeCienciaFiccion;
	let contadorDrama=0;
	let porcentajeDrama;
	let contadorTerror=0;
	let porcentajeTerror;
	//variables D)
	let contadorCienciaFiccionMenos700=0;
	//variables E)
	let otroContador=0;


	while(respuesta==true)
	{
		//ENTRADAS
		titulo=prompt("Ingrese el titulo: ");
	
        genero = prompt("Ingrese el genero (ciencia ficcion/drama/terror): ").toLowerCase();
        while (genero != "ciencia ficcion" && genero != "drama" && genero != "terror")
		{
			genero = prompt("ERROR!! ReIngrese el genero (ciencia ficcion/drama/terror): ").toLowerCase();
		}  

		material = prompt("Ingrese el material (rustica/tapa dura): ").toLowerCase();
        while (material != "rustica" && material != "tapa dura")
		{
			material = prompt("ERROR!! ReIngrese el material (rustica/tapa dura): ").toLowerCase();
		}  

		importe = prompt("ingrese el importe : ");
    	importe = parseFloat(importe);
   	 	while (importe < 0 || importe > 30000)
		{
			importe = prompt("ERROR!! Reingrese el importe : ");
			importe = parseFloat(importe);
   		}

		//PROCESOS

		/*if(genero=="drama") // A)
		{
			if(importe<importeBaratoDrama || banderaBaratoDrama==true)
			{
				importeBaratoDrama=importe;
				tituloBaratoDrama=titulo;
				banderaBaratoDrama=false;
			}
		}

		//if(importe > importeMasCaro || contadorLibros==0)
		if(importe > importeMasCaro || banderaMasCaro==true) // B)
		{
			importeMasCaro=importe;
			tituloMasCaro=titulo;
			banderaMasCaro=false; // si ponemos contadorLibros no iria la bandera.
		}
		

		switch(genero) // C)
		{
			case "ciencia ficcion":
				contadorCienciaFiccion ++;
				if(importe<700) // D)
				{
					contadorCienciaFiccionMenos700++; 
				}
			break;
			case "drama":
				contadorDrama ++ ; 
				if(importe<importeBaratoDrama || banderaBaratoDrama==true /*contadorDrama==1) // A)
				{
					importeBaratoDrama=importe;
					tituloBaratoDrama=titulo;
					banderaBaratoDrama=false; // si ponemos el contadorDrama no iria la bandera. 
				}

			break;
			case "terror":
				contadorTerror ++ ;
			break;
		}

		if((genero == "drama" || genero == "ciencia ficcion")&& importe>500) // E)
		{
			otroContador++;
		}

		contadorLibros ++ ;


		respuesta=confirm("Desea continuar?");

	}   // FIN WHILE

	// contadorLibros= contadorCienciaFiccion + contadorDrama + contadorTerror; // no se inicializa en 0.

	porcentajeCienciaFiccion = contadorCienciaFiccion * 100 / contadorLibros; // C)
	porcentajeDrama = contadorDrama * 100 /contadorLibros;
	porcentajeTerror = contadorTerror * 100 / contadorLibros;

	if(banderaBaratoDrama==false) // Parte del A)
	{
		document.write("El drama mas barato es: "+ tituloBaratoDrama + "</br>");
	}
	else
	{
		document.write("No se ingreso ningun libro de drama");
	}

	document.write("El titulo del libro mas caro es: "+tituloMasCaro+ "</br>"); // B)
	document.write("Porcentaje Ciencia Ficcion: "+ porcentajeCienciaFiccion+ "</br>"); // C)
	document.write("Porcentaje drama: "+ porcentajeDrama +"</br>"); // C)
	document.write("Porcentaje terror: "+ porcentajeTerror+ "</br>"); // C)
	document.write("Cantidad de libros que sean de ciencia ficción y cuesten menos de $700: "+ contadorCienciaFiccionMenos700+ "</br>");// D)
}*/
