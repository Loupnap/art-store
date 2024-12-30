document.getElementById('adminChangeCredentialsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const newAdminUsername = document.getElementById('new-admin-username').value;
    const newAdminPassword = document.getElementById('new-admin-password').value;
    const adminChangeCredentialsMessage = document.getElementById('adminChangeCredentialsMessage');

    // Store new admin credentials in localStorage
    const adminCredentials = {
        username: newAdminUsername,
        password: newAdminPassword
    };
    localStorage.setItem('adminCredentials', JSON.stringify(adminCredentials));

    adminChangeCredentialsMessage.textContent = 'Credentials changed successfully!';
    adminChangeCredentialsMessage.style.color = 'green';

    // Redirect to admin dashboard
    setTimeout(() => {
        window.location.href = 'admin-dashboard.html';
    }, 2000);
});