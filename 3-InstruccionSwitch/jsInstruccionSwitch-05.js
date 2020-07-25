function mostrar()
{
	let hora;
	
	hora = parseInt(document.getElementById("txtIdHora").value);
	//siempre que levantemos un dato de una caja de texto, por convencion, lo vamos a parsear
	switch (hora){
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert ("es de mañana");
			break;

	}
	
	



}//FIN DE LA FUNCIÓN

"txtIdHora"