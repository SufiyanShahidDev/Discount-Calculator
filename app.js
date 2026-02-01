
const products = [
    {
        id: 1,
        title: "Wireless Noise Cancelling Headphones",
        category: "Audio",
        description: "Premium sound quality with active noise cancellation and 30-hour battery life. Perfect for travel.",
        price: 5499,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 2,
        title: "Smart Fitness Watch Series 5",
        category: "Wearables",
        description: "Track your health, heart rate, and sleep. Water-resistant up to 50 meters with always-on display.",
        price: 2999,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 3,
        title: "Mechanical Gaming Keyboard",
        category: "Gaming",
        description: "RGB backlit keys with blue switches for tactile feedback. Compact tenkeyless design.",
        price: 1850,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1713526211434-0b4c6c9adaa7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 4,
        title: "4K Ultra HD Action Camera",
        category: "Photography",
        description: "Capture life in stunning 4K. Waterproof without a case and includes voice control features.",
        price: 8999,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 5,
        title: "Minimalist Leather Backpack",
        category: "Accessories",
        description: "Handcrafted from genuine leather. Fits a 15-inch laptop with ample space for daily essentials.",
        price: 3200,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 6,
        title: "Portable Bluetooth Speaker",
        category: "Audio",
        description: "360-degree sound with deep bass. Waterproof and dustproof design for outdoor adventures.",
        price: 1200,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&auto=format&fit=crop&q=60"
    }
];

const renderProducts = () => {
    const container = document.getElementById('product-container');

    const productHTML = products.map(product => {
        return `
                <div class="product-card">
                    <img src="${product.image}" alt="${product.title}" class="card-image">
                    <div class="card-body">
                        <span class="card-category">${product.category}</span>
                        <h3 class="card-title">${product.title}</h3>
                        <p class="card-desc">${product.description}</p>
                        <div class="card-footer">
                            <span class="card-price">Rs. ${product.price}</span>
                            <span class="card-rating">★ ${product.rating}</span>
                        </div>
                    </div>
                </div>
            `;
    }).join('');

    container.innerHTML = productHTML;
};

renderProducts();

// Discount

function calculateDiscount() {
    const priceInput = document.getElementById('priceInput').value;
    const couponInput = document.getElementById('couponInput').value.toUpperCase().trim();
    const resultBox = document.getElementById('resultDisplay');

    // validation
    let originaparseFloatlPrice = parseFloat(priceInput);
    if (isNaN(originalPrice) || originalPrice <= 0) {
        resultBox.style.display = 'block';
        resultBox.className = 'result-box error';
        resultBox.innerHTML = '<span class="error-text">Please enter a valid price greater than 0.</span>';
        return;
    }

    let finalPrice = originalPrice;
    let discountNote = "";
    let isValidCoupon = true;

    if (couponInput === 'WELCOME20') {
        let discount = originalPrice * 0.20;
        finalPrice = originalPrice - discount;
        discountNote = "20% Discount applied!";
    }
    else if (couponInput === 'HALFPRICE') {
        let discount = originalPrice * 0.50;
        finalPrice = originalPrice - discount;
        discountNote = "50% Discount applied! Huge savings!";
    }
    else if (couponInput === 'SAVE15') {
        let discount = originalPrice * 0.15;
        finalPrice = originalPrice - discount;
        discountNote = "15% Seasonal Saver applied.";
    }
    else if (couponInput === 'TECH10') {
        let discount = originalPrice * 0.10;
        finalPrice = originalPrice - discount;
        discountNote = "10% Tech Saver applied.";
    }
    else if (couponInput === 'SUPER25') {
        let discount = originalPrice * 0.25;
        finalPrice = originalPrice - discount;
        discountNote = "Super 25% discount applied!";
    }
    else {
        isValidCoupon = false;
    }

    resultBox.style.display = 'block';

    if (isValidCoupon) {
        resultBox.className = 'result-box';
        resultBox.innerHTML = `
                <span class="result-text">Original Price: Rs. ${originalPrice}</span><br>
                <span class="saved-amount">${discountNote}</span>
                <span class="final-price">Rs. ${finalPrice.toFixed(2)}</span>
            `;
    } else {
        resultBox.className = 'result-box error';
        resultBox.innerHTML = `
                <span class="error-text">Invalid Coupon Code.</span><br>
                <span style="font-size: 0.9rem">Please check the code and try again.</span>
            `;
    }
}