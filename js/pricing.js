document.addEventListener('DOMContentLoaded', function () {
    // Get all learn more buttons
    const learnMoreButtons = document.querySelectorAll('.learn-more-btn');

    // Attach click event listener to each learn more button
    learnMoreButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Get data from the API
            fetchDataFromAPI(this);
        });
    });

    function fetchDataFromAPI(button) {
        // You can replace the URL with your actual API endpoint
        const apiUrl = 'http://localhost:3000/posts'; // Replace with your API URL

        // Assuming you are using the fetch API
        fetch(apiUrl, {
            method: 'POST', // Change this to POST
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ buttonId: button.id }), // Adjust the data you want to send
        })
            .then(response => response.json())
            .then(data => {
                // Process the data as needed

                // For demonstration, log the data to the console
                console.log(data);

                // Navigate to wishlist.html or update the page accordingly
                navigateToWishlistPage(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    function navigateToWishlistPage(data) {
        // Assuming you want to pass the data to wishlist.html
        // You can update this part based on your project structure
        window.location.href = 'wishlist.html'; // Replace with your actual URL
    }
});




document.getElementById('sendMessage').addEventListener('click', function () {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const questionInput = document.getElementById('question');
    const confirmationMessage = document.getElementById('confirmationMessage');

    // Tüm inputlar doldurulmuşsa devam et
    if (nameInput.value && emailInput.value && phoneInput.value && questionInput.value) {
        const formData = {
            name: nameInput.value,
            email: emailInput.value,
            phone: phoneInput.value,
            question: questionInput.value,
        };

        // Fetch ile POST isteği
        fetch('https://655c30a1ab37729791aa03c7.mockapi.io/fi/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('API Response:', data);

            // Mesaj gönderildikten sonra inputları temizle
            nameInput.value = '';
            emailInput.value = '';
            phoneInput.value = '';
            questionInput.value = '';

            // Bilgi mesajını göster
            confirmationMessage.style.display = 'block';
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while sending the message.');
        });
    } else {
        alert('Zəhmət olmasa xanaları doldurun');
    }
});