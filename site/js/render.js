const containers = {
    soups: document.querySelector("#soups .menu-grid"),
    mains: document.querySelector("#mains .menu-grid"),
    drinks: document.querySelector("#drinks .menu-grid")
};

dishes
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach(dish => {
        const card = document.createElement("div");
        card.className = "dish-card";
        card.dataset.dish = dish.keyword;

        card.innerHTML = `
      <img src="${dish.image}" alt="${dish.name}">
      <p class="dish-price">${dish.price} ₽</p>
      <p class="dish-name">${dish.name}</p>
      <div class="dish-bottom">
        <p class="dish-weight">${dish.count}</p>
        <button class="dish-button">Добавить</button>
      </div>
    `;

        containers[dish.category].appendChild(card);
    });
