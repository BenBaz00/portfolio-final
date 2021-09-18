<?php
require_once "Mail.php";
$configs = include("../../config.php");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$errors = array();
if ($_SERVER['REQUEST_METHOD'] === "POST") {

  // Post Validation
  if (empty($_POST['email'])) {
    $errors[] = 'Email is empty';
  } else {
    $email = $_POST['email'];

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Invalid email';
    }
  }
  if (empty($_POST['name'])) {
    $errors[] = 'Name is empty';
  } else {
    $name = $_POST['name'];
  }
  if (empty($_POST['message'])) {
    $errors[] = 'Message is empty';
  } else {
    $message = $_POST['message'];
  }

  // Email sending
  if (empty($errors)) {
    date_default_timezone_set("America/Chicago");
    $date = date('j, F Y h:i A');

    // Mail Server From
    $host = "ssl://smtp.dreamhost.com";
    $port = "465";

    // Compose Email
    $to = "contact@benjaminbazan.com";
    $email_from = "admin@benjaminbazan.com";
    $email_subject = $name . ' - Contacting you';

    $email_body = "Email: $email\n";
    $email_body .= "Date: $date\n\n";
    $email_body .= $message;


    $email_address = $email;
    

    $headers = array('From' => $email_from, 'To' => $to, 'Subject' => $email_subject, 'Reply-To' => $email_address);
    $smtp = Mail::factory('smtp', array('host' => $host, 'port' => $port, 'auth' => true, 'username' => $configs['username'], 'password' => $configs['pass']));
    $mail = $smtp->send($to, $headers, $email_body);


    if (PEAR::isError($mail)){
      $errors[] = "<p>" . $mail->getMessage() . "</p>";
    } else {
      $sent = true;
    }
  }
}
?>

<?php if (!empty($errors)) : ?>

{
  "status": "fail",
  "error":  <?php echo json_encode($errors) ?>
}
<?php endif; ?>


<?php if (isset($sent) && $sent === true) : ?>

{
  "status": "success",
  "message": "Your data was successfully submitted"
}
<?php endif; ?>