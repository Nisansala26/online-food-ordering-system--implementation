document.addEventListener('DOMContentLoaded', () => {

    const lunchMenu = [
        {
            name: "Rice & Curry",
            description: "Steamed rice with chicken curry, dhal & vegetables",
            prices: [800, 950, 1200],
            image: "RiceCurry.jpg"
        },
        {
            name: "Chicken Fried Rice",
            description: "Fried rice with chicken, egg & vegetables",
            prices: [700, 900, 1100],
            image: "FriedRice.jpg"
        },
        {
            name: "Seafood Fried Rice",
            description: "Fried rice with prawns & cuttlefish",
            prices: [850, 1000, 1250],
            image: "PronesRice.jpg"
        },
        {
            name: "Vegetable Kottu",
            description: "Kottu with assorted vegetables",
            prices: [550, 750, 950],
            image: "VegetableKottu.jpg"
        },
        {
            name: "Chicken Kottu",
            description: "Kottu with chicken, egg & vegetables",
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
                    <span>${item.prices[0]}</span>
                    <span>${item.prices[1]}</span>
                    <span>${item.prices[2]}</span>
                </div>

                <button class="add-btn">+</button>
            </div>
        `;
    }

    function renderLunchMenu() {
        const container = document.getElementById("lunch-items");
        container.innerHTML = "";
        lunchMenu.forEach(item => {
            container.innerHTML += createMenuItem(item);
        });
    }

    renderLunchMenu();

});
