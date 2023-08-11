// BUSINESS LOGIC


// UI LOGIC

// when called, reset() will hide errors that have been resolved,
// as well as remove the previous survey result if a new error is returned
function reset() {
  document.getElementById('error').setAttribute('class', 'hidden');
  document.getElementById('results').setAttribute('class', 'hidden')
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

  // create variable for object of survey result text, initially hidden
  // let results = document.getElementById('answer').innerText;

  // here we'll check survey results
  if (language === '0'){
    document.getElementById('error').removeAttribute('class', 'hidden');
  // } else if (language === 'help') {

  } else {
    document.getElementById('answer').innerText = language;
    document.getElementById('results').removeAttribute('class', 'hidden');
  }
}

function handleForm() {
  const form = document.getElementById("form");
  form.addEventListener('submit', handleSubmitEvent);
}

window.addEventListener("load", handleForm);