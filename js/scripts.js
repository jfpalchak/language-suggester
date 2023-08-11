// load page resources before running JS functions
function handleSubmitEvent(e) {
  // prevent page refresh
  e.preventDefault();

  // grab answers to each survey question
  const experience = document.querySelector("input[name='experience']:checked").value;
  const career = document.getElementById("career").value;
  const interest = document.getElementById("select-interest").value;

  // here we'll check survey results

}

function handleForm() {
  const form = document.getElementById("form");
  form.addEventListener('submit', handleSubmitEvent);
}

window.addEventListener("load", handleForm);