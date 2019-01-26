<?php
require 'class.phpmailer.php';
require 'class.smtp.php';

$name = strip_tags($_POST['modal-name']);
$name = htmlspecialchars($name);
$name = mysql_escape_string($name);

$number = strip_tags($_POST['modal-phone']);
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
 
// Письмо
$mail->isHTML(true); 
$mail->Subject = 'Заказ демонтажа'; // Заголовок письма
$mail->Body = "Имя $name . Телефон $number"; // Текст письма

// Результат
if(!$mail->send()) {
 echo 'Message could not be sent.';
 echo 'Mailer Error: ' . $mail->ErrorInfo;
}