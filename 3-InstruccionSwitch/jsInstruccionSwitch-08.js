/*
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/
function mostrar()
{
	let destino;
	let mensaje;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino)
	{
		case "Bariloche":
			mensaje= "Hace Frio";
		break;
		case "Cataratas":
			mensaje= "Hace Calor";
		break;
		case "Mar del plata":
			mensaje= "Hace Calor";
		break;
		case "Ushuaia":
			mensaje= "Hace Frio";
		break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN