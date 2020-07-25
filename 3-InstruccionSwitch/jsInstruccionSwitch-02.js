function mostrar()
{
	//tomo el mes
	let mes;
	
	mes = document.getElementById("txtIdMes").value;
	
	switch (mes){
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
			alert ("falta para el invierno");
			break;
		case "Junio":
			alert ("falta para el invierno");
			break;
		case "Julio":
			alert ("abrigate que hace frío");
			break;
		case "Agosto":
			alert ("abrigate que hace frío");
			break;
		case "Septiembre":
			alert ("ya pasamos el frío, ahora hace calor!!!");
			break;
		case "Octubre":
			alert ("ya pasamos el frío, ahora hace calor!!!");
			break;
		case "Noviembre":
			alert ("ya pasamos el frío, ahora hace calor!!!");
			break;
		case "Diciembre":
			alert ("ya pasamos el frío, ahora hace calor!!!");
			break;
	
	}
	//se puede achicar agrupando ( jugar con el break)






}//FIN DE LA FUNCIÓN