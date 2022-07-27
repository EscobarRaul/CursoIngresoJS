/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar()
{
	 
	//alert("Esto funciona de maravilla"); 

	let nombre;
	let apellido;
	let edad; // --> entre 18 y 65
	let altura; // --> 1.50 y 2.10 metros
	let division; // division G
	let respuesta=true;
	let personaMasAlta; // guardar nombre de la persona mas alta
	let personaMasBaja;
	let alturaMaxima;
	let alturaMinima;
	let flagAltura;
	
	let flagEdad;
	let personaMasVieja;
	let personaMasJoven;
	let edadMaxima;
	let edadMinima;

	flagAltura=0;

	//edad= "Hola";
	//altura= 1.67;

	// isnan afirma que no es un numero
	//isNaN(edad) // --> true
	//isNaN(altura) // --> false

	/*
	while(respuesta){

		nombre=prompt("Ingresa tu nombre: ");
		edad=prompt("Ingrese tu edad: ");
		edad=parseInt(edad);

		while(isNaN(edad) || !(edad > 18 && edad <65))
		{
			edad=prompt("ERROR. Reingrese tu edad: ");
			edad=parseInt(edad);
		}

		altura=prompt("Ingrese tu altura: ");
		altura=parseInt(altura);
		while(isNaN(altura)	|| !(altura > 150 && altura < 210))
		{
			altura=prompt("ERROR. ReIngrese tu altura: ");
			altura=parseInt(altura);
		}

		division=prompt("Ingrese tu division: ");
		while(isNaN(division)==false || division != "g" )
		{
			division=prompt("ERROR. Reingresa tu division: ");
		}

		if(flagAltura==0)
		{
			personaMasAlta=nombre;
			alturaMaxima=altura;
			alturaMinima=altura;
			flagAltura = 1;
		}
		else{
			if(alturaMaxima<altura){
				alturaMaxima=altura;
				personaMasAlta=nombre;
			}
			if(alturaMinima>altura){
				alturaMinima=altura;
				personaMasBaja=nombre;
			}
		}

		alert("la persona mas alta es: " + personaMasAlta +" y su altura es "+ alturaMaxima);

		respuesta=confirm("desea continuar?");
	}
	*/

	/*
	if(isNaN(edad)){

		alert("Te equivocaste, no es un numero");
	}
	else{
		alert("Es un numero, muy bien");
	}*/


	flagEdad=0;
	
	while(respuesta==true) 
	{
		nombre=prompt("Ingrese su nombre: ");
		apellido=prompt("Ingrese su apellido: ");
		edad=prompt("Ingrese su edad: ");
		edad=parseInt(edad);
		/*
		if(flagEdad==0)
		{
			personaMasVieja=nombre;
			edadMaxima=edad;
			edadMinima=edad;
			flagEdad=1;
		}
		else{
			if(edadMaxima<edad){
				edadMaxima=edad;
				personaMasVieja=nombre;
			}
			if(edadMinima>edad){
				edadMinima=edad;
				personaMasJoven=nombre;
			}
		}*/

		if(flagEdad==0 || edadMaxima<edad )
		{
			personaMasVieja=nombre;
			edadMaxima=edad;
		}
		
		if(flagEdad==0 || edadMinima>edad )
		{
			personaMasJoven=nombre;
			edadMinima=edad;
			flagEdad=1;
		}

		alert("la persona mas vieja es: "+ personaMasVieja +" y su edad es: "+ edadMaxima);
		respuesta=confirm("Desea continuar?");
	}	

	



}

