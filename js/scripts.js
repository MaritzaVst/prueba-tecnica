$(document).ready(function(){
	/*Elimina los números repetidos*/
	function removeDuplicates(arr) {
    var seen = {};
    var arrayClean = [];
    for (var i = 0; i < arr.length; i++) {
        if (!(arr[i] in seen)) {
            arrayClean.push(arr[i]);
            seen[arr[i]] = true;
        }
    }
    return arrayClean;
	}

	/*Solo permite ingresar números*/
	function validation(e){
		var inputVal = String.fromCharCode(e.keyCode);
		var numericReg = /^[0-9]+$/;
		if(numericReg.test(inputVal) == false && e.keyCode != 13 && e.keyCode != 46 ) {
      e.preventDefault();
    }
	}

	$("input").keypress(function(e){
			
			validation(e);

			if (e.wich == 13 || e.keyCode == 13) { 
				/*Obtiene el valor del input al hacer enter*/
				var number = $("input").val().split("").sort();
				var arrayClean = removeDuplicates(number).join("");

				/*Muestra seccion de resultado*/
				$(".result").removeClass("hidden");

				/*Ejecuta el scroll de seccion*/
		    $('html, body').stop().animate({
		        scrollTop: $(".result").offset().top
		    }, 1000);

		    setTimeout(function(){
		    	/*Inserta resultado(arrayClean) en nueva seccion*/
					$(".number-result").text(arrayClean);
					/*Efecto de animacion con textillate*/
		    	$(function () {
					  $('.tlt').textillate();
					})
		    }, 700);
			}
	});
});