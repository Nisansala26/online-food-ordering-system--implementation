document.addEventListener('DOMContentLoaded', () => {

    const lunchMenu = [
        {
            name: "Rice & Curry",
            description: "Steamed rice with chicken curry, dhal & vegetables ... calory:-450",
            prices: [800, 950, 1200],
            image: "RiceCurry.jpg"
        },
        {
            name: "Chicken Fried Rice",
            description: "Fried rice with chicken, egg & vegetables ... calory:-850",
            prices: [700, 900, 1100],
            image: "FriedRice.jpg"
        },
        {
            name: "Seafood Fried Rice",
            description: "Fried rice with prawns & cuttlefish ... calory:-900",
            prices: [850, 1000, 1250],
            image: "PronesRice.jpg"
        },
        {
            name: "Vegetable Kottu",
            description: "Kottu with assorted vegetables ... calory:-800",
            prices: [550, 750, 950],
            image: "VegetableKottu.jpg"
        },
        {
            name: "Chicken Kottu",
            description: "Kottu with chicken, egg & vegetables ... calory:- 850",
            prices: [650, 850, 1050],
            image: "ChickenKottu.jpg"
        }
    ];

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
                    <button class="add-btn size-btn" data-item="${item.name}" data-size="S" data-price-index="0">${item.prices[0]}</button>
                    <button class="add-btn size-btn" data-item="${item.name}" data-size="M" data-price-index="1">${item.prices[1]}</button>
                    <button class="add-btn size-btn" data-item="${item.name}" data-size="L" data-price-index="2">${item.prices[2]}</button>
                </div>
            </div>
        `;
    }

    function renderLunchMenu() {
        const container = document.getElementById("lunch-items");
        container.innerHTML = "";
        lunchMenu.forEach(item => {
            container.innerHTML += createMenuItem(item);
        });
        
        attachSizeButtonListeners();
    }
    
    function attachSizeButtonListeners() {
        document.querySelectorAll(".size-btn").forEach(btn => {
            btn.addEventListener("click", (event) => {
                const itemName = event.currentTarget.getAttribute('data-item');
                const itemSize = event.currentTarget.getAttribute('data-size');
                const priceIndex = event.currentTarget.getAttribute('data-price-index');
                
                // order.html වෙත redirect කරයි
                window.location.href = `order.html?item=${encodeURIComponent(itemName)}&size=${itemSize}&priceIndex=${priceIndex}`;
            });
        });
    }

    renderLunchMenu();
});