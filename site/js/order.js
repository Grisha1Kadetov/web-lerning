const orderBlock = document.getElementById("order-block");
const priceBlock = document.getElementById("order-price");
const priceValue = document.getElementById("order-sum");

const selected = {
    soups: null,
    mains: null,
    drinks: null
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

    const nothingSelected =
        !selected.soups &&
        !selected.mains &&
        !selected.drinks;

    if (nothingSelected) {
        orderBlock.innerHTML = `<p class="order-empty">Ничего не выбрано</p>`;
        priceBlock.style.display = "none";
        return;
    }

    let total = 0;

    total += renderCategory("Суп", selected.soups, "Блюдо не выбрано");
    total += renderCategory("Главное блюдо", selected.mains, "Блюдо не выбрано");
    total += renderCategory("Напиток", selected.drinks, "Напиток не выбран");

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
