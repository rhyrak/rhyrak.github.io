<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Activity5 Preview</title>
</head>
<body>
    <h1>Preview</h1>
    <?php
		if (!empty($_POST["name"]))
            echo $_POST["name"];
        else
            echo 'Not provided';
        echo "<br>";
		if (!empty($_POST["username"]))
            echo $_POST["username"];
        else
            echo 'Not provided';
        echo "<br>";
		if (!empty($_POST["password"]))
            echo $_POST["password"];
        else
            echo 'Not provided';
        echo "<br>Address: ";
		if (!empty($_POST["address"]))
            echo $_POST["address"];
        else
            echo 'Not provided';
        echo "<br>";
        if (!empty($_POST["country"]))
            echo $_POST["country"];
        else
            echo 'Not provided';
        echo "<br>Zip: ";
        if (!empty($_POST["zip"]))
            echo $_POST["zip"];
        else
            echo 'Not provided';
        echo "<br>";
        if (!empty($_POST["email"]))
            echo $_POST["email"];
        else
            echo 'Not provided';
        echo "<br>";

        for ($i = 0; $i<sizeof($_POST["languages"]); $i++) {
            echo $_POST["languages"][$i]."<br>";
        }

        echo "About: ";
        if (!empty($_POST["about"]))
            echo $_POST["about"];
        else
            echo 'Not provided';

    ?>
</body>
</html>