const CategoriesItemEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${CategoriesItemEl.length}`);

CategoriesItemEl.forEach((category) => {
  console.log(`Category: ${category.querySelector("h2").textContent}`);
  console.log(`Elements: ${category.querySelectorAll("li").length}`);
});
