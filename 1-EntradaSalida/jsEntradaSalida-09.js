/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let resultado;// resultado
	let aumento; 

	//aumento = 10;

	aumento=prompt("ingresar porcentaje");
	aumento=parseInt(aumento);

	sueldo=document.getElementById("txtIdSueldo").value;
	sueldo=parseInt(sueldo);
	
	aumento=sueldo * 10/100;
	//resultado = sueldo + (sueldo*aumento/100);
	resultado=sueldo + aumento;

	document.getElementById("txtIdResultado").value=resultado;
	

}
