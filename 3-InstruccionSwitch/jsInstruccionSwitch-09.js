/*
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/
function mostrar()
{
	let estacion;
	let destino;
	let estadia;
	let aumento;
	let descuento;
	let precioFinal;

	estacion=document.getElementById("txtIdEstacion").value;
	destino=document.getElementById("txtIdDestino").value;

	estadia= 15000;
	
	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					aumento=estadia * 20/100;
					precioFinal= estadia + aumento;
				break;
				case "Cataratas":
				case "Cordoba":
					descuento=estadia * 10/100;
					precioFinal= estadia - descuento;
				break;
				default:
					descuento=estadia * 20/100;
					precioFinal= estadia - descuento;
				break;
			} 

		case "Verano":
			switch(destino)
			{
				case "Bariloche":
					descuento=estadia * 20/100;
					precioFinal= estadia - descuento;
				break;
				case "Cataratas":
				case "Cordoba":
					aumento=estadia * 10/100;
					precioFinal= estadia + aumento;
				break;
				default:
					aumento=estadia * 20/100;
					precioFinal= estadia + aumento;
				break;
			}
		case "Otoño":
		case "Primavera":
			switch(destino)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					aumento=estadia * 10/100;
					precioFinal= estadia + aumento;
				break;
				default:
					precioFinal= estadia;
				break;
			}
		break;
	}

	//precioFinal = estadia * aumentoODescuento;
	mensaje= "el precio es: "+ precioFinal;
	alert(mensaje);


}//FIN DE LA FUNCIÓN
