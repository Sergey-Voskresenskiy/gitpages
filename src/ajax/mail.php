<?php

  $email = $_POST['email'];
  $name = $_POST['name'];
  $company = $_POST['company'];
  $mess = $_POST['message'];

  $message = '
    <html>
      <head>
        <title>Письмо с портфолиос</title>
      </head>
      <body>
       <h2>$name</h2>
       <h2>$company</h2>
       <hr>
       <p>$mess</p>
      </body>
    </html>
  ';
  
  $subject = '=?utf-8?B?'.base64_encode('Сообщения с портфолио').'?=';
  $headers = 'From: $email\r\nReply-to:$email\r\nContent-type: text/html; charset=utf-8\r\n';
  
  $success = mail('work.sergey.voskresenskiy@gmail.com', $subject,  $message, $headers );
  
  echo $success;