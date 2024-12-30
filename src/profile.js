document.addEventListener('DOMContentLoaded', function() {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
        document.getElementById('username').value = storedUser.username;
        document.getElementById('email').value = storedUser.email;
    }

    document.getElementById('profileForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const profileMessage = document.getElementById('profileMessage');

        const updatedUser = {
            username: username,
            email: email,
            password: password || storedUser.password // Keep the old password if not changed
        };

        // Update user information in localStorage
        localStorage.setItem('user', JSON.stringify(updatedUser));

        profileMessage.textContent = 'Profile updated successfully!';
        profileMessage.style.color = 'green';
    });
});