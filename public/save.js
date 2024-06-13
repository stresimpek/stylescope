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

document.getElementById('file-upload').addEventListener('change', function(event) {
    const preview = document.getElementById('preview');
    preview.innerHTML = ''; // Clear any previous content

    const files = event.target.files;
    if (files.length > 0) {
        const file = files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.maxWidth = '100%';
            preview.appendChild(img);
        }

        reader.readAsDataURL(file);
    }
});