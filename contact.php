<?php 
$email_to = "darianlio97@gmail.com";
$email_subject = "RE: Contact Me";
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$email_message .= "Name: ".clean_string($name)."\n";
$email_message .= "Message: ".clean_string($message)."\n";
$headers = 'From: '.$email."\r\n".
'Reply-To: '.$email."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
?>