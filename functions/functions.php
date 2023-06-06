<?php
// ********************* Database Connection ********************* //
$user = "root";
$pass = "";
$host = "localhost";
$db = "db_millobooks";

// Create connection
$conn = mysqli_connect($host, $user, $pass, $db);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// ********************* Manage Query ********************* //
