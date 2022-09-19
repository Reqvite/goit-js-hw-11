import './css/styles.css';
import { refs } from './js/refs';
import Notiflix from 'notiflix';

import { fetchPhotos, countPage } from './js/fetchPhotos';
import  { createMarkup} from './js/createMarkup'

refs.form.addEventListener('submit', handleForm)

async function handleForm(e) {
    e.preventDefault()
    const resp = await fetchPhotos()
    if (refs.input.value === '') {
        Notiflix.Notify.info('Enter something..')
         return;
    }
    if (resp.data.hits.length === 0) {
         Notiflix.Notify.info('Sorry, there are no images matching your search query. Please try again.')
    } else {
         Notiflix.Notify.success(`Hooray! We found ${resp.data.totalHits} images.`);
        createMarkup(resp)
    }
}

window.addEventListener('scroll', checkCoordinates)

 function checkCoordinates() {
    const documentRect = document.documentElement.getBoundingClientRect()
    const clientHeight = document.documentElement.clientHeight
    if (documentRect.bottom <= clientHeight + 500) {
        updateGallery()
        window.removeEventListener('scroll', checkCoordinates)
    }
}

async function updateGallery() {
    const resp = await fetchPhotos()
    createMarkup(resp)
    window.addEventListener('scroll', checkCoordinates)
}