import data from "./data.json" assert { type: "json" };
const content = document.querySelector(".content");

data.map((item, key) => {
  content.innerHTML += `<div class="summary-item" data-item-type="accent-${key}">
  <div class="flex-group">
    <img src=${item.icon} alt="${item.category} Icon" />
    <h3 class="summary-item-title">${item.category}</h3>
  </div>
  <p class="summary-score"><span>${item.score}</span> / 100</p>
</div>`;
});
