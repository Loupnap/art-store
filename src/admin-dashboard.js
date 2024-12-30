document.addEventListener('DOMContentLoaded', function() {
    const contentForm = document.getElementById('contentForm');
    const contentMessage = document.getElementById('contentMessage');
    const userForm = document.getElementById('userForm');
    const userMessage = document.getElementById('userMessage');

    // Load existing content from localStorage
    loadContent();

    contentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const marqueeContent = document.getElementById('marquee-content').value;
        const categoriesContent = document.getElementById('categories-content').value;
        const announcementsContent = document.getElementById('announcements-content').value;
        const footerContent = document.getElementById('footer-content').value;

        const content = {
            marquee: marqueeContent,
            categories: categoriesContent,
            announcements: announcementsContent,
            footer: footerContent
        };

        // Save content to localStorage
        localStorage.setItem('indexContent', JSON.stringify(content));

        contentMessage.textContent = 'Content saved successfully!';
        contentMessage.style.color = 'green';

        // Optionally, you can redirect to the home page to see the changes
        // window.location.href = 'index.html';
    });

    userForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const newUsername = document.getElementById('new-username').value;
        const newPassword = document.getElementById('new-password').value;

        const newUser = {
            username: newUsername,
            password: newPassword
        };

        // Save new user to localStorage
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        userMessage.textContent = 'User added successfully!';
        userMessage.style.color = 'green';

        // Clear the form
        userForm.reset();
    });

    function loadContent() {
        const content = JSON.parse(localStorage.getItem('indexContent'));
        if (content) {
            document.getElementById('marquee-content').value = content.marquee;
            document.getElementById('categories-content').value = content.categories;
            document.getElementById('announcements-content').value = content.announcements;
            document.getElementById('footer-content').value = content.footer;
        }
    }
});