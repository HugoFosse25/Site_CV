<?php

    include 'config.php';

    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Récupère les données envoyées par la requête AJAX
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    if(!$name || !$email || !$message || !$subject) {
        die("Connection failed: " . $conn->connect_error);
        $conn->close();
    } else{
        $sql = "INSERT INTO message (name, email, subject, content) VALUES ('$name', '$email', '$subject', '$message')";
        if ($conn->query($sql) === TRUE) {
        echo "Insertion réussie";
        } else {
        echo "Erreur : " . $sql . "<br>" . $conn->error;
        }
    }
    $conn->close();
?>
