function triangulo() {
	for(catetoO=1;catetoO<=500;catetoO++) {
		for(catetoA=1;catetoA<=500;catetoA++) {
			for(hipotenusa=1;hipotenusa<=500;hipotenusa++){
				if(hipotenusa*hipotenusa===catetoO*catetoO+catetoA*catetoA){
					document.write("La terna pitagorica: "+catetoO+" "+catetoA+" "+hipotenusa+'<br>');
				}
			}
		}
	}
}
triangulo();