var startTime;
var stopwatchInterval;

function startStopwatch() {
  startTime = Date.now();

  stopwatchInterval = setInterval(updateStopwatch, 10);


  document.getElementById('start').disabled = true;
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);


  document.getElementById('start').disabled = false;
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  document.getElementById('display').textContent = '00:00:00';

  document.getElementById('start').disabled = false;
}

function updateStopwatch() {
  var currentTime = Date.now();
  var elapsedTime = currentTime - startTime;

  var milliseconds = Math.floor(elapsedTime % 1000 / 10);
  var seconds = Math.floor(elapsedTime / 1000 % 60);
  var minutes = Math.floor(elapsedTime / 1000 / 60 % 60);
  var hours = Math.floor(elapsedTime / 1000 / 60 / 60);

  var timeString = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds) + '.' + formatMilliseconds(milliseconds);

  document.getElementById('display').textContent = timeString;
}

function formatTime(time) {
  return time.toString().padStart(2, '0');
}

function formatMilliseconds(milliseconds) {
  return milliseconds.toString().padStart(2, '0');
}