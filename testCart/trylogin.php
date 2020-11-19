<?php
    include('connect.php');

    $email = $_POST['email'];
    $password = $_POST['password'];

    if($email != '' && $password != '') {
        $sql = "SELECT * FROM `users` WHERE
                `email`='$email' AND
                `password`='$password' LIMIT 1";
        $result = mysqli_query($link, $sql);
        $row = $result->fetch_row();
        if($row) {
            $_SESSION['id'] = $row[0];
            echo json_encode($row[0]);
        }
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <nav>
        <a href="index.php">Memberships</a>
        <a href="cart.php">Cart</a>
        <a href="index.php">Login</a>
    </nav>
</body>
</html>