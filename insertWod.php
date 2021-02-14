<?php
ob_start();
session_start();
require_once 'db_connect.php';


// if session is not set this will redirect to login page

if (isset($_SESSION["admin"])) {
    header("Location: admin.php");
    exit;
}
if (!isset($_SESSION['user'])) {
    header("Location: index.php");
    exit;
}
// select logged-in users details
$res = mysqli_query($conn, "SELECT * FROM users WHERE userId=" . $_SESSION['user']);
$userRow = mysqli_fetch_array($res, MYSQLI_ASSOC);

//NAVBAR
include('navbarUser.php');


if ($_POST) {
    //table wod

    $userId = $_SESSION['user'];
    $wodId = $_POST['wodId'];
    $body = $_POST['trainedParts'];
    $dayId = $_POST['dayId'];


    // UPDATE calendar SET wodId = '2' WHERE userId = '3' AND dayId = '5'

    $sql = "UPDATE calendar SET wodId = '$wodId' WHERE userId = '$userId' AND dayId = '$dayId'";



    if ((mysqli_query($conn, $sql) && ($dayId != 24))) {
        echo "<div class='text-dark pt-2 pb-2'>";
        echo "<p><center><b>Super, du hast es geschafft! </b></center></p>";
        echo "<center> <img src='./img/jumping-jacks.png' alt='vor Freude hüpfender Hanno' style='width:365; height: 440px' ></center>";
        // echo "<p><center><b><Dein Körper wird es dir danken: mit diesem Wod hast du folgende Teile in Schwung gebracht: </b></center></p>";
        //   echo "<p>" . $body . " </p>";
        header("refresh:3; url=home.php");

        echo "</div>";
    }
    if ((mysqli_query($conn, $sql) && ($dayId == 24))) {

?>


        <!DOCTYPE html>
        <html>

        <head>
            <title>Frohe Weihnachten, <?php echo $userRow['userName']; ?></title>
            <link rel="stylesheet" href="css/style.css">

            <!-- Required meta tags -->
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

            <!-- Bootstrap CSS -->
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <link rel="stylesheet" type="text/css" href="style.css">
            <link rel="preconnect" href="https://fonts.gstatic.com">
            <link href="https://fonts.googleapis.com/css2?family=Fahkwang:wght@200&display=swap" rel="stylesheet">
        </head>


        <body class="snowfall">

            <div class="mycanvas"></div>
            <div class="snow"> </div>
            <div class="snowfall">
                <h1 id="playground"><strong class="text-center"> Frohe </strong> <br><strong class="text-center"> Weihnachten!!!</strong></h1>
                <h1 id="playground2"><strong class="text-center"> <strong>Frohe Weihnachten!!!</strong></h1>
                <div id="container">

                    <div id="gallery" class="slider">

                        <img id='rudolfo' src='./img/rudi_der_baumschlaegerer2.png' alt='Rudi der Baumschlägerer'>
                        <img id='elftree' src='./img/elfen_christbaum2.png' alt='3 Elfen, die gemeinsam den Christbaum tragen'>
                        <img id='hanno24' src='./img/hannogeschenk2.png' alt='Hanno mit einem Geschenksberg'>
                        <img id='danke' src='./img/danke.png' alt='Danke'>
                    </div>

                </div>

                <br><br>


                </p>
            </div>






        </body>

        </html>

<?php

        // echo "<p><center><b> Frohe Weihnachten!!! </b></center></p>";
    } else {
        // echo "Error " . $sql . ' ' . $conn->error;
    }
}


$conn->close();
