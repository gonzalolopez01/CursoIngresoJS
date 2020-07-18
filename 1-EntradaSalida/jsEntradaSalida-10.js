/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let nuevoImporte;
	let descuento;
	
	
	
	
	importe = parseFloat(document.getElementById("txtIdImporte").value);
	
	
	descuento = importe * 25 / 100;

	nuevoImporte = importe - descuento;
	

	document.getElementById("txtIdResultado").value = nuevoImporte;

	//ctrl+shift+L pinta a todas la palabras iguales para poder borrarlas o cambiarlas.
}

