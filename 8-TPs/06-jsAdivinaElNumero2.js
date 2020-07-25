/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

let numeroSecreto; 
let contadorIntentos;
let flag = 0; 

function comenzar()
{
numeroSecreto = Math.round(Math.random() * 99 + 1);
alert(numeroSecreto);
document.getElementById("txtIdNumero").focus();
contadorIntentos = 0;
document.getElementById("txtIdIntentos").value = contadorIntentos;
flag = 1;

}

function verificar()
{
let numero;
if (flag == 0){
  
  alert("Primero debes presionar el botón comenzar");
}
else {

  contadorIntentos++; 
  document.getElementById("txtIdIntentos").value = contadorIntentos;

  numero = parseInt(document.getElementById("txtIdNumero").value);

  if (numeroSecreto == numero){
    //alert("Usted es el ganador! y solo en " + contadorIntentos + " intentos.");
    switch (contadorIntentos){
		case 1:
			alert("usted es un Psíquico, lo hizo en " + contadorIntentos + " intento.");
			break;
		case 2:
			alert("excelente percepción, lo hizo en " + contadorIntentos + " intentos.");
			break;
		case 3:
			alert("Esto es suerte, lo hizo en " +  contadorIntentos + " intentos.");
		case 4:
			alert("Excelente técnica, lo hizo en " + contadorIntentos + " intentos.");
			break;
		case 5:
			alert("Uested está en la media, lo hizo en "+ contadorIntentos + " intentos.");
			break;
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
			alert("falta técnica, lo hizo en "+ contadorIntentos + " intentos.");
			break;
		default:
			alert("afortunado en el amor!!! lo hizo en "+ contadorIntentos + " intentos.");
			break;
	}
  }
  else if (numeroSecreto < numero){
    alert("Se pasó...");
  }
  else{
    alert("Le falta...");
    

  }
  document.getElementById("txtIdNumero").value = "";
  document.getElementById("txtIdNumero").focus();

}  

}


