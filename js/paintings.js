$(document).ready(function() {
    $("#p-block > div").append('<a href="#" class="paint_img" data-title="¬енеци€"><img alt="венеци€" title="венеци€" name="wide" src="images/painting/veneciya.png" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 minimized" style="padding: 6px;" id="l1"/></a>');
    $("#p-block > div").append('<a href="#" class="paint_img" data-title="¬енеци€ гранд канал"><img alt="венеци€ гранд канал" title="венеци€ гранд канал" name="wide" src="images/painting/veneciya_grand_kanal.png" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 minimized" style="padding: 6px;" id="l2"/></a>');
    $("#p-block > div").append('<a href="#" class="paint_img" data-title="—обор венеци€"><img alt="собор венеци€" title="собор венеци€" name="wide"  src="images/painting/sobor.png" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 minimized" style="padding: 6px;" id="l3"/></a>');
    $("#p-block > div").append('<a href="#" class="paint_img" data-title="ѕрага часы"><img alt="прага часы" title="прага часы" name="wide"  src="images/painting/praga_chasy.png" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 minimized" style="padding: 6px;" id="l4"/></a>');
    $('#l1').fadeOut(400).fadeIn(500);
    $('#l2').fadeOut(600).fadeIn(500);
    $('#l3').fadeOut(800).fadeIn(500);
    $('#l4').fadeOut(1000).fadeIn(500); 
    $(".mrule").css('width','20%');
});

$(function(){
      $('.minimized').click(function(event) {
        var i_path = $(this).attr('src');
        var i_name = $(this).attr('name');
        $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
        jQuery(function(f){
            if ($(window).width() >= '769') {
                if(i_name=='thin') {$('#magnify').css('width','35%');}
                else {$('#magnify').css('width','60%');}
                $('#magnify').css({
    	       left: ($(document).width() - $('#magnify').outerWidth())/2,
    	       top: ($(document).height() - $('#magnify').outerHeight())/2});
            }
            else {
                $('#magnify').css('width','100%');
                if ($(window).height() > $(window).width() && $(window).width() < '768') {
                    if(i_name=='thin') {$('#magnify').css({left: ($(document).width() - $('#magnify').outerWidth())/2,top: ($(document).height() - $('#magnify').outerHeight())/10});}
                    else {$('#magnify').css({left: ($(document).width() - $('#magnify').outerWidth())/2,top: ($(document).height() - $('#magnify').outerHeight())/5});}
                }
                else if ($(window).height() > $(window).width() && $(window).width() == '768') {
                    if(i_name!='thin') {$('#magnify').css({left: ($(document).width() - $('#magnify').outerWidth())/2,top: ($(document).height() - $('#magnify').outerHeight())/8});}
                    else {$('#magnify').css({left: ($(document).width() - $('#magnify').outerWidth())/2});}
                }
                else {
                    $('#magnify').css({left: ($(document).width() - $('#magnify').outerWidth())/2});
                }
            }
        });
            $('#overlay, #magnify').fadeIn('fast');
        });
      $('body').on('click', '#close-popup, #overlay', function(event) {
        event.preventDefault();
     
        $('#overlay, #magnify').fadeOut('fast', function() {
          $('#close-popup, #magnify, #overlay').remove();
        });
      });
    });
    
function page (i) {
    $("#phref > a").removeClass('active');
    // if/else с числами работает быстрее чем switch/case
    if(i=='1'){
        $("#hf1").addClass('active');
        if($("#l3").is(":hidden")){
            $("#l1").fadeOut(0,function(){$("#l1").attr({"src":'images/painting/veneciya.png',"alt":'венеци€',"title":'венеци€','name':'wide'});}).fadeIn(400);
            $("#l2").fadeOut(0,function(){$("#l2").attr({"src":'images/painting/veneciya_grand_kanal.png',"alt":'венеци€ гранд канал',"title":'венеци€ гранд канал','name':'wide'});}).fadeIn(600);
            $("#l3").fadeOut(400,function(){$("#l3").attr({"src":'images/painting/sobor.png',"alt":'собор венеци€',"title":'собор венеци€','name':'wide'});}).fadeIn(800);
            $("#l4").fadeOut(600,function(){$("#l4").attr({"src":'images/painting/praga_chasy.png',"alt":'прага часы',"title":'прага часы','name':'wide'});}).fadeIn(1000); 
        }
        else {
            $("#l1").fadeOut(400,function(){$("#l1").attr({"src":'images/painting/veneciya.png',"alt":'венеци€',"title":'венеци€','name':'wide'});}).fadeIn(500);
            $("#l2").fadeOut(600,function(){$("#l2").attr({"src":'images/painting/veneciya_grand_kanal.png',"alt":'венеци€ гранд канал',"title":'венеци€ гранд канал','name':'wide'});}).fadeIn(500);
            $("#l3").fadeOut(800,function(){$("#l3").attr({"src":'images/painting/sobor.png',"alt":'собор венеци€',"title":'собор венеци€','name':'wide'});}).fadeIn(500);
            $("#l4").fadeOut(1000,function(){$("#l4").attr({"src":'images/painting/praga_chasy.png',"alt":'прага часы',"title":'прага часы','name':'wide'});}).fadeIn(500);
        }
    }
    else if(i=='2'){
        $("#magnify").css('width','40%');
        $("#hf2").addClass('active');
        if($("#l3").is(":hidden")){
            $("#l1").fadeOut(0,function(){$("#l1").attr({"src":'images/painting/rechka.png',"alt":'речка',"title":'речка','name':'wide'});}).fadeIn(400);
            $("#l2").fadeOut(0,function(){$("#l2").attr({"src":'images/painting/polevye_cvety_maslo.png',"alt":'полевые цветы масло',"title":'полевые цветы масло','name':'wide'});}).fadeIn(600);
            $("#l3").fadeOut(400,function(){$("#l3").attr({"src":'images/painting/kartina_praga.png',"alt":'картина прага',"title":'картина прага','name':'wide'});}).fadeIn(800);
            $("#l4").fadeOut(600,function(){$("#l4").attr({"src":'images/painting/landyshi.png',"alt":'ландыши',"title":'ландыши','name':'wide'});}).fadeIn(1000); 
        }
        else {
            $("#l1").fadeOut(400,function(){$("#l1").attr({"src":'images/painting/rechka.png',"alt":'речка',"title":'речка','name':'wide'});}).fadeIn(500);
            $("#l2").fadeOut(600,function(){$("#l2").attr({"src":'images/painting/polevye_cvety_maslo.png',"alt":'полевые цветы масло',"title":'полевые цветы масло','name':'wide'});}).fadeIn(500);
            $("#l3").fadeOut(800,function(){$("#l3").attr({"src":'images/painting/kartina_praga.png',"alt":'картина прага',"title":'картина прага','name':'wide'});}).fadeIn(500);
            $("#l4").fadeOut(1000,function(){$("#l4").attr({"src":'images/painting/landyshi.png',"alt":'ландыши',"title":'ландыши','name':'wide'});}).fadeIn(500); 
        }
    }
    else if(i=='3'){
        $("#hf3").addClass('active');
        if($("#l3").is(":hidden")){
            $("#l1").fadeOut(0,function(){$("#l1").attr({"src":'images/painting/praga_most_zima.png',"alt":'прага мост зима',"title":'прага мост зима','name':'wide'});}).fadeIn(400);
            $("#l2").fadeOut(0,function(){$("#l2").attr({"src":'images/painting/karlov_most_zima.png',"alt":'карлов мост зима',"title":'карлов мост зима','name':'wide'});}).fadeIn(600);
            $("#l3").fadeOut(400,function(){$("#l3").attr({"src":'images/painting/karlov_most_leto.png',"alt":'карлов мост лето',"title":'карлов мост лето','name':'wide'});}).fadeIn(800);
            $("#l4").fadeOut(600,function(){$("#l4").attr({"src":'images/painting/praga_most_leto.png',"alt":'прага мост лето',"title":'прага мост лето','name':'wide'});}).fadeIn(1000);
        }
        else {
            $("#l1").fadeOut(400,function(){$("#l1").attr({"src":'images/painting/praga_most_zima.png',"alt":'прага мост зима',"title":'прага мост зима','name':'wide'});}).fadeIn(500);
            $("#l2").fadeOut(600,function(){$("#l2").attr({"src":'images/painting/karlov_most_zima.png',"alt":'карлов мост зима',"title":'карлов мост зима','name':'wide'});}).fadeIn(500);
            $("#l3").fadeOut(800,function(){$("#l3").attr({"src":'images/painting/karlov_most_leto.png',"alt":'карлов мост лето',"title":'карлов мост лето','name':'wide'});}).fadeIn(500);
            $("#l4").fadeOut(1000,function(){$("#l4").attr({"src":'images/painting/praga_most_leto.png',"alt":'прага мост лето',"title":'прага мост лето','name':'wide'});}).fadeIn(500);
        }
    }
	else if(i=='4'){ 
        $("#hf4").addClass('active');
        $("#l1").fadeOut(1400,function(){$("#l1").attr({"src":'images/painting/optimo.png',"alt":'собор',"title":'собор','name':'thin'});}).fadeIn(500);
        $("#l2").fadeOut(1600,function(){$("#l2").attr({"src":'images/painting/bridge_and_man.png',"alt":'человек и мост, искусство',"title":'человек на мосту','name':'thin'});}).fadeIn(500);
        $("#l3").hide(600);
        $("#l4").hide(800);
    }
    else if(i=='5'){ 
        $("#hf5").addClass('active');
        $("#l1").fadeOut(1400,function(){$("#l1").attr({"src":'images/painting/muzhskoj_natyurmort.png',"alt":'мужской натюрморт',"title":'мужской натюрморт','name':'thin'});}).fadeIn(500);
        $("#l2").fadeOut(1600,function(){$("#l2").attr({"src":'images/painting/georginy.png',"alt":'георгины',"title":'георгины','name':'thin'});}).fadeIn(500);
        $("#l3").hide(600);
        $("#l4").hide(800);
    }
    else if(i=='6'){ 
        $("#hf6").addClass('active');
        $("#l1").fadeOut(800,function(){$("#l1").attr({"src":'images/painting/venecianskie_kukly.png',"alt":'венецианские куклы',"title":'венецианские куклы','name':'thin'});}).fadeIn(500);
        $("#l2").fadeOut(1000,function(){$("#l2").attr({"src":'images/painting/marko.png',"alt":'вход в собор св€того марка',"title":'собор св€того марка','name':'thin'});}).fadeIn(500);
        $("#l3").hide(600);
        $("#l4").hide(800);
    }
    else if(i=='7'){ 
        $("#hf7").addClass('active');
        $("#l1").fadeOut(800,function(){$("#l1").attr({"src":'images/painting/botanicheskij_sad.png',"alt":'ботанический сад',"title":'ботанический сад','name':'thin'});}).fadeIn(500);
        $("#l2").fadeOut(1000,function(){$("#l2").attr({"src":'images/painting/vydubichi.png',"alt":'выдубичи',"title":'выдубичи','name':'thin'});}).fadeIn(500);
        $("#l3").hide(600);
        $("#l4").hide(800);
    }
    else if(i=='8'){ 
        $("#hf8").addClass('active');
        $("#l1").fadeOut(800,function(){$("#l1").attr({"src":'images/painting/irisy.png',"alt":'ирисы',"title":'ирисы','name':'thin'});}).fadeIn(500);
        $("#l2").fadeOut(1000,function(){$("#l2").attr({"src":'images/painting/belye_rozy.png',"alt":'белые розы',"title":'белые розы','name':'thin'});}).fadeIn(500);
        $("#l3").hide(600);
        $("#l4").hide(800);
    }
    else if(i=='9'){ 
        $("#hf9").addClass('active');
        $("#l1").fadeOut(800,function(){$("#l1").attr({"src":'images/painting/siren.png',"alt":'сирень',"title":'сирень','name':'thin'});}).fadeIn(500);
        $("#l2").fadeOut(1000,function(){$("#l2").attr({"src":'images/painting/utro.png',"alt":'утро',"title":'утро','name':'thin'});}).fadeIn(500);
        $("#l3").hide(600);
        $("#l4").hide(800);
    }
    else if(i=='prev'){
            $("#hf1").addClass('active');
            if($("#l3").is(":hidden")){
                $("#l1").fadeOut(0,function(){$("#l1").attr("src",'images/painting/veneciya.png');}).fadeIn(400);
                $("#l2").fadeOut(0,function(){$("#l2").attr("src",'images/painting/veneciya_grand_kanal.png');}).fadeIn(600);
                $("#l3").fadeOut(400,function(){$("#l3").attr("src",'images/painting/sobor.png');}).fadeIn(800);
                $("#l4").fadeOut(600,function(){$("#l4").attr("src",'images/painting/praga_chasy.png');}).fadeIn(1000); 
            }
            else {
                $("#l1").fadeOut(400,function(){$("#l1").attr("src",'images/painting/veneciya.png');}).fadeIn(500);
                $("#l2").fadeOut(600,function(){$("#l2").attr("src",'images/painting/veneciya_grand_kanal.png');}).fadeIn(500);
                $("#l3").fadeOut(800,function(){$("#l3").attr("src",'images/painting/sobor.png');}).fadeIn(500);
                $("#l4").fadeOut(1000,function(){$("#l4").attr("src",'images/painting/praga_chasy.png');}).fadeIn(500);
            }
    }
    else if(i=='next'){
            $("#hf8").addClass('active');
            $("#l1").fadeOut(800,function(){$("#l1").attr("src",'images/painting/siren.png');}).fadeIn(500);
            $("#l2").fadeOut(1000,function(){$("#l2").attr("src",'images/painting/utro.png');}).fadeIn(500);
            $("#l3").hide(600);
            $("#l4").hide(800);
    }
}