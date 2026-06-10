<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
    exit;
}

$name    = isset($_POST['name']) ? strip_tags(trim($_POST['name'])) : '';
$email   = isset($_POST['email']) ? strip_tags(trim($_POST['email'])) : '';
$phone   = isset($_POST['phone']) ? strip_tags(trim($_POST['phone'])) : '';
$service = isset($_POST['service']) ? strip_tags(trim($_POST['service'])) : '';
$message = isset($_POST['message']) ? strip_tags(trim($_POST['message'])) : '';

if (empty($name) || empty($email) || empty($message)) {
    echo json_encode(['success' => false, 'message' => 'Please fill in all required fields.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Please enter a valid email address.']);
    exit;
}

$to      = 'sales@topcranestransport.com';
$subject = 'New Contact Form Inquiry - Top Cranes General Transport';

$body  = "<html><body style='font-family:Arial,sans-serif;padding:20px;'>";
$body .= "<h2 style='color:#F26836;'>New Contact Form Submission</h2>";
$body .= "<table style='border-collapse:collapse;width:100%;'>";
$body .= "<tr><td style='padding:8px 12px;background:#f5f5f5;font-weight:bold;width:120px;'>Name</td><td style='padding:8px 12px;'>$name</td></tr>";
$body .= "<tr><td style='padding:8px 12px;background:#f5f5f5;font-weight:bold;'>Email</td><td style='padding:8px 12px;'>$email</td></tr>";
$body .= "<tr><td style='padding:8px 12px;background:#f5f5f5;font-weight:bold;'>Phone</td><td style='padding:8px 12px;'>" . (!empty($phone) ? $phone : 'N/A') . "</td></tr>";
$body .= "<tr><td style='padding:8px 12px;background:#f5f5f5;font-weight:bold;'>Service</td><td style='padding:8px 12px;'>" . (!empty($service) ? $service : 'N/A') . "</td></tr>";
$body .= "<tr><td style='padding:8px 12px;background:#f5f5f5;font-weight:bold;vertical-align:top;'>Message</td><td style='padding:8px 12px;'>" . nl2br($message) . "</td></tr>";
$body .= "</table>";
$body .= "<p style='margin-top:20px;color:#888;font-size:12px;'>This email was sent from the Top Cranes General Transport website contact form.</p>";
$body .= "</body></html>";

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Thank you! Your message has been sent successfully.']);
} else {
    echo json_encode(['success' => false, 'message' => 'Sorry, something went wrong. Please try again later.']);
}
