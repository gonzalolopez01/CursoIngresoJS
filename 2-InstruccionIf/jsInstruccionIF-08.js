function mostrar()
{
let estado;
let edad;

edad = parseInt(document.getElementById("txtIdEdad").value);
estado = document.getElementById("estadoCivil").value;

if (edad >= 18 && estado == "Soltero"){ //otra forma de hacerlo !(edad<18), negar que sea menor
// if (edad !(edad < 18 || estado != "Soltero")) {}	
	alert("Es soltero y no es menor");
}
	
}
