const modal = document.getElementById("letter-modal");

const openLetter = document.getElementById("open-letter");

const openModal = () => {
  modal.style.visibility = "visible";
  modal.style.opacity = "1";
};

const closeModal = () => {
  modal.style.visibility = "hidden";
  modal.style.opacity = "0";
};

openLetter.addEventListener("click", openModal);

const closeModalButton = document.getElementById("letter-close-button");
closeModalButton.addEventListener("click", closeModal);
