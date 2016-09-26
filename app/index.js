
// Dummy results, equivalent to the data we are expected to exist before doing our
// DOM mutation.
var results = null;

// Check that results exist. Could check for DOM element existence or anything here.
// const resultsCheck = () => results !== null;
function resultsCheck () {
  return results !== null;
}

// Whatever we want to do to the DOM once the check passes.
// const updateDom = () => console.log('Perform our DOM mutation now that data exists.');
function updateDom () {
  console.log('Perform our DOM mutation now that data exists.');
  return true;
}

// Wrapper for setTimeout that takes a function and time and runs.
// const pollTimer = (func, time) => setTimeout(func, time);
function pollTimer (func, time) {
  setTimeout(func, time);
}

// Perform the results check and either run updateDom or queue up another
// check.
// const maybePoll = () =>  resultsCheck() ? updateDom() : pollTimer(maybePoll, 500);
function maybePoll () {
  return resultsCheck() && updateDom() || pollTimer(maybePoll, 500);
}

// Perform the initial poll.
pollTimer(maybePoll, 500);

// DUMMY CODE: Updates the results after 4.5 seconds to emulate a slow AJAX query.
setTimeout(function () {
  results = ['DATAZ']
}, 4500);
