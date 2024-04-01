<!doctype html>
<html lang="en">
<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="css/index.css">

  <title>To-Do List</title>
</head>

<body>
  <!-- Image and text -->
  <nav class="navbar navbar-dark" style="background-color: rgb(191, 96, 0);">
    <a class="navbar-brand" href="#">
      <img src="images/todo logo.jpeg" width="50" height="50" class="d-inline-block align-top" alt="">
      <span style="font-size: 30px; margin-left: 10px;">To-Do.js</span>
    </a>
    <div class="col-auto">
      <button class="btn btn-outline-light" id="signup" data-toggle="modal" data-target="#signupModal">Sign-Up</button>
      <button class="btn btn-light" id="login" data-toggle="modal" data-target="#loginModal">Login</button>
    </div>
  </nav>

  <div class="container-fluid" id="firstContainer">
    <div class="row" style="justify-content: center;">
      <div class="subrow" style="font-size: 40px; color: brown; font-weight: 700; margin-top: 80px; text-decoration: underline;">To-Do
        List.js</div>
    </div>
    <div class="row">
      <div class="subrow">
        <button style="border-radius: 50%; border: 0;"><img src="images/plusButton.jpg" alt="plus button" style="height: 50px; border-radius: 50%;"></button><span style="margin-left: 20px;">Press button to create new list</span>
      </div>
    </div>
    <div class="row">
      <div class="subrow">My Lists:</div>
      <!--<div>React element here</div>-->
    </div>
  </div>
  <div class="modal" id="signupModal">
    <div class=" modal-dialog modal-center-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-body" style="background-color: white; border-radius: 10px;">
          <h1>Sign-Up</h1>
          <form action="db_conn.php" method="post" style="margin-top: 20px; text-align: center;">
            <div class="form-group">
              <label for="full_name" style="margin-right: 2px;">Full Name</label>
              <input type="text" name="full_name" required> <br>
              <label for="email" style="margin-right: 15px;">Email ID</label>
              <input type="email" name="email" required> <br>
              <label for="password" style="margin-right: 8px;">Password</label>
              <input type="password" name="password">
            </div>
            <button class="btn btn-outline-danger" data-dismiss="modal">Cancel</button>
            <button name="submit" type="submit" class="btn btn-outline-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div class="modal" id="loginModal">
    <div class=" modal-dialog modal-center-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-body" style="background-color: white; border-radius: 10px;">
          <h1>Login</h1>
          <form action="login.php" method="post" style="margin-top: 20px; text-align: center;">
            <div class="form-group">
              <label for="email" style="margin-right: 15px;">Email ID</label>
              <input type="email" name="email" required> <br>
              <label for="password" style="margin-right: 8px;">Password</label>
              <input type="password" name="password">
            </div>
            <button class="btn btn-outline-danger" data-dismiss="modal">Cancel</button>
            <button name="submit" type="submit" class="btn btn-outline-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- Optional JavaScript -->
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  <script src="index.js"></script>
</body>

</html>