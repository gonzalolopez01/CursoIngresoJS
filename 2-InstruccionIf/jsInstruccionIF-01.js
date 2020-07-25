function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);


	if (edad == 15) // se podria comparar sin hacer parseint. ejemplos en el video. Igual a los numeros los vamos a tratar como number
	{
		alert("Niña bonita");

	}

}