/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	let mensaje;

	sexoIngresado=true;

	sexoIngresado = prompt("ingrese f / m .").toLowerCase();
	
	while(sexoIngresado != "f" && sexoIngresado != "m")
	{

		
		sexoIngresado = prompt("ERROR!! Vuelva a ingresar f / m .").toLowerCase();

		//sexoIngresado=confirm("Desea seguir con la/las interaciones");
	}
	
	mensaje= "el Sexo ingresado es : "+ sexoIngresado;
	document.getElementById("txtIdSexo").value=mensaje;
	
}//FIN DE LA FUNCIÓN