function mostrar()
{
	let mes;

	mes = document.getElementById("txtIdMes").value;

	switch (mes){
		case "Febrero":
			alert ("tiene 28 días");
			break;
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert ("tiene 31 días");
			break;
		default:
			alert ("tiene 30 días");
			break;

	}

}//FIN DE LA FUNCIÓN