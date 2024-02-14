
document.addEventListener("DOMContentLoaded", function () {
    // meetingImg div'ini ve içindeki img elementini alın
    var meetingImg = document.querySelector(".meetingImg");
    var imgElement = meetingImg.querySelector("img");

    // İmage'ın başlangıç pozisyonunu hesaplayın
    var initialPosition = -imgElement.clientWidth / 6;

    // Başlangıç pozisyonunu ayarlayın
    imgElement.style.transform = "translateX(" + initialPosition + "px)";

    // Sayfanın yüklenmesinden bir süre sonra animasyonu başlatın
    setTimeout(function() {
        imgElement.style.transform = "translateX(0)";
    }, 700); // 0.6 saniye gecikme
});









document.addEventListener("DOMContentLoaded", function () {
    // workplaceImg içindeki tüm img elementlerini seçin
    var imgElements = document.querySelectorAll(".workplaceImg img");

    // Her bir img elementi için mouse olaylarına event listener ekleyin
    imgElements.forEach(function(imgElement) {
        imgElement.addEventListener("mouseover", function() {
            // Mouse üzerine geldiğinde img'i yukarı kaldır
            imgElement.style.transform = "translateY(-10px)";
        });

        imgElement.addEventListener("mouseout", function() {
            // Mouse ayrıldığında img'i aşağı indir
            imgElement.style.transform = "translateY(0)";
        });
    });
});






document.addEventListener("DOMContentLoaded", function () {
    // meetingRow içindeki tüm img elementlerini seçin
    var imgElements = document.querySelectorAll(".meetingRow img");

    // Her bir img elementi için mouse olaylarına event listener ekleyin
    imgElements.forEach(function(imgElement) {
        imgElement.addEventListener("mouseenter", function() {
            // Mouse üzerine geldiğinde img'i sağa sola sallayın
            imgElement.style.transform = "translateX(-9px)";
        });

        imgElement.addEventListener("mouseleave", function() {
            // Mouse ayrıldığında img'i başlangıç pozisyonuna geri getirin
            imgElement.style.transform = "translateX(0)";
        });
    });
});










let currentImageIndex = 0;
const images = ['./img/device-homepage-qbic.png', './img/other-image.jpg', './img/another-image.jpg'];

function changeImage(direction) {
    currentImageIndex += direction;

    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    document.getElementById('imageSlider').innerHTML = `<img src="${images[currentImageIndex]}" alt="">`;
}

function fetchDetails() {
    const selectedImageUrl = images[currentImageIndex];
    // Burada seçilen resmin detayları için bir API çağrısı yapabilirsiniz.
    // Örneğin, seçilen resmin URL'sini kullanarak bir API'ye istek göndermek.
    console.log('API Request for Details:', selectedImageUrl);
}







document.getElementById('sendMessage').addEventListener('click', function () {
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        question: document.getElementById('question').value,
    };

    // Simulate API fetch
    fetch('https://655c30a1ab37729791aa03c7.mockapi.io/fi/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        // Handle response from API (you can customize this part)
        console.log('API Response:', data);
        alert('Message sent successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while sending the message.');
    });
});

document.querySelector('.MyForm').addEventListener('click', function () {
    // Sayfayı yukarı kaydır
 
});









//  // JavaScript kodlarını buraya ekleyebilirsiniz
//  document.addEventListener('DOMContentLoaded', function () {
//     // API'dan verileri çekmek için örnek bir URL (gerçek API endpointinizi kullanmalısınız)
//     const apiUrl = 'http://localhost:3000/posts';

//     // digitalImg div'ine ürün listesini ekleme
//     function populateProductList(products) {
//       const productListDiv = document.getElementById('productList');
//       products.forEach(product => {
//         const productDiv = document.createElement('div');
//         productDiv.innerHTML = `<h3>${product.name}</h3><p>${product.description}</p><div class="digitalBtn"><button data-id="${product.id}">Learn more</button></div>`;
//         productListDiv.appendChild(productDiv);
//       });
//     }

//     // API'dan veri çekme
//     fetch('http://localhost:3000/posts')
//       .then(response => response.json())
//       .then(data => populateProductList(data))
//       .catch(error => console.error('Error fetching data:', error));

//     // Learn more butonlarına click event ekleme
//     document.addEventListener('click', function (event) {
//       if (event.target.tagName === 'BUTTON' && event.target.dataset.id) {
//         const productId = event.target.dataset.id;
//         window.location.href = `devices.html?id=${productId}`; // device.html sayfasına yönlendirme
//       }
//     });
//   });










const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});