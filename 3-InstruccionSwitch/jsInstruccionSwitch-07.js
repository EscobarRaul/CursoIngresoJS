/*
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
*/
function mostrar()
{
	let destino;
	let mensaje;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino)
	{
		case "Bariloche":
			mensaje= "Se encuentra en el OESTE";
		break;
		case "Cataratas":
			mensaje= "Se encuentra en el NORTE";
		break;
		case "Mar del plata":
			mensaje= "Se encuentra en el ESTE";
		break;
		case "Ushuaia":
			mensaje= "Se encuentra en el SUR";
		break;
	}

	alert(mensaje);
}//FIN DE LA FUNCIÓN