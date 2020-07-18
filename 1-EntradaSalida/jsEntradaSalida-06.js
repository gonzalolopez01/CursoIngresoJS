/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let num1; //aca la variable todavia no es de ningun tipo
	let num2;
	let resultado;

	//num1 = document.getElementById("txtIdNumeroUno").Value;

	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);

	//num2 = document.getElementById("txtIdNumeroDos").value;
	
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	
	resultado = num1 + num2;

	//resultado = parseInt(num1) + parseInt(num2);

	alert("El resultado es " + resultado);
	//si no se convierte en entero solo concatena el texto que está en las variables.

}

