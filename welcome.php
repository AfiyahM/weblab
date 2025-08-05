<?php
        $fullname = $user_email = $user_gender = $user_feedback = $user_age = "";
        $errors = [];

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            if (empty($_POST['fullname'])) {
                $errors[] = "Full Name is required.";
            } else {
                $fullname = htmlspecialchars($_POST['fullname']);
            }

            if (empty($_POST['user_email'])) {
                $errors[] = "Email Address is required.";
            } elseif (!filter_var($_POST['user_email'], FILTER_VALIDATE_EMAIL)) {
                $errors[] = "Invalid email format.";
            } else {
                $user_email = htmlspecialchars($_POST['user_email']);
            }

            if (empty($_POST['user_age'])) {
                $errors[] = "Age is required.";
            } elseif (!is_numeric($_POST['user_age']) || $_POST['user_age'] < 1 || $_POST['user_age'] > 120) {
                $errors[] = "Age must be a number between 1 and 120.";
            } else {
                $user_age = htmlspecialchars($_POST['user_age']);
            }

            if (empty($_POST['user_feedback'])) {
                $errors[] = "Feedback is required.";
            } else {
                $user_feedback = htmlspecialchars($_POST['user_feedback']);
            }

            if (empty($_POST['user_gender'])) {
                $errors[] = "Gender is required.";
            } else {
                $user_gender = htmlspecialchars($_POST['user_gender']);
            }

            if (empty($errors)) {
                echo "<h2>Details Submitted:</h2>";
                echo "Full Name: " . $fullname . "<br>";
                echo "Email: " . $user_email . "<br>";
                echo "Age: " . $user_age . "<br>";
                echo "Feedback: " . $user_feedback . "<br>";
                echo "Gender: " . $user_gender;
            } else {
                echo "<h2>Errors:</h2>";
                foreach ($errors as $error) {
                    echo $error . "<br>";
                }
            }
        }
    ?>