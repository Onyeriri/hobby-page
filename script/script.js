let dateOption = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}

let date = new Date();

document.getElementById('date').innerHTML = date.toLocaleDateString('en-GB', dateOption) + '.';

console.log(`Today's date is ${date}`);