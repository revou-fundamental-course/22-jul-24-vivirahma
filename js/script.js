//ini javascript

document.getElementById('submitBtn').addEventListener('click', function() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var house = document.getElementById('house').value;

    console.log('Name:', name);
    console.log('Email Address:', email);
    console.log('Favorite House:', house);

    // Optional: Send the data to a server
    fetch('https://example.com/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            name: name, 
            email: email, 
            house: house 
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
