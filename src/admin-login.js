document.getElementById('adminLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const adminUsername = document.getElementById('admin-username').value;
    const adminPassword = document.getElementById('admin-password').value;
    const adminLoginMessage = document.getElementById('adminLoginMessage');

    // Provisional admin credentials
    const provisionalUsername = 'admin';
    const provisionalPassword = 'admin123';

    if (adminUsername === provisionalUsername && adminPassword === provisionalPassword) {
        // Set admin status
        localStorage.setItem('isAdmin', 'true');
        localStorage.setItem('isLoggedIn', 'true');
        
        // Redirect to admin dashboard
        window.location.href = 'admin-dashboard.html';
    } else {
        adminLoginMessage.textContent = 'Invalid username or password.';
        adminLoginMessage.style.color = 'red';
    }
});