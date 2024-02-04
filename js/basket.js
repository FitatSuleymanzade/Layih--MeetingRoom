const div = document.getElementById('productsList')

function getProducts () {
    
    div.innerHTML = ``
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.map((item,index )=> {
        const box = document.createElement('div')
        box.className = 'boxdi col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4'
        box.innerHTML = `
         <p>${item.name}</p>
         <img style="width:150px" src='${item.image}' alt="">
        <button onclick="removeItem(${index})">Remove cart</button>`

        div.appendChild(box)
    })
}

function removeItem (index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
    getProducts()
}

window.onload = () => {
    getProducts()
}

const butn = document.getElementById('butn')
const inpp = document.getElementById('inpp')
const list = document.querySelector('.list')
const trip = document.getElementById('trip')





function findByName() {
  div.innerHTML=``
    axios
      .get(`https://655c30a1ab37729791aa03c7.mockapi.io/fi/products`)
      .then((res) => {
        db = res.data;
        console.log(db);
        let filteredData = db.filter(item => item.name.toLowerCase().startsWith(inpp.value))
        console.log(filteredData);

        filteredData.map((item) => {
          let myDiv = document.createElement("div");
          myDiv.className = "myDiv col-xl-12 col-lg-12 col-md-12 col-sm-12";
          myDiv.innerHTML = `
          <img style="width:190px" src='${item.image}' alt="">
          <p class='title' style="width:200px">${item.name}</p>
          <p class='title' style="width:200px">${item.price}</p>
         
          `;
          div.appendChild(myDiv);
        });
      });
  }

  function removeItem (index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
    getProducts()
}


butn.addEventListener('click', findByName)


