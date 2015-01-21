// Can also be called App.JS, Script.JS, or Main.JS

$(document).ready(function() {

	$('#green').click(function() {
		console.log('change green');
		$('#green').css({backgroundColor:"green", 'box-shadow':'0 0 60px green'});
		$('#yellow').css({backgroundColor:"gray", 'box-shadow':'0 0 0'});
		$('#red').css({backgroundColor:"gray", 'box-shadow':'0 0 0'});
	})


	$('#yellow').click(function() {
		console.log('change yellow');
		$('#yellow').css({backgroundColor:"yellow", 'box-shadow':'0 0 60px yellow'});
		$('#green').css({backgroundColor:"gray", 'box-shadow':'0 0 0'});
		$('#red').css({backgroundColor:"gray", 'box-shadow':'0 0 0'});
	})

	$('#red').click(function() {
		console.log('change red');
		$('#red').css({backgroundColor:"red", 'box-shadow':'0 0 60px red'});
		$('#yellow').css({backgroundColor:"gray", 'box-shadow':'0 0 0'});
		$('#green').css({backgroundColor:"gray", 'box-shadow':'0 0 0'});
	})

	$('#allOn').click(function() {
		console.log('change allOn');
		$('#red').css({backgroundColor:"red", 'box-shadow':'0 0 60px red'});
		$('#yellow').css({backgroundColor:"yellow", 'box-shadow':'0 0 60px yellow'});
		$('#green').css({backgroundColor:"green", 'box-shadow':'0 0 60px green'});
	})

	$('#allOff').click(function() {
		console.log('change allOff');
		$('#red').css({backgroundColor:"gray", 'box-shadow':'0 0 0'});
		$('#yellow').css({backgroundColor:"gray", 'box-shadow':'0 0 0'});
		$('#green').css({backgroundColor:"gray", 'box-shadow':'0 0 0'});
	})

	function recordEvent(){
		console.log("Your x-value is "+ event.x + " and your y-value is "+ event.y + ".");
	}

	$(document).mousedown(recordEvent);

})