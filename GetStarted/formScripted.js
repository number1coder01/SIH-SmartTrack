document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Gather user data from form inputs
    const userData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        company: document.getElementById("company").value
    };

    // Simulate sending data to the server (in reality, this would be sent to a backend)
    console.log("User Data Submitted:", userData);

    // Show a success message or redirect the user
    alert("Thank you! Your details have been submitted.");
    
    // Optionally, reset the form after submission
    document.getElementById("userForm").reset();
});
