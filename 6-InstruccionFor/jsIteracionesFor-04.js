/*
Escobar Raúl Div G
1)De 5  personas que ingresan a la farmacia se deben tomar y validar los siguientes datos.
nombre, numero de espera(del 0 al 99),DNI(validar entre 10.000.000 a 99.999.999) 
y monto de la factura emitida (validar que no sea negativo):
a)informar el promedio gastado por persona (en total).
b)La cantidad de personas que su DNI es menor a 80.000.000 
y la cantidad de personas que su DNI es igual o mayor a los 80.000.000
c)el nombre y numero de espera del que más gastó
pedir datos por prompt y mostrar por document.write

*/
/*function mostrar()
{

	let i=0;
	let nombre;
	let numeroDeEspera;
	let dni;
	let montoFactura;
	//A)
	let promedioGastado;
	let acumuladorGastado=0;
	//B)
	let contadorPersonasMenorA80M=0;
	let contadorPersonasMayorA80M=0;
	//C)
	let flagMasGasto=true;
	let nombreMasGasto;
	let numeroEsperaMasGasto;
	let personaMasGasto;



	for(i=0 ; i <5 ; i ++)
	{
		nombre = prompt("ingrese su nombre : ");

		do {
			numeroDeEspera = prompt("ingrese el numero de espera : ");
			numeroDeEspera = parseInt(numeroDeEspera);
		} while (isNaN(numeroDeEspera) || numeroDeEspera < 0 || numeroDeEspera > 99);

		do {
			dni = prompt("ingrese su DNI (sin puntos,ni letras) ");
			dni = parseInt(dni);
		} while (isNaN(dni) || dni < 10000000 || dni > 99999999);

		do {
			montoFactura = prompt("ingrese el monto de la factura : ");
			montoFactura = parseInt(montoFactura);
		} while (isNaN(montoFactura) || montoFactura < 0);


		//b)La cantidad de personas que su DNI es menor a 80.000.000 

		if(dni<80000000)
		{
			contadorPersonasMenorA80M ++;
		}else
		{
			if(dni >= 80000000)
			{
				contadorPersonasMayorA80M++;
			}
		
		}

		//c)el nombre y numero de espera del que más gastó

		if (flagMasGasto == true) 
		{
			nombreMasGasto = nombre;
			numeroEsperaMasGasto=numeroDeEspera;
			personaMasGasto = montoFactura;
			flagMasGasto = false;

		} else
		{
			if (personaMasGasto < montoFactura)
			{ 
				nombreMasGasto = nombre;
				numeroEsperaMasGasto=numeroDeEspera;
				personaMasGasto = montoFactura;
			}
		}


		//a)informar el promedio gastado por persona.
		acumuladorGastado+=montoFactura;

	}//FIN FOR

	promedioGastado=acumuladorGastado/i;
	Math.floor(promedioGastado);

	document.write("a) el promedio gastado en total es: "+promedioGastado+"<br>");
	document.write("b)La cantidad de personas que su DNI es menor a 80.000.000 es: "+contadorPersonasMenorA80M+"<br>");
	document.write("b)la cantidad de personas que su DNI es igual o mayor a los 80.000.000 es: "+contadorPersonasMayorA80M+"<br>");
	document.write("c)el nombre del que más gastó es :"+nombreMasGasto+ " y su numero de espera es: "+ numeroEsperaMasGasto);
	

}//FIN DE LA FUNCIÓN
*/


/*

2)Se requiere el ingreso de datos para un video juego de pokemon en línea hasta que el usuario quiera:
-Necesitaremos: nombre del jugador/a
-Género (validar M/F/X)
-Edad (validar entre 3 a 99 años)
-Pokemon inicial (validar Charmander, Squirtle o Bolbasaur)
Y deberemos mostrar el promedio de edad de los jugadores ingresados.
El nombre y el pokemon elegido del jugador más grande de edad y del jugador más joven.

*/
/*function mostrar()
{
	let nombre;
	let genero;
	let edad;
	let pokemonInicial;
	let respuesta=true;
	//A)
	let acumuladorEdad=0;
	let contadorEdad=0;
	let promedioEdad;
	//B)
	let flagMasGrande=true;
	let nombreMasGrande;
	let pokemonMasGrande;
	let jugadorMasGrande;

	let nombreMasJoven;
	let pokemonMasJoven;
	let jugadorMasJoven;


	while(respuesta==true)
	{

		nombre = prompt("ingrese su nombre : ");

		do {
			genero = prompt("Ingrese su genero (f-m-x): ").toLowerCase();
		} while (genero != "f" && genero != "m" && genero != "x");

		do {
			edad = prompt("ingrese su edad : ");
			edad = parseInt(edad);
		} while (isNaN(edad) || edad < 3 || edad > 99);

		do {
			pokemonInicial = prompt("Ingrese su pokemon Inicial (Charmander-Squirtle-Bolbasaur): ").toLowerCase();
		} while (pokemonInicial != "charmander" && pokemonInicial != "squirtle" && pokemonInicial != "bolbasaur");

		//A) deberemos mostrar el promedio de edad de los jugadores ingresados.
		contadorEdad ++;
		acumuladorEdad+=edad;

		//B)El nombre y el pokemon elegido del jugador más grande de edad y del jugador más joven.
		if (flagMasGrande == true) 
		{
			nombreMasGrande = nombre;
			pokemonMasGrande=pokemonInicial;
			jugadorMasGrande = edad;

			nombreMasJoven=nombre;
			pokemonMasJoven=pokemonInicial;
			jugadorMasJoven=edad;
			flagMasGrande = false;

		} else 
		{
			if(jugadorMasGrande < edad)
			{ 
				nombreMasGrande = nombre;
				pokemonMasGrande=pokemonInicial;
				jugadorMasGrande = edad;
			}
			if(jugadorMasJoven > edad)
			{
				nombreMasJoven=nombre;
				pokemonMasJoven=pokemonInicial;
				jugadorMasJoven=edad;
			}
		}

		

		respuesta=confirm("Desea continuar?");
	}//FIN WHILE

	promedioEdad=acumuladorEdad/contadorEdad;
	

	document.write(" El promedio de edad de los jugadores ingresados es: "+promedioEdad.toFixed(2)+"<br>");
	document.write("El nombre del jugador más grande de edad es: "+nombreMasGrande+" y el pokemon elegido es: "+pokemonMasGrande+"<br>");
	document.write("El nombre del jugador más joven de edad es: "+nombreMasJoven+" y el pokemon elegido es: "+pokemonMasJoven +"<br>");

}*/

/*
Escobar Raúl Div. G
3)Una distribuidora de bebidas llena 5 comiones con sus productos y necesita guardar ciertos datos de cada una:
-Nombre del conductor
-Cantidad de litros de agua transportada($100 el litro)
-Cantidad de litros de gaseosa transportada ($150 el litro)
-Cantidad de litros de cerveza transportada ($200 el litro)
Y debemos mostrar que tipo de bebida se transportó en mayor cantidad (cerveza,agua o gaseosa)
Además se pide un total de facturación que estará dado por cada litro de gaseosa vendida a $150,
cada litro de agua a $100 y cada litro de cerveza a $200.

*/

function mostrar()
{
	let i=0;
	let nombre;
	let cantidadAgua;
	let cantidadGaseosa;
	let cantidadCerveza;

	let acumuladorAgua=0;
	let acumuladorGaseosa=0;
	let acumuladorCerveza=0;

	let seTransportoMayorCantidad;

	let totalFacturacion;
	let gaseosaPorLt;
	let aguaPorLt;
	let cervezaPorLt;
	let subtotalAgua;
	let subtotalGaseosa;
	let subtotalCerveza;

	cervezaPorLt=200;
	gaseosaPorLt=150;
	aguaPorLt=100;

	for(i=0 ; i<3 ; i ++)
	{
		nombre = prompt("ingrese su nombre : ");

		do {
			cantidadAgua = prompt("ingrese la cantidad de Agua (litros): ");
			cantidadAgua = parseInt(cantidadAgua);
		} while (isNaN(cantidadAgua) || cantidadAgua < 0);

		do {
			cantidadGaseosa = prompt("ingrese la cantidad de Gaseosa (litros): ");
			cantidadGaseosa = parseInt(cantidadGaseosa);
		} while (isNaN(cantidadGaseosa) || cantidadGaseosa < 0);

		do {
			cantidadCerveza = prompt("ingrese la cantidad de Cerveza (litros): ");
			cantidadCerveza = parseInt(cantidadCerveza);
		} while (isNaN(cantidadCerveza) || cantidadCerveza < 0);

	
		acumuladorAgua+=cantidadAgua;
		acumuladorGaseosa+=cantidadGaseosa;
		acumuladorCerveza+=cantidadCerveza;

	}// FIN FOR

	subtotalAgua=aguaPorLt*cantidadAgua;
	subtotalGaseosa=gaseosaPorLt*cantidadGaseosa;
	subtotalCerveza=cervezaPorLt*cantidadCerveza;

	totalFacturacion=subtotalAgua+subtotalGaseosa+subtotalCerveza;


	if(acumuladorAgua>acumuladorGaseosa && acumuladorAgua>acumuladorCerveza)
	{
		seTransportoMayorCantidad= "Agua";
	}else
	{
		if(acumuladorGaseosa>acumuladorCerveza)
		{
			seTransportoMayorCantidad="Gaseosa";
		}
		else
		{
			seTransportoMayorCantidad="Cerveza";
		}
	}


	document.write("La bebida que se transportó en mayor cantidad es: "+seTransportoMayorCantidad+"<br>");
	document.write("El total de facturacion es: $"+totalFacturacion);

}


