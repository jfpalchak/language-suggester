// BUSINESS LOGIC

// userKnows() takes Question 5 input and the boolean returned from checkError() as parameters
// returns true if the user chose a specific language and there's no error,
// otherwise returns false
function userKnows(question5Input, error) {
  return (question5Input != 'help' && !error);
}

// userDoesNotKnow() takes Question 5 input and the boolean returned from checkError() as parameters
// returns true if the user doesn't know which language they like, and there's no error
// otherwise returns false
function userDoesNotKnow(question5Input, error) {
  return (question5Input === 'help' && !error);
}

// userHatesPuzzles() takes Question 3 input as a parameter
// returns true only if user does not enjoy Puzzles, otherwise returns false
function userHatesPuzzles(question3Input) {
  return (question3Input === 'no');
}

// userNotMacAppOrGame() takes Question 2 and 4 inputs as parameters, respectively
// returns true if user wants to develop apps or games on Linux, or on Windows; otherwise returns false
function userNotMacAppOrGame(question2Input, question4Input) {
  return (question4Input != 'mac' && (question2Input === 'app' || question2Input === 'game'));
}

// userMacApp() takes Question 2 and 4 inputs as parameters, respectively
// returns true only if user wants to develop apps on Mac, otherwise returns false
function userMacApp(question2Input, question4Input) {
  return (question4Input === 'mac' && question2Input === 'app');
}

// userMacGame() takes Question 2 and 4 inputs as parameters, respectively
// returns true only if user wants to develop games on Mac, otherwise returns false
function userMacGame(question2Input, question4Input) {
  return (question4Input === 'mac' && question2Input === 'game');
}

// userCyber() takes Question 2 input as a parameter
// returns true only if user is interested in cybersecurity
function userCyber(question2Input) {
  return (question2Input === 'cyber');
}

// userWeb() takes Question 2 input as a parameter
// returns true only if user is interested in web development
function userWeb(question2Input) {
  return (question2Input === 'web');
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

// checkErrors() takes Question 2 and 5 input as parameters, respectively
// if either has invalid input, it will update the DOM with the appropriate error message,
// as well as return a boolean value of true.
// if both inputs are valid, it will return a boolean value of false
function checkErrors(question2Input, question5Input){
  const error = isError(question2Input, question5Input);
  if (error) {
    if (bothAreInvalid(question2Input, question5Input)) { 
      showError2();
      showError5();
    } else if (isQ2Invalid(question2Input)) {
      showError2();
    } else {
      showError5();
    }
  }
  return error;
}

// suggestLanguage() uses the input of Questions 2, 3, and 4 as parameters, respectively
// using branch logic to decide which language to suggest the user
function suggestLanguage(question2Input, question3Input, question4Input) {
  if (userHatesPuzzles(question3Input)) {
    showResult("Um, well...\n\nIf you don't like puzzles, maybe programming isn't for you...");
  } else if (userNotMacAppOrGame(question2Input, question4Input)) {
    showResult('C++');
  } else if (userMacApp(question2Input, question4Input)){
    showResult('Swift');
  } else if (userMacGame(question2Input, question4Input)) {
    showResult('Java');
  } else if (userCyber(question2Input)) {
    showResult('Python');
  } else if (userWeb(question2Input)) {
    showResult('JavaScript')
  } 
}

// UI LOGIC

// resetMessages() updates DOM by hiding error messages and the survey submission result
function resetMessages() {
  document.getElementById('error-interest').setAttribute('class', 'hidden');
  document.getElementById('error-career').setAttribute('class', 'hidden');
  document.getElementById('results').setAttribute('class', 'hidden');
}

// showResult() updates DOM by making the survey submission result visible, 
// and modifies the survey's answer according to the string passed through the parameter
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
    // suggest a starting language based on survey answers for Questions 2, 3, and 4
    suggestLanguage(careerPref, puzzlePref, osPref);
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