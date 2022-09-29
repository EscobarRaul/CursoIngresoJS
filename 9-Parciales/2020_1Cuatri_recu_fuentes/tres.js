/*
Ejercicio 1

Se pide cargar la ficha médica para 11 jugadores de fútbol.
Se solicita Nombre, Edad, Peso(ej: 60.5kg) y Altura(ej: 1.65mt).
A) Nombre del jugador más joven.
B) El peso del jugador más alto.
C) Promedio de altura del equipo.
D) Promedio de peso del equipo.
E) Cantidad de jugadores que superen 1.7 mt y pesen mas de 85 kg.
*/

/*function mostrar()
{
	let i=0;
	let nombre;
	let edad;
	let peso;
	let altura;

	//A)
	let flagJugadorMasJoven=true;
	let nombreJugadorMasJoven;
	let edadJugadorMasJoven;
	//B)
	let flagJugadorMasAlto=true;
	let jugadorMasAlto;
	let pesoJugadorMasAlto;
	//C)
	let acumuladorAltura=0
	let promedioAlturaEquipo;
	//D)
	let acumuladorPeso=0;
	//E)
	let contadorJugadoresMasAltosYPesados=0;



	for(i=0 ; i<2 ; i ++)
	{
		nombre = prompt("ingrese su nombre : ");

		do {
			edad = prompt("ingrese la edad : ");
			edad = parseInt(edad);
		} while (isNaN(edad) || edad < 15 || edad > 40);
		

		do {
			peso = prompt("ingrese el peso (en kg): ");
			peso = parseInt(peso);
		} while (isNaN(peso) || peso < 60 || peso > 90);

		do {
			altura = prompt("ingrese su altura (en mts) : ");
			altura = parseFloat(altura);
		} while (isNaN(altura) || altura < 1.50 || altura > 2.0);
		

		if(flagJugadorMasJoven==true) //A)Nombre del jugador más joven.
		{
			edadJugadorMasJoven=edad;
			nombreJugadorMasJoven=nombre;
			flagJugadorMasJoven=false;

		}else if(edadJugadorMasJoven>edad) // edad nueva ingresada tiene que se menor a edadJugadorMasJoven
		{
			edadJugadorMasJoven=edad;
			nombreJugadorMasJoven=nombre;
		}

		
		//B) El peso del jugador más alto
		if(flagJugadorMasAlto==true)
		{
			pesoJugadorMasAlto=peso;
			jugadorMasAlto=altura;
			flagJugadorMasAlto=false;
			
		}else if(jugadorMasAlto<altura)
		{
			pesoJugadorMasAlto=peso;
			jugadorMasAlto=altura;
		}
			
		//C) Promedio de altura del equipo.
		
		acumuladorAltura+=altura;

		//D) Promedio de peso del equipo.
		
		acumuladorPeso+=peso;
		
		//E) Cantidad de jugadores que superen 1.7 mt y pesen mas de 85 kg.
		
		if (altura > 1.7 && peso > 85 ) 
		{
			contadorJugadoresMasAltosYPesados++;
		}
		
		
	}// FIN FOR
	
	promedioAlturaEquipo=acumuladorAltura/i;
	
	promedioPesoEquipo=acumuladorPeso/i;
	
	document.write("El nombre del jugador mas joven es: "+ nombreJugadorMasJoven+ "<br>");
	document.write("El peso del jugador mas alto es:  "+ pesoJugadorMasAlto+ "<br>");
	document.write("El Promedio de altura del equipo es:  "+ promedioAlturaEquipo+ "<br>");
	document.write("El Promedio de peso del equipo es:  "+ promedioPesoEquipo+ "<br>");
	document.write("La cantidad de jugadores que superen 1.7 mt y pesen mas de 85 kg. es:  "+ contadorJugadoresMasAltosYPesados+ "<br>");
}*/


/*Ejercicio 2

Se pide gestionar los ingresos en pesos de un club de fútbol.
El equipo tiene ingresos por "ENTRADAS", "INDUMENTARIA", "ACCESORIOS".
Se solicita Tipo de Ingreso, ya mencionados anteriormente y Valor de Ingreso. 
(Puede NO EXISTIR ingresos en alguna de las categorías)

A) Ingreso BRUTO del club.
B) Ingreso NETO del club después de pagar un impuesto del 18% sobre el BRUTO.
C) Del total de ingresos se sabe que un 35% proviene de los socios, se compran dólares al costo de
$220c/u con ese monto, informar cuantos dolares se compraron.
D) Determinar si se recaudó más por INDUMENTARIA o ACCESORIOS. Informando la diferencia del mayor con el menor.
(Ej: Se recaudó $x más de ACCESORIOS)
*/
function mostrar() {

	let tipoIngreso;
	let valorIngreso;
	let respuesta = true;
	//A)
	let acumuladorIngresosBruto = 0;
	//B)
	let ingresoNeto;
	let impuesto;
	//C)
	let porcentajeSocios;
	let dolares;
	let dolaresComprados;
	//D)
	let acumuladorIndumentaria = 0;
	let acumuladorAccesorios = 0;
	let diferencia;
	let tipoIngresoMasRecaudado;

	while (respuesta == true) {
		do {
			tipoIngreso = prompt("Ingrese el tipo de ingreso (entradas, indumentaria, accesorios): ").toLowerCase();
		} while (tipoIngreso != "entradas" && tipoIngreso != "indumentaria" && tipoIngreso != "accesorios");

		do {
			valorIngreso = prompt("ingrese el valor : ");
			valorIngreso = parseFloat(valorIngreso);
		} while (isNaN(valorIngreso) || valorIngreso < 0);

		//A) Ingreso BRUTO del club.

		acumuladorIngresosBruto += valorIngreso;

		switch (tipoIngreso) 
		{
			case "indumentaria":
				acumuladorIndumentaria += valorIngreso;
			break;
			case "accesorios":
				acumuladorAccesorios += valorIngreso;
			break;
		}

		respuesta = confirm("Desea continuar?");

	}//FIN WHILE

	//B) Ingreso NETO del club después de pagar un impuesto del 18% sobre el BRUTO.
	impuesto = acumuladorIngresosBruto * 18 / 100;
	ingresoNeto = acumuladorIngresosBruto - impuesto;

	//C) Del total de ingresos se sabe que un 35% proviene de los socios, se compran dólares al costo de $220c/u con ese monto, informar cuantos dolares se compraron.
	dolares = 220;
	porcentajeSocios = acumuladorIngresosBruto * 35 / 100;
	dolaresComprados = porcentajeSocios / dolares;
	dolaresComprados=Math.floor(dolaresComprados);

	//D) Determinar si se recaudó más por INDUMENTARIA o ACCESORIOS. Informando la diferencia del mayor con el menor.(Ej: Se recaudó $x más de ACCESORIOS)
	if (acumuladorIndumentaria > acumuladorAccesorios) {
		diferencia = acumuladorIndumentaria - acumuladorAccesorios;
		tipoIngresoMasRecaudado = "indumentaria";
	}
	else {
		diferencia = acumuladorAccesorios - acumuladorIndumentaria;
		tipoIngresoMasRecaudado = "accesorios"
	}


	document.write("A) El ingreso bruto del club es: $" + acumuladorIngresosBruto + "<br>");
	document.write("B) El ingreso NETO del club después de pagar un impuesto del 18% sobre el BRUTO es: $" + ingresoNeto + "<br>");
	document.write("C) Se compraron: " + dolaresComprados + "dolares.<br>");
	document.write("D) Se recaudo: $" + diferencia + " mas de " + tipoIngresoMasRecaudado);

}

/*Ejercicio 3

Un aficionado a las cartas coleccionables desea organizar su coleccion, para esto necesita 
ingresar en un programa:
nombre, tipo (validar monstruo, arma, magica, trampa), rareza validar (comun, rara, rarisima,
legendaria), precio (validar entre 250$ y 5000$) y cantidad del mismo tipo de carta (no menor a 1), 
dejar ingresar hasta que el usuario quiera e informar lo siguiente:
A) de los distintos tipos de cartas, la cantidad total de cada tipo
B) el nombre de la carta mas repetida de cada tipo
C) de las cartas rarisimas y legendarias, la que mas precio tiene y su nombre
D) el valor de la coleccion entera
E) informar el porcentaje de cartas de cada tipo de rareza (ejemplo 25% de cartas comunes, 25% raras, 
25% rarisimas 25% legendarias)

*/
/*function mostrar() {
	let nombre;
	let tipo;
	let rareza;
	let precio;
	let cantidad;
	let respuesta = true;
	//A)
	let contadorMonstruo = 0;
	let contadorArma = 0;
	let contadorMagica = 0;
	let contadorTrampa = 0;
	//B)
	let flagCartaMasRepetidaMonstruo = true;
	let nombreCartaMasRepetidaMonstruo;
	let cartaMasRepetidaMonstruo;
	let flagCartaMasRepetidaArma=true;
	let nombreCartaMasRepetidaArma;
	let cartaMasRepetidaArma;
	let flagCartaMasRepetidaMagica=true;
	let nombreCartaMasRepetidaMagica;
	let cartaMasRepetidaMagica;
	let flagCartaMasRepetidaTrampa=true;
	let nombreCartaMasRepetidaTrampa;
	let cartaMasRepetidaTrampa;
	//C)
	let flagCartaMayorPrecio = true;
	let cartaMayorPrecio;
	let nombreCartaMayorPrecio;
	//D)
	let valorPorCarta;
	let acumuladorDeValorColeccionEntera=0;
	//E)
	let acumuladorCartasTotal=0;
	let acumuladorCartasComun = 0;
	let acumuladorCartasRaras = 0;
	let acumuladorCartaRarisima = 0
	let acumuladorCartaLegendaria = 0;
	let porcentajeCartasComunes;
	let porcentajeCartasRaras;
	let porcentajeCartasRarisimas;
	let porcentajeCartasLegendarias;

	while (respuesta == true) {
		nombre = prompt("ingrese el nombre de la carta : ");
		do {
			tipo = prompt("Ingrese el tipo (Monstruo, arma, magica, trampa): ").toLowerCase();
		} while (tipo != "monstruo" && tipo != "arma" && tipo != "magica" && tipo != "trampa");

		do {
			rareza = prompt("Ingrese la rareza (comun, rara, rarisima,legendaria): ").toLowerCase();
		} while (rareza != "comun" && rareza != "rara" && rareza != "rarisima" && rareza != "legendaria");

		do {
			precio = prompt("ingrese el precio (entre 250$ y 5000$): ");
			precio = parseInt(precio);
		} while (isNaN(precio) || precio < 250 || precio > 5000);

		do {
			cantidad = prompt("ingrese la cantidad (no menor a 1): ");
			cantidad = parseInt(cantidad);
		} while (isNaN(cantidad) || cantidad < 1);

		//A) de los distintos tipos de cartas, la cantidad total de cada tipo
		//B) el nombre de la carta mas repetida de cada tipo
		switch (tipo) 
		{
			case "monstruo":
				contadorMonstruo++;
				if (flagCartaMasRepetidaMonstruo == true) 
				{
					cartaMasRepetidaMonstruo = cantidad;
					nombreCartaMasRepetidaMonstruo = nombre;
					flagCartaMasRepetidaMonstruo = false;

				} else if (cartaMasRepetidaMonstruo < cantidad) 
				{
					cartaMasRepetidaMonstruo = cantidad;
					nombreCartaMasRepetidaMonstruo = nombre;
				}
			break;
			case "arma":
				contadorArma++;
				if (flagCartaMasRepetidaArma == true) 
				{
					cartaMasRepetidaArma = cantidad;
					nombreCartaMasRepetidaArma = nombre;
					flagCartaMasRepetidaArma = false;

				} else if (cartaMasRepetidaArma < cantidad) 
				{
					cartaMasRepetidaArma = cantidad;
					nombreCartaMasRepetidaArma = nombre;
				}
			break;
			case "magica":
				contadorMagica++;
				if (flagCartaMasRepetidaMagica == true) 
				{
					cartaMasRepetidaMagica = cantidad;
					nombreCartaMasRepetidaMagica = nombre;
					flagCartaMasRepetidaMagica = false;

				} else if (cartaMasRepetidaMagica < cantidad) 
				{
					cartaMasRepetidaMagica = cantidad;
					nombreCartaMasRepetidaMagica = nombre;
				}
			break;
			case "trampa":
				contadorTrampa++;
				if (flagCartaMasRepetidaTrampa == true) 
				{
					cartaMasRepetidaTrampa = cantidad;
					nombreCartaMasRepetidaTrampa = nombre;
					flagCartaMasRepetidaTrampa = false;

				} else if (cartaMasRepetidaTrampa < cantidad) 
				{
					cartaMasRepetidaTrampa = cantidad;
					nombreCartaMasRepetidaTrampa = nombre;
				}
			break;
		}
		
		// C) de las cartas rarisimas y legendarias, la que mas precio tiene y su nombre
		// E) informar el porcentaje de cartas de cada tipo de rareza (ejemplo 25% de cartas comunes, 25% raras,25% rarisimas 25% legendarias)
		switch (rareza) {
			case "comun":
				acumuladorCartasComun += cantidad;
				break;
				case "rara":
					acumuladorCartasRaras += cantidad;
					break;
			case "rarisima":
				acumuladorCartaRarisima += cantidad;

				if (flagCartaMayorPrecio == true) {
					cartaMayorPrecio = precio;
					nombreCartaMayorPrecio = nombre;
					flagCartaMayorPrecio = false;
					
				} else if (cartaMayorPrecio < precio) {
					cartaMayorPrecio = precio;
					nombreCartaMayorPrecio = nombre;
				}
				break;
				case "legendaria":
					acumuladorCartaLegendaria += cantidad;
					if (flagCartaMayorPrecio == true) {
						cartaMayorPrecio = precio;
						nombreCartaMayorPrecio = nombre;
						flagCartaMayorPrecio = false;
						
					} else if (cartaMayorPrecio < precio) {
						cartaMayorPrecio = precio;
						nombreCartaMayorPrecio = nombre;
					}
					break;
				}
				
				acumuladorCartasTotal+=cantidad;
				
				//D) el valor de la coleccion entera
				valorPorCarta = cantidad * precio;
				acumuladorDeValorColeccionEntera+=valorPorCarta;
				
				respuesta = confirm("Desea continuar?");
				
			}//FIN WHILE
			
			
			// E) informar el porcentaje de cartas de cada tipo de rareza (ejemplo 25% de cartas comunes, 25% raras,25% rarisimas 25% legendarias)
			
			porcentajeCartasComunes = acumuladorCartasComun *100 / acumuladorCartasTotal;
			porcentajeCartasRaras = acumuladorCartasRaras *100 / acumuladorCartasTotal;
			porcentajeCartasRarisimas = acumuladorCartaRarisima *100 / acumuladorCartasTotal;
			porcentajeCartasLegendarias = acumuladorCartaLegendaria *100 / acumuladorCartasTotal;
			
			
			document.write("A) La cantidad total de cada tipo es: Monstruo: " + contadorMonstruo + " Arma: " + contadorArma + " Magica: " + contadorMagica + " Trampa: " + contadorTrampa+"<br>");
			document.write("B) La carta mas repetida de monstruo es: "+ nombreCartaMasRepetidaMonstruo+", arma: "+nombreCartaMasRepetidaArma+", magica: "+nombreCartaMasRepetidaMagica+", trampa: "+nombreCartaMasRepetidaTrampa+"<br>");
			document.write("C) De las cartas rarisimas la que mas precio tiene es: "+cartaMayorPrecio+" y su nombre es: "+nombreCartaMayorPrecio+" y legendarias la que mas precio tiene"+cartaMayorPrecio+" y su nombre es: "+nombreCartaMayorPrecio+"<br>");
			document.write("D) El valor de la coleccion entera es: "+acumuladorDeValorColeccionEntera+"<br>");
			document.write("E) El porcentaje de cartas comunes es: "+porcentajeCartasComunes+"%, cartas raras: "+porcentajeCartasRaras+"%, cartas rarisimas: "+porcentajeCartasRarisimas+"%, cartas legendarias: "+porcentajeCartasLegendarias+"%<br>");	
			
			
		}*/
		