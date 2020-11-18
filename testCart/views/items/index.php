<?php
    require('../../config/config.php');
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

    <h1>Items List</h1>

    <div class='itemlist'>
        <div class="item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Korb_mit_Br%C3%B6tchen.JPG/250px-Korb_mit_Br%C3%B6tchen.JPG" alt="">
            <h1>Bread</h1>
            <!-- Send the info over to addtocart.php
                I used POST so it has to match on addtocart.php page 
                Each field I wanna send I gotta give it a name.
             -->
            <form class='additem' action='addtocart.php' method='POST'>
                <input name='name' type="text" value='Bread' hidden>
                <input name='quantity' type="number" value='1' min='1'>
                <input type="submit" value='Add to cart'>
            </form>
        </div>

        
        <div class="item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Made20bacon.png/220px-Made20bacon.png" alt="">
            <h1>Bacon</h1>
            <!-- Send the info over to addtocart.php
                I used POST so it has to match on addtocart.php page 
                Each field I wanna send I gotta give it a name.
             -->
            <form class='additem' action='addtocart.php' method='POST'>
                <input name='name' type="text" value='Bacon' hidden>
                <input name='quantity' type="number" value='1' min='1'>
                <input type="submit" value='Add to cart'>
            </form>
        </div>
    </div>
    
</body>
</html>