let dateOption = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}

let date = new Date();

const element = document.getElementById('date');

element.innerHTML = date.toLocaleDateString('en-GB', dateOption) + '.';
