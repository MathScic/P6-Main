let travaux;

try {
  const response = await fetch("http://localhost:5678/api/works");
  travaux = await response.json();
} catch (error) {
  console.log(error);
}

// donst afficherTravaux = (data) => {
travaux.forEach((travail) => {
  console.log(travail.imageUrl);
  let firstTravaux = document.querySelector(".gallery");
  firstTravaux.innerHTML += `<figure class ="categories" > 
  <img src="${travail.imageUrl}" alt="${travail.title}" />
  <figcaption>${travail.title}</figcaption>
</figure>`;
});
//}

// add event listener

// 2 foreach pour html et event listener pour chaque catégorie creer
//+ methode filter pour filtrer le tableau et ensuite reconstruire le tableau

let categories;

try {
  const response = await fetch("http://localhost:5678/api/categories");
  categories = await response.json();
} catch (error) {
  console.log(error);
}

categories.forEach((allCategorie) => {
  console.log(allCategorie.category);
  let container = document.querySelector(".gallery");
  const categoriesHtml = document.createElement("a");
  categoriesHtml.innerText = "";
  categoriesHtml.setAttribute("href", "");
  const tableauCategorie = [(category = { id: 1, name: "objet" })];

  console.log(tableauCategorie);

  /**const filterTravaux = travaux.filter((work) => {
    return work.categoryId === categoryId;
  });
  console.log(categoryId);

  categoriesHtml.addEventListener("click", () => {});
  **/
  container.append(categoriesHtml);
});
