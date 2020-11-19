<?php

$host = 'localhost:3306';
$user = 'phpuser';
$password = 'phpuser';
$db = 'testcart_db';

$link = mysqli_connect($host, $user, $password, $db);
session_start();

if(!$link) {
    exit();
}