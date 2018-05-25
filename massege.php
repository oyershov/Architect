<?
if (array_key_exists('messageFF', $_POST)) {
   $to = 'sllota@mail.ru';
   $subject = 'Заполнена контактная форма с '.$_SERVER['HTTP_REFERER'];
   $subject = "=?windows-1251?b?". base64_encode($subject) ."?=";
   $nameFF = iconv("utf-8", "windows-1251",htmlspecialchars($_POST['nameFF'],ENT_QUOTES,'Windows-1251'));
   $emailFF = iconv("utf-8", "windows-1251",htmlspecialchars($_POST['contactFF'],ENT_QUOTES,'Windows-1251'));
   $messageFF = iconv("utf-8", "windows-1251",htmlspecialchars($_POST['messageFF'],ENT_QUOTES,'Windows-1251'));
   $message = "Новое сообщение slota-design.com.ua\nИмя: ".$nameFF."\nEmail: ".$emailFF."\nСообщение: ".$messageFF."\nIP: ".$_SERVER['REMOTE_ADDR'];
   $headers = 'Content-type: text/plain; charset="windows-1251"';
   $headers .= "MIME-Version: 1.0\r\n";
   $headers .= "Date: ". date('D, d M Y h:i:s O') ."\r\n";
   mail($to, $subject, $message, $headers);
   echo $nameFF;
}

?>