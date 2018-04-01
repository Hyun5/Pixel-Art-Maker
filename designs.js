//Defining variables
//Define rows and columns
const height = $('#inputHeight');
const width = $('#inputWidth');

//Define table
const table = $('#pixelCanvas');

//Intial Canvas
makeGrid();

//When size is submitted by the user, call makeGrid()
$('#submit').on('click', function(event) {
	//Remove previous table
	table.children().remove();
	//Not to reload the page by click action
	event.preventDefault();
	//Function call to draw the table
	makeGrid();
});

$('#reset').on('click', function(event) {
	//Remove previous table
	table.children().remove();
	//Not to reload the page by click action
	event.preventDefault();
	height.val(10);
	width.val(10);
	//Function call to draw the table
	makeGrid();
});

//Choose color
table.on('click', 'td', function() {
	//Pick a color
	var pickColor = $('input[type="color"]').val();
	//Apply the color
	$(this).attr('bgcolor', pickColor);
});

//Draw the table
function makeGrid() {
	//Loop for rows
  	for (let i = 0; i < height.val(); i++) {
  		//Create rows
    	table.append('<tr></tr>');
    	//Loop for columns
  		for (let j = 0; j < width.val(); j++) {
  			//Create columns
    		$('tr:last').append('<td></td>');
    	}
  	}
}