import headerTPL from "../templates/header.hbs";
import "../style/header.css";
import "../style/main.css";





document.addEventListener('DOMContentLoaded', ()=>{
    const headerContainer = document.querySelector('.header_container');
    if(!document.querySelector('header')){
        const header = headerTPL();
        headerContainer.innerHTML = header;
    }
});


