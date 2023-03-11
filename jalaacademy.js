const loginForm = document.getElementById('loginForm');
const logoutButton = document.getElementById('logoutButton');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'training@jalaacademy.com' && password === 'jobprogram') {
    loginForm.style.display = 'none';
    logoutButton.style.display = 'block';
  } else {
    alert('Invalid login credentials.');
  }
});

logoutButton.addEventListener('click', function() {
  loginForm.style.display = 'block';
  logoutButton.style.display = 'none';
});
