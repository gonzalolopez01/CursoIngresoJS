function mostrar()
{
	//tomo el mes
	let mes;

	mes = document.getElementById("txtIdMes").value;

	switch (mes){
		case "Febrero":
			alert("Este mes no tiene más de 29 días");
			break;
	/*	case "Enero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		case "Julio":
		case "Agosto":
		case "Septiembre":
		case "Octure":
		case "Noviembre":
		case "Diciembre":
			alert ("Este mes tiene 30 o más días");
			break; // esta ultima si queres no la pones porque igual el codigo ya termino, igual es mejor usarlo siempre
		*/
		default: //es como un "en caso contrario". si no entraste en un case anterior, entra acá
			alert ("Este mes tiene 30 días o más");
			break; //esta linea no es necesaria

	
	}
	
	
	


}//FIN DE LA FUNCIÓN