import items from './gallery-items.js';

const listRef = document.querySelector('.js-gallery');
const modalRef = document.querySelector('.js-lightbox');
const imgRef = document.querySelector('.lightbox__image');
const btnRef = document.querySelector('.lightbox__button');
const overlayRef = document.querySelector('.lightbox__overlay');
const itemsRef = items.map(item => listRef.insertAdjacentHTML('beforeEnd',
    `<li class="gallery__item"><a class="gallery__link" href='${item.original}'>
    <img class="gallery__image" src='${item.preview}' data-source='${item.original}' alt='${item.description}'></a></li>`));

listRef.addEventListener('click', onImageClick);    

function onImageClick(event) {
    event.preventDefault();  

    if (event.target.nodeName !== 'IMG') {
        return;
    };

    modalRef.classList.remove('is-close');
    modalRef.classList.add('is-open');

    const imgLink = event.target;
    imgRef.src = imgLink.dataset.source;

};    

btnRef.addEventListener('click', onClick);

overlayRef.addEventListener('click', onClick);

function onClick() {
    modalRef.classList.remove('is-open');
    modalRef.classList.add('is-close');
    imgRef.src = '';
};

window.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
        modalRef.classList.remove('is-open');
        modalRef.classList.add('is-close');
        imgRef.src = '';
   }
});

