<?php

// server variables
$servername = "localhost";
$username = "root";
$password = "";
$database = "users";

// creating connection
$conn = mysqli_connect($servername, $username, $password, $database);

// testing the connection
if (!$conn) {
    die(mysqli_connect_error());
}
