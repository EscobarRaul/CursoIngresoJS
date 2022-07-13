/*
Al presionar el Botón, mostrar un número Random del 1 al 10 
inclusive.
*/
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let numero;
	
	numero= Math.floor(Math.random()*10 + 1);
	
	alert(numero);	

}//FIN DE LA FUNCIÓN