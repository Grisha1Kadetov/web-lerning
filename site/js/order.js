const orderBlock = document.getElementById("order-block");
const priceBlock = document.getElementById("order-price");
const priceValue = document.getElementById("order-sum");

const selected = {
    soups: null,
    mains: null,
    salads: null,
    drinks: null,
    desserts: null
};

document.addEventListener("click", e => {
    const button = e.target.closest(".dish-button");
    if (!button) return;

    const card = button.closest(".dish-card");
    const dish = dishes.find(d => d.keyword === card.dataset.dish);

    selected[dish.category] = dish;
    renderOrder();
});

function renderOrder() {
    orderBlock.innerHTML = "";

    const nothingSelected = Object.values(selected).every(v => v === null);

    if (nothingSelected) {
        orderBlock.innerHTML = `<p class="order-empty">Ничего не выбрано</p>`;
        priceBlock.style.display = "none";
        return;
    }

    let total = 0;

    total += renderCategory("Суп", selected.soups, "Блюдо не выбрано");
    total += renderCategory("Горячее блюдо", selected.mains, "Блюдо не выбрано");
    total += renderCategory("Салат / стартер", selected.salads, "Блюдо не выбрано");
    total += renderCategory("Напиток", selected.drinks, "Напиток не выбран");
    total += renderCategory("Десерт", selected.desserts, "Блюдо не выбрано");

    priceValue.textContent = total;
    priceBlock.style.display = "block";
}

function renderCategory(title, dish, emptyText) {
    const block = document.createElement("div");
    block.className = "order-category";

    const titleEl = document.createElement("strong");
    titleEl.textContent = title;

    const contentEl = document.createElement("p");

    let price = 0;

    if (dish) {
        contentEl.textContent = `${dish.name} ${dish.price} ₽`;
        price = dish.price;
    } else {
        contentEl.textContent = emptyText;
    }

    block.appendChild(titleEl);
    block.appendChild(contentEl);
    orderBlock.appendChild(block);

    return price;
}

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const {
        soups,
        mains,
        salads,
        drinks,
        desserts
    } = selected;

    const nothingSelected =
        !soups && !mains && !salads && !drinks && !desserts;
    
    if (nothingSelected) {
        showNotification(
            "Ничего не выбрано. Выберите блюда для заказа",
            "nothing"
        );
        return;
    }

    if (!drinks) {
        showNotification(
            "Выберите напиток",
            "drink"
        );
        return;
    }

    if (soups && !mains && !salads) {
        showNotification(
            "Выберите главное блюдо/салат/стартер",
            "soup"
        );
        return;
    }

    if (salads && !soups && !mains) {
        showNotification(
            "Выберите суп или главное блюдо",
            "salad"
        );
        return;
    }

    if ((drinks || desserts) && !mains && !soups && !salads) {
        showNotification(
            "Выберите главное блюдо",
            "main"
        );
        return;
    }

    e.target.submit();
});



function showNotification(text, type) {
    const overlay = document.createElement("div");
    overlay.className = "notify-overlay";

    overlay.innerHTML = `
        <div class="notify-box">
            <p class="notify-text">${text}</p>
            <button class="notify-btn">Окей</button>
        </div>
    `;

    document.body.appendChild(overlay);

    overlay.querySelector(".notify-btn").addEventListener("click", () => {
        overlay.remove();
    });
}

