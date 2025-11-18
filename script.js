

const plusBtn = document.getElementById("increase"); 
const minusBtn = document.getElementById("decrease"); 
const quantityDisplay = document.getElementById("quantity");
let quantity = 1;

plusBtn.addEventListener("click", () => {
  quantity++;
  quantityDisplay.textContent = quantity;
});

minusBtn.addEventListener("click", () => {
  if (quantity > 1) {
    quantity--;
    quantityDisplay.textContent = quantity;
  }
});

document.getElementById("orderForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("✅ Thank you for your order! We’ll contact you soon.");
  e.target.reset();
  quantity = 1;
  quantityDisplay.textContent = quantity;
});
