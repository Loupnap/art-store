document.addEventListener('DOMContentLoaded', function() {
    const isAdmin = localStorage.getItem('isAdmin') === 'true';

    if (isAdmin) {
        const editableElements = document.querySelectorAll('[contenteditable="true"]');
        editableElements.forEach(element => {
            element.addEventListener('blur', function() {
                saveContent();
            });
        });
    }

    function saveContent() {
        const content = {
            marquee: document.querySelector('.marquee-inner').innerHTML,
            categories: document.querySelector('.sidebar h2').innerHTML,
            announcements: document.querySelector('.announcements').innerHTML,
            footer: document.querySelector('footer p').innerHTML
        };
        localStorage.setItem('indexContent', JSON.stringify(content));
    }

    function loadContent() {
        const content = JSON.parse(localStorage.getItem('indexContent'));
        if (content) {
            document.querySelector('.marquee-inner').innerHTML = content.marquee;
            document.querySelector('.sidebar h2').innerHTML = content.categories;
            document.querySelector('.announcements').innerHTML = content.announcements;
            document.querySelector('footer p').innerHTML = content.footer;
        }
    }

    loadContent();
});