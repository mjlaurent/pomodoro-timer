/*!
* Start Bootstrap - Bare v5.0.0 (https://startbootstrap.com/template/bare)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
// Set the date we're counting down to
var intervals = [];

function startTimer(state) {
    var countDownDate = new Date().getTime() + state * 60000 + 500;
    var x = setInterval(function () {
        // Get today's date and time
        var now = new Date().getTime();
        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="title"
        document.getElementById("timer").innerHTML = minutes + " : " + seconds;

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "Finish";
        }
    }, 1000);
    intervals.push(x);
}

function startWork(state){
    intervals.forEach(clearInterval);
    startTimer(state);
}

function shortBreak(state){
    intervals.forEach(clearInterval);
    startTimer(state);
}

function longBreak(state){
    intervals.forEach(clearInterval);
    startTimer(state);
}

function clearAll(){
    // alert("hello");
    // console.log("Hello");
    intervals.forEach(clearInterval);
    document.getElementById("timer").innerHTML = "Let's start";
}