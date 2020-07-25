function mostrar()
{
	let nota;

	nota = Math.round(Math.random() * 9 + 1);

	if (nota >= 9){
		alert("Nota: " + nota + ". EXCELENTE");
	}
	else if (nota >= 4){
		alert("Nota: " + nota + ". APROBÓ");
	}
	else{
		alert("Nota: " + nota + ". Vamos, la próxima se puede");
	}


}