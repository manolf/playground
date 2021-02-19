//Timer Tabata
secondsBeginning = 5;
secondsAction = 20;
secondsRest = 10;

// THINKING BIG


//WOD-ARRAY: wird in beginningTabata initiiert
var actionRounds = new Array();

function beginningTabata() {
  console.log("beginningTabata");

  // String Input für Runden:
  var action1 = document.getElementById("round1").value;
  var action2 = document.getElementById("round2").value;
  var action3 = document.getElementById("round3").value;
  var action4 = document.getElementById("round4").value;
  var action5 = document.getElementById("round5").value;
  var action6 = document.getElementById("round6").value;
  var action7 = document.getElementById("round7").value;
  var action8 = document.getElementById("round8").value;

  action1 != "" ? (actionRounds[0] = action1) : (actionRounds[0] = "1");
  action2 != "" ? (actionRounds[1] = action2) : (actionRounds[1] = "2");
  action3 != "" ? (actionRounds[2] = action3) : (actionRounds[2] = "3");
  action4 != "" ? (actionRounds[3] = action4) : (actionRounds[3] = "4");
  action5 != "" ? (actionRounds[4] = action5) : (actionRounds[4] = "5");
  action6 != "" ? (actionRounds[5] = action6) : (actionRounds[5] = "6");
  action7 != "" ? (actionRounds[6] = action7) : (actionRounds[6] = "7");
  action8 != "" ? (actionRounds[7] = action8) : (actionRounds[7] = "8");

  screenTabata.innerHTML = "Start in Seconds: ";
  clockTabata.innerHTML = secondsBeginning;
  secondsBeginning--;



  if (secondsBeginning < 1) {
    clearInterval(countDownStart);
    count++;
    round++;

    timerTabata();
  }
}

function actionTabata() {
  console.log("actionTabata");
  clockTabata.innerHTML = secondsAction;
  secondsAction--;

  screenTabata.innerHTML = "ROUND " + round + ": ACTION";
  // screenTabata.innerHTML += " ACT: C " + count;

  screenWod.innerHTML = `<br><p class='text-light'> ${
    actionRounds[round - 1]
  }</p>
                          <br><p>next: rest</p>`;

  if (secondsAction < 1) {
    clearInterval(countDownAction);
    // resetTimer(countdownTabata);
    count++;

    secondsAction = 20;

    timerTabata();
  }
}

function restTabata() {
  console.log("restTabata");
  clockTabata.innerHTML = secondsRest;
  secondsRest--;

  //Ausgabe bei Rest
  screenTabata.innerHTML = "ROUND " + round + ": REST";
  // screenTabata.innerHTML += " ACT Count " + count;

  round == 8
    ? (screenWod.innerHTML = `<br><p class='text-light'> Rest </p>
      <br><p>last round</p>`)
    : (screenWod.innerHTML = `<br><p class='text-light'> Rest </p>
      <br><p>next: ${actionRounds[round]}</p>`);

  if (secondsRest < 1) {
    clearInterval(countDownRest);
    // resetTimer(countdownTabata);
    count++;
    round++;

    secondsRest = 10;

    timerTabata();
  }
}

//start setting
let count = 0;
let round = 0;
let max = 17;

//output WODSCREEN

//CHANGE HERE FOR Testmode
// let count = 14;
// let round = 7;

// countRound = ["countRound1", "countRound2", "countRound3"];
function timerTabata() {
  if (count == 0) {
    countDownStart = setInterval(beginningTabata, 1000);
  }

  //working but long and just for Tabata

  //mod not null
  if (count % 2 != 0) {
    countDownAction = setInterval(actionTabata, 1000);
    console.log("count%2 != 0 :) RUFE action Tabata auf " + count);
  }

  if (count != 0 && count % 2 == 0) {
    countDownRest = setInterval(restTabata, 1000);
    console.log(
      "(count != 0) && (count % 2 == 0)  RUFE rest Tabata auf" + count
    );
  }

  if (count == max) {
    screenTabata.innerHTML = "TRAINING DONE! ";
    //stopTabataTimer();

    screenWod.innerHTML = `<br><p class='text-light'> GRATULIERE! </p>
      <br><p> :-) </p>`;

    clockTabata.innerHTML = "";

    clearInterval(countDownRest);
    clearInterval(countDownAction);
    count = 0;
    round = 0;
  }
}

function resetTabataTimer() {
  count = 0;
  round = 0;
  secondsBeginning = 5;
  secondsAction = 20;
  secondsRest = 10;

  screenTabata.innerHTML = "Push START";
  clockTabata.innerHTML = "";

  screenWod.innerHTML = "DEIN WORKOUT <br>  Anzahl Runden: 8 <br>  Action: 20 Sekunden <br>  Rest: 10 Sekunden</h2>";
}

//check order: important!!
function stopTabataTimer() {
  clearInterval(countDownStart);
  clearInterval(countDownAction);
  clearInterval(countDownRest);
}
