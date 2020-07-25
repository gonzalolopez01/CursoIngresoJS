function mostrar()

{
	let edad;
	
	edad = parseInt(document.getElementById("txtIdEdad").value);
//condición que es verdadera para los valores de edad que están 
//por debajo o por encima del rango [13,17]

//aca pregunto si estoy fuera del rango
	if (edad < 13 || edad >= 18){ //si se le agrega el not, como en el ej anterior, usted es adolescente
		alert("Usted no es un adolescente.");
	}
//	else{ 
//		alert("Fin de la función.");
//	}
}
//aca otra forma, pregunto si estoy dentro del rango.
//if(!(edad >= 13 && edad <= 17){
//	alert("no es adolescente");
//}