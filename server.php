<?php


// lettura file
$database = file_get_contents(__DIR__ .'/dischi.json');



// Struttura PHP
$disks = json_decode($database);
// var_dump($disks);


header('Content-Type: application/json');
echo json_encode($disks);