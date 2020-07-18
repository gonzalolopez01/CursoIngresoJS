/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{	
	let sueldo;
	let nuevoSueldo;
	let aumento;
	// para calcular el nuevo sueldo deberia sumarle al sueldo original el aumento
	// el calculo porcentaje de un valor lo consigo multiplicando el valor por el porcentaje y lo divido por 100
	
	sueldo = parseFloat(document.getElementById("txtIdSueldo").value);
	//parseInt no conviene porque el sueldo no siempre es entero, suele tener decimales, es flotante.
	
	aumento = sueldo * 10 / 100;

	nuevoSueldo = sueldo + aumento;
	// en vez de poner 10/100 se podría poner ".1", nada de esto es obligatorio
	//es mejor no usar parentesis por que sino es redundante

	document.getElementById("txtIdResultado").value = nuevoSueldo;

	//si lo hace multiplicando sueldo por 1.10 podes usar:
	//nuevoSueldo.toFixed(2); redondea y muestra solo 2 decimales.
	
	//Math.floor (); redondea para abajo.
	//Math.round (); 
	//Math.ceil (); redondea para arriba.



}


