<?php
    require('connect.php');

    $name = $_POST['name'];
    $photo = $_POST['photo'];
    $desc = $_POST['desc'];
    $user_id = $_SESSION['id'];;
    $message = "";

    if($name != '' && $photo != '' && $desc != '' && $user_id != '') {
        $sql = "INSERT INTO `cart` (`id`, `description`, `name`, `photo`, `user_id`)
                VALUES (NULL, '$desc', '$name', '$photo', '$user_id')";
        $result = mysqli_query($link, $sql);

        if($result) {
            $message = 'Success';
        }
        else {
            $message = 'Failure';
        }
    } else {
        $message = 'Failure';
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
    
    <h1><?=$message?></h1>

</body>
</html>