/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/

function mostrar() {
	let i;
	let tipoProducto;
	let precio;
	let unidades;
	let marca;
	let fabricante;

	// variables A)
	let flagAlcohol = true;
	let precioAlcoholMasBarato;
	let fabricanteAlcohol;
	// variables B)
	let acumuladorBarbijo = 0;
	let contadorBarbijo = 0;
	let acumuladorJabon = 0;
	let contadorJabon = 0;
	let acumuladorAlcohol = 0;
	let contadorAlcohol = 0;
	let promedioCompraMayorUnidades;
	let tipoConMasUnidades;
	//variables C)




	for (i = 0; i < 3; i++) {
		tipoProducto = prompt("Ingrese el producto: ").toLowerCase();
		while (tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol") {
			tipoProducto = prompt("ERROR!! Reingrese el producto: ").toLowerCase();
		}

		precio = prompt("ingrese el precio (entre 100 y 300): ");
		precio = parseInt(precio);
		while (isNaN(precio) || precio < 100 || precio > 300) {
			precio = prompt("ERROR!! Reingrese el precio (entre 100 y 300): ");
			precio = parseInt(precio);
		}

		unidades = prompt("ingrese cuantas unidades (entre 1 y 1000): ");
		unidades = parseInt(unidades);
		while (isNaN(unidades) || unidades < 1 || unidades > 1000) {
			unidades = prompt("ERROR!! Reingrese el unidades (entre 1 y 1000): ");
			unidades = parseInt(unidades);
		}

		marca = prompt("Ingrese la marca: ");
		fabricante = prompt("Ingrese el fabricante: ");

		//a) Del más barato de los alcoholes, la cantidad de unidades y el fabricante
		if (flagAlcohol == true)//|| (tipoProducto== "alcohol" && precioAlcoholMasBarato>precio))
		{
			precioAlcoholMasBarato = precio;
			unidadesAlcoholMasBarato = unidades;
			fabricanteAlcohol = fabricante;
			flagAlcohol = false;
		}
		else {
			if (precioAlcoholMasBarato > precio) {
				precioAlcoholMasBarato = precio;
				unidadesAlcoholMasBarato = unidades;
				fabricanteAlcohol = fabricante;
			}
		}



	} // FIN FOR


	//b) Del tipo con mas unidades, el promedio por compra
	if (acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon) {
		promedioCompraMayorUnidades = acumuladorAlcohol / contadorAlcohol;
		tipoConMasUnidades = "alcohol";
	}
	else {
		if (acumuladorBarbijo > acumuladorJabon) {
			promedioCompraMayorUnidades = acumuladorBarbijo / contadorBarbijo;
			tipoConMasUnidades = "barbijo";
		}
		else {
			promedioCompraMayorUnidades = acumuladorJabon / contadorJabon;
			tipoConMasUnidades = "jabon";
		}
	}

	document.write("a) Del más barato de los alcoholes, la cantidad es: "+ unidadesAlcoholMasBarato +" unidades y el fabricante es: "+ fabricanteAlcohol+"</br>");
	document.write("Del tipo con mas unidades, el promedio por compra es: "+promedioCompraMayorUnidades+"</br>");
	document.write("El total de unidades de jabon son :"+acumuladorJabon+"</br>");

}
