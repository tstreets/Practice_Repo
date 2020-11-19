<?php
    include('connect.php');

    $user_id = $_SESSION['id'];

    $sql = "SELECT * FROM `cart` WHERE `user_id`='$user_id'";
    $result = mysqli_query($link, $sql);
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

    <?php
        while($row = $result->fetch_row()) {
            $name = $row[2];
            $desc = $row[1];
            echo "
                <h1>$name</h1>
                <p>$desc</p>
            ";
        }

    ?>
    
</body>
</html>