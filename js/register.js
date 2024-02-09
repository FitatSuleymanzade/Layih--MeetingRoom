// // script.js

// function showMinCharMessage() {
//   document.getElementById("minCharMessage").style.display = "block";
// }

// function signUp() {
//   // Bu fonksiyon içinde mock API'ye veri gönderme işlemini gerçekleştirin
//   // Örneğin:
//   fetch('https://655c30a1ab37729791aa03c7.mockapi.io/fi/productsr', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       country: document.getElementById('country').value,
//       companyName: document.getElementById('companyName').value,
//       firstName: document.getElementById('firstName').value,
//       lastName: document.getElementById('lastName').value,
//       email: document.getElementById('email').value,
//       phone: document.getElementById('phone').value,
//       password: document.getElementById('password').value,
//     }),
//   })
//   .then(response => response.json())
//   .then(data => {
//     console.log('Success:', data);
//     // Başarılı kayıt durumuyla ilgili işlemleri gerçekleştirin
//     window.location.href = 'login.html'; // Login sayfasına yönlendir
//   })
//   .catch(error => {
//     console.error('Error:', error);
//     // Hata durumuyla ilgili işlemleri gerçekleştirin
//   });

//   // Örnek: Doğrudan login sayfasına yönlendir
//   window.location.href = 'login.html';
// }

// function signIn() {
//   const loginEmail = document.getElementById('loginEmail').value;
//   const loginPassword = document.getElementById('loginPassword').value;

//   // Eğer login işlemi başarılıysa
//   if (loginEmail === 'example@example.com' && loginPassword === 'password') {
//     window.location.href = 'index.html'; // Index sayfasına yönlendir
//   } else {
//     alert('Invalid credentials. Please try again.');
//   }
// }






// script.js

function showMinCharMessage() {
  document.getElementById("minCharMessage").style.display = "block";
}

function signUp() {
  const passwordInput = document.getElementById('password');
  
  // Min. 8 karakter kontrolü
  if (passwordInput.value.length < 8) {
    showMinCharMessage();
    return;
  }

  // API'ye veri gönderme işlemi
  fetch('https://655c30a1ab37729791aa03c7.mockapi.io/fi/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      country: document.getElementById('country').value,
      companyName: document.getElementById('companyName').value,
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      password: passwordInput.value,
    }),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    // Başarılı kayıt durumuyla ilgili işlemleri gerçekleştirin
    window.location.href = 'login.html'; // Login sayfasına yönlendir
  })
  .catch(error => {
    console.error('Error:', error);
    // Hata durumuyla ilgili işlemleri gerçekleştirin
  });
}

function signIn() {
  const loginEmail = document.getElementById('loginEmail').value
  const loginPassword = document.getElementById('loginPassword').value

  // Eğer login işlemi başarılıysa
  if (loginEmail === 'example@example.com' && loginPassword === 'password') {
    window.location.href = 'index.html'; // Index sayfasına yönlendir
  } else {
    alert('Invalid credentials. Please try again.');
  }
}




  