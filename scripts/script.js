let profileEditButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupInputName = document.querySelector('.popup__input_value-name');
let profileTitle = document.querySelector('.profile__title');
let popupInputHobby = document.querySelector('.popup__input_value-hobby');
let profileAbout = document.querySelector('.profile__subtitle');
let profileCloseButton = document.querySelector('.popup__close-button');
let popupForm = document.querySelector('.popup__form');

function popupOpen() {
    popupInputName.value = profileTitle.textContent;
    popupInputHobby.value = profileAbout.textContent;
    popup.classList.add('popup_opened');
}

function popupClose() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileTitle.textContent = popupInputName.value;
    profileAbout.textContent = popupInputHobby.value;
    popupClose();
}

profileEditButton.addEventListener('click', popupOpen);
popupForm.addEventListener('submit', formSubmitHandler);
profileCloseButton.addEventListener('click', popupClose);