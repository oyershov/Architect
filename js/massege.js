document.getElementById('form1').addEventListener('submit', function(evt){
  var http = new XMLHttpRequest(), f = this;
  evt.preventDefault();
  http.open("POST", "../massege.php", true); 
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=windows-1251");
  http.send("nameFF=" + f.nameFF.value + "&contactFF=" + f.contactFF.value + "&messageFF=" + f.messageFF.value);
  http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
      swal("���������(��) " + http.responseText + '.', "���� ��������� ������� ����������.","success","OK");    
      f.messageFF.removeAttribute('value'); // �������� ���� ��������� (��� ������)
      f.messageFF.value='';
    }
  }
  http.onerror = function() {
    swal("��������, ������ �� ���� ��������");
  }
}, false);