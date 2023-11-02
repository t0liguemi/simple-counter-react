import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Defaults
let secondsCount = 0;
let tenthCount = 0;
let hundredCount = 0;
let thousandCount = 0;
let tenthousandCount = 0;
let areWeCountingDown = false;
let areWePaused = false;
let doWeAlert = false;
let alertTarget = 0;

function countdown(event) {
  event.preventDefault();
  areWeCountingDown = true;
  doWeAlert = false;
  let form = event.target;
  let formData = new FormData(form);
  const formEntries = Object.fromEntries(formData.entries());
  console.log(formEntries.countdownInput);
  secondsCount = formEntries.countdownInput
}
function alertTrigger(event){
  event.preventDefault();
  areWeCountingDown = false;
  doWeAlert = true;
  areWePaused = false;
  let form = event.target;
  let formData = new FormData(form);
  secondsCount=0
  const formEntries = Object.fromEntries(formData.entries());
  alertTarget=formEntries.alertTarget;
  console.log(formEntries.alertTarget);
}
function pauseTrigger(){
  areWePaused = true;
}
function resumeTrigger(){
  areWePaused = false;
}
function resetTrigger(){
  secondsCount=0
  areWeCountingDown = false;
  doWeAlert = false;
}
setInterval(() => {
  if (secondsCount<1 && areWeCountingDown){
    areWePaused = true
  }
  if (areWePaused){
  } else if (areWeCountingDown){
    secondsCount -= 1
  }else{
    secondsCount += 1
  }
  if(secondsCount === parseInt(alertTarget) && doWeAlert){
    alert("Your time is over")
  }
  tenthCount = Math.floor(secondsCount / 10);
  hundredCount = Math.floor(secondsCount / 100);
  thousandCount = Math.floor(secondsCount / 1000);
  tenthousandCount = Math.floor(secondsCount / 10000);
  root.render(
    <React.StrictMode>
      <App
        countdown={countdown}
        pauseTrigger={pauseTrigger}
        resumeTrigger={resumeTrigger}
        resetTrigger={resetTrigger}
        alertTrigger={alertTrigger}
        units={secondsCount % 10}
        tenths={tenthCount % 10}
        hundreds={hundredCount % 10}
        thousands={thousandCount % 10}
        tenthousands={tenthousandCount % 10}
      />
    </React.StrictMode>
  );
}, 1000)
reportWebVitals();
