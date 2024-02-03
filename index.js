// Add this inside the script.js file

function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var comment = document.getElementById('comment').value;

    // You can add additional validation here if needed

    // For simplicity, let's just log the form data to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Comment:', comment);

    // You can add an AJAX request or other logic for form submission here
}

