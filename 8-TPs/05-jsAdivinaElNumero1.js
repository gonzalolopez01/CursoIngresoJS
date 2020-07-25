/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/

// estas variables estan declaradas en scope global, para este ejercicio lo vamos a usar así.
// al estar declaradas asi, van a estar declaradas para todas las funciones
let numeroSecreto; 
let contadorIntentos;
let flag = 0; //el valor se designamos nosotro: 0 o 1 o True y falso. Igual, mejor usar 1 y 0.

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

  contadorIntentos++; //contadordeIntentos + 1   aca se usa para leer y escribir. primero la leo y despues la escribo

  document.getElementById("txtIdIntentos").value = contadorIntentos;

  numero = parseInt(document.getElementById("txtIdNumero").value);

  if (numeroSecreto == numero){
    alert("Usted es el ganador! y solo en " + contadorIntentos + " intentos.");
    //contadorIntentos = 0;
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

 //contador = contador + 1;  
 //contador +=1;
 //contador ++;
