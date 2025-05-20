// Theme toggle switch
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);

// Form validation
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const contactForm = document.getElementById('contact-form');
const errorElement = document.getElementById('error');
const successMsg = document.getElementById('success-msg');

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validate(e) {
  e.preventDefault();

  if (name.value.trim().length < 3) {
    errorElement.textContent = 'Your name should be at least 3 characters long.';
    successMsg.textContent = '';
    return false;
  }

  if (!emailIsValid(email.value.trim())) {
    errorElement.textContent = 'Please enter a valid email address.';
    successMsg.textContent = '';
    return false;
  }

  if (message.value.trim().length < 15) {
    errorElement.textContent = 'Please write a longer message.';
    successMsg.textContent = '';
    return false;
  }

  errorElement.textContent = '';
  successMsg.textContent = 'Thank you! I will get back to you as soon as possible.';

  setTimeout(() => {
    successMsg.textContent = '';
    contactForm.reset();
  }, 6000);

  return true;
}

contactForm.addEventListener('submit', validate);
