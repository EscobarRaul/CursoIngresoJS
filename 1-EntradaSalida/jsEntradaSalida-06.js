/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	
	//ingreso de variables.
	let numeroUno;
	let numeroDos;
	let resultado;
	let mensaje;

	numeroUno=document.getElementById("txtIdNumeroUno").value;
	numeroUno=parseInt(numeroUno); // "parseInt" se utiliza para convertirlo en numero entero.
	numeroDos=document.getElementById("txtIdNumeroDos").value;
	numeroDos=parseInt(numeroDos);
	
	resultado=numeroUno+numeroDos;

	mensaje="la suma es "+ resultado;
	
	alert(mensaje);
	//alert(numeroUno+numeroDos);
	

	/*
	//CLASE DE REPASO: SABADO 9/7 EJERCICIO

	let dolarOficial;
	let dolarBlue;
	let porcentaje;
	let mensaje;


	dolarOficial=document.getElementById("txtIdNumeroUno").value;
	dolarOficial=parseInt(dolarOficial)

	dolarBlue=document.getElementById("txtIdNumeroDos").value;
	dolarBlue=parseInt(dolarBlue);

	//mal
	porcentaje=((dolarBlue-dolarOficial)*100)/100;

	mensaje="La diferencia entre el dolar Oficial y el Blue es de "+ porcentaje+ " %";

	alert(mensaje);
	*/
}

