<?php
// SocialPhish Demo - Safe event logger
// Does NOT track real IPs, user agents, or any personal data
$logFile = 'demo_events.log';
$event = date('Y-m-d H:i:s') . " | demo_page_opened | brand=paypal\n";
file_put_contents($logFile, $event, FILE_APPEND | LOCK_EX);
?>