//$( "#my-location" ).click(function() {
  //event.stopPropagation();
  //$( "#location-seeker" ).slideToggle("slow");
//});

$(document).ready(function(){

	$('a.tabs').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('a.tabs').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})
