const plusBtn = document.getElementById("increase"); 
const minusBtn = document.getElementById("decrease"); 
const quantityDisplay = document.getElementById("quantity");
const quantityInput = document.getElementById("quantityInput"); // Get the new hidden input

let quantity = 1;

function updateQuantityDisplay() {
  quantityDisplay.textContent = quantity;
  quantityInput.value = quantity; // Update the hidden input value
}

plusBtn.addEventListener("click", () => {
  quantity++;
  updateQuantityDisplay();
});

minusBtn.addEventListener("click", () => {
  if (quantity > 1) {
    quantity--;
    updateQuantityDisplay();
  }
});

document.getElementById("orderForm").addEventListener("submit", (e) => {
  // e.preventDefault(); // Remove this line if you want the PHP redirect to work seamlessly
  alert("✅ Thank you for your order! We’ll contact you soon.");
  
 
  quantity = 1;
  updateQuantityDisplay(); 
});
