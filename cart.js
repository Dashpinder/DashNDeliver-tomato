document.addEventListener('DOMContentLoaded', function() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartSummaryContainer = document.getElementById('cartSummary');

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    function displayCart() {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('cart-item');
            itemDiv.innerHTML = `
            <div class= "cartContent">
                <img src="${item.img}" alt="${item.name}" id="cart-pic">
                <h2>${item.name}</h2>
                <p>Price: ₹${item.price}</p>
                <div class="cartBtn">
                    <button class="increment" data-id="${item.id}">+</button>
                <p><span id="quantity-${item.id}">${item.quantity}</span></p>

                    <button class="decrement" data-id="${item.id}">-</button>
                </div>
                <div class="rmveBtn">
                    <button class="remove" data-id="${item.id}">Remove</button>
                </div>
            </div>
            `;
            cartItemsContainer.appendChild(itemDiv);
            total += item.price * item.quantity;
        });

        cartSummaryContainer.innerHTML = `<h3 id= "totalCart">Total: ₹${total}</h3>`;

        addEventListeners();
    }

    function addEventListeners() {
        const incrementButtons = document.querySelectorAll('.increment');
        incrementButtons.forEach(button => {
            button.addEventListener('click', function() {
                const itemId = parseInt(this.getAttribute('data-id'));
                const item = cart.find(item => item.id === itemId);
                if (item) {
                    item.quantity += 1; 
                    localStorage.setItem('cart', JSON.stringify(cart)); 
                    displayCart(); 
                }
            });
        });


        const decrementButtons = document.querySelectorAll('.decrement');
        decrementButtons.forEach(button => {
            button.addEventListener('click', function() {
                const itemId = parseInt(this.getAttribute('data-id'));
                const item = cart.find(item => item.id === itemId);
                if (item && item.quantity > 1) {
                    item.quantity -= 1; 
                    localStorage.setItem('cart', JSON.stringify(cart)); 
                    displayCart();
                }
            });
        });


        const removeButtons = document.querySelectorAll('.remove');
        removeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const itemId = parseInt(this.getAttribute('data-id'));
                const itemIndex = cart.findIndex(item => item.id === itemId);
                if (itemIndex > -1) {
                    cart.splice(itemIndex, 1); 
                    localStorage.setItem('cart', JSON.stringify(cart)); 
                    displayCart(); 
                }
            });
        });
    }

    displayCart();
});