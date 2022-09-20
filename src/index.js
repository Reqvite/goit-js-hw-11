import './css/styles.css';
import { refs } from './js/refs';
import Notiflix from 'notiflix';
import { fetchPhotos} from './js/fetchPhotos';
import { createMarkup } from './js/createMarkup';
import activeScroll from './js/scrollBtn';
 
refs.form.addEventListener('submit', handleForm);

const oldValue = [];
let countPage = 0;

async function handleForm(e) {
    e.preventDefault();
    if (refs.input.value === '') {
        Notiflix.Notify.info('Enter something..')
         return;
    }
    if (refs.input.value === oldValue[0]) {
        Notiflix.Notify.info('Enter something new..');
        return;
    } else {
        clearContainer() 
    oldValue.push(refs.input.value);
        countPage += 1;
    try {
        const resp = await fetchPhotos(countPage);
        if (resp.data.hits.length === 0) {
         Notiflix.Notify.info('Sorry, there are no images matching your search query. Please try again.')
    } else {
         Notiflix.Notify.success(`Hooray! We found ${resp.data.totalHits} images.`);
        createMarkup(resp)
        window.addEventListener('scroll', checkCoordinates)
    } 
    } catch (error) {
        console.log(error.message);
        Notiflix.Notify.failure("Something went wrong, please reload the page.");
        return;
  }
 }
}

 function checkCoordinates() {
     const documentRect = document.documentElement.getBoundingClientRect();
     const clientHeight = document.documentElement.clientHeight;
     if (documentRect.bottom <= clientHeight + 500) {
         updateGallery()
         activeScroll()
        window.removeEventListener('scroll', checkCoordinates)
    }
}

async function updateGallery() {
    countPage += 1;
    try {
        const resp = await fetchPhotos(countPage)
    createMarkup(resp)
    window.addEventListener('scroll', checkCoordinates)
    } catch (error) {
        console.log(error.message);
        Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.");
        return;
  }

}

function clearContainer() {
    countPage = 0;
    refs.galleryContainer.innerHTML = '';
    oldValue.shift();
}



