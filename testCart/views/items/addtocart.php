<?php
    require('../../config/config.php');
    
    // Gets the name & quantity of the item
    $name = (isset($_POST['name'])) ? $_POST['name'] : 'N/A';
    $quantity = (isset($_POST['quantity'])) ? $_POST['quantity'] : 'N/A';

    // inserts it to the db
    $sql = "INSERT INTO `cart` (`id`, `user_id`, `item_name`, `item_quantity`)
            VALUES (NULL,0,'$name','$quantity')";
    
    $result = mysqli_query($link, $sql);
    //if it was successful let 'em know
    if($result) {
        $message = 'Item was sucessfully added';
    }
    else {
        $message = 'Sorry there was a problem';
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Items List</title>
    <link rel="stylesheet" href="<?=base_url()?>/assets/css/style.css">
</head>
<body>
    <nav>
        <a href="<?=base_url()?>">Home</a>
        <a href="<?=base_url()?>/views/items">Items</a>
        <a href="<?=base_url()?>/views/cart">Cart</a>
    </nav>

    <h1><?=$message?></h1>

    <label for="name">Name</label>
    <?=$name?>

    <label for="quantity">Quantity</label>
    <?=$quantity?>
    
</body>
</html>