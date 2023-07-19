//Modal
let modal = document.querySelector(".modal");

const openModal = function (e) {
  modal.style.display = "block"; //Sert a aficher la div de la modal
  modal.setAttribute("aria-hidden", "false"); //indique modal affiché (pour malvoyant) au lecteur d'écran
  modal.setAttribute("aria-modal", "true"); // indique que la div correspond a la modal
};

const closeModal = function (e) {
  modal.style.display = "none"; //masque la div de la modal
  modal.setAttribute("aria-hidden", "true");
};

document.querySelector(".js-modal").addEventListener("click", openModal);
modal.querySelector(".js-modal-close").addEventListener("click", closeModal);
