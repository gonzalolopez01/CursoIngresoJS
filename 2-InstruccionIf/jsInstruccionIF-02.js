function mostrar()
{
	let edad;
	//const mayor = 18;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad >= 18)
	// if (edad > 17) (si ponemos 17.5 no funciona porque parceInt solo devuelve enteros. Si pones 17.5, el parseint lo hace 17)
		{
			alert("Usted es mayor de edad.");
		}
	
}