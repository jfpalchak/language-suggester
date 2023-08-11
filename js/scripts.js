// BUSINESS LOGIC

// UI LOGIC

// reset() will hide errors that have been resolved,
// as well as remove the previous survey result if a new error is returned
function reset() {
  document.getElementById('error-interest').setAttribute('class', 'hidden');
  document.getElementById('error-career').setAttribute('class', 'hidden');
  document.getElementById('results').setAttribute('class', 'hidden');
}

// showResult() will un-hide result text block, and modify
// the survey's answer according to the language passed through as an argument
function showResult(language) {
  const text = document.getElementById('results');
  const answer = document.getElementById('answer');

  answer.innerText = language;
  text.removeAttribute('class', 'hidden');
  text.scrollIntoView();
}

// checkErrors() will check for multiple error scenarios in the form.
// if there are errors, it will update the html with the appropriate error message,
// as well as return a boolean value of true.
// if there are no errors, it will return a boolean value of false
function checkErrors(career, language){
  let error = (career === '0' || language === '0');
  if (error) {
    if (career === '0' && language == '0') { 
      document.getElementById('error-interest').removeAttribute('class', 'hidden');
      document.getElementById('error-career').removeAttribute('class', 'hidden');
    } else if (career === '0') {
      document.getElementById('error-career').removeAttribute('class', 'hidden');
    } else {
      document.getElementById('error-interest').removeAttribute('class', 'hidden');
    }
  }
  return error;
}

function suggestLanguage(puzzle, os, career) {
  if (puzzle === 'no') {
    showResult("If you don't like puzzles, maybe programming isn't for you...");
  } else if (os != 'mac' && (career === 'app' || career === 'game')) {
    showResult('C++');
  } else if (os === 'mac' && career === 'app'){
    showResult('Swift');
  } else if (os === 'mac' && career === 'game') {
    showResult('Java');
  } else if (career === 'cyber') {
    showResult('Python');
  } else if (career === 'web') {
    showResult('JavaScript')
  } 
}

// handleSubmitEvent() creates an event handler for the form submission
function handleSubmitEvent(e) {
  e.preventDefault();
  // if re-submitting, reset results and error messages
  reset();

  const career = document.getElementById("career").value;
  const puzzle = document.querySelector("input[name='puzzle']:checked").value;
  const os = document.querySelector("input[name='os']:checked").value;
  const language = document.getElementById("select-interest").value;
 
  // check for errors
  const error = checkErrors(career, language);
  // branching logic to decide survey results
  if (language != 'help' && !error){  
    // if there's no error, and the user has a language they're interested in
    // just show the language they chose
    showResult(language);
  } else if (language === 'help' && !error) { 
    suggestLanguage(puzzle, os, career);
  }
}

// handleForm() creates the form object, and calls on the event handler
// for when the form submit button is pressed
function handleForm() {
  const form = document.getElementById("form");
  form.addEventListener('submit', handleSubmitEvent);
}

// load page resources before running all JS functions
window.addEventListener("load", handleForm);