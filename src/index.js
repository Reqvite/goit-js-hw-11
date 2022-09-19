import './css/styles.css';
import refs from './js/refs';
import Notiflix from 'notiflix';

import { fetchPhotos } from './js/fetchPhotos';
import  { createMarkup} from './js/createMarkup'

refs.form.addEventListener('submit', handleForm)

async function handleForm(e) {
    e.preventDefault()
    const resp = await fetchPhotos()
     if (refs.input.value === '') {
         return;
     }
    if (resp.data.hits.length === 0) {
         Notiflix.Notify.info('"Sorry, there are no images matching your search query. Please try again."')
    } else {
        createMarkup(resp)
    }
}

