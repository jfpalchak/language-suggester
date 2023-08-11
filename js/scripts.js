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
  // create variable for object of result text block, initially hidden
  const text = document.getElementById('results');
  // create variable for object of survey answer text
  const answer = document.getElementById('answer');

  // modify answer text to suggested language
  answer.innerText = language;
  // show the results of the survey
  text.removeAttribute('class', 'hidden');
}

// checkErrors() will check for multiple error scenarios in the form.
// if there are errors, it will update the html with the appropriate error message,
// as well as return a boolean value of true.
// if there are no errors, it will return a boolean value of false
function checkErrors(career, language){
  let error;
  if (career === '0' || language === '0') {
    error = true;
    if (career === '0' && language == '0') { 
      document.getElementById('error-interest').removeAttribute('class', 'hidden');
      document.getElementById('error-career').removeAttribute('class', 'hidden');
    } else if (career === '0') {
      document.getElementById('error-career').removeAttribute('class', 'hidden');
    } else {
      document.getElementById('error-interest').removeAttribute('class', 'hidden');
    }
  } else {
    error = false;
  }
  return error;
}

// handleSubmitEvent() creates an event handler for the form submission
function handleSubmitEvent(e) {
  // prevent page refresh
  e.preventDefault();
  // if re-submitting, reset results and error messages
  reset();
  // grab answers to each survey question
  const experience = document.querySelector("input[name='experience']:checked").value;
  const career = document.getElementById("career").value;
  const puzzle = document.querySelector("input[name='puzzle']:checked").value;
  const language = document.getElementById("select-interest").value;
 
  const error = checkErrors(career, language);
  // here we'll check survey results
  if (language != 'help' && !error){  
    // if there's no error, and the user has a language they're interested in
    // just show the language they chose
    showResult(language);
  } else if (language === 'help' && !error) { 
    // if there's no error, and the user doesn't pick an initial language
    // we'll go through some logic to choose one based on the form input
    showResult('this is where we branch');
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