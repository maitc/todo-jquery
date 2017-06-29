//Se hace ready a document que es a toda la página para que jquery se cargue cuando esta esté lista y no antes de eso.
$(document).ready(function(){

	//se la click al boton
	$("button").click(function(e){
		//no salta la pagina al esribir o dar click
		e.preventDefault();
		//se llama id que contiene input y se busca su value con 'val'
		var inputs = $("#ingresa").val();

		//if que realiza las acciones, primero que el espacio no esté en blanco, primer else, se escribe la tarea que lleva el div con el checkbox y un a para remover la tarea.

		if(inputs == ""){
			alert("Debes escribir tu tarea");
		}else{
			//se crea en el div de tareas completadas el checkbox junto con lo que se recoge del input
			$("#tareas").append("<div class='eliminar-div'><input type='checkbox' id='ticket'><label for='ticket' id='label-color'>" + inputs + "</label><a class='eliminar'>x</a></div>");
		}	//se limpia espacio de input
			$('#ingresa').val("");

		//se le da click a la x con la funcion de eliminar la tarea como de eliminarla de locastorage.
		$(document).on('click', '.eliminar', function(){
			$(this).parent().remove();
		});

		//Se crea misma función pero en este caso para pasar nodo de la tarea al nodo de "tarea completada"
		$(document).on('click', '#ticket', function(){
			//se elimina el ticket(todo) en el primer nodo y se le agrega al otro nodo.
			var elimina = $(this).parent().remove();
			$("#tareas-completadas").append(elimina);
		});

		/*se la da funcion de click al checkbox para que todo lo que está en div tareas se desplace al div de tareas-completas
		$("#ticket").click(function(){
			//se elimina al instante del click el div de tareas, pero queda el div tareas para que se puedan ingresan mas tareas
			$('.eliminar-div').remove();
			//se migra de tareas a tareas-completadas
			$("#tareas-completadas").append("<div><input type='checkbox' id='ticket'><label for='ticket' id='label-color'>" + inputs + "</label><a class='eliminar'>x</a></div>");

		});*/
	});
})
/*
CORRE PERO NO FUNCIONÓ LO QUE QUERÍA.snif
Se hace ready a document que es a toda la página para que jquery se cargue cuando esta esté lista y no antes de eso.
$(document).ready(function(){
	
	//se la click al boton
	$("button").click(function(e){
		//no salta la pagina al esribir o dar click
		e.preventDefault();
		//se llama id que contiene input y se busca su value con 'val'
		var inputs = $("#ingresa").val();
		localStorage.setItem('ttarea',$('#ingresa').val());
		//se limpia espacio de input
		$('#ingresa').val("");

		for(var i = 0; i <localStorage.length; i++){
			var asd = localStorage.key(i);
			var valor = localStorage.getItem(asd);
			

			//se crea en el div de tareas completadas el checkbox junto con lo que se recoge del input
			var contenedorIngreso = "<div class='eliminar-div'><input type='checkbox' id='ticket'><label for='ticket' id='label-color'>" + valor + "</label><a class='eliminar'>x</a></div>";
			$("#tareas").append(contenedorIngreso);

			//se le da click a la x con la funcion de eliminar la tarea como de eliminarla de locastorage.
			$(document).on('click', '.eliminar', function(){
				$(this).parent().remove();
					localStorage.setItem('ttarea', $('#ingresa').html());
			});
			//se la da funcion de click al checkbox para que todo lo que está en div tareas se desplace al div de tareas-completas
			$("#ticket").click(function(){
				//se elimina al instante del click el div de tareas, pero queda el div tareas para que se puedan ingresan mas tareas
				$('.eliminar-div').remove();
				//se migra de tareas a tareas-completadas
				$("#tareas-completadas").append("<div><input type='checkbox' id='ticket'><label for='ticket' id='label-color'>" + valor	 + "</label><a class='eliminar'>x</a></div>");

			});
		}
		//if que realiza las acciones, primero que el espacio no esté en blanco, primer else, se escribe la tarea que lleva el div con el checkbox y un a para remover la tarea.
	});
})*/