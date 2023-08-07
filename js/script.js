let mostrarTotal = document.getElementById('total');
let mostrarCronometro = document.getElementById('cronometro');
let tiempoIngresado = 1;
let sound = new Audio('./sound/cancion.wav');

let tiempo = tiempoIngresado*60;


function imprimirCronometro(){
	let minutos= Math.trunc(tiempo/60);
	let segundos = tiempo%60;
	let addCeromin = "";
	if(minutos<10){
		addCeromin = "0"
	} else{
		addCeromin = ""
	}
	let addCeroseg = "";
	if(segundos<10){
		addCeroseg = "0"
	} else{
		addCeroseg = ""
	}
	mostrarCronometro.innerHTML = addCeromin + minutos + " : " + addCeroseg+  segundos;
	tiempo--;	

	
	if(tiempo<0){
		clearInterval(intervalo)
		sound.play();
	}
}
/**
Puedo poner esto en una funcion, y referenciarla en cuanto el usuario 
haga clic en el botón**/
let intervalo = setInterval(imprimirCronometro, 1000);

