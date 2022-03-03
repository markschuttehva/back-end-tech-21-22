//function to register
const email = document.getElementById('email');
const date = document.getElementById('date');
const password = document.getElementById('password');
const password2 = document.getElementById('password2')
const pokemon = document.getElementById('select')
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

//when clicked on the submit button
form.addEventListener('submit', (e) => {
//making an array to put the messages in
  let messages = [];
//check part
  if (email.value === '' || email.value == null) {
    messages.push('Email is required');
}

  if (date.value === '' || date.value == null) {
    messages.push('Date of birth is required');
}

  if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters')
} else if (password.value === 'password') {
    messages.push('Password cannot be password');
}

  if (pokemon.value === '' || pokemon.value == null) {
    messages.push('Please select a Pokemon');
  }
// when an error occurs
  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})