/*
Escobar Raúl Div. G
RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	let edadIngresada;
 	let sexoIngresado;
 	let estadoCivilIngresado;
	let sueldoIngresado;
	let legajoIngresado;
	let nacionalidadIngresada;
	let respuesta=true;

	
		edadIngresada=prompt("Ingrese su edad: ");
		edadIngresada=parseInt(edadIngresada);
		while(isNaN(edadIngresada) || edadIngresada < 17 || edadIngresada > 90)
		{
			edadIngresada=prompt("ERROR!! Reingrese su edad: ");
		}

		sexoIngresado=prompt("Ingrese su sexo: f/m");
		while(isNaN(sexoIngresado)==false || sexoIngresado!="m" && sexoIngresado!="f")
		{
			sexoIngresado=prompt("ERROR!! Reingrese su sexo: ");
		}

		estadoCivilIngresado=prompt("Ingrese su estado civil: soltero /casado/ divorciado/viudo").toLowerCase();
		while(isNaN(estadoCivilIngresado)==false || estadoCivilIngresado!="soltero"&& estadoCivilIngresado!="casado" && estadoCivilIngresado!="divorciado" && estadoCivilIngresado!="viudo")
		{
			estadoCivilIngresado=prompt("ERROR!! Reingrese estado civil: ").toLowerCase();
		}

		sueldoIngresado=prompt("Ingrese su Sueldo: ");
		sueldoIngresado=parseInt(sueldoIngresado);
		while(isNaN(sueldoIngresado) || sueldoIngresado < 8000 )
		{
			sueldoIngresado=prompt("ERROR!! Reingrese su sueldo: ");
		}

		legajoIngresado=prompt("Ingrese su numero de legajo: ");
		legajoIngresado=parseInt(legajoIngresado);
		while(isNaN(legajoIngresado) || legajoIngresado < 1000 || legajoIngresado > 9999)
		{
			legajoIngresado=prompt("ERROR!! Reingrese su numero de legajo: ");
		}

		nacionalidadIngresada=prompt("Ingrese su Nacionalidad: “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.").toUpperCase();
		while(isNaN(nacionalidadIngresada)==false || nacionalidadIngresada!="A" && nacionalidadIngresada!="E" && nacionalidadIngresada!="N")
		{
			nacionalidadIngresada=prompt("ERROR!! Reingrese su Nacionalidad: ").toUpperCase();
		}
		

		
	

	document.getElementById("txtIdEdad").value= edadIngresada;
	document.getElementById("txtIdSexo").value=	sexoIngresado;
	document.getElementById("txtIdEstadoCivil").value= estadoCivilIngresado;
	document.getElementById("txtIdSueldo").value= sueldoIngresado;
	document.getElementById("txtIdLegajo").value= legajoIngresado;
	document.getElementById("txtIdNacionalidad").value= nacionalidadIngresada;
}
