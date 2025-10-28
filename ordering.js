document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const googleBtn = document.querySelector('.btn-google');
    const facebookBtn = document.querySelector('.btn-facebook');
    
    // Handle regular login
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        if (email && password) {
            console.log('Login attempted with:', { email, password });
            alert('Login functionality would be implemented here!');
        }
    });
    
    // Handle Google login
    googleBtn.addEventListener('click', function() {
        console.log('Google login clicked');
        alert('Google OAuth would be implemented here!');
    });
    
    // Handle Facebook login
    facebookBtn.addEventListener('click', function() {
        console.log('Facebook login clicked');
        alert('Facebook OAuth would be implemented here!');
    });
    
    // Add input animations
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