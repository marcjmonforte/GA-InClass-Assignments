$(document).ready(function() {
	console.log('DOM ready, sir!');

	//event listeners
	$('#btn1').click(alertMe);
	$('#btn2').click(fadeTog);
	$('#btn3').click(slideTog);

	// function DECLARATION
	function slideTog() {
		$('#box').slideToggle(500);
	}

	//function EXPRESSION
	var slideTog = function() {
		//do function
	}

	//IFFE expression, not commonly used
	var slideTog = (function() {
		console.log('hello world right now!');
	}())

	function fadeTog() {
		$('#box').fadeToggle(500);
	}

	function alertMe() {
		alert('omg the end');
	}

})