/*
EJERCICIO 1
debemos cargar 10 productos que acaban de llegar a la empresa
"Galletitas Felices", para cada producto se debe registrar:
*  marca del producto
* Tipo de galletita : "conSal", "sinSal", "dulces".
* cantidad de cajas: mas de 0
* cantidad de kilos por caja:mas de 0
* nombre proveedor
* origen: "nacional", "mercosur", "resto del mundo"
Se pide informar por document.write:

a) el ingreso nacional con la menor cantidad de cajas.
b) el nombre proveedor de las galletitas dulces que menos kilos tiene por caja.
c) el origen que tiene mayor cantidad de cajas en total
*/
/*function mostrar() {

	let i = 0;
	let marca;
	let tipo;
	let cantidadCajas;
	let cantidadKilosPorCaja;
	let nombre;
	let origen;
	//A)
	let flagMenorCantidadCajas = true;
	let menorCantidadCajas;
	let ingresoNacionalMenor;
	//B)
	let flagMenosKilosPorCaja = true;
	let nombreMenosKilos;
	let menosKilosPorCaja;
	//C)
	let acumuladorNacional = 0;
	let acumuladorMercosur = 0;
	let acumuladorRestoDelMundo = 0;
	let origenMayorCantidadCajas;


	for (i = 0; i < 3; i++) {
		marca = prompt("ingrese la marca del producto : ");

		do {
			tipo = prompt("Ingrese el tipo de galletitas (Con sal, Sin Sal, dulces): ").toLowerCase();
		} while (tipo != "con sal" && tipo != "sin sal" && tipo != "dulces");

		do {
			cantidadCajas = prompt("ingrese la cantidad de cajas : ");
			cantidadCajas = parseInt(cantidadCajas);
		} while (cantidadCajas < 0);

		do {
			cantidadKilosPorCaja = prompt("ingrese la cantidad de cajas por kilo : ");
			cantidadKilosPorCaja = parseInt(cantidadKilosPorCaja);
		} while (cantidadKilosPorCaja < 0);

		nombre = prompt("ingrese el nombre del proveedor : ");

		do {
			origen = prompt("Ingrese el origen (Nacional - Mercosur - resto del mundo): ").toLowerCase();
		} while (origen != "nacional" && origen != "mercosur" && origen != "resto del mundo");

		//b) el nombre proveedor de las galletitas dulces que menos kilos tiene por caja.

		switch (tipo) 
		{
			case "dulces":
				if (flagMenosKilosPorCaja == true) 
				{
					nombreMenosKilos = nombre;
					menosKilosPorCaja = cantidadKilosPorCaja;
					flagMenosKilosPorCaja = false;

				} else 
				{
					if (menosKilosPorCaja > cantidadKilosPorCaja) {
						nombreMenosKilos = nombre;
						menosKilosPorCaja = cantidadKilosPorCaja;
					}
				}
			break;
		}

		//c) el origen que tiene mayor cantidad de cajas en total

		switch (origen) {
			case "mercosur":
				acumuladorMercosur+= cantidadCajas;
				break;
			case "nacional":
				acumuladorNacional+=cantidadCajas;
				if (flagMenorCantidadCajas == true) {
					ingresoNacionalMenor = origen;
					menorCantidadCajas = cantidadCajas;
					flagMenorCantidadCajas = false;

				} else {
					if (menorCantidadCajas > cantidadCajas) 
					{
						ingresoNacionalMenor = origen;
						menorCantidadCajas = cantidadCajas;
					}
				}

			break;
			case "resto del mundo":
				acumuladorRestoDelMundo+=cantidadCajas;
			break;
		}

	}//FIN FOR	

	if (acumuladorMercosur > acumuladorNacional && acumuladorMercosur > acumuladorRestoDelMundo) {
		origenMayorCantidadCajas = "mercosur";

	} else if (acumuladorNacional > acumuladorRestoDelMundo) 
	{
		origenMayorCantidadCajas = "nacional";
	}
	else {
		origenMayorCantidadCajas = "resto del mundo";
	}
 
	document.write("a) el ingreso nacional con la menor cantidad de cajas es: " + menorCantidadCajas + "<br>");
	document.write("b) el nombre proveedor de las galletitas dulces que menos kilos tiene por caja. es: " + nombreMenosKilos + "<br>");
	document.write("c) el origen que tiene mayor cantidad de cajas en total es : " + origenMayorCantidadCajas + "<br>");

}*/

/*
Para una veterinaria se necesita un programa que permita ingresar datos de
perros con su precio de vacunación a pagar. Hasta que el usuario quiera.
Por cada perro, se ingresa:
*raza:(validar "sharpei" , "galgo" , "pastor").
*nombre
*edad(entre 1 y 25)
*peso (mas de 0)
*precio de consulta (desde 500 hasta 1500).
Se pide informar por alert:
A) El mas pesados de los galgos.
B) El importe total a pagar, y con descuento (solo si corresponde):
Si se vacunan mas de 2 perros, se obtiene un 5% de descuento sobre el total a pagar.
Si se vacunan mas de 4 perros, se obtiene un 10% de descuento sobre el total a pagar.
C) promedio de peso entre cada raza de perros ingresados
D) Nombre, raza y edad del perro mas viejo ingresado.
*/
function mostrar() 
{
	let raza;
	let nombre;
	let edad;
	let peso;
	let precioConsulta;
	let respuesta = true;
	//A)
	let flagMasPesado=true;
	let nombreMasPesadoGalgo;
	let masPesadoGalgo;
	//B)
	let importeTotal;
	let descuento;
	let contadorPerros=0;
	let acumuladorPrecioConsulta=0;
	let importeTotalConDescuento;
	//C)
	let contadorGalgo=0;
	let contadorShapei=0;
	let contadorPastor=0;
	let acumuladorPesoGalgo=0;
	let acumuladorPesoSharpei=0;
	let acumuladorPesoPastor=0;
	let promedioPesoGalgo;
	let promedioPesoSharpei;
	let promedioPesoPastor;
	//D)
	let flagMasViejo=true;
	let nombreMasViejo;
	let razaMasViejo;
	let edadMasViejo;

	while (respuesta == true) {
		do {
			raza = prompt("Ingrese la raza (sharpei-galgo-pastor): ").toLowerCase();
		} while (raza != "sharpei" && raza != "galgo" && raza != "pastor");

		nombre = prompt("ingrese el nombre : ");

		do {
			edad = prompt("ingrese la edad : ");
			edad = parseInt(edad);
		} while (isNaN(edad) || edad < 1 || edad > 25);

		do {
			peso = prompt("ingrese el peso : ");
			peso = parseInt(peso);
		} while (isNaN(peso) || peso < 0);

		do {
			precioConsulta = prompt("ingrese el precio de la consulta : ");
			precioConsulta = parseInt(precioConsulta);
		} while (isNaN(precioConsulta) || precioConsulta < 500 || precioConsulta > 1500);

		//A) El mas pesados de los galgos.
		//C) promedio de peso entre cada raza de perros ingresados
		switch (raza) 
		{
			case "galgo":
				contadorGalgo++;
				acumuladorPesoGalgo+=peso;
				if (flagMasPesado == true) 
				{
					nombreMasPesadoGalgo = nombre;
					masPesadoGalgo = peso;
					flagMasPesado = false;

				} else 
				{
					if (masPesadoGalgo < peso)
					{ 
						nombreMasPesadoGalgo = nombre;
						masPesadoGalgo = peso;
					}
				}
			break;
			case "pastor":
				contadorPastor++;
				acumuladorPesoPastor+=peso;
			break;
			case "sharpei":
				contadorShapei++;
				acumuladorPesoSharpei+=peso;
			break;

		}
		//D) Nombre, raza y edad del perro mas viejo ingresado.

		if (flagMasViejo == true) 
            {
                nombreMasViejo = nombre;
                edadMasViejo = edad;
				razaMasViejo=raza;
                flagMasViejo = false;

            } else
			{
				if (edadMasViejo < edad)
				{ 
					nombreMasViejo = nombre;
					razaMasViejo=raza;
					edadMasViejo = edad;
				}
            }

		contadorPerros++;
		acumuladorPrecioConsulta+=precioConsulta;

		respuesta=confirm("Desea continuar?");
	}// FIN WHILE

	/*B) El importe total a pagar, y con descuento (solo si corresponde):
	Si se vacunan mas de 2 perros, se obtiene un 5% de descuento sobre el total a pagar.
	Si se vacunan mas de 4 perros, se obtiene un 10% de descuento sobre el total a pagar.*/
	importeTotal=acumuladorPrecioConsulta;

	if(contadorPerros > 1 && contadorPerros < 4)
	{
		descuento=importeTotal*5/100;
	}
	else 
	{
		if(contadorPerros >= 4)
		{
			descuento=importeTotal*10/100;
		}
	}
	importeTotalConDescuento=importeTotal-descuento;
	alert("el descuento es: "+importeTotalConDescuento);

	//C) promedio de peso entre cada raza de perros ingresados
	promedioPesoGalgo=acumuladorPesoGalgo/contadorGalgo;
	promedioPesoSharpei=acumuladorPesoSharpei/contadorShapei;
	promedioPesoPastor=acumuladorPesoPastor/contadorPastor;


	alert("A) El mas pesados de los galgos es: "+nombreMasPesadoGalgo+" y pesa :"+ masPesadoGalgo);
	alert("C) promedio de peso entre cada raza de perros ingresados es: Galgo: "+promedioPesoGalgo+", Sharpei: "+promedioPesoSharpei+", Pastor: "+promedioPesoPastor);
	alert("D) Nombre, raza y edad del perro mas viejo ingresado es: "+ nombreMasViejo+","+razaMasViejo+","+edadMasViejo);
}