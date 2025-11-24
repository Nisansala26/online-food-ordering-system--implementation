document.addEventListener('DOMContentLoaded', () => {
    // 1. Define the menu data structure (UNCHANGED)
    const menuData = {
        rice: [
            {
                name: "Rice and curry",
                description: "Steamed rice with spicy chicken curry, dhal and veggies...  calorie:-450",
                prices: [750, 800, 950], // S, M, L prices
                image: "RiceAndCurry.jpg",
            },
            {
                name: "Chicken Fried Rice",
                description: "Fried rice with chicken, egg and vegetables .... calorie:-800",
                prices: [650, 850, 1050],
                image: "FriedRice.jpg",
            },
            {
                name: "Seafood Fried Rice",
                description: "Fried rice with prawns and cuttlefish  ... calorie:-900",
                prices: [750, 950, 1150],
                image: "PronesRice.jpg",
            },
            {
                name: "Nasi Goreng",
                description: "Indonesian style fried egg & satay  calorie:-850",
                prices: [800, 1000, 1300],
                image: "NasiGoreng.jpg",
            },
            {
                name: "Egg Fried Rice",
                description: "Fried rice with scrambled egg and veggies ...calorie:-700",
                prices: [700, 700, 900],
                image: "EggRice.jpg",
            },
        ],
        kottu: [
            {
                name: "Vegetable Kottu",
                description: "Kottu with assorted vegetables ... calorie:-800",
                prices: [550, 750, 950],
                image: "VegetableKottu.jpg",
            },
            {
                name: "Egg Kottu",
                description: "Kottu with egg and vegetables ... calorie:-850",
                prices: [550, 750, 950],
                image: "EggKottu.jpg",

            },
            {
                name: "Chicken Kottu",
                description: "Kottu with chicken, egg & veggies ... calorie:-900",
                prices: [550, 750, 950],
                image: "ChickenKottu.jpg",
            },
            {
                name: "Cheese Kottu",
                description: "Spicy kottu tossed with cheese ... calorie:-850",
                prices: [550, 750, 950],
                image: "CheeseKottu.jpg",
            },
             {
                name: "String Hopper Kottu",
                description: "Kottu made with string hoppers  ... calorie:-800",
                prices: [550, 750, 950],
                image: "StringHopperKottu.jpg",
                highlight: false
            },
        ]
    };

    
    function createMenuItem(item) {
        
        const encodedPrices = encodeURIComponent(JSON.stringify(item.prices));
        
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
                    <button class="add-btn" data-item="${item.name}" data-size="S" data-price-index="0" data-prices="${encodedPrices}">${item.prices[0]}</button>
                    <button class="add-btn" data-item="${item.name}" data-size="M" data-price-index="1" data-prices="${encodedPrices}">${item.prices[1]}</button>
                    <button class="add-btn" data-item="${item.name}" data-size="L" data-price-index="2" data-prices="${encodedPrices}">${item.prices[2]}</button>
                </div>
            </div>
        `;
    }

    // 3. Function to render the entire menu (UNCHANGED)
    function renderMenu() {
        const riceContainer = document.getElementById('rice-items');
        const kottuContainer = document.getElementById('kottu-items');
        
        riceContainer.innerHTML = '';
        kottuContainer.innerHTML = '';

        menuData.rice.forEach(item => {
            riceContainer.innerHTML += createMenuItem(item);
        });
        
        menuData.kottu.forEach(item => {
            kottuContainer.innerHTML += createMenuItem(item);
        });
    }

    // Run the renderer
    renderMenu();

    // 4. Attach Event Listeners to ALL new buttons
    const buttons = document.querySelectorAll(".add-btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", (event) => {
            const itemName = event.currentTarget.getAttribute('data-item');
            const itemSize = event.currentTarget.getAttribute('data-size');
            const priceIndex = event.currentTarget.getAttribute('data-price-index');
            
            // Redirect to order form with item name, size, and price index
            window.location.href = `order.html?item=${encodeURIComponent(itemName)}&size=${itemSize}&priceIndex=${priceIndex}`;
        });
    });
});