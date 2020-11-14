<?php
	
function Redirect($url, $permanent = false) {
    if (headers_sent() === false) {
        header('Location: ' . $url, true, ($permanent === true) ? 301 : 302);
    }
    exit();
}

if ($_SERVER['HTTP_REFERER']) {
    $redirect_url = $_SERVER['HTTP_REFERER'];
} else {
    $redirect_url = 'index.html';
}

if (strlen(trim($_POST['name'])) < 1) {
    Redirect($redirect_url);
} else {

    $data = $_POST;
    $to = "cfmeducational.services@gmail.com";
  	$subject = "[Website Message] " . "${data['subject']}";

    $message = "
        <html>
        <head>
          <title>CFM contact form</title>
        </head>
        <body>
          <table>
            <tr>
                <td><strong>Name:</strong></td> <td>${data['name']}</td>
            </tr>
            <tr>
                <td><strong>Email:</strong></td> <td>${data['email']}</td>
            </tr>
            <tr>
                <td><strong>Message:</strong></td> <td>${data['message']}</td>
            </tr>
          </table>
        </body>
        </html>
    ";

    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

    $headers .= 'From: CFM Educational Services <cfm@cfmedu.com>' . "\r\n";

    if (mail($to, $subject, $message, $headers)) {
        Redirect('thank.html');
    } else {
        Redirect($redirect_url);
    }
}

?>