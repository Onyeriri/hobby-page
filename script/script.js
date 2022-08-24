// date object
let dateOption = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}

// initialize date variable
let date = new Date();

// initialize HTML element
const element = document.getElementById('date');

element.innerHTML = date.toLocaleDateString('en-GB', dateOption) + '.';
