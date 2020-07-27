/*
LOPEZ BARRIENTOS GONZALO
4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo PRECIO de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
let cantidad;
let marca;
let precio = 35;
let totalsindescuento;
let total;
let totalconiibb;
let descuento;

marca = document.getElementById("Marca").value;
cantidad = parseInt(document.getElementById("txtIdCantidad").value);



switch (cantidad){
    case 1:
    case 2:
        descuento = 0;
        break;
    case 3:
        if (marca == "ArgentinaLuz"){
            descuento = 0.15;
        }
        else if (marca == "FelipeLamparas"){
            descuento = 0.10;
        }
        else{
            descuento = 0.05;

        }
        break;
    case 4:
        if (marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
            descuento = 0.25;
        }
        else if (marca != "ArgentinaLuz" && marca != "FelipeLamparas"){
            descuento = 0.20;
        }
        break;
    case 5:
        if (marca = "ArgentinaLuz"){
            descuento = 0.40;
        }
        else{
            descuento = 0.30;
        }
        break;
    default:
        descuento = 0.50;
        break;
}
precio = precio - precio * descuento;

document.getElementById("txtIdprecioDescuento").value = precio;

total = cantidad * precio;
if (total > 120){
    iibb = total * 0.10;
    total = total + iibb;
    alert (`El total de la compra es ${total} y usted pago ${iibb} de iibb`);
}
else{
    alert (`El total de la compra es ${total}`);
}


}


        




/*
{
    let marca;
    let cantidad;
    let totalconIIBB;
    let totalIIBB;
    let PRECIO = 35;
    let IIBB = 0.10;
    let descuentoA = 0.50;
    let descuentoBotras = 0.30;
    let descuentoBArgLuz = 0.40;
    let descuentoCArgFel = 0.25;
    let descuentoCOtras = 0.20;
    let descuentoDArgLuz = 0.15;
    let descuentoDFL = 0.10;
    let descuentoDotras = 0.05;
    let totalsindescuento;
  //  let totalcondescuentoA;
  //  let totalcondescuentoBArgLuz;
  //  let totalcondescuentoBotras;
  //  let totalcondescuentoCArgFel;
  //  let totalcondescuentoCOtras;
  //  let totalcondescuentoDArgLuz;
  //  let totalcondescuentoDFL;
  //  let totalcondescuentoDotras;
    let totalcondescuento;
    let descuento;
  

    marca = document.getElementById("Marca").value;
    cantidad = parseInt(document.getElementById("txtIdCantidad").value);

    totalsindescuento = cantidad * PRECIO;
    if (cantidad >=6){
        descuento = descuentoA;
        totalcondescuento = totalsindescuento - (totalsindescuento * descuento);
        if (totalcondescuento > 120){
            totalIIBB = totalcondescuento * IIBB;
            totalconIIBB = totalcondescuento + totalIIBB;
            document.getElementById("txtIdprecioDescuento").value = totalconIIBB;
            alert (`IIBB: Usted pagó ${totalIIBB}`);

        }
        else{
            document.getElementById("txtIdprecioDescuento").value = totalcondescuento; 
        }

    }
    else if (cantidad == 5 && marca == "ArgentinaLuz"){
        descuento = descuentoBArgLuz
        totalcondescuento = totalsindescuento - (totalsindescuento * descuento);
        document.getElementById("txtIdprecioDescuento").value = totalcondescuento;
    }
    else if (cantidad == 5 && marca != "ArgentinaLuz"){
        descuento = descuentoBotras;
        totalcondescuento = totalsindescuento - (totalsindescuento * descuento);
        document.getElementById("txtIdprecioDescuento").value = totalcondescuento;
    }
    else if (cantidad == 4 && (marca == "ArgentinaLuz" || marca == "FelipeLamparas")){
        descuento = descuentoCArgFel;
        totalcondescuento = totalsindescuento - (totalsindescuento * descuento);
        document.getElementById("txtIdprecioDescuento").value = totalcondescuento;
    }
    else if (cantidad == 4 && !(marca == "ArgentinaLuz" || marca == "FelipeLamparas")){
        descuento = descuentoCOtras;
        totalcondescuento = totalsindescuento - (totalsindescuento * descuento);
        document.getElementById("txtIdprecioDescuento").value = totalcondescuento;

    }
    else if (cantidad == 3 && marca == "ArgentinaLuz"){
        descuento = descuentoDArgLuz;
        totalcondescuento = totalsindescuento - (totalsindescuento * descuento);
        document.getElementById("txtIdprecioDescuento").value = totalcondescuento;
    }
    else if (cantidad == 3 && marca == "FelipeLamparas"){
       descuento = descuentoDFL;
        totalcondescuento = totalsindescuento - (totalsindescuento * descuento);
        document.getElementById("txtIdprecioDescuento").value = totalcondescuento;
    }

    else if (cantidad == 3 && (marca != "ArgentinaLuz" && marca != "FelipeLamparas")){
        descuento = descuentoDotras;
        totalcondescuento = totalsindescuento - (totalsindescuento * descuento);
        document.getElementById("txtIdprecioDescuento").value = totalcondescuento;
    }
    else if (cantidad < 3){
        
        document.getElementById("txtIdprecioDescuento").value = totalsindescuento;
    }


}

/*
    //caso A
    if (cantidad >= 6){
        totalsindescuento = cantidad * PRECIO;
        totalcondescuentoA = totalsindescuento - (totalsindescuento * descuentoA);
        if (totalcondescuentoA > 120){ //caso E
            totalIIBB = totalcondescuentoA * IIBB;
            totalconIIBB = totalcondescuentoA + totalIIBB;
            document.getElementById("txtIdprecioDescuento").value = totalconIIBB;
            alert (`IIBB: Usted pagó ${totalIIBB}`);

        }
        else{
            document.getElementById("txtIdprecioDescuento").value = totalcondescuentoA;
        }
    }
    //caso B
    else if (cantidad == 5 && marca == "ArgentinaLuz"){
        totalsindescuento = cantidad * PRECIO;
        totalcondescuentoBArgLuz = totalsindescuento - (totalsindescuento * descuentoBArgLuz);
        document.getElementById("txtIdprecioDescuento").value = totalcondescuentoBArgLuz;
    }
    else if (cantidad == 5 && marca != "ArgentinaLuz"){
        totalsindescuento = cantidad * PRECIO;
        totalcondescuentoBotras = totalsindescuento - (totalsindescuento * descuentoBotras);
        document.getElementById("txtIdprecioDescuento").value = totalcondescuentoBotras;

    }
    //caso C
    else if (cantidad == 4 && (marca == "ArgentinaLuz" || marca == "FelipeLamparas")){
        totalsindescuento = cantidad * PRECIO;
        totalcondescuentoCArgFel = totalsindescuento - (totalsindescuento * descuentoCArgFel);
        document.getElementById("txtIdprecioDescuento").value = totalcondescuentoCArgFel;
    }
    else if (cantidad == 4 && !(marca == "ArgentinaLuz" || marca == "FelipeLamparas")){
        totalsindescuento = cantidad * PRECIO;
        totalcondescuentoCOtras = totalsindescuento - (totalsindescuento * descuentoCOtras);
        document.getElementById("txtIdprecioDescuento").value = totalcondescuentoCOtras;

    }
    //caso D
    else if (cantidad == 3 && marca == "ArgentinaLuz"){
        totalsindescuento = cantidad * PRECIO;
        totalcondescuentoDArgLuz = totalsindescuento - (totalsindescuento * descuentoDArgLuz);
        document.getElementById("txtIdprecioDescuento").value = totalcondescuentoDArgLuz;
    }
    else if (cantidad == 3 && marca == "FelipeLamparas"){
        totalsindescuento = cantidad * PRECIO;
        totalcondescuentoDFL = totalsindescuento - (totalsindescuento * descuentoDFL);
        document.getElementById("txtIdprecioDescuento").value = totalcondescuentoDFL;
    }

    else if (cantidad == 3 && (marca != "ArgentinaLuz" && marca != "FelipeLamparas")){
        totalsindescuento = cantidad * PRECIO;
        totalcondescuentoDotras = totalsindescuento - (totalsindescuento * descuentoDotras);
        document.getElementById("txtIdprecioDescuento").value = totalcondescuentoDotras;
    }
    else if (cantidad < 3){
        totalsindescuento = cantidad *PRECIO;
        document.getElementById("txtIdprecioDescuento").value = totalsindescuento;
    }       
} */
