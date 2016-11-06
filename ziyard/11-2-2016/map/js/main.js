$(document).ready(function(){

  // Tab switching
	$('a.tabs').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('a.tabs').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

  // Result pane slide down
	$( "#nearby" ).click(function() {
	  event.stopPropagation();
	  $( ".results-address" ).slideToggle("slow");
		$( ".results-address" ).toggleClass("hidden");
	});
})
