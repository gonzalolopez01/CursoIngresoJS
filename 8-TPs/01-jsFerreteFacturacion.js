/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{   
    let precio1;
    let precio2;
    let precio3;
    let suma;


    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);

    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);

    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    suma = precio1 + precio2 + precio3;

    alert ("La suma total es $" + suma);

}
function Promedio () 
{
	let precio1;
    let precio2;
    let precio3;
    let promedio;


    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);

    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);

    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    promedio = (precio1 + precio2 + precio3) / 3;

    alert ("El promedio es $" + promedio.toFixed(2));

}
function PrecioFinal () 
{
	let precio1;
    let precio2;
    let precio3;
    let suma;
    let IVA;
    let precioConIVA;


    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);

    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);

    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    
    suma = precio1 + precio2 + precio3;

    IVA = suma * 21 / 100;

    precioConIVA = suma + IVA;

    //precioConIVA = precioConIVA.toFixed(2); se puede hacer para ya asignarle a la avariable el total con solo 2 decimales.

    alert ("El total con IVA es $" + precioConIVA.toFixed(2));

}