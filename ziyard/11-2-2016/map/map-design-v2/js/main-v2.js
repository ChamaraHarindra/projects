
$(document).ready(function(){

  // Tab switching
	$('a.tabs').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('a.tabs').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');

	});
	
	//  Grid to list
    $('#list').click(function(event)
	{
		event.preventDefault();
		$('.grid-seperate').addClass('change-to-list');
		$('.result-grid button.green').addClass('small');
	});
	
    $('#grid').click(function(event)
	{
		event.preventDefault();
		$('.grid-seperate').removeClass('change-to-list');
		$('.result-grid button.green').removeClass('small');
	});
	

});
