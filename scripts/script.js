let profileEditButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupLineInputName = document.querySelector('.popup__line_name');
let profileTitle = document.querySelector('.profile__title');
let popupLineInputHobby = document.querySelector('.popup__line_hobby');
let profileAbout = document.querySelector('.profile__subtitle');
let profileCloseButton = document.querySelector('.popup__close-button');
let popupForm = document.querySelector('.popup__form');

function popupOpen() {
    popupLineInputName.value = profileTitle.textContent;
    popupLineInputHobby.value = profileAbout.textContent;
    popup.classList.add('popup__opened');
}

function popupClose() {
    popup.classList.remove('popup__opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileTitle.textContent = popupLineInputName.value;
    profileAbout.textContent = popupLineInputHobby.value;
    popupClose();
}

profileEditButton.addEventListener('click', popupOpen);
popupForm.addEventListener('submit', formSubmitHandler);
profileCloseButton.addEventListener('click', popupClose);