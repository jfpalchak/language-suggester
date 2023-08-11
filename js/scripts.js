// BUSINESS LOGIC


// UI LOGIC

// reset() will hide errors that have been resolved,
// as well as remove the previous survey result if a new error is returned
function reset() {
  document.getElementById('error-interest').setAttribute('class', 'hidden');
  document.getElementById('error-career').setAttribute('class', 'hidden');
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

// checkErrors() will check for multiple possible error scenarios amongst selection forms.
// if present, the function will update the form with the appropriate error message,
// otherwise it will call reset()
function checkErrors(career, interest){
  if (career === '0' || interest === '0') {
    if (career === '0' && interest == '0') { 
      document.getElementById('error-interest').removeAttribute('class', 'hidden');
      document.getElementById('error-career').removeAttribute('class', 'hidden');
    } else if (career === '0') {
      document.getElementById('error-career').removeAttribute('class', 'hidden');
    } else {
      document.getElementById('error-interest').removeAttribute('class', 'hidden');
    }
  } else {
    reset();
  }
}
// load page resources before running JS functions
function handleSubmitEvent(e) {
  // prevent page refresh
  e.preventDefault();

  // grab answers to each survey question
  const experience = document.querySelector("input[name='experience']:checked").value;
  const career = document.getElementById("career").value;
  const puzzle = document.querySelector("input[name='puzzle']:checked").value;
  const language = document.getElementById("select-interest").value;

  // check for errors, and if re-submitting, reset error messages
  checkErrors(career, language);

  // here we'll check survey results
  if (language === 'help'){ 
    showResult(language);
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