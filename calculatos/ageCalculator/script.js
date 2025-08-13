let btn = document.querySelector('.calculate-button');
let year = document.querySelector('.Year');
let month = document.querySelector('.month');
let day = document.querySelector('.day');

btn.addEventListener('click', () => {
  console.log("button is clicked");
  let userdate = new Date(document.getElementById('dob').value);
  let today = new Date();
  let timeDifference = today - userdate;

  let millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
  let years = Math.floor(timeDifference / millisecondsInYear);

  let remainMilliseconds = timeDifference % millisecondsInYear;
  let millisecondsInMonth = 1000 * 60 * 60 * 24 * 30.44;
  let months = Math.floor(remainMilliseconds / millisecondsInMonth);

  remainMilliseconds = remainMilliseconds % millisecondsInMonth;
  let millisecondsInDay = 1000 * 60 * 60 * 24;
  let days = Math.floor(remainMilliseconds / millisecondsInDay);

  year.innerHTML = years;
  month.innerHTML = months;
  day.innerHTML = days;
});