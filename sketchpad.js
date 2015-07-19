$(document).ready(function(){
	
	// creates a 16x16 grid when page starts
	
	for (var divCount = 0; divCount<256;divCount++){
		$("#gridwrap").append("<div class='grid'></div>");
	};

	// changes color when a grid is hovered

	$(".grid").on('mouseenter', function(){
		$(this).addClass("hover");
	});

	// clears board when reset button is clicked 

	$("#reset").on('click', function(){
		$(".grid").css('background-color', '#fff');
		
	});

	// switches back to standard colour when button is clicked 
	$("#standard").click(function(){
		$(".grid").mouseenter(function() {
			$(this).css("background-color", "#00C0D1");
		});
	});

	// generates new grid size when button is clicked 

	$("#custom").click(function(){
		newGrid();
		$(".grid").on('mouseenter', function(){
			$(this).addClass("hover");
		});
	});

	// generates a fade in when button is clicked

	$("#fade").click(function(){
		$(".grid").on('mouseenter', function(){
			$(this).animate({opacity: 0})
		});
	});

	// generates random colours when button is clicked
	$("#random").click(function(){
		$(".grid").on('mouseenter', function(){
			$(this).addClass('randomcolour').css({'background-color':rainbow()});
		});
	});

});

function rainbow() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}





var newGrid = function(){
	var size = parseInt (prompt ("How many squares per side would you like to create?"));   
	$(".grid").remove(); // clears current grid
	var sketchpadWidth = +$("#gridwrap").width() - (size *2);																				
	

	for (var count = 1; count <= size * size ;count++){
		$("#gridwrap").append("<div class='grid'></div>");
	};

	var gridSize = (sketchpadWidth / size) + 'px';
	$(".grid").css({'height': gridSize, 'width': gridSize});	



};



