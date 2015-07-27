$(document).ready(function(){
	$(".navBar a").click(function(){
		var selected = $(this).attr('href');	
		$.scrollTo(selected, 700);		
		return false;
	});	

	$('#goTop').hide();
	$(window).scroll(function() {
	if($(this).scrollTop() != 0) {
		$('#goTop').fadeIn(); }
		 else {
	$('#goTop').fadeOut();}
	});
		$('#goTop').click(function() {
		 	$('body,html').animate({scrollTop:0},800); 
		});
	});