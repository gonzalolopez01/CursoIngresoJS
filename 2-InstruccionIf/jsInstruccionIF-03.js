function mostrar()

{
let edad;

edad = parseInt(document.getElementById("txtIdEdad").value);

if (edad >= 18){
	alert("Usted es mayor de edad.");
}
else{
	alert("Usted es menor de edad.");
}
}
//en el else no va ninguna condición. Las condiciones tiene 2 posibles 
//resultados. If atrapa cuando la condicion es TRUE y el else cuando es FALSE