<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Products</title>
</head>
<body>
    <nav>
        <a href="index.php">Memberships</a>
        <a href="cart.php">Cart</a>
        <a href="index.php">Login</a>
    </nav>
    
    <div class="membership">
        <h1>Membership 1</h1>
        <form action="addtocart.php" method='POST'>
            <input type="text" name="name" value='Membership1' hidden>
            <input type="text" name="photo" value='misc.png' hidden>
            <input type="text" name="desc" value='Description' hidden>
            <input type="submit" value="Add to cart">
        </form>
    </div>
    
    <div class="membership">
        <h1>Membership 2</h1>
        <form action="addtocart.php" method='POST'>
            <input type="text" name="name" value='Membership2' hidden>
            <input type="text" name="photo" value='misc.png' hidden>
            <input type="text" name="desc" value='Description2' hidden>
            <input type="submit" value="Add to cart">
        </form>
    </div>

</body>
</html>