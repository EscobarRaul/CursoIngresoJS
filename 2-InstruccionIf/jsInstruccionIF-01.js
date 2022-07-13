/*
Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".
*/

function mostrar()
{
	let edad;

	edad=document.getElementById("txtIdEdad").value;
	edad= parseInt(edad);

	if(edad > -1)// uso un solo operador >
	{
		if(edad != 15) // si el valor de edad no es 15
		{
			alert("La edad es distinta de 15");
		}else
		{
			alert("Niña bonita");	
		}	
	}else
	{
		alert("La edad no puede ser negativa");
	}

}//FIN DE LA FUNCIÓN

/*
	if(condicion)// verdadero o falso (0)
	{
		codigo;
	}else
	{
		codigo;
	}

	operadores aritmeticos:
	+ - * / %
	operadores relacionados o condicionales
	< > <= >= == !=
	operador logicos
	&& ||  !

	*/