<?php
// PHP Configuration for Portfolio
// Make sure your hosting provider has these settings enabled

// Error reporting for production (disable in live environment)
// error_reporting(0);
// ini_set('display_errors', 0);

// For development, you can enable errors:
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set timezone
date_default_timezone_set('Europe/Berlin'); // Adjust to your timezone

// Security settings
ini_set('session.cookie_httponly', 1);
ini_set('session.cookie_secure', 1);
ini_set('session.use_strict_mode', 1);

// Mail function check
if (!function_exists('mail')) {
    error_log('PHP mail function is not available on this server');
}
?>
