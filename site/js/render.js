const containers = {
    soups: document.querySelector("#soups .menu-grid"),
    mains: document.querySelector("#mains .menu-grid"),
    salads: document.querySelector("#salads .menu-grid"),
    drinks: document.querySelector("#drinks .menu-grid"),
    desserts: document.querySelector("#desserts .menu-grid")
};

dishes
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach(dish => {
        const card = document.createElement("div");
        card.className = "dish-card";

        card.dataset.dish = dish.keyword;
        card.dataset.kind = dish.kind;

        card.innerHTML = `
            <img src="${dish.image}" alt="${dish.name}">
            <p class="dish-price">${dish.price} ₽</p>
            <p class="dish-name">${dish.name}</p>
            <div class="dish-bottom">
                <p class="dish-weight">${dish.count}</p>
                <button class="dish-button">Добавить</button>
            </div>
        `;

        const container = containers[dish.category];

        container.appendChild(card);
    });

document.addEventListener("click", e => {
    const filterBtn = e.target.closest(".filters button");
    if (!filterBtn) return;

    const kind = filterBtn.dataset.kind;
    const section = filterBtn.closest(".menu-section");
    const grid = section.querySelector(".menu-grid");
    const cards = grid.querySelectorAll(".dish-card");

    section.querySelectorAll(".filters button")
        .forEach(btn => btn.classList.remove("active"));
    filterBtn.classList.add("active");

    cards.forEach(card => {
        if (kind === "all" || card.dataset.kind === kind) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
});
