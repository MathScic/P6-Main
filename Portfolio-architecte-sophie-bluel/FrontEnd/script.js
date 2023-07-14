let travaux;

try {
  const response = await fetch("http://localhost:5678/api/works");
  travaux = await response.json();
} catch (error) {
  console.log(error);
}

// donst afficherTravaux = (data) => {

displayTravaux(travaux);

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

/**Filtres travaux */
try {
  const response = await fetch("http://localhost:5678/api/categories");
  categories = await response.json();
} catch (error) {
  console.log(error);
}

const filtres = document.querySelector(".filtres");
const gallery = document.querySelector(".gallery");

categories.forEach((category) => {
  console.log(category);
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.setAttribute("href", "#");

  li.append(a);
  filtres.append(li);
  a.innerText = category.name;

  a.addEventListener("click", () => {
    console.log(category.name);
    console.log(category.id);
    filtreTravauxParCategorie(category.id);
  });
});

const filtreTravauxParCategorie = (categoryId) => {
  console.log(categoryId);
  const filtreTravaux = travaux.filter((travail) => {
    return categoryId === travail.categoryId;
  });
  gallery.innerHTML = "";

  displayTravaux(filtreTravaux);
  console.log(filtreTravaux);
};

function displayTravaux(travaux) {
  travaux.forEach((travail) => {
    let firstTravaux = document.querySelector(".gallery");
    firstTravaux.innerHTML += `<figure class ="categories" > 
    <img src="${travail.imageUrl}" alt="${travail.title}" />
    <figcaption>${travail.title}</figcaption>
  </figure>`;
  });
}

/**Page de connexion */

try {
  const setting = {
    method: "POST", //Méthod utiliser (GET, POST, PUT, DELETE...)
    headers: { "Content-Type": "application/json" }, // Headers = en tete de la requete //Content-type = contenue de en tete personaliser
    body: JSON.stringify({
      //Corp de la requète contient donner a envoyer
      email: "string",
      password: "string",
    }),
  };
  const response = await fetch(
    "http://localhost:5678/api/users/login",
    settings
  );
  const login = await response.json();
  console.log(login);
} catch (error) {
  console.log(error);
}

const email = document.addEventListener("click", () => {
  const inputEmail = document.querySelector(".container_input_email");
  console.log(inputEmail);

  if (inputEmail) {
    const recupEmail = inputEmail.value;
    console.log(recupEmail);
  } else {
    console.log("");
  }
});
