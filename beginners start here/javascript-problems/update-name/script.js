// Reference elements
const rememberDiv = document.querySelector('.remember');
const forgetDiv = document.querySelector('.forget');
const form = document.querySelector('form');
const nameInput = document.querySelector('#entername');
const submitBtn = document.querySelector('#submitname');
const forgetBtn = document.querySelector('#forgetname');
const h1 = document.querySelector('h1');
const personalGreeting = document.querySelector('.personal-greeting');

// Stop the form from submitting when button is pressed
form.addEventListener('submit', function(e) {
  e.preventDefault();
});

// Run the function when the 'Say hello' button is clicked
submitBtn.addEventListener('click', function storeAndUpdate() {
  // Store the entered name in the webs storage
  localStorage.setItem('name', nameInput.value);
  // Run nameDisplayCheck() to sort out displaying the
  // personalized greetings and updating the form display
  nameDisplayCheck();
});

// Run function when the 'Forget' button is clicked
forgetBtn.addEventListener('click', function() {
  // Remove the stored name from web storage
  localStorage.removeItem('name');
  // Run nameDisplayCheck() to sort out displaying the
  // generic greeting again and updating the form display
  nameDisplayCheck();
});


// Define the nameDisplayCheck() function
function nameDisplayCheck() {
  // Check whether the 'name' data item is stored in web Storage
  if (localStorage.getItem('name')) {
    // If it is, display personalised greeting
    let name = localStorage.getItem('name');
    h1.textContent = 'Welcome ' + name;
    personalGreeting.textContent = 'Welcome to our website, ' + name + '! We hope you have fun while you are here.';
    // Hide the 'remember' part of the form and show the 'forget' part
    forgetDiv.style.display = 'block';
    rememberDiv.style.display = 'none';
  } else {
    // If not, display generic greeting
    h1.textContent = 'Welcome to our website';
    personalGreeting.textContent = 'Welcome to our website. We hope you have fun while you are here.';
    // Hide the 'forget' part of the form and show the 'remember' part
    forgetDiv.style.display = 'none';
    rememberDiv.style.display = 'block';
  }
}

document.body.onload = nameDisplayCheck;
// document.body.addEventListener('load', nameDisplayCheck);
