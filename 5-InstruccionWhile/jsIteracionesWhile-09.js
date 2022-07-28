/*
Escobar Raúl Div. G
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let flagDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	
	//iniciar variables
	flagDelPrimero=0;
	respuesta=true;

	while(respuesta==true)
	{
		numeroIngresado= prompt("ingrese un numero: ");
		numeroIngresado= parseInt(numeroIngresado);

		/*
		if(flagDelPrimero==0)
		{
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
			flagDelPrimero=1;
		}
		else{
			if(numeroMaximo<numeroIngresado)
			{
				numeroMaximo=numeroIngresado;
			}
			if(numeroMinimo>numeroIngresado)
			{
				numeroMinimo=numeroIngresado;
			}
		}
		*/
		if(flagDelPrimero==0 || numeroMaximo<numeroIngresado)
		{
			numeroMaximo=numeroIngresado;
		}
		if(flagDelPrimero==0 || numeroMinimo>numeroIngresado)
		{
			numeroMinimo=numeroIngresado;
			flagDelPrimero=1;
		}
		
		respuesta=confirm("desea continuar?");
		
	}
	
		document.getElementById("txtIdMaximo").value=numeroMaximo;
		document.getElementById("txtIdMinimo").value=numeroMinimo;


}//FIN DE LA FUNCIÓN
