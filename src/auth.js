document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    const loginLink = document.getElementById('loginLink');
    const registerLink = document.getElementById('registerLink');
    const profileLink = document.getElementById('profileLink');
    const logoutLink = document.getElementById('logoutLink');
    const adminLoginLink = document.getElementById('adminLoginLink');
    const adminDashboardLink = document.getElementById('adminDashboardLink');

    if (isLoggedIn) {
        loginLink.style.display = 'none';
        registerLink.style.display = 'none';
        profileLink.style.display = 'block';
        logoutLink.style.display = 'block';
        adminLoginLink.style.display = 'none'; // Hide admin link if user is logged in
    } else {
        loginLink.style.display = 'block';
        registerLink.style.display = 'block';
        profileLink.style.display = 'none';
        logoutLink.style.display = 'none';
        adminLoginLink.style.display = 'block'; // Show admin link if user is not logged in
    }

    if (isAdmin) {
        adminDashboardLink.style.display = 'block'; // Show admin dashboard link if user is admin
    }
});

function logout() {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.setItem('isAdmin', 'false');
    window.location.href = 'index.html';
}