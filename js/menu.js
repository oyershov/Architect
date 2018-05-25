
/*
$(function(GETwidth){
if ($(window).width() >= '100' && $(window).width() < '768') {var element = '1';}
else if ($(window).width() >= '768' && $(window).width() < '1024') {var element = '2';}
else if ($(window).width() >= '1024' && $(window).width() < '1366') {var element = '3';}
else if ($(window).width() >= '1366') {var element = '4';}
else {var element = '1';}

});


function permennaja (){

var per = document.getElementById('per').value;
$.ajax({
		type: "POST",
		url: "main.php",
		data: per,
		success: function(msg){
			document.getElementById("out_put").innerHTML=msg;
        }
  });
}
*/

// логотип
/*
$(document).ready(function()
{
	Logo("#logo");
});
function Logo(logo_id)
{
	$(logo_id).css("display","inline-block");
};
*/
// меню

$(document).ready(function()
{
	slide("#sliding-navigation", 25, 0);
});

function slide(navigation_id, pad_out, pad_in)
{
	var link_elements = navigation_id + " a";
    
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
}