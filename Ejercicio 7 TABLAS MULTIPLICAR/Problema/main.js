function tablaMultiplicar() {
	var numero=parseInt(prompt("Ingresa un número: "));
	var tabla=0;
	while(tabla<=12) {
		var resultado=numero*tabla;
		alert(numero+"x"+tabla+"igual a: "+resultado);
		tabla++;
	}
}
tablaMultiplicar();