
$(document).ready(function(){

  // Tab switching
	$('a.tabs').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('a.tabs').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');

		$('.results').hide();

		$('div.loader').show();
    setTimeout(function() { $("div.loader").hide(); }, 1000);

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

	// Result pane slide down
	$( "#search-location" ).click(function() {
	  event.stopPropagation();

	  $( ".results" ).slideToggle("slow");
		$( ".results" ).toggleClass("hidden");
		//show the loading screen
		$('div.loader').show();
    setTimeout(function() { $("div.loader").hide(); }, 1000);
	});


});


//100% height on the search results
$(function(){
    $( "#my-location" ).click(function(){
			  var h = $('.scroll-box-inner').offset()
        $('.scroll-box-inner').css('max-height', ($(window).height() - h.top) + 'px');
    });

		$( "#search-location" ).click(function(){
			  var h = $('.scroll-box-inner').offset()
        $('.scroll-box-inner').css('max-height', ($(window).height() - h.top) + 'px');
    });
//100% height on the map
		$(document).ready(function(){
			  var h = $('.map').offset()
        $('.map').css('max-height', ($(window).height() - h.top) + 'px');
    });
});
