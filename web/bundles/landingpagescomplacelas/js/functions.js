/**
 * @author developer1
 */

 	var needToConfirm = true;
	window.onbeforeunload = confirmExit;
	function confirmExit() {
		if (needToConfirm)
			return "¿Estas seguro que quieres Salir?";
	}

	function sendMsisdn(formId) {
		needToConfirm = false;
		if ($("#msisdn").val() == '') {
			alert('Por favor ingresa un número celular de 10 digitos y sin espacios. ¡Inténtalo de nuevo!'); /**** 20111213 ****/
			return false;
		}			
		else if (!/^[0-9]{10}$/.test($("#msisdn").val())) {
			alert('Por favor ingresa un número celular de 10 digitos y sin espacios. ¡Inténtalo de nuevo!');
			return false;					
		}else if (!$("#terms_ok").length) {
			$("#" + formId).submit();
		} else {
			if ( !$("#terms_ok").is(':checked') ) {
				alert('Acepta los terminos y Condiciones');
				return false;
			}else{
				$("#" + formId).submit();
			}
		}
	}

	function sendPin(formId) {
		needToConfirm = false;	
				$("#" + formId).submit();
	}

// SCRIPT PARA VALIDAR FORMULARIO
	function checkform()
	{

		if (document.input.msisdn.value == '') {
			alert('Por favor ingresa un número celular de 10 digitos y sin espacios. ¡Inténtalo de nuevo!'); /**** 20111213 ****/
			return false;
		}			
		else if (!/^[0-9]{10}$/.test(document.input.msisdn.value)) {
			alert('Por favor ingresa un número celular de 10 digitos y sin espacios. ¡Inténtalo de nuevo!');
			return false;					
		}								
		else if (document.input.terms_ok != null && !document.input.terms_ok.checked) {
			alert('Por favor acepta los términos y condiciones para continuar.');
			return false;
		}
		else if(document.input.inputPin != null && !/^[0-9]{4}$/.test(document.input.inputPin.value)) {
			alert('Por ingresa el numero de PIN correctamente.');
			return false;
		}
		
		return true;
	}

	// SCRIPT PARA VALIDAR FORMULARIO
	function checkbox(){

		if (document.input.terms_ok != null && !document.input.terms_ok.checked) {
			alert('Por favor acepta los términos y condiciones para continuar.');
			return false;
		}			
		
		return true;
	}		

	// SCRIPT PARA EL SEGUIMIENTO DE GOOGLE ANALITYCS		
		var _gaq = _gaq || [];
			_gaq.push(['_setAccount', 'UA-28406952-2']);
			_gaq.push(['_trackPageview']);
			(function() {
					  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
					  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
					  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
			})();

	// SCRIPT PARA VISUALIZAR POP-UP DE TERMINOS Y CONDICIONES			
			
	$(document).ready(function() {
			//When you click on a link with class of poplight and the href starts with a # 
			$('a.poplight[href^=#]').click(function() {
			    var popID = $(this).attr('rel'); //Get Popup Name
			    var popURL = $(this).attr('href'); //Get Popup href to define size
			    //Pull Query & Variables from href URL
			    var query= popURL.split('?');
			    var dim= query[1].split('&');
			    var popWidth = dim[0].split('=')[1]; //Gets the first query string value
			    //Fade in the Popup and add close button
			    $('#' + popID).fadeIn().css({ 'width': Number( popWidth ) }).prepend('<a href="#" class="close"><img src="../img/close_pop.png" class="btn_close" title="Close Window" alt="Close" /></a>');
			    //Define margin for center alignment (vertical   horizontal) - we add 80px to the height/width to accomodate for the padding  and border width defined in the css
			    var popMargTop = ($('#' + popID).height() + 80) / 2;
			    var popMargLeft = ($('#' + popID).width() + 80) / 2;
			    //Apply Margin to Popup
			    $('#' + popID).css({
				'margin-top' : -popMargTop,
				'margin-left' : -popMargLeft
			    });
			    //Fade in Background
			    $('body').append('<div id="fade"></div>'); //Add the fade layer to bottom of the body tag.
			    $('#fade').css({'filter' : 'alpha(opacity=80)'}).fadeIn(); //Fade in the fade layer - .css({'filter' : 'alpha(opacity=80)'}) is used to fix the IE Bug on fading transparencies 
			    return false;
			});
			//Close Popups and Fade Layer
			$('a.close, #fade').on('click', function() { //When clicking on the close or fade layer...
			    $('#fade , .popup_block').fadeOut(function() {
				$('#fade, a.close').remove();  //fade them both out
			    });
			    return false;
			});
		});						

	//### script tool-tipe -->			 
	$(document).ready(function() {
		 var mivar='___';
		mivar=$('.terminos').attr('title');
	  	$('.terminos').attr('title','');
		
		
		$('.terminos').click(function() {
			$(this).attr('title',mivar);
			
			$( document ).tooltip({close:function(){$(document).tooltip("disable")}});
			$(document).tooltip("enable");
			$('.terminos').trigger('mouseover');
			
		});
	});
//### script tool-tipe -->