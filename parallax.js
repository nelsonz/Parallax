//Registers a new .parallax element. Must be called on the Jquery object immediately after the element is inserted.
	function registerObject(e) {
		e.data('anchor', {x_0: parseInt(e.css('left')), 
						  y_0: parseInt(e.css('top')), 
						  pos: e.attr('data-pos') - $('#parallax-parameters').attr('data-origin')});
	};

$(function() {
	//Register every .parallax element when the document is loaded
	$('.parallax').each(function(i) {
		registerObject($(this));
	});

	//Generate parallax effect for each .parallax element on mousemove.
	$(document).mousemove(function(e) {
		$('.parallax').each(function(i) {
			var x_rel = (1 - 2 * e.pageX / $(window).width()) * $('#parallax-parameters').attr('data-x-ratio');
			var y_rel = (1 - 2 * e.pageY / $(window).height()) * $('#parallax-parameters').attr('data-y-ratio');;
			var x_0 = $(this).data('anchor').x_0;
			var y_0 = $(this).data('anchor').y_0;
			var pos = $(this).data('anchor').pos - $('#parallax-parameters').attr('data-origin');
			$(this).offset({left: x_0 + x_rel*pos, 
							top: y_0 + y_rel*pos});
		})
	});
});


