$(document).ready(function(){
	$(".navBar a").click(function(){
		var selected = $(this).attr('href');	
		$.scrollTo(selected, 700);		
		return false;
	});	
});