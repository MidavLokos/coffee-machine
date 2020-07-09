<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">

    <title>Кофе-машина</title>
  </head>
  <body>
<div class="container">
  <div class="row mt-2">
    <div class="col-6 coffee-list d-flex flex-column justify-content-around">
      <div class="coffee-item" cost="50" data-name="Американо" data-name-eng:"Americano" onclick="cookCoffee(`Американо`, 50, this)">
        <img src="img/americano.png" alt="Американо">
        <span>Американо - 50 руб.</span>
      </div>
      <div class="coffee-item" onclick="cookCoffee(`Каппучино`, 92, this)">
        <img src="img/cappuccino.png" alt="Каппучино">
        <span>Каппучино - 92 руб.</span>
      </div>
      <div class="coffee-item" onclick="cookCoffee(`Эспрессо`, 66, this)">
        <img src="img/espresso.png" alt="Эспрессо">
        <span>Эспрессо - 66 руб.</span>
      </div>
      <div class="coffee-item" onclick="cookCoffee(`Латтэ`, 128, this)">
        <img src="img/latte.jpg" alt="Латтэ">
        <span>Латтэ - 128 руб.</span>
      </div>
    </div>
    <div class="col-6 coffee-oper">
      <div class="row">
        <div class="col-6">
          <div class="display">
            <span>Выберите кофе</span>
            <div class="progress mt-2">
              <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 0%"></div>
              </div>
          </div>
          <div class="cup mt-3">
            <img src="img/americano.png" alt="">
          </div>
        </div>
        <div class="col-6">
          <div class="input-group mb-3">
              <input type="text" class="form-control balance" placeholder="Баланс">
              <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2">&#8381;</span>
              </div>
            </div>

          <div class="atm">
            <img src="img/bill_acc.png" alt="">
          </div>
          <button class="my-3 btn btn-primary btn-block change-button">Сдача</button>
          <div class="change-box"></div>
        </div>
      </div>
    </div>
  </div>
</div>
    <!-- Optional JavaScript -->
    <!--<script src= "lesson.js"></script>-->
    <script src = "script.js"></script>
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  </body>
</html>