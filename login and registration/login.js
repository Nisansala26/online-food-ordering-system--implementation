document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const googleBtn = document.querySelector('.btn-google');
    const facebookBtn = document.querySelector('.btn-facebook');

    // Form submission is now handled purely by the HTML <form action="login.php">

    // Google login button click (alerts removed)
    googleBtn.addEventListener('click', function(event) {
        console.log('Google login clicked - Backend required for functionality');
    });

    // Facebook login button click (alerts removed)
    facebookBtn.addEventListener('click', function(event) {
        console.log('Facebook login clicked - Backend required for functionality');
    });

    // Input focus animations
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.parentElement.classList.remove('focused');
            }
        });
    });
});
