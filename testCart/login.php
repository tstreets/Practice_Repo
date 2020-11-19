<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <nav>
        <a href="index.php">Memberships</a>
        <a href="cart.php">Cart</a>
        <a href="index.php">Login</a>
    </nav>

    <form action="trylogin.php" method='POST'>
        <label>Email:</label>
        <input type="email" name='email'>

        <label>Password</label>
        <input type="password" name='password'>

        <input type="submit" value="Login">
    </form>
</body>
</html>