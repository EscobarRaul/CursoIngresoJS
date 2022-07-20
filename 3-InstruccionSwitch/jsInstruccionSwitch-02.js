/*
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
*/
function mostrar()
{
	let mes;
	let mensaje;

	mes=document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case"Junio":
		case"Julio":
		case"Agosto":
			mensaje="Abrigate que hace frio.";
		break;

		case "Diciembre":
		case "Enero":
		case "Febrero":
			mensaje="Falta para el invierno.";
		break;

		default:
			mensaje="Ya pasamos el frio, ahora calor!!!.";
		break;
		
		
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN