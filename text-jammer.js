$(document).ready(function(){
	
	//wrap each jamming character in <span> tags
	$('.jammer').html(function(index, html) {
	  return html.replace(/\S/g, '<span class="char">$&</span>');
	});
	
	//randomize vertical position
	$('.char').each(function(){
		//chances of a character bumping down
		var frqncy = Math.floor(Math.random() * 16);
		//random top margin amount
		var mrgn = Math.floor(Math.random() * 3) + 1;
		 
		if(frqncy == 1) {
			$(this).css('top', mrgn);
		}	
		
	});

	//randomize rotation
	$('.char').each(function(){
		//chances of a character rotating
		var frqncy = Math.floor(Math.random() * 11);
		//range of degrees with decimal 
		var baseDegs = ((Math.random() * 20) + 10) / 10.0;
		//randomize positive/negative results
		var posNeg = Math.floor(Math.random() * 2) + 1;
		
		if(posNeg == 1){
			var degs = baseDegs * -1; //rotates counter-clockwise
		}else{
			var degs = baseDegs; //rotates clockwise
		}
				
		if(frqncy == 1) {
			$(this).css('-webkit-transform', 'rotate(' + degs + 'deg)');
		}

	});
	
	//randomize font size
	$('.char').each(function(){
		//chances of a character resize
		var frqncy = Math.floor(Math.random() * 11);
		//size range 
		var baseSize = parseInt($(this).css('font-size'), 10);
		//randomize positive/negative results
		var posNeg = Math.floor(Math.random() * 2) + 1;
		//size change amount
		var addSub = Math.floor(Math.random() * 2) + 1;
		
		if(posNeg == 1){
			var size = baseSize - addSub; //size is < base
		}else{
			var size = baseSize + addSub; //size is > base
		}

		if(frqncy == 1) {	
			$(this).css('font-size', size);
		}	

	});
	
});