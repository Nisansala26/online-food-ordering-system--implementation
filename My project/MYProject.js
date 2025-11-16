document.addEventListener('DOMContentLoaded', () => {
    // 1. Define the menu data structure
    const menuData = {
        rice: [
            {
                name: "Rice and curry",
                description: "Steamed rice with spicy chicken curry, dhal and veggies",
                prices: [800, 950, 750], // S, M, L prices
                image: "RiceAndCurry.jpg", // Replace with actual image path
            },
            {
                name: "Chicken Fried Rice",
                description: "Fried rice with chicken, egg and vegetables",
                prices: [650, 850, 1050],
                image: "FriedRice.jpg",
            },
            {
                name: "Seafood Fried Rice",
                description: "Fried rice with prawns and cuttlefish",
                prices: [750, 950, 1150],
                image: "PronesRice.jpg",
            },
            {
                name: "Nasi Goreng",
                description: "Indonesian style fried egg & satay",
                prices: [800, 1000, 1300],
                image: "NasiGoreng.jpg",
            },
            {
                name: "Egg Fried Rice",
                description: "Fried rice with scrambled egg and veggies",
                prices: [700, 700, 900],
                image: "EggRice.jpg",
            },
        ],
        kottu: [
            {
                name: "Vegetable Kottu",
                description: "Kottu with assorted vegetables",
                prices: [550, 750, 950],
                image: "VegetableKottu.jpg",
            },
            {
                name: "Egg Kottu",
                description: "Kottu with egg and vegetables",
                prices: [550, 750, 950],
                image: "EggKottu.jpg",

            },
            {
                name: "Chicken Kottu",
                description: "Kottu with chicken, egg & veggies",
                prices: [550, 750, 950],
                image: "ChickenKottu.jpg",
            },
            {
                name: "Cheese Kottu",
                description: "Spicy kottu tossed with cheese",
                prices: [550, 750, 950],
                image: "CheeseKottu.jpg",
            },
             {
                name: "String Hopper Kottu",
                description: "Kottu made with string hoppers",
                prices: [550, 750, 950],
                image: "StringHopperKottu.jpg",
                highlight: false
            },
        ]
    };

    // 2. Function to generate a single menu item HTML
    function createMenuItem(item) {
    return `
        <div class="menu-item">
            <div class="item-details">
                <img src="${item.image}" alt="${item.name}" class="item-image">
                <div class="item-info">
                    <div class="item-name">${item.name}</div>
                    <div class="item-description">${item.description}</div>
                </div>
            </div>

            <div class="item-prices">
                <span>${item.prices[0]}</span>
                <span>${item.prices[1]}</span>
                <span>${item.prices[2]}</span>
            </div>

            <button class="add-btn">+</button>
        </div>
    `;
}

    // 3. Function to render the entire menu
    function renderMenu() {
        const riceContainer = document.getElementById('rice-items');
        const kottuContainer = document.getElementById('kottu-items');
        
        // Clear existing content (if any)
        riceContainer.innerHTML = '';
        kottuContainer.innerHTML = '';

        // Render Rice items
        menuData.rice.forEach(item => {
            riceContainer.innerHTML += createMenuItem(item);
        });
        
        // Render Kottu items
        menuData.kottu.forEach(item => {
            kottuContainer.innerHTML += createMenuItem(item);
        });
    }

    // Run the renderer
    renderMenu();
});