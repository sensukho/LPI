		$(document).ready(function() {
			$('#operador').change(function() {
				$.ajax({
					url : '/web/ajax/checkbox/',
					type : 'post',
					data : {
						opName : $('#operador').val(),
						set : "up"
					},
					success : function(data) {
						$('.legalesSuperior').html(data);
					}
				});
				$.ajax({
					url : '/web/ajax/checkbox/',
					type : 'post',
					data : {
						opName : $('#operador').val(),
						set : "down"
					},
					success : function(data) {
						$('.legales').html(data);
					}
				});				
			});

			$('a.tooltip').bind({
            click:function (event){
                event.preventDefault();
                $(this).children('span').show();
            },
            mouseout:function(event){
                $(this).children('span').hide();
            }
        	});
        	
		});  		