<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Registration Form</title>
</head>
<body>

    <h1>Registration Form</h1>
<form action="/Activity5-preview.php" method="POST">
    <div class="row">
        <label for="name">Name: </label>
        <input type="text" id="name" name="name" placeholder="Name">
    </div>
    <div class="row">
        <label for="username">Username: </label>
        <input type="text" id="username" name="username" placeholder="Username">
    </div>
    <div class="row">
        <label for="password">Password: </label>
        <input type="password" id="password" name="password" placeholder="Password">
    </div>
    <div class="row">
        <label for="address">Address: </label>
        <input type="text" id="address" name="address" placeholder="Address">
    </div>
    <div class="row">
        <label for="name">Country: </label>
        <select name="country">
            <option value="Not provided">(Please select a country)</option>
            <option value="TR">TR</option>
            <option value="USA">USA</option>
            <option value="CAD">CAD</option>
        </select>
    </div>
    <div class="row">
        <label for="zip">ZIP Code: </label>
        <input type="number" id="zip" name="zip" placeholder="ZIP Code">
    </div>
    <div class="row">
        <label for="email">Email: </label>
        <input type="email" id="email" name="email" placeholder="Email">
    </div>
    <div class="row">
        <label for="">Sex: </label>
        <div>
            <input type="radio" id="male" name="sex" value="Male">
            <label for="male">Male </label>
            <input type="radio" id="female" name="sex" value="Female">
            <label for="male">Female </label>
        </div>
    </div>
    <div class="row">
        <label for="">Language:</label>
        <div>
            <input type="checkbox" name="languages[]" value="english" id="english"/>
            <label for="english">English</label>
            <input type="checkbox" name="languages[]" value="french" id="french"/>
            <label for="french">French</label>
            <input type="checkbox" name="languages[]" value="german" id="german"/>
            <label for="german">German</label>
        </div>
    </div>
    <div class="row">
        <label for="about">About:</label>
        <textarea id="about" name="about"></textarea>
    </div>
        <div class="row">
            <label for=""></label>
            <input type="submit" value="Submit">
        </div>
    </form>
</body>
</html>