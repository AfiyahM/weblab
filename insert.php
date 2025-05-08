<!DOCTYPE html>
<html>
<head>
    <title>Insert Page</title>
</head>
<body>
    <center>
        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            // Database credentials
            $servername = "localhost";
            $username = "root";
            $password = "";
            $dbname = "staff";

          
            $conn = mysqli_connect($servername, $username, $password, $dbname);

            if ($conn === false) {
                die("ERROR: Could not connect. " . mysqli_connect_error());
            }

           
            $first_name = $_POST['first_name'];
            $last_name = $_POST['last_name'];
            $gender = $_POST['gender'];
            $address = $_POST['address'];
            $email = $_POST['email'];

            // Update: insert into `information` instead of `college`
            $sql = "INSERT INTO information (first_name, last_name, gender, address, email) 
                    VALUES ('$first_name', '$last_name', '$gender', '$address', '$email')";

            if (mysqli_query($conn, $sql)) {
                echo "<h3>Data stored in the <b>information</b> table successfully.</h3>";
                echo "<p>Submitted Data:</p>";
                echo nl2br("$first_name\n$last_name\n$gender\n$address\n$email");
            } else {
                echo "ERROR: Could not execute query. " . mysqli_error($conn);
            }

            mysqli_close($conn);
        } else {
            echo "<h3>This page expects data via POST.</h3>";
        }
        ?>
    </center>
</body>
</html>
