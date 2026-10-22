<?php
// SocialPhish Demo - Simulated authentication
// Does NOT store, log, or transmit any credentials
$logFile = 'demo_events.log';
$event = date('Y-m-d H:i:s') . " | simulation_completed | brand=shopping | result=demo_success\n";
file_put_contents($logFile, $event, FILE_APPEND | LOCK_EX);
header('Content-Type: application/json');
echo json_encode([
    'status' => 'demo_success',
    'message' => 'This is a security-awareness demonstration. No real authentication was performed.',
    'brand' => 'shopping'
]);
exit;
?>