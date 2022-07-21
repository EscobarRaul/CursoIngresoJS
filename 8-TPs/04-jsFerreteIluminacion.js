/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
/*
//SOLO IF 
function CalcularPrecio() 
{
    let cantidadLamparas;
    let precioLamparas;
    let descuento;
    let marca;
    let precioDescuento;
    let ingresoBruto;
    let mensaje;
    
    
    // precioLamparas = 35 ;
    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    cantidadLamparas = parseInt(cantidadLamparas);
    marca = document.getElementById("Marca").value;
    
    precioLamparas = cantidadLamparas * 35; // precioLamparas = cantidadLamparas * precioLamparas;
    // let descuento= 1 ;

    if (cantidadLamparas >= 6) // A)
    {
        descuento = precioLamparas * 50 / 100;
        precioDescuento = precioLamparas - descuento;
        // descuento= 0.50
        
    } else
    {
        if (cantidadLamparas == 5) // B)
        {
            if (marca == "ArgentinaLuz")
            {
                descuento = precioLamparas * 40 / 100;
                precioDescuento = precioLamparas - descuento; 
                  
            }else
            {
                descuento = precioLamparas * 30 / 100;
                precioDescuento = precioLamparas - descuento;

            }

        }
        else
        {
            if(cantidadLamparas == 4) // C)
            {
                if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
                {
                    descuento = precioLamparas * 25 / 100;
                    precioDescuento = precioLamparas - descuento; 
                }
                else
                {
                    descuento = precioLamparas * 20 / 100;
                    precioDescuento = precioLamparas - descuento;   
                }
            }
            else
            {
                if(cantidadLamparas == 3 ) // D)
                {
                    if(marca == "ArgentinaLuz")
                    {
                        descuento = precioLamparas * 15 / 100;
                        precioDescuento = precioLamparas - descuento;    
                    }
                    else 
                    {
                        if(marca == "FelipeLamparas")
                        {
                            descuento = precioLamparas * 10 / 100;
                            precioDescuento = precioLamparas - descuento;
                        }
                        else
                        {   
                            descuento = precioLamparas * 5 / 100;
                            precioDescuento = precioLamparas - descuento;

                        }
                    }
                }
            }
        }
        
    } 

    //  precioDescuento=precioLampara * descuento;
    
    document.getElementById("txtIdprecioDescuento").value = precioDescuento;
    
    if(precioDescuento >= 120) //E)
    {
        ingresoBruto=precioLamparas * 0.10; //la otra forma es calcularlo sobre el precioDescuento.
        precioDescuento= precioDescuento+ ingresoBruto;

       mensaje=("Usted pago $" + precioDescuento + " donde: $" + ingresoBruto + " de ingresos brutos");

       alert(mensaje);
    }
    
    
}*/
/*
// SOLO SWITCH
function CalcularPrecio() 
{
    let cantidadLamparas;
    let precioLamparas;
    let descuento;
    let marca;
    let precioDescuento;
    let ingresoBruto;
    let mensaje;

    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    cantidadLamparas = parseInt(cantidadLamparas);
    marca = document.getElementById("Marca").value;

    precioLamparas = cantidadLamparas * 35;

    switch(cantidadLamparas)
    {
        case 1:
        case 2:
            switch(marca)
            {
                default:
                    precioDescuento= precioLamparas;
                break;
            }
        break;
        case 3 :
            switch(marca)
            {
                case "ArgentinaLuz":
                    descuento = precioLamparas * 15 / 100;
                    precioDescuento = precioLamparas - descuento;
                break;
                case "FelipeLamparas":
                    descuento = precioLamparas * 10 / 100;
                    precioDescuento = precioLamparas - descuento;
                break;
                default:
                    descuento = precioLamparas * 5 / 100;
                    precioDescuento = precioLamparas - descuento;
                break;
            }
        break;
        case 4 :
            switch(marca)
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    descuento = precioLamparas * 25 / 100;
                    precioDescuento = precioLamparas - descuento; 
                break;
                default:
                    descuento = precioLamparas * 20 / 100;
                    precioDescuento = precioLamparas - descuento;
                break;
            }
        break;
        case 5 :
            switch(marca)
            {
                case "ArgentinaLuz":
                    descuento = precioLamparas * 40 / 100;
                    precioDescuento = precioLamparas - descuento;
                break;
                default:
                    descuento = precioLamparas * 30 / 100;
                    precioDescuento = precioLamparas - descuento;
                break;
            }
        break;

        default:
            switch(marca)
            {
                default:
                    descuento = precioLamparas * 50 / 100;
                    precioDescuento = precioLamparas - descuento;
                break;
            }
        break;
    }   

    document.getElementById("txtIdprecioDescuento").value = precioDescuento;

    if(precioDescuento >= 120) //E)
    {
        ingresoBruto=precioDescuento * 0.10; //la otra forma es calcularlo sobre el precioDescuento.
        precioDescuento= precioDescuento+ ingresoBruto;

       mensaje=("Usted pago $" + precioDescuento + " donde: $" + ingresoBruto + " de ingresos brutos");

       alert(mensaje);
    }
}*/

// lamparas SWITCH y marca IF
function CalcularPrecio() 
{
    let cantidadLamparas;
    let precioLamparas;
    let descuento;
    let marca;
    let precioDescuento;
    let ingresoBruto;
    let mensaje;

    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    cantidadLamparas = parseInt(cantidadLamparas);
    marca = document.getElementById("Marca").value;

    precioLamparas = cantidadLamparas * 35;

    switch(cantidadLamparas)
    {
        case 1:
        case 2:
            if(marca=="ArgentinaLuz"||marca=="FelipeLamparas"||marca=="JeLuz"||marca=="HazIluminacion"||marca=="Osram")
            {
                precioDescuento=precioLamparas;
            }
        break;
        case 3:
            if(marca == "ArgentinaLuz")
            {
                descuento = precioLamparas * 15 / 100;
                precioDescuento = precioLamparas - descuento;  
            }
            else if (marca == "FelipeLamparas")
            {
                descuento = precioLamparas * 10 / 100;
                precioDescuento = precioLamparas - descuento;
            }
            else
            {
                descuento = precioLamparas * 5 / 100;
                precioDescuento = precioLamparas - descuento;
            }
        break;
        case 4:
            if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
            {
                descuento = precioLamparas * 25 / 100;
                precioDescuento = precioLamparas - descuento; 
            }
            else
            {
                descuento = precioLamparas * 20 / 100;
                precioDescuento = precioLamparas - descuento;
            }
        break;
        case 5:
            if (marca == "ArgentinaLuz")
            {
                descuento = precioLamparas * 40 / 100;
                precioDescuento = precioLamparas - descuento; 
                  
            }else
            {
                descuento = precioLamparas * 30 / 100;
                precioDescuento = precioLamparas - descuento;
            }
        break;
        default:
            descuento = precioLamparas * 50 / 100;
            precioDescuento = precioLamparas - descuento;
        break;

    }

    document.getElementById("txtIdprecioDescuento").value = precioDescuento;

    if(precioDescuento >= 120) //E)
    {
        ingresoBruto=precioDescuento * 0.10; //la otra forma es calcularlo sobre el precioDescuento.
        precioDescuento= precioDescuento+ ingresoBruto;

        mensaje=("Usted pago $" + precioDescuento + " donde: $" + ingresoBruto + " de ingresos brutos");

        alert(mensaje);
    }
}
