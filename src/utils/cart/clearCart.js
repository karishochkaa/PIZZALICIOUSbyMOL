import { saveData } from "./addGood";

const clearCart = document.querySelector('.clearCart');
const goodElements = document.querySelector('.cartTable');
const makeOrder = document.querySelector('.makeOrder');

makeOrder.addEventListener('click', ()=> {
    goodElements.innerHTML = ""
    saveData = []
    localStorage.removeItem('cartData')
})

clearCart.addEventListener('click', ()=>{
    goodElements.innerHTML = ""
    saveData = []

    localStorage.removeItem('cartData');
})

