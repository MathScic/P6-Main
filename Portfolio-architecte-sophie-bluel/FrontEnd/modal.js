//Modal
let modal = document.querySelector(".modal");
const modalImg = modal.querySelector(".modal-img");

const openModal = async function (e) {
  try {
    const response = await fetch("http://localhost:5678/api/works");
    modalImg = await response.json();
    const imageUrl = modalImg.imageUrl;
    modalImg.setAttribute("src", imageUrl);
  } catch (error) {
    console.log(error);
  }

  modal.style.display = "flex"; //Sert a aficher la div de la modal
  modal.setAttribute("aria-hidden", "false"); //indique modal affiché (pour malvoyant) au lecteur d'écran
  modal.setAttribute("aria-modal", "true"); // indique que la div correspond a la modal
};

const closeModal = function (e) {
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
