document.addEventListener('DOMContentLoaded', function() {
    function smoothScroll(targetID) {
        const targetElement = document.getElementById(targetID);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const hash = window.location.hash.substring(1);
    if (hash) {
        smoothScroll(hash);
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetID = this.getAttribute('href').substring(1);
            smoothScroll(targetID);
            history.pushState(null, null, '#' + targetID);
        });
    });
});