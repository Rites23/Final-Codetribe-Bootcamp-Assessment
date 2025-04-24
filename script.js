const form = document.querySelector('form');
const emailInput = document.querySelector('input[type="email"]');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = emailInput.value;
  if (validateEmail(email)) {
    alert('Success! Your email has been submitted.');
  } else {
    alert('Error: Valid Email address required.');
  }
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}