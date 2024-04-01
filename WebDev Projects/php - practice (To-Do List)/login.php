<?php
$conn = mysqli_connect("127.0.0.1","root","","todo");
if (!$conn){
    echo "Failed to establish connection with database. Please try again !";
    echo mysqli_connect_error();
}

$email = $_POST['email'];
$password = $_POST['password'];
$password = sha1($password);

$sql = "SELECT * from users where email='$email' and password='$password'";
$result = mysqli_query($conn,$sql);

if(!$result){
    echo "Couldn't find the account with the specified email Id and/or password. Please Sign Up.";
    echo mysqli_error($conn);
}

$row = mysqli_fetch_assoc($result);
$full_name = $row['name'];
$email = $row['email'];
$password=$row['password'];
$user_id = $row['user_id'];

echo "<br> $full_name is your name. <br> $email is your email id. <br> $password is your secure password. <br> $user_id is your user_id.";
?>