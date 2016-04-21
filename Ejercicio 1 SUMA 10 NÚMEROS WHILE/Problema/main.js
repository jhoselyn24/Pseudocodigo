function suma(){
	var suma=0;
	var a=1;
	while (a<=10){
		var numeros=prompt("Ingrese número "+a+": ");
		suma=suma+parseInt(numeros);
		a++;
	}

	alert("La suma de los números ingresados es: "+ suma);
}

suma();