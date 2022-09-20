import { refs} from "./refs";

 export default function activeScroll(){
     refs.scrollBtn.classList.remove('is-hidden')
     refs.loadingBtn.classList.remove('is-hidden') 
refs.scrollBtn.onclick = () => {
    window.scrollTo(scrollY, 0);
}
}