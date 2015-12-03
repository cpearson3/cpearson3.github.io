var breakLength = 10;
var sessionLength = 20;
var mode = "Session";
var count = sessionLength;
var isRunning = false;

// update ui
var updateUI = function() {
  $("#breakLength").text(breakLength);
  $("#sessionLength").text(sessionLength);
  $("#mode").text(mode);
  $("#isRunning").text(isRunning);
  $("#time").html(count);
  if (mode == "Session") {
    $("#clock").removeClass("break");
  }
};

// button callbacks
var subBreakButtonCallback = function() {
  if (breakLength > 1) {
    breakLength -= 1;
  }
  updateUI();
};

var subSessionButtonCallback = function() {
  if (sessionLength > 1) {
    sessionLength -= 1;
    isRunning = false;
    mode = "Session";
    count = sessionLength;
  }
  updateUI();
};

var addBreakButtonCallback = function() {
  breakLength += 1;
  updateUI();
};

var addSessionButtonCallback = function() {
  sessionLength += 1;
  isRunning = false;
  mode = "Session";
  count = sessionLength;
  updateUI();
};

// session start / pause
var clockCallback = function() {
  if (isRunning) {
    // pause if running
    isRunning = false;
  } else {
    // start if not running
    isRunning = true;
  }

  updateUI();
};

// document ready
$(document).ready(function() {

  $("#subBreakButton").click(subBreakButtonCallback);
  $("#addBreakButton").click(addBreakButtonCallback);
  $("#subSessionButton").click(subSessionButtonCallback);
  $("#addSessionButton").click(addSessionButtonCallback);
  $("#clock").click(clockCallback);

  updateUI();

  setInterval(function() {
    if (isRunning) {

      $("#time").html(count);

      if (count == 0) {
        if (mode === "Session") {
          mode = "Break";
          count = breakLength;
          $("#clock").addClass("break");
          updateUI();
        } else if (mode === "Break") {
          mode = "Session";
          count = sessionLength;
          $("#clock").removeClass("break");
          updateUI();
        }

        // play sound
        var a = new Audio();
        a.src = "http://www.smoothboothprod.com/_public/airpong/audio/bloop.ogg";
        a.autoplay = true;
        
      } else {
        count--;
      }
    }

  }, 1000);

});