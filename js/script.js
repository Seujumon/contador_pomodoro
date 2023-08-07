let mostrarTotal = document.getElementById('total');
let mostrarCronometro = document.getElementById('cronometro');
let tiempoIngresadomins = document.getElementById('mins');
let tiempoIngresadosegs = document.getElementById('segs');
let clicIniciar = document.getElementById('inicio');
let clicContinuar = document.getElementById('continuar');
let clicAudio = document.getElementById('audio');
let clicDetener = document.getElementById('detener');
let sound = new Audio('./sound/trumpets-for-life.mp3');

let intervalo;

let tiempo;

function mostrarTiempoSeteado(){
	tiempo = (parseInt(tiempoIngresadomins.value, 10)*60)+ parseInt(tiempoIngresadosegs.value);
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
}

function asignarTiempo(){
	tiempo = (parseInt(tiempoIngresadomins.value, 10)*60)+ parseInt(tiempoIngresadosegs.value);

}

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

function iniciar(){
	clearInterval(seteo);
	clearInterval(intervalo);
	asignarTiempo();
	intervalo = setInterval(imprimirCronometro, 1000);
}
function stop(){
	clearInterval(intervalo);
}

function continuar(){
	clearInterval(intervalo);
	intervalo = setInterval(imprimirCronometro, 1000);
}
function detenerAudio(){
	sound.pause();
}
let seteo = setInterval(mostrarTiempoSeteado,1000);

clicIniciar.onclick = iniciar;
clicContinuar.onclick = continuar;
clicDetener.onclick = stop;
clicAudio.onclick = detenerAudio;


