let travaux;

try {
  const response = await fetch("http://localhost:5678/api/works");
  travaux = await response.json();
} catch (error) {
  console.log(error);
}

// donst afficherTravaux = (data) => {
travaux.forEach((travail) => {
  //console.log(travail.imageUrl);
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
/**const tableauCategories = [
  { id: 1, name: "Objets" },
  { id: 2, name: "Appartements" },
  { id: 3, name: "Hotels et restaurants" },
];**/
let id;

try {
  const response = await fetch("http://localhost:5678/api/categories");
  categories = await response.json();
} catch (error) {
  console.log(error);
}

categories.forEach((category) => {
  console.log(category);
  const container = document.querySelector(".gallery");
  const categoriesHtml = document.createElement("a");
  const listeCategories = document.createElement("ul");
  const filtres = document.querySelector(".filtres");

  categoriesHtml.innerText = category.name;
  listeCategories.setAttribute("href", "#");
  categoriesHtml.innerHTML += `<li>${category.id}</li>`;
  container.append(categoriesHtml, listeCategories);
  filtres.innerText = category.name;

  categoriesHtml.addEventListener("click", () => {
    filtreTravauxParCategorie();
  });
});

const filtreTravauxParCategorie = (category, categoryId) => {
  const filtreTravaux = travaux.filter((travail) => {
    return filtreTravaux.id === travail.categoryId;
  });
};
