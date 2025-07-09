// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent form submission

    // Form validation or AJAX request can go here
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Simple validation example
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
    } else {
        alert('Your message has been sent!');
        // You can add more functionality such as AJAX requests here
        this.reset();  // Clear the form after submission
    }
});
