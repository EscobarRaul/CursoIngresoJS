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

/* EJ 1
Realizar el algoritmo que permita ingresar 5 paises:
del continente (validar entre america , asia , europa ,africa y oceania)
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

/*function mostrar()
{
    let i;
    let continente;
    let pais;
    let cantidadHabitantes;
    let temperatura;

    let cantidadTemperaturaPares=0;
    
    let flagPais=true;

    let acumuladorHabitantes=0;
    let acumuladorPaises=0;


    for(i=0; i<5 ; i++) 
    {
        do
        {
            continente = prompt("Ingrese el continente: ").toLowerCase();
        }while (continente != "america" && continente != "asia" && continente != "africa" && continente != "oceania") 
       
        pais = prompt("ingrese el pais : ");

        cantidadHabitantes = prompt("ingrese la cantidad de habitantes (entre 1 y 2000 millones): ");
        cantidadHabitantes = parseInt(cantidadHabitantes);
        while (isNaN(cantidadHabitantes) || cantidadHabitantes < 10 || cantidadHabitantes > 1000) {
          cantidadHabitantes = prompt("ERROR!! Reingrese la cantidad de habitantes (entre 1 y 2000 millones): ");
          cantidadHabitantes = parseInt(cantidadHabitantes);
        }
    
        temperatura = prompt("ingrese la temperatura : ");
        temperatura = parseInt(temperatura);
        while (isNaN(temperatura) || temperatura < -50 || temperatura >50) 
        {
          temperatura = prompt("ERROR!! Reingrese la temperatura : ");
          temperatura = parseInt(temperatura);
        }

        if(temperatura %2 == 0) // A) La cantidad de temperaturas pares.
		{
			cantidadTemperaturaPares ++ ;
		}

        if(temperatura<temperaturaMin)
        {
            temperaturaMin=temperatura;
            paisMasFrio=pais;
        }   

        switch(continente)
        {
            case "america":
            if(temperatura<0)
            {
                temperaturaBajoCeroAmerica ++ ;
            }
            break;
        }

        if(cantidadHabitantes<menosHabitantes || flag ==0)
        {
            paisPocaGente=pais
        }
  
    }// Fin While        
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
    let respuesta=true;
    let nombre;
    let carrera;
    let estadoDeLaCarrera;
    let genero;
    let nota;

    let acumuladorAlumnos=0;
    let contadorAlumnos=0;

    let contadorMujeres=0


    while(respuesta==true)
    {
        
        nombre = prompt("ingrese su nombre : ");

        do
        {
            carrera = prompt("Ingrese la carrera (Programación, Psicología, Diseño gráfico): ").toLowerCase();
        }while (carrera != "programacion" && carrera != "psicologia" && carrera != "diseño grafico");
        
        do
        {
            estadoDeLaCarrera = prompt("Ingrese el estado De La Carrera (en curso-abandono-finalizado): ").toLowerCase();
        }while (estadoDeLaCarrera != "en curso" && estadoDeLaCarrera != "abandonado" && estadoDeLaCarrera != "finalizado"); 
       
        do
        {
            genero = prompt("Ingrese el genero (femenino-masculino-nobinario): ").toLowerCase();
        }while (genero != "femenino" && genero != "masculino" && genero != "diseño nobinario"); 
        
        do
        {
            nota = prompt("ingrese la nota : ");
            nota = parseInt(nota);
        }while (isNaN(nota) || nota < 1 || nota > 11); 

        switch(carrera) // A) Cantidad total de alumnos de cada carrera.
        {
            case "programacion":
                acumuladorAlumnos=acumuladorAlumnos +nombre;
                contadorAlumnos ++ ;
            break;
            case "psicologia":
                acumuladorAlumnos=acumuladorAlumnos +nombre;
                contadorAlumnos ++;
            break;
            case "diseño grafico":
                acumuladorAlumnos=acumuladorAlumnos +nombre;
                contadorAlumnos ++;
            break;
        }

        
        if (sexo == "femenino" && carrera == "programacion") 
        {
            contadorMujeres ++ ;
        
        }    


        respuesta=confirm("Desea Continuar?");
    }//fin while

}*/


/* 
EJ 3
pedir el ingreso de 10 mascotas
validar tipo ( gato , perro y otros)solo esos tres tipos
raza , si es perro (pastor, toy, callejero) y si es gato (siamés, turco, mestizo)
y si es de tipo "otros"  , pedir solo un texto.
edad entre 1 y 20 para gatos y perros , para "otros" entre 1 y 100
nombre ( no se permite solo numero)
mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo
mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza*/

function mostrar()
{
    let i=0;
    let tipo;
    let razaPerro;
    let razaGato;
    let otros;
    let edad;
    let nombre;



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

        }while(isNaN(nombre)==false)




    }
}
