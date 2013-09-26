		$(document).ready(function() {
			$('#operador').change(function() {
				$.ajax({
					url : 'operSelectWap.php',
					type : 'post',
					data : {
						operador : $('#operador').val(),
						t2s : $('#t2s').val(),
						upL : "up"
					},
					success : function(data) {
						$('.legalesSuperior').html(data);
					}
				});
				$.ajax({
					url : 'operSelectWap.php',
					type : 'post',
					data : {
						operador : $('#operador').val(),
						t2s : $('#t2s').val(),
						doL : "down"
					},
					success : function(data) {
						$('.legales').html(data);
					}
				});				
			});
		});  		