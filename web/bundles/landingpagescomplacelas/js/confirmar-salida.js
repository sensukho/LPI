//detectamos el evento beforeunload de la ventana, el cual nos permite
//mostrar la confirmacion de salida
window.onbeforeunload=function(){
	//verificamos si el checkbox esta marcado
	if(document.getElementById('ConfirmarSalida').value=="si"){
		//mostramos un mensaje al usuario avisandole
		return '';
	}
};
