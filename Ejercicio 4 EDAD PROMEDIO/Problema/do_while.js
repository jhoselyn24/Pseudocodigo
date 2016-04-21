function edad(){
	var alumnos=prompt("Ingresa el numero de alumnos: ");
	var numeroAlummnos=0;
	var a=1;
	do {
		var numeros=prompt("Ingresa la edad "+a+": ");
		numeroAlummnos=numeroAlummnos+parseInt(numeros);
		a++;
	} while (a<=alumnos);

	alert("el promedio de edad es: "+numeroAlummnos/alumnos);
}

edad();