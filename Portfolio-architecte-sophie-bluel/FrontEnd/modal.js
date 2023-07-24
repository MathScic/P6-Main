//Modal

let modal = document.querySelector(".modal");
const modalImg = modal.querySelector(".modal-img");
let importImg;
const containerImg = document.querySelector(".container_suppression");

const openModal = async function (e) {
  try {
    const response = await fetch("http://localhost:5678/api/works");
    importImg = await response.json();
  } catch (error) {
    console.log(error);
  }

  const maxImg = 11;
  let counterImg = 0;

  importImg.forEach((image) => {
    console.log(image);
    const imgElement = document.createElement("img");
    imgElement.src = image.imageUrl;
    console.log("image element", imgElement);
    const lienSuppr = document.createElement("a"); // creer div avec img et lien pour adapter en css en absolute
    lienSuppr.classList.add("lien_suppr");
    lienSuppr.innerHTML = "lien";
    const div = document.createElement("div");
    div.append(lienSuppr, imgElement);
    containerImg.append(div);
    lienSuppr.addEventListener("click", (e) => {
      debugger;
      containerImg.remove(e.target.parentNode);
    });
  });

  modal.style.display = "flex"; //Sert a aficher la div de la modal
  modal.setAttribute("aria-hidden", "false"); //indique modal affiché (pour malvoyant) au lecteur d'écran
  modal.setAttribute("aria-modal", "true"); // indique que la div correspond a la modal
};

const closeModal = function (e) {
  containerImg.innerHTML = "";
  debugger;
  modal.style.display = "none"; //masque la div de la modal
  modal.setAttribute("aria-hidden", "true");
};

document.querySelector(".js-modal").addEventListener("click", openModal);
modal.querySelector(".js-modal-close").addEventListener("click", closeModal);

//Pour close la modal avec escape
window.addEventListener("keydown", function (e) {
  if (e.key === "Escape" || e.key === "Esc") {
    closeModal(e);
  }
});
