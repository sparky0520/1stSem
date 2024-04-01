<?php
$conn = mysqli_connect("127.0.0.1","root","","todo");
if (!$conn){
    echo mysqli_connect_error();
    echo "Failed to establish connection with database. Please try again !";
}

$full_name = $_POST['full_name'];
$email = $_POST['email'];
$password = $_POST['password'];
$password = sha1($password);

$sql = "INSERT INTO users (name,email,password) values ('$full_name','$email','$password')";
$result=mysqli_query($conn,$sql);

if(!$result){
    echo mysqli_error($conn);
    echo "Couldn't insert data into database";
}
echo "User Successfully registered !!! <br> Enjoy using the application <br><br> Press back to use app";
mysqli_close($conn);

?>