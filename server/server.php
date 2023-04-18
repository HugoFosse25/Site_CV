<?php

    $servername = "127.0.0.1";
    $username = "root";
    $password = "root";
    $dbname = "hugofosse_db";

    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Récupère les données envoyées par la requête AJAX
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Effectue l'insertion dans la base de données
    $sql = "INSERT INTO message (name, email, content) VALUES ('$name', '$email', '$message')";
    if ($conn->query($sql) === TRUE) {
    echo "Insertion réussie";
    } else {
    echo "Erreur : " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
?>
