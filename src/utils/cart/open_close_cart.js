import { goodHtml } from "./addGood.js";


document.addEventListener('DOMContentLoaded', (e)=>{
    const backdrop = document.querySelector('.cart-container');
    const openCart = document.querySelector('.cart-icon');
    const closeCart = document.querySelector('[data-action="close-modal"]');
    const cartModal = document.querySelector('.cartModal');
    const makeOrder = document.querySelector('.makeOrder');

    openCart.addEventListener('click', onOpenModal);
    closeCart.addEventListener('click', onCloseModal);
    backdrop.addEventListener('click', onBackDropClick);
    makeOrder.addEventListener('click', onCloseModal);
  
    function onOpenModal(){
        window.addEventListener('keydown', onEscKeyPress);
        cartModal.classList.toggle('show-modal');
        backdrop.classList.toggle('show-modal');
        goodHtml();

    }
    function onCloseModal(){
        window.removeEventListener('keydown', onEscKeyPress);
        cartModal.classList.remove('show-modal');
        backdrop.classList.remove('show-modal');
        makeOrder.classList.remove('show-modal');
    }
    function onBackDropClick(e){
       if(e.currentTarget === e.target){
        onCloseModal();
       }
    }
    function onEscKeyPress(e){
        const ESC_KEY_CODE = "Escape";
        if(ESC_KEY_CODE === e.code){
            onCloseModal();
        }
    }
});