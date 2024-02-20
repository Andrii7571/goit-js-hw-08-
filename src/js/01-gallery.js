// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
// 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
const gallery = document.querySelector('.gallery');
const markup = createMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend', markup);

function createMarkup(items){
return items.map(({ description, original, preview }) => {
    return `<div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image" data-source="${original}"
                     src="${preview}"
                      alt="${description}"/>
                </a>
            </div>`
}).join('');}

console.log(markup)

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250
});