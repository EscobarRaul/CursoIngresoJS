/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	/*let nombre; // let: es una variable.
	nombre=prompt("Ingrese nombre"); //cargo la variable con lo que ingresa el usuario
	alert(nombre);*/

/*
1.	Se ingresan 5 importes, marca del producto 
y pais de origen (China, Uruguay o Paraguay).
Calcular y mostrar:
a.	Minimo importe con su pais
b.	Maximo importe con su marca
c.	Promedio importe
d.	Cantidad de productos de China
e.	Sobre el maximo encontrado aplicar un descuento del 10% a dicho importe.
*/

	let i;
	let importe;
	let cantidadProductos;
	let marca;
	let pais;
	let flagPrimerIngreso=true;
	let maximoImporte;
	let maximoImporteMarca;
	let minimoImporte;
	let minimoImportePais;
	let promedio;
	let acumuladorImporte=0;
	let acumuladorChina=0;
	let maximoConDescuento;

	
	flagImporte=0;
	
	for(i=0;i<5;i++)
	{
		importe= prompt("ingrese el importe: ");
		importe= parseFloat(importe);
		while(isNaN(importe)||importe<=0)
		{
			importe=prompt("ERROR!! Reingrese el Importe: ");
		}

		pais=prompt("Ingrese el pais: ").toLowerCase();
		while(isNaN(pais)==false || (pais!="china" && pais!="uruguay" && pais!="paraguay"))
		{
			pais=prompt("ERROR!! Reingrese el Pais: ");
		}

		marca=prompt("Ingrese Marca: ");
		while(isNaN(marca)==false)
		{
			marca=prompt("ERROR!! Reingrese la Marca: ");
		}

		cantidadProductos=prompt("Ingrese la cantidad de producto: ");
		cantidadProductos=parseInt(cantidadProductos);
		while(isNaN(cantidadProductos)==true || cantidadProductos<=0)
		{
			cantidadProductos=prompt("ERROR!! Reingrese la cantidad Productos: ");
		}

		if(flagPrimerIngreso==true)
		{
			maximoImporte=importe;
			minimoImporte=importe;
			maximoImporteMarca=marca;
			minimoImportePais=pais;
			flagPrimerIngreso=false;
		}
		else{
			if(maximoImporte<importe)
			{
				maximoImporte=importe;
				maximoImporteMarca=marca;
			}
			if(minimoImporte>importe)
			{
				minimoImporte=importe;
				minimoImportePais=pais;
			}
		}
		/*
		if(i==0 || maximoImporte<importe )
		{
			maximoImporte=importe;
			maximoImporteMarca=marca;
		}
		if(i==0 || minimoImporte>importe)
		{
			minimoImporte=importe;
			minimoImportePais=pais;
		}*/

		acumuladorImporte += importe;
		
		if(pais=="china")
		{
			acumuladorChina+= cantidadProductos;
		}
	
	}

	promedio=acumuladorImporte/i
	maximoConDescuento=maximoImporte* 0.9 ;

	document.write("<br> El minimo importe es: "+minimoImporte+ " y pertenece al pais: "+ minimoImportePais);
	document.write("<br> El maximo importe es: "+maximoImporte+ " y pertenece a la marca: "+ maximoImporteMarca);
	document.write("<br> El promedio es: " + promedio);
	document.write("<br> La cantidad de productos de China es: " + acumuladorChina);
	document.write("<br> El descuento sobre " + maximoImporte+ " es "+ maximoConDescuento);

}

