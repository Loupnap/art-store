document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginMessage = document.getElementById('loginMessage');

    // Retrieve user information from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
        localStorage.setItem('isLoggedIn', 'true');
        loginMessage.textContent = 'Login successful!';
        loginMessage.style.color = 'green';

        // Redirect to the homepage
        window.location.href = 'index.html';
    } else {
        loginMessage.textContent = 'Invalid username or password.';
        loginMessage.style.color = 'red';
    }
});