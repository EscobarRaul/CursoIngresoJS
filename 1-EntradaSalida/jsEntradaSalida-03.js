/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombreIngresado;
	nombreIngresado=document.getElementById("txtIdNombre").value; //document es el imput
	alert("Su nombre es: "+nombreIngresado); // necesitamos colocar el + para concatenar el "nombre"

}


