function done (){
	var elvaga = document.getElementById('feedback_vaga');

	var eldono = document.getElementById('feedback_dono');

	var elplaca = document.getElementById('feedback_placa');

	elvaga.textContent = localStorage.getItem('vaga');
	elplaca.textContent = localStorage.getItem('placa'); 
	eldono.textContent = localStorage.getItem('dono');
}

function del (){
	eldono = ''
	elplaca = ''
	elvaga = ''
	localStorage.removeItem('vaga');
	localStorage.removeItem('placa');
	localStorage.removeItem('dono');
	localStorage.removeItem('horario');
	localStorage.removeItem('modelo');
	localStorage.removeItem('cor');





}
