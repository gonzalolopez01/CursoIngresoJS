function mostrar()
{
	
	let mes;
	//no es recomendable usar "ñ" en el nombre de la variable. Usar todo lo de origen norte americano.
	mes = document.getElementById("txtIdMes").value;
	/*
	if (mes == "Enero"){
		alert("que comiences bien el año!!!");
	}
	else if (mes == "Marzo"){
		alert("a clases!!!");
	}
	else if (mes == "Julio"){
		alert("se vienen las vacaciones!!!");
	}
	else if (mes == "Diciembre"){
		alert ("Felices fiestas!!!");
	
	}
	*/
	switch(mes){//switch no lleva condición
		case "Enero":
			alert("Qué comiences bien el año!!!");
			break;//rompe el flujo del programa
		case "Marzo":
			alert("A clases!!!");
			break;
		case "Julio":
			alert("Se vienen las vacaciones!!!");
			break;
		case "Diciembre":
			alert ("Felices fiestas!!!");
			break;
	}
	

}//FIN DE LA FUNCIÓN