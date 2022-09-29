// VALIDACIONES
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

// DAR VALORES A LAS ITERACIONES.
switch (key) // A) Cantidad total de alumnos de cada carrera.
{
    case "1":
        contador1++;
    break;
    case "2":
        contador2 ++;
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
    case "3":
        contador3 ++;
    break;
    }

//COMPARACIONES
if (contadorAlumnosProgramacion > contadorAlumnosDiseñoGrafico && contadorAlumnosProgramacion > contadorAlumnosPsicologia) {
    carreraConMasAlumnos = "programacion";
} else if (contadorAlumnosDiseñoGrafico > contadorAlumnosPsicologia) {
    carreraConMasAlumnos = "diseño grafico";
}
else {
    carreraConMasAlumnos = "psicologia";
}

// PROMEDIOS

if (estadoDeLaCarrera == "finalizado") {
    contadorAlumnosFinalizados++;
    acumuladorNotaFinalizados += nota;
}
promedioNotasFinalizados = acumuladorNotaFinalizados / contadorAlumnosFinalizados;


//c)la cantidad de paises de america que tienen menos de 0 grados .
if (continente == "america" && temperatura < 0) {
    contadorPaisesAmerica++;
}
