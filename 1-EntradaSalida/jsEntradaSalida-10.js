/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let sueldo;
	let resultado; // resultado
	let descuento;

	//descuento= 25;

	descuento=prompt("Ingresar Porcentaje");
	descuento=parseInt(descuento);

	sueldo=document.getElementById("txtIdImporte").value;
	sueldo=parseInt(sueldo);

	descuento=sueldo* 25/100;
	//resultado = sueldo - (sueldo*descuento/100);
	resultado=sueldo-descuento;

	document.getElementById("txtIdResultado").value=resultado;


}
