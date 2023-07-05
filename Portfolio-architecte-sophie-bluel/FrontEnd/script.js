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

let allTravaux = null;
let objet = null;
let appartement = null;
let hotelEtRestaurant = null;
let works = null;
let categories = null;
const objetCategoryId = 1;
const appartementCategoryId = 2;
const hotelEtRestaurantCategoryId = 3;
const tableauCategories = [
  { id: 1, name: "Objets" },
  { id: 2, name: "Appartements" },
  { id: 3, name: "Hotels et restaurants" },
];

let id;

try {
  const response = await fetch("http://localhost:5678/api/categories");
  categories = await response.json();
} catch (error) {
  console.log(error);
}

const displayCategories = () => {
  categories.forEach((category) => {
    const container = document.querySelector(".gallery");
    const categoriesHtml = document.createElement("a");
    const listeCategories = document.createElement("ul");
    categoriesHtml.innerText = "Ou apparait tu ?";
    categoriesHtml.setAttribute("href", "");
    listeCategories.innerHTML += `<li><a>${category.id[0].name["Objets"]}</a></li>`;
    container.append(categoriesHtml);
    //ajout ul li de Html de base
    categoriesHtml.addEventListener("click", () => {
      filtreTravauxParCategorie();
    });
  });
};

const filtreTravauxParCategorie = (category, categoryId) => {
  const filtreTravaux = travaux.filter((travail) => {
    return tableauCategories.id === travail.categoryId;
  });
};
