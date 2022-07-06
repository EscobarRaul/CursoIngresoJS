/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numeroUno;
	let numeroDos;
	

	numeroUno=document.getElementById("txtIdNumeroUno").value;
	numeroUno=parseInt(numeroUno); // "parseInt" se utiliza para convertirlo en numero entero.
	numeroDos=document.getElementById("txtIdNumeroDos").value;
	numeroDos=parseInt(numeroDos);
	
	

	alert(numeroUno+numeroDos);
}

