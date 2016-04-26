function promedioNotas(){
	var n=parseInt(prompt("Ingrese numero de notas: "));
var suma=0;
	for(var i=1;i<=n;i++) {
		var nota=parseFloat(prompt("Ingese nota alumno"+i));
		suma=suma+nota;
		promedio=suma/n;
	}
	alert("El promedio de calificaciones medias es: "+ promedio);

/*	var numeroNotas=0;

	while (a<=notas){
		if {var numeros=prompt("Ingresa la edad "+a+": ");
		numeroNotas=numeroNotas+parseInt(numeros);
		a++;
	}

	alert("el promedio de calificaciones medias es: "+numeroNotas/notas);
	alert("El promedio de calificaciones bajas es: "+numeroNotas/notas/notas);
}*/
}
promedioNotas();