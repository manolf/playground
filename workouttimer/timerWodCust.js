//Timer Tabata
secondsBeginning = 5;
secondsAction = 20;
secondsRest = 10;

// String Input für Runden:

//example: 1 exercise
actionRound = "PLANK";
// THINKING BIG

function beginningTabata() {
  screenTabata.innerHTML = "Start in Seconds: ";
  clockTabata.innerHTML = secondsBeginning;
  secondsBeginning--;

  // if (secondsBeginning == -1) {
  //   clockTabata.innerHTML = "HIER";
  // }

  if (secondsBeginning < 0) {
    clearInterval(countDownStart);
    count++;
    round++;
    screenTabata.innerHTML = "ROUND " + count + ": ACTION";
    screenWod.innerHTML = `<br><p class='text-light'> ${actionRound}</p>
                            <br><p>next: rest</p>`;
    clockTabata.innerHTML = "";
    // screenWod.innerHTML = " <h2>ACTION: " + actionRound + "</h2>";

    timerTabata();
  }
}

function actionTabata() {
  clockTabata.innerHTML = secondsAction;
  secondsAction--;

  if (secondsAction < 0) {
    clearInterval(countDownAction);
    // resetTimer(countdownTabata);
    count++;
    screenTabata.innerHTML = "ROUND " + round + ": REST";
    clockTabata.innerHTML = "";
    screenWod.innerHTML = `<br><p class='text-light'> REST</p>
    <br><p>next: ${actionRound}</p>`;
    secondsAction = 20;

    timerTabata();
  }
}

function restTabata() {
  clockTabata.innerHTML = secondsRest;
  secondsRest--;

  if (secondsRest < 0) {
    clearInterval(countDownRest);
    // resetTimer(countdownTabata);
    count++;
    round++;
    screenTabata.innerHTML = "ROUND " + round + ": ACTION";
    clockTabata.innerHTML = "";
    screenWod.innerHTML = `<br><p class='text-light'> ${actionRound}</p>
    <br><p>next: rest</p>`;
    // countDownRest.onExpire();
    // countDownRest = 0;
    secondsRest = 10;

    timerTabata();
  }
}

//start setting
let count = 0;
let round = 0;
let mod = 0;
let max = 17;

//output WODSCREEN

// screenWod.innerHTML = "hey";

//setting for last round
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
    console.log("count%2 != 0 :) " + count);
  }

  if (count != 0 && count % 2 == 0) {
    countDownRest = setInterval(restTabata, 1000);
    console.log("(count != 0) && (count % 2 == 0) " + count);
  }

  if (count == max) {
    screenTabata.innerHTML = "TRAINING DONE! ";
    //stopTabataTimer();
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
}

//check order: important!!
function stopTabataTimer() {
  clearInterval(countDownStart);
  clearInterval(countDownAction);
  clearInterval(countDownRest);
}
