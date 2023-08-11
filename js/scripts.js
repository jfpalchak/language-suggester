// BUSINESS LOGIC

// UI LOGIC

// resetMessages() will hide errors that have been resolved,
// as well as remove the previous survey result if a new error is returned
function resetMessages() {
  document.getElementById('error-interest').setAttribute('class', 'hidden');
  document.getElementById('error-career').setAttribute('class', 'hidden');
  document.getElementById('results').setAttribute('class', 'hidden');
}

// showResult() will un-hide result text block, and modify
// the survey's answer according to the language passed through the parameter
function showResult(language) {
  const text = document.getElementById('results');
  const answer = document.getElementById('answer');

  answer.innerText = language;
  text.removeAttribute('class', 'hidden');
  text.scrollIntoView();
}

// showErrorCareer() updates DOM with error message next to Question 2
function showError2() {
  document.getElementById('error-career').removeAttribute('class', 'hidden');
}

// showErrorCareer() updates DOM with error message next to Question 5
function showError5() {
  document.getElementById('error-interest').removeAttribute('class', 'hidden');
}

// checkErrors() will check for multiple error scenarios in the form.
// if there are errors, it will update the html with the appropriate error message,
// as well as return a boolean value of true.
// if there are no errors, it will return a boolean value of false
function checkErrors(career, interest){
  let isError = (career === '0' || interest === '0');
  if (isError) {
    if (career === '0' && interest == '0') { 
      showError2();
      showError5();
    } else if (career === '0') {
      showError2();
    } else {
      showError5();
    }
  }
  return isError;
}

// suggestLanguage() uses the answer of three different survey questions as parameters,
// then uses branch logic to decide which language to suggest the user
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
  resetMessages();

  const careerPref = document.getElementById("career").value;
  const puzzlePref = document.querySelector("input[name='puzzle']:checked").value;
  const osPref = document.querySelector("input[name='os']:checked").value;
  const langChoice = document.getElementById("select-interest").value;
 
  // check for errors, save returned boolean value
  const error = checkErrors(careerPref, langChoice);
  
  if (langChoice != 'help' && !error){  
    // if there's no error, and the user has a language they're interested in,
    // just show the language they chose
    showResult(langChoice);
  } else if (langChoice === 'help' && !error) { 
    // if there's no error, and the user isn't sure what language they like,
    // suggest a starting language based on survey answers
    suggestLanguage(puzzlePref, osPref, careerPref);
  }
}

// handleForm() creates the form object variable, and calls on the event handler
// for when the form submit button is pressed
function handleForm() {
  const form = document.getElementById("form");
  form.addEventListener('submit', handleSubmitEvent);
}

// load page resources before running all JS functions
window.addEventListener("load", handleForm);