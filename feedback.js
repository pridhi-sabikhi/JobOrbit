
        document.getElementById('clear-rating').addEventListener('click', function () {
            const stars = document.querySelectorAll('input[name="rating"]');
            stars.forEach(star => star.checked = false);
        });

        document.getElementById('feedbackForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!username || !email || !phone || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            if (phone.length < 10) {
    alert('Please enter a valid phone number');
    return;
}
            
            // If everything is valid, show success message
            alert('Thank you for your feedback! We will get back to you soon.');
            this.reset();
        });

        function openMenu() {
        document.getElementById("overlayMenu").style.display = "flex";
      }
      function closeMenu() {
        document.getElementById("overlayMenu").style.display = "none";
      }

      // Add subtle animation to form elements on focus
const formControls = document.querySelectorAll('.form-control');
formControls.forEach(control => {
    control.addEventListener('focus', function() {
        this.parentElement.style.transform = 'translateY(-2px)';
        this.parentElement.style.transition = 'transform 0.3s ease';
    });
    
    control.addEventListener('blur', function() {
        this.parentElement.style.transform = 'translateY(0)';
    });
});