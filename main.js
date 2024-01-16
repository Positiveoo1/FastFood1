const menuBar = document.querySelector(".fa-bars");
const close = document.querySelector(".fa-xmark");
const sideBar = document.querySelector(".sidebar");


menuBar.addEventListener('click', function() {
    sideBar.classList.add("open");
});


close.addEventListener('click', function() {
    sideBar.classList.remove("open");
});

function reload() {
    location.reload();
}

document.addEventListener("DOMContentLoaded", function() {
    
    var navLinks = document.querySelectorAll('.items a');

   
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            var targetId = this.getAttribute('href').substring(1);

           
            var targetSection = document.getElementById(targetId);

           
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
let cartItems = 0;
let totalQuantity = 0;

function addToCart() {
    cartItems++;
    totalQuantity++;
    updateBasketIcon();
}

function updateBasketIcon() {
    const basketIcon = document.getElementById('basket-icon');
    basketIcon.innerText = `${cartItems} (${totalQuantity} items)`;
}

function viewBasket() {
    alert(`You have ${cartItems} item(s) in your basket.`);
}