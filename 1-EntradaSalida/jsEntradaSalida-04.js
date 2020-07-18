/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{	//reservo espacio en memoria para guardar el nombre del usuario
	let nombre;

	//guardo en la variable nombre el texto que escribo en usuario dentro de la ventana prompt
	nombre = prompt("Ingrese su nombre");

	// copio en nombre lo que tengo guardado en la variable nombre dentro de la caja de texto(id:"txtIdNombre") embebida en la página
	document.getElementById("txtIdNombre").value = nombre;

	

}

