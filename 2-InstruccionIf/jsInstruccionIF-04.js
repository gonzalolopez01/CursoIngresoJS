function mostrar()

{
	let edad;
	
	edad = parseInt(document.getElementById("txtIdEdad").value);
	if (edad >= 13){

		if (edad <=17){
			alert("Usted es un adolescente")
		}
	}
// si estoy dentro del rango...
//	if (edad >= 13 && edad <= 17){ //esta el la forma usando "operadores logicos"
//		alert("Usted es un adolescente.");
//	}
//	else{ 
//		alert("Fin de la función.");
//	}

//forma contraintuitiva
//	si no estoy fuera del rango
//	if(!(edad < 13 || edad >= 18)){
//		alert("Es adolescente");
//	}
}
