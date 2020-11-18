<?php
    require('../../config/config.php');

    // Get all items in the cart
    $sql = "SELECT * FROM `cart`
            WHERE `user_id`='0'";
    //this is what i got
    $result = mysqli_query($link, $sql);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cart</title>
    <link rel="stylesheet" href="<?=base_url()?>/assets/css/style.css">
</head>
<body>
    <nav>
        <a href="<?=base_url()?>">Home</a>
        <a href="<?=base_url()?>/views/items">Items</a>
        <a href="<?=base_url()?>/views/cart">Cart</a>
    </nav>

    <h1>Cart</h1>

    <?php
        // loop through what i got then show it on the screen
        while ($row = mysqli_fetch_array($result, MYSQLI_BOTH)){
            $name = $row['item_name'];
            $quantity = $row['item_quantity'];
            echo "
                <p>
                    <span><b>$name</b> </span>
                    <span> $quantity</span>
                </p>
            ";
        }

    ?>
    
</body>
</html>