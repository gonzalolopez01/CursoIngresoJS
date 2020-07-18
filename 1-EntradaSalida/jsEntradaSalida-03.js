/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre;

	nombre = document.getElementById("txtIdNombre").value; //de la caja de texto quiero el valor, por eso uso "value"

	alert (nombre);

	document.getElementById("txtIdNombre").value=""; //vacía la caja de texto

}
 //otra forma
 //nombre = txtIdNombre.value;

