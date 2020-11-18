<?php

function base_url() {
    return 'http://localhost/practice_sites/Practice_Repo/testCart';
}

//Params needed to connect to db
$params = array(
    'host'=>'localhost:3306',
    'user'=>'phpuser',
    'password'=>'phpuser',
    'name'=>'testcart_db'
);

//This is teh actual connect need for making sql calls
$link = mysqli_connect($params['host'], $params['user'], $params['password'], $params['name']);

if(!$link) { 
    die('Connect Error (' . mysqli_connect_errno() . ') '. mysqli_connect_error()); 
}