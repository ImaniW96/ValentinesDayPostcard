// export default class Popup {
//   constructor({ popupSelector }) {
//     this._letterPopup = document.querySelector(popupSelector);

//     this._letterCloseButton = this._letterPopup.querySelector(".letter__close");
//   }

//   open() {
//     this._letterPopup.classList.add("letter_opened");

//     document.addEventListener("keydown", this._handleEscapeClose);
//   }

//   close() {
//     this._letterPopup.classList.remove("letter_opened");

//     document.removeEventListener("keydown", this._handleEscapeClose);
//   }

//   _handleEscapeClose = (evt) => {
//     if (evt.key === "Escape") {
//       this.close();
//     }
//   };

//   setEventListeners() {
//     this._letterPopup.addEventListener("click", (evt) => {
//       if (
//         evt.target === this._letterCloseButton ||
//         evt.target === this._letterPopup
//       ) {
//         this.close();
//       }
//     });
//   }
// }
