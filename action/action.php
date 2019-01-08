Здравствуйте, <?php echo htmlspecialchars($_POST['photo']); ?>.
Ваш номер телефона <?php echo (int)$_POST['phone']; ?> лет.
<?php 
$name = htmlspecialchars($_POST['photo']);
$phone = (int)$_POST['phone'];

$to = 'metalldemontag2019@gmail.com';
$subject = 'Заказ демонтажа';
$message = "Пользователь " . $name . ", номер телефона " . $phone;

mail($to, $subject, $message);

session_start();
 
if(isset($_POST["send"])) {
    $_SESSION["send"] = 'Сообщение отправлено!';
    exit('<meta http-equiv="refresh" content="0; url=../index.html" />');
}

?>