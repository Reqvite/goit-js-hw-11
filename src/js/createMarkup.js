export { createMarkup, refreshSimpleBox }

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { refs } from "./refs";

const createMarkup = resp => {
  const markup = resp.data.hits.reduce((acc, el) => {
        const { webformatURL, largeImageURL, tags, likes, views, comments, downloads } = el;
       return acc + `<a href ="${largeImageURL}" class="img-link>"><div class="photo-card">
  <img  class="gallery-img" src="${webformatURL}" alt="${tags}" loading="lazy"  width="400" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
      <span>${likes}</span>
    </p>
    <p class="info-item">
      <b>Views</b>
      <span>${views}</span>
    </p>
    <p class="info-item">
      <b>Comments</b>
      <span>${comments}</span>
    </p>
    <p class="info-item">
      <b>Downloads</b>
      <span>${downloads}</span>
    </p>
  </div>
</div>
</a>`
    }, '')
    if (refs.galleryContainer.children.length === 0) {
      refs.galleryContainer.insertAdjacentHTML("afterbegin", markup);  
    } else {
      refs.galleryContainer.insertAdjacentHTML("beforeend", markup); 
  }
   let simpleLightbox = new SimpleLightbox('.gallery a',);
}

 const refreshSimpleBox = () => {
       if (document.querySelectorAll('.sl-wrapper').length !== 1) {
        while (document.querySelectorAll('.sl-wrapper').length > 1) {
        document.querySelector('.sl-wrapper').remove()
            document.querySelector('.sl-overlay').remove() 
           }
     }
}


