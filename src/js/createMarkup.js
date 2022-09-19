export {createMarkup}

import { refs } from "./refs";

function createMarkup(resp) {
    console.log(resp.data.hits);
    const markup = resp.data.hits.reduce((acc, el) => {
        const { webformatURL, largeImageURL, tags, likes, views, comments, downloads } = el;
       return acc + `<a href ="" class="img-link>"><div class="photo-card">
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
    refs.galleryContainer.insertAdjacentHTML("afterbegin", markup);
}
