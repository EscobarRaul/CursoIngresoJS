/*
Al ingresar una edad solo debemos informar si la persona NO es adolescente.
*/
function mostrar()
{
	let edad;
	
	edad= document.getElementById("txtIdEdad").value;
	edad= parseInt(edad);

	if(edad < 13 || edad > 17)
	{
		alert("NO eres adolescente");
	}/*else
	{
		alert("Eres adolescente");
	}
	*/
}//FIN DE LA FUNCIÓN