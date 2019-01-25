<?php
// Файлы phpmailer
require 'class.phpmailer.php';
require 'class.smtp.php';

// Переменные
$name = strip_tags($_POST['phone-name']);
$name = htmlspecialchars($name);
$name = mysql_escape_string($name);
$number = strip_tags($_POST['phone']);
$number = htmlspecialchars($number);
$number = mysql_escape_string($number);

// Настройки
$mail = new PHPMailer;
$mail->isSMTP();
$mail->CharSet = 'UTF-8';
$mail->Host = 'smtp.yandex.ru'; 
$mail->SMTPAuth = true; 
$mail->Username = 'kornienko199004'; // Ваш логин в Яндексе. Именно логин, без @yandex.ru
$mail->Password = 'gsmg2404'; // Ваш пароль
$mail->SMTPSecure = 'ssl'; 
$mail->Port = 465;
$mail->setFrom("kornienko199004@yandex.ru"); // Ваш Email
$mail->addAddress("metalldemontag2019@gmail.com"); // Email получателя

// Прикрепление файлов
 for ($ct = 0; $ct < count($_FILES['userfile']['tmp_name']); $ct++) {
 $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['userfile']['name'][$ct]));
 $filename = $_FILES['userfile']['name'][$ct];
 if (move_uploaded_file($_FILES['userfile']['tmp_name'][$ct], $uploadfile)) {
 $mail->addAttachment($uploadfile, $filename);
 } else {
 $msg .= "Failed to move file to " . $uploadfile;
 }
 } 
 
// Письмо
$mail->isHTML(true); 
$mail->Subject = 'Оценка по фото'; // Заголовок письма
$mail->Body = "Имя $name . Телефон $number"; // Текст письма

// Результат
if(!$mail->send()) {
 echo 'Message could not be sent.';
 echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
 echo 'ok';
}