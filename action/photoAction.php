<?php

$name = htmlspecialchars($_POST['photo']);
$phone = (int)$_POST['phone'];

$to = 'metalldemontag2019@gmail.com';
$subject = 'Оценка по фотоЫ';
$message = "Пользователь " . $name . ", номер телефона " . $phone;

mail($to, $subject, $message);

exit('<meta http-equiv="refresh" content="0; url=../" />');
