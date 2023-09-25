<?php
$name="Undefined name";
if (isset($_POST['name'])){
    $name=$_POST['name'];   
}
$message="document.getElementById('name').innerHTML='$name';";
$to_email='kabaupaatrick@gmail.com';
$subject='Application';
$header[]='MIME-Version: 1.0'."\r\n";
$header[]='Content-type: text/html; charset=iso-8859-1'."\r\n";
$header[]='From: <'.$to_email.'>'."\r\n";
mail($to_email,$subject,$message,implode("\r\n",$header));


?>