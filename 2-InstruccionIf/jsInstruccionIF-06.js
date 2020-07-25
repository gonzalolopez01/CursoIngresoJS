function mostrar()
{
	let edad;
	
	edad = parseInt(document.getElementById("txtIdEdad").value);
	
	if (edad >= 18){
		alert("Es mayor.");
	}
	else if (edad >= 13){
		alert("Es adolescente.");
	}
	else{
		alert("Es niño");	
	}
//  else if...
//	else
}