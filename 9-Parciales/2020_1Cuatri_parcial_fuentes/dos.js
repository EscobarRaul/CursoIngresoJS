/* Ejemplo dado en clase, NO ES EL ORIGINAL DEL PARCIAL 2020
Realizar el algoritmo que permita ingresar los datos de una compra de ingredientes para preparar comida al por mayor , 
hasta que el cliente quiera:
peso (entre 10 y 1000)en kilo,
precio por kilo (más de cero ),
tipo validad("v";"a";"m")(vegetal,animal o mezcla )
Si compro más de 100 kilos en total tenes 15% de descuento sobre el total a pagar. --> por fuera del while.
Si compro más de 300 kilos en total tenes 25% de descuento sobre el total a pagar. --> por fuera del while.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo de alimento más caro.
f) El promedio de precio por kilo en total.*/

function mostrar()
{
  let peso;
  let precioPorKilo;
  let tipoProducto;
  let respuesta=true;

  let descuento;
  let precioDescuento;
  let precioBruto;
  let acumuladorKilos=0;
  let acumuladorPrecio=0;
  let promedio;


  while(respuesta==true)
  {
    peso= prompt("ingrese el peso (entre 10 y 1000): ");
    peso= parseInt(peso);
    while(isNaN(peso)||peso < 10 || peso >1000)
    {
      peso=prompt("ERROR!! Reingrese el peso (entre 10 y 1000): ");
      peso= parseInt(peso);
    }

    precioPorKilo= prompt("ingrese el precio : ");
    precioPorKilo= parseInt(precioPorKilo);
    while(isNaN(precioPorKilo)||precioPorKilo < 0)
    {
      precioPorKilo=prompt("ERROR!! Reingrese el precio : ");
      precioPorKilo= parseInt(precioPorKilo);
    }

    tipoProducto=prompt("Ingrese el producto: ").toLowerCase();
    while(tipoProducto !="vegetal" && tipoProducto != "animal" && tipoProducto!="mezcla")
    {
      tipoProducto=prompt("ERROR!! Reingrese el producto: ").toLowerCase();
    }

    
    precioBruto= precioPorKilo * peso;
    acumuladorKilos+=peso;
    acumuladorPrecio+=precioBruto; // A)

    respuesta=confirm("Desea continuar?");

  } // FIN WHILE


  if(acumuladorKilos > 300) // B)
  {
    descuento=acumuladorKilos*25/100;
    precioDescuento=acumuladorKilos-descuento;
  }
  else
  {
    if(acumuladorKilos >100 && acumuladorKilos <300)
    {
      descuento=acumuladorKilos*15/100;
      precioDescuento=acumuladorKilos-descuento;
    }
    else
    {
      precioDescuento=acumuladorKilos;
    }
  }
  
  promedio=
  
  alert("El descuento es: "+precioDescuento);
  /*
  a) El importe total a pagar , bruto sin descuento y...
  b) el importe total a pagar con descuento(solo si corresponde)
  d) Informar el tipo de alimento más caro.
  f) El promedio de precio por kilo en total.*/

}

/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro

function mostrar()
{



}*/