/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	//como empieza
	//como continua
	//como finaliza

	//let opcion;
	let numero;

	numero= 0;

	opcion=true;//valor booleano.

	/*while(opcion==true)
	{
		numero++; // es lo mismo que numero=numero+1; es lo mismo que numero+=1;
		alert(numero);

		//opcion=prompt("desea continuar ingresando numeros? s/n").toLowerCase();// <-- Ss
		opcion=confirm("Desea seguir con la/las interaciones");
	}*/
	do{
		alert(numero);
		numero++;
		
	}while(numero<11);



}//FIN DE LA FUNCIÓN