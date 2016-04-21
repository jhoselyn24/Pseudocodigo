function edad(){
	var alumnos=prompt("Ingresa el numero de alumnos: ");
	var numeroAlummnos=0;
	for(var a=1;a<=alumnos;a++ ){
		var numeros=prompt("Ingresa la edad "+a+": ");
		numeroAlummnos=numeroAlummnos+parseInt(numeros);
	}

	alert("el promedio de edad es: "+numeroAlummnos/alumnos);
}

edad();