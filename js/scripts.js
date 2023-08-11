// BUSINESS LOGIC


// UI LOGIC

// reset() will hide errors that have been resolved,
// as well as remove the previous survey result if a new error is returned
function reset() {
  document.getElementById('error').setAttribute('class', 'hidden');
  document.getElementById('results').setAttribute('class', 'hidden')
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

// when called, showError() will update the form with an error message
function showError() {
  document.getElementById('error').removeAttribute('class', 'hidden');
}

// load page resources before running JS functions
function handleSubmitEvent(e) {
  // prevent page refresh
  e.preventDefault();
  // if re-submitting, reset error messages
  reset();

  // grab answers to each survey question
  const experience = document.querySelector("input[name='experience']:checked").value;
  const career = document.getElementById("career").value;
  const language = document.getElementById("select-interest").value;

  // const text = document.getElementById('results');
  // const answer = document.getElementById('answer');

  // here we'll check survey results
  if (language === '0'){ 
    showError();
  // } else if (language === 'help') {

  } else { // if a specific language was selected, we'll suggest that language
    showResult(language);
  }
}

function handleForm() {
  const form = document.getElementById("form");
  form.addEventListener('submit', handleSubmitEvent);
}

window.addEventListener("load", handleForm);