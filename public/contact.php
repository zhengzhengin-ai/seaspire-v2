<?php

header("Content-Type: application/json; charset=UTF-8");



if ($_SERVER["REQUEST_METHOD"] !== "POST") {

    http_response_code(405);

    echo json_encode([
        "success" => false,
        "message" => "Method not allowed."
    ]);

    exit;

}



$company  = trim($_POST["company"] ?? "");
$contact  = trim($_POST["contact"] ?? "");
$email    = trim($_POST["email"] ?? "");
$country  = trim($_POST["country"] ?? "");
$phone    = trim($_POST["phone"] ?? "");
$products = trim($_POST["products"] ?? "");
$message  = trim($_POST["message"] ?? "");





if (
    empty($company) ||
    empty($contact) ||
    empty($email) ||
    empty($message)
) {

    http_response_code(400);

    echo json_encode([
        "success" => false,
        "message" => "Please complete required fields."
    ]);

    exit;

}





if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {

    http_response_code(400);

    echo json_encode([
        "success" => false,
        "message" => "Please enter a valid email address."
    ]);

    exit;

}





$to = "info@seaspirephuket.com";



$subject =
    "New Seafood Inquiry from " . $company;





$emailBody = "

New Seafood Inquiry

--------------------------------

Company:
$company

Contact:
$contact

Email:
$email

Country:
$country

Phone:
$phone

Interested Products:
$products

Requirements:
$message

--------------------------------

";





$headers = [

    "From: SEASPIRE Website <noreply@seaspirephuket.com>",

    "Reply-To: " . $email,

    "Content-Type: text/plain; charset=UTF-8"

];





$sent = mail(

    $to,

    $subject,

    $emailBody,

    implode("\r\n", $headers)

);





if ($sent) {

    echo json_encode([

        "success" => true,

        "message" =>
            "Thank you for your inquiry. Our team will contact you shortly."

    ]);

} else {

    http_response_code(500);

    echo json_encode([

        "success" => false,

        "message" =>
            "Unable to send inquiry. Please try again."

    ]);

}

?>