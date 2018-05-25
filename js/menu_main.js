 // Слайд логотипа
$(document).ready(function()
{
	Slide_logo("#logo", 700, .8);
});

function Slide_logo(logo_id, logo_time, logo_multiplier)
{
	var logo_timer = 0;
	$(logo_id).each(function(i)
	{
		$(this).css("margin-left","300px");
		logo_timer = (logo_timer*logo_multiplier + logo_time);
		$(this).animate({ marginLeft: "0" }, logo_timer);
	});
};

// Fade логотип
/*
$(document).ready(function()
{
	Fade_logo("#logo");
});
function Fade_logo(logo_id)
{
	$(logo_id).toggle(1000);
};
*/
// Слайд меню

$(document).ready(function()
{
	Slide_menu("#sliding-navigation", 25, 0, 500, 0.8);
});
function Slide_menu(navigation_id, pad_out, pad_in, time, multiplier)
{
	var list_elements = navigation_id + " li.sliding-element";
	var link_elements = list_elements + " a";
	var timer = 0;
	
	$(list_elements).each(function(i)
	{
		$(this).css("margin-left","-500px");
		timer = (timer*multiplier + time);
		$(this).animate({ marginLeft: "0" }, timer);
	});
		
	$(link_elements).each(function(i)
	{
		$(this).hover(
		function()
		{
			$(this).animate({ paddingLeft: pad_out }, 150);
		},		
		function()
		{
			$(this).animate({ paddingLeft: pad_in }, 150);
		});
	});
};