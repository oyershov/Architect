document.getElementById('form1').addEventListener('submit', function(evt){
  var http = new XMLHttpRequest(), f = this;
  evt.preventDefault();
  http.open("POST", "../massege.php", true); 
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=windows-1251");
  http.send("nameFF=" + f.nameFF.value + "&contactFF=" + f.contactFF.value + "&messageFF=" + f.messageFF.value);
  http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
      swal("Уважаемый(ая) " + http.responseText + '.', "Ваше сообщение успешно отправлено.","success","OK");    
      f.messageFF.removeAttribute('value'); // очистить поле сообщения (две строки)
      f.messageFF.value='';
    }
  }
  http.onerror = function() {
    swal("Извините, данные не были переданы");
  }
}, false);