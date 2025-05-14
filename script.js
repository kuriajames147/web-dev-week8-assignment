document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");

  if (productList) {
    const products = [
      { name: "Laptop", price: 1500 },
      { name: "Headphones", price: 200 },
      { name: "Smartphone", price: 800 }
    ];

    products.forEach(p => {
      const div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `<h3>${p.name}</h3><p>Price: $${p.price}</p><button onclick="addToCart('${p.name}')">Add to Cart</button>`;
      productList.appendChild(div);
    });
  }

  if (cartItems) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.forEach(item => {
      const div = document.createElement("div");
      div.textContent = item;
      cartItems.appendChild(div);
    });
  }
});

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product} added to cart!`);
}
