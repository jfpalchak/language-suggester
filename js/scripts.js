// BUSINESS LOGIC

// userKnows() takes Q5 input and the boolean returned from checkError() as parameters
// returns true if the user chose a specific language and there's no error,
// otherwise returns false
function userKnows(question5Input, error) {
  return (question5Input != 'help' && !error);
}

// userDoesNotKnow() takes Q5 input and the boolean returned from checkError() as parameters
// returns true if the user doesn't know which language they like, and there's no error
// otherwise returns false
function userDoesNotKnow(question5Input, error) {
  return (question5Input === 'help' && !error);
}

// isError() takes Question 2 and 5 inputs as parameters, respectively
// returns true if at least one has an invalid input, otherwise returns false
function isError(question2Input, question5Input) {
  return (question2Input === '0' || question5Input === '0');
}

// bothAreInvalid() takes Question 2 and 5 inputs as parameters, respectively
// returns true only if *both* have invalid inputs, otherwise returns false
function bothAreInvalid(question2Input, question5Input) {
  return (question2Input === '0' && question5Input === '0');
}

// isQ2Invalid() takes Question 2 input as a parameter
// returns true if it has an invalid input, otherwise returns false
function isQ2Invalid(question2Input) {
  return (question2Input === '0');
}

// UI LOGIC

// resetMessages() will hide errors that have been resolved,
// as well as remove the previous survey result if a new error is returned
function resetMessages() {
  document.getElementById('error-interest').setAttribute('class', 'hidden');
  document.getElementById('error-career').setAttribute('class', 'hidden');
  document.getElementById('results').setAttribute('class', 'hidden');
}

// showResult() updates DOM with result text block, and modifies
// the survey's answer according to the language passed through the parameter
function showResult(language) {
  const text = document.getElementById('results');
  const answer = document.getElementById('answer');

  answer.innerText = language;
  text.removeAttribute('class', 'hidden');
  text.scrollIntoView();
}

// showError2() updates DOM with visible error message next to Question 2
function showError2() {
  document.getElementById('error-career').removeAttribute('class', 'hidden');
}

// showError5() updates DOM with visible error message next to Question 5
function showError5() {
  document.getElementById('error-interest').removeAttribute('class', 'hidden');
}

// checkErrors() will check for errors in Question 2 and Question 5
// if there are errors, it will update the DOM with the appropriate error message,
// as well as return a boolean value of true.
// if there are no errors, it will return a boolean value of false
function checkErrors(career, interest){
  const error = isError(career, interest);
  if (error) {
    if (bothAreInvalid(career, interest)) { 
      showError2();
      showError5();
    } else if (isQ2Invalid(career)) {
      showError2();
    } else {
      showError5();
    }
  }
  return error;
}

// suggestLanguage() uses the input of Questions 2, 3, and 4 as parameters
// using branch logic to decide which language to suggest the user,
// it then calls on showResult() with the suggested language as its argument
function suggestLanguage(puzzle, os, career) {
  if (puzzle === 'no') {
    showResult("Um, well...\n\nIf you don't like puzzles, maybe programming isn't for you...");
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
  const langChoice = document.getElementById("interest").value;
 
  // check Question 2 and 5 for errors, save returned boolean value
  const error = checkErrors(careerPref, langChoice);
  
  if (userKnows(langChoice, error)){  
    // if there's no error, and the user has a language they're interested in,
    // just show the language they chose
    showResult(langChoice);
  } else if (userDoesNotKnow(langChoice, error)) { 
    // if there's no error, and the user isn't sure what language they like,
    // suggest a starting language based on survey answers for Q2, Q3, and Q4
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