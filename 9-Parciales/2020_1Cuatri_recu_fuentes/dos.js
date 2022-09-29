/*
2. En una partida de todos contra todos de CS-GO (Juego de disparos) un grupo de 5 amigos quiere saber las estadísticas al finalizar la partida.
Para esto se requieren los siguientes datos:
Nombre del jugador.
Edad del jugador - Mayor de edad.
Bajas (Cantidad de veces que mató) - Número positivo inclusive 0.
Muertes (Cantidad de veces que murió) - Número positivo inclusive 0.
INFORMAR
Nombre del jugador más joven.
El promedio de bajas.
Cantidad de jugadores que tienen entre 20 y 30 años cuyas bajas están entre 10 y 15.
*/
/*function mostrar() {
  let i = 0;
  let nombre;
  let edad;
  let bajas;
  let muertes;

  let flag=true;
  let nombreJugadorMasJoven;
  let edadJudagorMasJoven;

  let contadorJugadores=0;
  let acumuladorBajas=0;
  let promedioBajas;

  let contadorJugadores2030=0;


  for (i = 0; i < 5; i++) 
  {
    nombre = prompt("ingrese su nombre : ");

    do {
      edad = prompt("ingrese la edad : ");
      edad = parseInt(edad);
    } while (isNaN(edad) || edad < 18);

    do {
      bajas = prompt("ingrese la bajas : ");
      bajas = parseInt(bajas);
    } while (isNaN(bajas) || bajas < 0 );

    do {
      muertes = prompt("ingrese la muertes : ");
      muertes = parseInt(muertes);
    } while (isNaN(muertes) || muertes < 0 );

    if(flag==true)
    {
      nombreJugadorMasJoven=nombre;
      edadJudagorMasJoven=edad;
      flag=false;
    }else if(edadJudagorMasJoven>edad)
    {
      nombreJugadorMasJoven=nombre;
      edadJudagorMasJoven=edad;
    }

    //El promedio de bajas.
    contadorJugadores++;
    acumuladorBajas+=bajas;
    
    // Cantidad de jugadores que tienen entre 20 y 30 años cuyas bajas están entre 10 y 15.
    if(edad >= 20 && edad <=30 &&(bajas >=10 && bajas <=15))
    {
      contadorJugadores2030 ++;
    }  

  }//FIN FOR
  
  promedioBajas=acumuladorBajas/contadorJugadores;
  
  document.write("Nombre del jugador más joven es: "+ nombreJugadorMasJoven+"<br>");
  document.write("El promedio de bajas es: "+ promedioBajas+"<br>");
  document.write("La cantidad de jugadores que tienen entre 20 y 30 años cuyas bajas están entre 10 y 15 son : "+ contadorJugadores2030+"<br>");

}*/

/*
De 5 personas que ingrensan al hospital se deben tomar y validar los siguientes datos:
-apellido 
-Obra Social: Validar ("osde", "galeno", "otra").
-Sintomas: Validar ("alergia", "dolor corporal", "nauseas", "otro")
-dias con sintomas: validar que no sea 0 o negativo
A) Cantidad de personas que presentaron dolor corporal o nauseas.
B) Cuantas personas con galeno presentaron alergia durante mas de 2 dias.
C) Apellido de la persona que tuvo mayor cantidad de dias con sintomas.
*/
function mostrar() {
  let i = 0;
  let apellido;
  let obraSocial;
  let sintomas;
  let diasConSintomas;
  //A)
  let contadorDolorCorporal = 0;
  let contadorNauseas = 0;
  //B)
  let contadorAlergiaGaleno = 0;
  //C)
  let flagDiasSintomas = true;
  let apellidoMasDiasSintomas;
  let cantidadDiasConSintomas;

  for (i = 0; i < 5; i++) 
  {
    apellido = prompt("Ingrese su apellido:");

    do {
      obraSocial = prompt("Ingrese la obraSocial (Osde, Galeno, otra): ").toLowerCase();
    } while (obraSocial != "osde" && obraSocial != "galeno" && obraSocial != "otra");

    do {
      sintomas = prompt("Ingrese los sintomas:(alergia, dolor corporal, nauseas, otro)")
    } while (sintomas != "alergia" && sintomas != "dolor corporal" && sintomas != "nauseas" && sintomas != "otro");

    do {
      diasConSintomas = prompt("ingrese los dias Con Sintomas : ");
      diasConSintomas = parseInt(diasConSintomas);
    } while (isNaN(diasConSintomas) || diasConSintomas < 0);


    switch (sintomas) // A) Cantidad de personas que presentaron dolor corporal o nauseas.
    {
      case "dolor corporal":
        contadorDolorCorporal++;
        break;
      case "nauseas":
        contadorNauseas++;
        break;
      case "alergia":
        if (obraSocial == "galeno") {
          contadorAlergiaGaleno++;
        }
    }

    //C) Apellido de la persona que tuvo mayor cantidad de dias con sintomas.
    if (flagDiasSintomas == true)
    {
      apellidoMasDiasSintomas = apellido;
      cantidadDiasConSintomas = diasConSintomas;
      flagDiasSintomas = false;

    } else if (cantidadDiasConSintomas < diasConSintomas) 
    {
      apellidoMasDiasSintomas = apellido;
      cantidadDiasConSintomas = diasConSintomas;
    }
    
  }//FIN FOR
  
  
  document.write("A) La Cantidad de personas que presentaron dolor corporal son: " + contadorDolorCorporal + " o nauseas son: " + contadorNauseas + "<br>");
  document.write("B) Cuantas personas con galeno presentaron alergia durante mas de 2 dias: " + contadorAlergiaGaleno + "<br>");
  document.write("C) Apellido de la persona que tuvo mayor cantidad de dias con sintomas es:" + apellidoMasDiasSintomas+"<br>");
  
}