/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let perimetro;
    let alambre;
    
    largo = parseFloat(document.getElementById("txtIdLargo").value);
    
    ancho = parseFloat(document.getElementById("txtIdAncho").value);
   
    perimetro = 2 * (largo + ancho);

    alambre = perimetro * 3; // porque son 3 vueltas de alambre
    
    alert("La cantidad de alambre a comprar es " + alambre + " metros de alambre.");
}
function Circulo () 
{
    let radio;
    let perimentro;
    let alambre;
    const PI = 3.14; //constantes van con mayúsculas y se les asigna el valor en la misma linea en la que se declara
    //o const PI = Math.PI;
    

    radio = parseFloat(document.getElementById("txtIdRadio").value);

    perimetro = 2 * PI * radio;

    alambre = perimetro * 3;

    alert("La cantidad de alambre a comprar es " + alambre.toFixed(2) + " metros de alambre.");
	
}
function Materiales () 
{
	let largo;
    let ancho;
    let superficie;
    let Cal;
    let Cemento;
    const CEMENTO_X_METRO = 2;
    const CAL_X_METRO = 3;
    
    largo = parseFloat(document.getElementById("txtIdLargo").value);
    
    ancho = parseFloat(document.getElementById("txtIdAncho").value);
   
    superficie = largo * ancho;

    Cemento = superficie * CEMENTO_X_METRO;

    Cal = superficie * CAL_X_METRO;
    
    alert(`Para un contra piso de una superficie de ${superficie} m2 se debe comprar ${Cemento} bolsas de cemento y ${Cal} bolsas de Cal.`);
//hola 2
}
