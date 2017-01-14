$(document).ready(function(){
	/*Elimina los números repetidos*/
	function removeDuplicates(arr) {
    var seen = {},
        arrayClean = [];
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
		var inputVal = String.fromCharCode(e.keyCode),
		    numericReg = /^[0-9]+$/;
		if(numericReg.test(inputVal) == false) {
      e.preventDefault();
    } 
    
	}

	$("input").keypress(function(e){
			
			validation(e);

			var number = $("input").val();

			if(number != "") {
				if (e.wich == 13 || e.keyCode == 13) { 
					/*Obtiene el valor del input al hacer enter*/
					var numberSort = $("input").val().split("").sort(),
					    arrayClean = removeDuplicates(numberSort).join("");

				
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
			} else {
				$(".result").addClass("hidden");
			}
	});
});