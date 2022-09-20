import axios from "axios";
import { refs} from "./refs";
export { fetchPhotos}

const API_KEY = '30030666-7b24208312db31759c6c143d0';

async function fetchPhotos(countPage) {
   return await axios({
    method: 'get',
    url: 'https://pixabay.com/api/',
    params: {
        key: API_KEY,
        q: `${refs.input.value}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: 40,
        page: countPage,
       }
   })

}



