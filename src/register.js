document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const registerMessage = document.getElementById('registerMessage');

    if (password !== confirmPassword) {
        registerMessage.textContent = 'Passwords do not match.';
        registerMessage.style.color = 'red';
        return;
    }

    // Simulate a registration process (replace with actual registration logic)
    const user = {
        username: username,
        email: email,
        password: password
    };

    // Store user information in localStorage
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('isLoggedIn', 'true');

    console.log('User registered:', user);
    registerMessage.textContent = 'Registration successful!';
    registerMessage.style.color = 'green';

    // Redirect to the homepage
    window.location.href = 'index.html';
});