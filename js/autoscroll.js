/*$(document).ready(function(){
    $('html, body').animate({ scrollTop: ('1000').offset().top }, 500);
    }
    return false; // ��������� ����������� ��������
});
*/
$("button").click(function(){
var s = $("#scroll").scrollTop();
$("span").text("scrollTop = " + s)
});
