/*
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.

function mostrar()
{
	
}*/

//SIMULACRO DE PARCIAL!!!!!!

/* EJ 1
Realizar el algoritmo que permita ingresar 5 paises:
del continente (validar entre america , asia , europa )
el nombre del país,
cantidad de habitantes en millones entre 1 y 2000 (validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50)
Se debe Informar al usuario lo siguiente:
a)La cantidad de temperaturas pares.
b)El nombre del pais con menos habitantes
c)la cantidad de paises de america que tienen menos de 0 grados .
d)el promedio de habitantes entre los paises ingresados .
e) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
*/

/*function mostrar() {
    let i;
    let continente;
    let pais;
    let cantidadHabitantes;
    let temperatura;
    //A)
    let cantidadTemperaturaPares = 0;
    //B)
    let flagPais = true;
    let paisConMenosHabitantes;
    //C)
    let contadorPaisesAmerica = 0;
    //D)
    let contadorPaises = 0;
    let acumuladorHabitantes = 0;
    let promedioHabitantes;
    //E)
    let temperaturaMinima;
    let paisTemperaturaMin;


    for (i = 0; i < 5; i++) {
        do {
            continente = prompt("Ingrese el continente: ").toLowerCase();
        } while (continente != "america" && continente != "asia" && continente != "africa" && continente != "oceania")

        pais = prompt("ingrese el pais : ");

        cantidadHabitantes = prompt("ingrese la cantidad de habitantes (entre 1 y 2000 millones): ");
        cantidadHabitantes = parseInt(cantidadHabitantes);
        while (isNaN(cantidadHabitantes) || cantidadHabitantes < 10 || cantidadHabitantes > 1000) {
            cantidadHabitantes = prompt("ERROR!! Reingrese la cantidad de habitantes (entre 1 y 2000 millones): ");
            cantidadHabitantes = parseInt(cantidadHabitantes);
        }

        temperatura = prompt("ingrese la temperatura : ");
        temperatura = parseInt(temperatura);
        while (isNaN(temperatura) || temperatura < -50 || temperatura > 50) {
            temperatura = prompt("ERROR!! Reingrese la temperatura : ");
            temperatura = parseInt(temperatura);
        }

        if (temperatura % 2 == 0) // A) La cantidad de temperaturas pares.
        {
            cantidadTemperaturaPares++;
        }

        // b)El nombre del pais con menos habitantes
        if (flagPais == true) {
            temperaturaMinima = temperatura;
            paisTemperaturaMin = pais;
            paisConMenosHabitantes = cantidadHabitantes;
            nombrePaisMenosHabitantes = pais;

            flagPais = false;

        } else if (paisConMenosHabitantes < cantidadHabitantes) {
            paisConMenosHabitantes = cantidadHabitantes;
            nombrePaisMenosHabitantes = pais;
        }

        if (temperaturaMinima > temperatura) //e) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
        {
            temperaturaMinima = temperatura;
            paisTemperaturaMin = pais;
        }

        //c)la cantidad de paises de america que tienen menos de 0 grados .
        if (continente == "america" && temperatura < 0) {
            contadorPaisesAmerica++;
        }

        //d)el promedio de habitantes entre los paises ingresados 

        contadorPaises++;
        acumuladorHabitantes += cantidadHabitantes;

    }// Fin While        


    promedioHabitantes = acumuladorHabitantes / contadorPaises;

    document.write("el promedio de habitantes entre los paises ingresados : " + promedioHabitantes + "<br>");
    document.write("La cantidad de temperaturas pares es: " + cantidadTemperaturaPares);
    document.write("El nombre del pais con menos habitantes es: " + nombrePaisMenosHabitantes + "<br>");
    document.write("la temperatura mínima ingresada es: " + temperaturaMinima + " y nombre del pais que registro esa temperatura es: " + paisTemperaturaMin + "<br>");
    document.write("la cantidad de paises de america que tienen menos de 0 grados es: " + contadorPaisesAmerica + "<br>");
}*/

/* EJ. 2
El alumno deberá ingresar:
Nombre del alumno
Carrera (Programación, Psicología, Diseño gráfico)
Estado de la carrera: en curso-abandono-finalizado
genero (femenino-masculino-nobinario)
Nota (entre 1 y 10)
Se desconoce la cantidad de alumnos que se ingresaran.
Informar:
A. Cantidad total de alumnos de cada carrera.
B. Cantidad total de mujeres que cursan la carrera de programación
C. Cantidad de alumnos no binarios.
D. Promedio de notas de los alumnos finalizantes.
E. Nombre  del mejor alumno no binario en la carrera de psicología.
F. ¿Cuál es la carrera que tiene más alumnos?*/
/*function mostrar()
{
    let respuesta = true;
    let nombre;
    let carrera;
    let estadoDeLaCarrera;
    let genero;
    let nota;
    //A)
    let contadorAlumnosProgramacion = 0;
    let contadorAlumnosPsicologia = 0;
    let contadorAlumnosDiseñoGrafico = 0;
    //B)
    let contadorMujeres = 0
    //C)
    let contadorNoBinario = 0;
    //D)
    let contadorAlumnosFinalizados = 0;
    let acumuladorNotaFinalizados = 0;
    let promedioNotasFinalizados;
    //E)
    let flagMejorAlumno = true;
    let mejorAlumnoNoBinario;


    while (respuesta == true) {

        nombre = prompt("ingrese su nombre : ");

        do {
            carrera = prompt("Ingrese la carrera (Programación, Psicología, Diseño gráfico): ").toLowerCase();
        } while (carrera != "programacion" && carrera != "psicologia" && carrera != "diseño grafico");

        do {
            estadoDeLaCarrera = prompt("Ingrese el estado De La Carrera (en curso-abandono-finalizado): ").toLowerCase();
        } while (estadoDeLaCarrera != "en curso" && estadoDeLaCarrera != "abandonado" && estadoDeLaCarrera != "finalizado");

        do {
            genero = prompt("Ingrese el genero (femenino-masculino-nobinario): ").toLowerCase();
        } while (genero != "femenino" && genero != "masculino" && genero != "nobinario");

        do {
            nota = prompt("ingrese la nota : ");
            nota = parseInt(nota);
        } while (isNaN(nota) || nota < 1 || nota > 11);

        switch (carrera) // A) Cantidad total de alumnos de cada carrera.
        {
            case "programacion":
                contadorAlumnosProgramacion++;
                if (genero == "femenino") 
                {
                    contadorMujeres++;
                }
            break;
            case "psicologia":
                contadorAlumnosPsicologia++;
                if (genero == "nobinario") 
                {
                    if (flagMejorAlumno == true) //E. Nombre  del mejor alumno no binario en la carrera de psicología.
                    {
                        mejorAlumnoNoBinario = nombre;
                        notaMasAltaNoBinario = nota;
                        flagMejorAlumno = false;

                    } else if (notaMasAltaNoBinario < nota) {
                        mejorAlumnoNoBinario = nombre;
                        notaMasAltaNoBinario = nota;
                    }
                }
            break;
            case "diseño grafico":
                contadorAlumnosDiseñoGrafico++;
            break;
        }

        //C. Cantidad de alumnos no binarios.
        if (genero == "nobinario") {
            contadorNoBinario++;
        }

        
        //D. Promedio de notas de los alumnos finalizantes.
        
        if (estadoDeLaCarrera == "finalizado") {
            contadorAlumnosFinalizados++;
            acumuladorNotaFinalizados += nota;
        }
        
        respuesta = confirm("Desea Continuar?");
        
    }//fin while
    
    //F. ¿Cuál es la carrera que tiene más alumnos?
    if (contadorAlumnosProgramacion > contadorAlumnosDiseñoGrafico && contadorAlumnosProgramacion > contadorAlumnosPsicologia) {
        carreraConMasAlumnos = "programacion";
    } else if (contadorAlumnosDiseñoGrafico > contadorAlumnosPsicologia) {
        carreraConMasAlumnos = "diseño grafico";
    }
    else {
        carreraConMasAlumnos = "psicologia";
    }
    
    promedioNotasFinalizados = acumuladorNotaFinalizados / contadorAlumnosFinalizados;
    
    document.write("Cantidad de alumnos en Programacion: " + contadorAlumnosProgramacion + "<br>");
    document.write("Cantidad de alumnos en Psicologia: " + contadorAlumnosPsicologia + "<br>");
    document.write("La cantidad de alumnos no binarios es: " + contadorNoBinario + "<br>");
    document.write("Cantidad de alumnos en Diseño Grafico: " + contadorAlumnosDiseñoGrafico + "<br>");
    document.write("Cantidad de mujeres en Programación es: " + contadorMujeres + "<br>");//B. Cantidad total de mujeres que cursan la carrera de programación
    document.write("Nombre  del mejor alumno no binario en la carrera de psicología es :" + mejorAlumnoNoBinario + "<br>");
    document.write("El promedio de notas de los alumnos finalizantes es:" + promedioNotasFinalizados + "<br>");
    document.write("La carrera con mas alumnos es:" + carreraConMasAlumnos + "<br>");
}*/


/* 
EJ 3
pedir el ingreso de 10 mascotas
validar tipo ( gato , perro y otros)solo esos tres tipos
raza , si es perro (pastor, toy, callejero) y si es gato (siamés, turco, mestizo)
y si es de tipo "otros"  , pedir solo un texto.
edad entre 1 y 20 para gatos y perros , para "otros" entre 1 y 100
nombre ( no se permite solo numero)
A) mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo
B) mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza*/

function mostrar()
{
    let i=0;
    let tipo;
    let razaPerro;
    let razaGato;
    let otros;
    let edad;
    let nombre;
    //variables A)
    let flagGatoMasViejo=true;
    let gatoMasViejo;
    let edadGatoMasViejo;
    let flagPerroMasViejo=true;
    let perroMasViejo;
    let edadPerroMasViejo;
    let flagOtroMasViejo=true;
    let otroMasViejo;
    let edadOtroMasViejo;

    let acumuladorMestizo=0;
    let acumuladorSiames=0;
    let acumuladorTurco=0;
    let contadorMestizo=0;
    let contadorSiames=0;
    let contadorTurco=0;

    let promedioEdad;



    for(i=0 ; i < 10 ; i ++)
    {
        do
        {
            tipo=prompt("Ingrese el tipo");

        }while(tipo != "gato" && tipo != "perro" && tipo != "otros" );

        if(tipo=="perro")
        {
            do
            {
                razaPerro=prompt("Ingrese la raza:");

            }while(razaPerro != "pastor" && razaPerro != "toy" && razaPerro != "callejero" );
        }
        else
        {
            if(tipo=="gato")
            {
                do
                {
                    razaGato=prompt("Ingrese la raza:");

                }while(razaGato != "siames" && razaGato != "turco" && razaGato != "mestizo" );
            }
            else
            {
                otros=prompt("Ingrese la raza:");
            }

        }   
        
        if(tipo == "gato" || tipo== "perro")
        {
            do
            {
                edad=prompt("Ingrese la edad: ");
                edad=parseInt(edad);
                
            }while(edad <1 || edad >20);
        }
        else
        {
            do
            {
                edad=prompt("Ingrese la edad: ");
                edad=parseInt(edad);
                
            }while(edad <1 || edad >100);
        }
        
        do
        {
            nombre=prompt("Ingrese el Nombre: ");

        }while(isNaN(nombre)==false);

        // A) mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo
        if(flagPerroMasViejo == true && tipo == "perro")
        {
            edadPerroMasViejo = edad;
            perroMasViejo=nombre;
            flagPerroMasViejo=false;
        }
        else
        {
            if(tipo == "perro" && edadPerroMasViejo < edad)
            {
                edadPerroMasViejo = edad;
                perroMasViejo=nombre 
            }
        }
        
        if(flagGatoMasViejo == true && tipo == "gato") // se hacen banderas por cada tipo.
        {
            edadGatoMasViejo = edad;
            gatoMasViejo=nombre;
            flagGatoMasViejo=false;
        }
        else
        {
            if(tipo == "gato" && edadGatoMasViejo < edad)
            {
                edadGatoMasViejo = edad;
                gatoMasViejo=nombre 
            }
        }

        if(flagOtroMasViejo == true && tipo == "otro")
        {
            edadOtroMasViejo = edad;
            otroMasViejo=nombre;
            flagOtroMasViejo=false;
        }
        else
        {
            if(tipo == "otro" && edadOtroMasViejo < edad)
            {
                edadOtroMasViejo = edad;
                otroMasViejo=nombre 
            }
        }

        // B) mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza
        switch(razaGato)
        {
            case "mestizo":
                contadorMestizo ++;
                acumuladorMestizo+=edad;
            break;
            case "siames":
                contadorSiames ++ ;
                acumuladorSiames+=edad;
            break;
            case "turco":
                contadorTurco ++ ;
                acumuladorTurco+=edad;
            break;
        }


    }//FIN FOR

    if(contadorMestizo > contadorSiames && contadorMestizo > contadorTurco)
    {
        promedioEdad=acumuladorMestizo/contadorMestizo;
        razaConMasAnimales="mestizo";
    }
    else if (contadorSiames > contadorTurco)
    {
        promedioEdad=acumuladorSiames/contadorSiames;
        razaConMasAnimales="siames";
    }
    else
    {
        promedioEdad=acumuladorTurco/contadorTurco;
        razaConMasAnimales="turco";
    }
    
    document.write("Perro mas viejo: "+perroMasViejo+"<br>Gato mas viejo: "+gatoMasViejo+"<br>Otro mas viejo: "+otroMasViejo);
    document.write("La raza de gatos con mas animales es: "+ razaConMasAnimales+" y su promedio de edad es: "+ promedioEdad);



}
