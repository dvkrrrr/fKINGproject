$fio = $_POST['fio'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$date = $_POST['date'];
$address = $_POST['address'];

$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$phone = htmlspecialchars($phone);
$date = htmlspecialchars($date);
$address = htmlspecialchars($address);

$fio = urldecode($fio);
$email = urldecode($email);
$phone = urldecode($phone);
$date = urldecode($date);
$address = urldecode($address);

$fio = trim($fio);
$email = trim($email);
$phone = urldecode($phone);
$date = urldecode($date);
$address = urldecode($address);

echo $fio;
echo "<br>";
echo $email;

if (mail("exampleforproject@mail.ru", "Заказ с сайта", "ФИО:".$fio.". E-mail: ".$email ,". : ".$date. ". : ".$address. ". : ".$phone ,"From: otvet.servera@mail.ru \r\n"))
 {
    echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}
