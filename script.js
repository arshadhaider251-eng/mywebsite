// Simple modal functionality
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalPrice = document.getElementById('modal-price');
const closeBtn = document.getElementsByClassName('close')[0];

let cartItems = [];
let cartTotal = 0;

document.querySelectorAll('.perfume-item').forEach(item => {
    const img = item.querySelector('img');
    const title = item.querySelector('h3').textContent;
    const desc = item.querySelector('p').textContent;
    const priceText = item.querySelector('.price').textContent;
    const price = parseFloat(priceText.replace('$', ''));

    img.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
        modalTitle.textContent = title;
        modalDesc.textContent = desc;
        modalPrice.textContent = priceText;
    });

    const btn = item.querySelector('.btn');
    btn.addEventListener('click', function() {
        addToCart(title, price);
    });

    const modalBtn = document.querySelector('.modal-btn');
    modalBtn.addEventListener('click', function() {
        addToCart(modalTitle.textContent, parseFloat(modalPrice.textContent.replace('$', '')));
        modal.style.display = 'none';
    });
});

function addToCart(product, price) {
    cartItems.push({ product, price });
    cartTotal += price;
    document.getElementById('cart-count').textContent = cartItems.length;
    document.getElementById('cart-total').textContent = '$' + cartTotal.toFixed(2);
    alert('Added ' + product + ' to cart! Total: $' + cartTotal.toFixed(2));
}

function subscribe() {
    const email = document.getElementById('email-input').value;
    if (email) {
        alert('Thank you for subscribing! We\'ll send updates to ' + email);
        document.getElementById('email-input').value = '';
    } else {
        alert('Please enter a valid email address.');
    }
}

closeBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}