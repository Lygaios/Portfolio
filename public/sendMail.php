<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"):
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
        case("POST"):
            header("Access-Control-Allow-Origin: *");
            header("Content-Type: application/json");
            
            $json = file_get_contents('php://input');
            $params = json_decode($json);
    
            $email = $params->email;
            $name = $params->name;
            $message = $params->message;

            $recipient = 'joshuabrunke1@gmail.com';  
            $subject = "Contact From <$email>";
            $message = "From:" . $name . "<br>" . $message ;
    
            $headers   = array();
            $headers[] = 'MIME-Version: 1.0';
            $headers[] = 'Content-type: text/html; charset=utf-8';
            $headers[] = "From: noreply@joshuabrunke.com";

            $result = mail($recipient, $subject, $message, implode("\r\n", $headers));
            
            if ($result) {
                http_response_code(200);
                echo json_encode(['status' => 'success', 'message' => 'Email sent successfully']);
            } else {
                http_response_code(500);
                echo json_encode(['status' => 'error', 'message' => 'Failed to send email']);
            }
            break;
        default:
            header("Allow: POST", true, 405);
            exit;
    } 
