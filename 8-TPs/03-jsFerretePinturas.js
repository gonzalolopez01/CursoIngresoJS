/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let temperaturaC;
    let temperaturaF;
    const DIFERENCIA = 32;

    temperaturaF = parseFloat(document.getElementById("txtIdTemperatura").value);
    temperaturaC = temperaturaF - DIFERENCIA;
    alert (`${temperaturaF} grados Fahrenheit son ${parseFloat(temperaturaC)} grados centígrados`);
}

function CentigradosFahrenheit () 
{
    let temperaturaC;
    let temperaturaF;
    const DIFERENCIA = 32;

    temperaturaC = parseFloat(document.getElementById("txtIdTemperatura").value);
    temperaturaF = temperaturaC + DIFERENCIA;
    alert (`${temperaturaC} grados centígrados son ${parseFloat(temperaturaF)} grados Fahrenheit`);
	
}
//"txtIdTemperatura"