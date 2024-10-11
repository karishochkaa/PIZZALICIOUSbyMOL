import { goodsData } from "../getData.js";

export let saveData = [];

document.addEventListener('click', (e)=>{
    if(e.target.classList.contains('buyBtn')){
        addToCart(e);
    }
})
function addToCart(e){
    // console.log(e);
    const priceTarget = e.target.dataset.price;
    const idTarget = e.target.dataset.id;
    // console.log(priceTarget);
    // console.log("ID", idTarget);
    const [drinks] = goodsData;
  
    // console.log(drinks);

    const currentCocktail = drinks.find((data) => data.idDrink === idTarget);
    saveData.push(currentCocktail);

    // if(currentCocktail){
    //     currentCocktail.count ++
    // } else {
    //     saveData = drinks.filter((data) => {
    //         return data.idDrink === idTarget
    //     })
    // }
   
    // console.log(currentCocktail);
    // existingItem(saveData);
    addDataToLocalStorage();
    goodHtml();
    
}
function addDataToLocalStorage (data){
    localStorage.setItem('cartData', JSON.stringify(saveData));
}
function getDataFromLocalStorage(){
   return JSON.parse(localStorage.getItem('cartData'));
}
// console.log(getDataFromLocalStorage());

export function goodHtml (){
    const renderData = getDataFromLocalStorage();
    const table = document.querySelector('.cartTable');
    console.log(table);
    if(renderData){
        const renderGoods = renderData?.map(({ price, count, strDrinkThumb, strDrink }) => {
            let strSum = price * count;
            return`<tr class="goodList">
        <td><img class="goodImg" src="${strDrinkThumb}" alt=""></td>
        <td class="title">${strDrink} <span> </span></td> 
        <td class="count"><span class="minus"></span>${count} шт  <span class="plus"></span></td>
        <td class="price"> ${price} грн</td>
        <td class="sum"> ${strSum} грн</td>  
    </tr>`
        }).join("")
        table.innerHTML = renderGoods;
    } else{
        table.innerHTML = " Ваш кошик порожній, перейдіть до меню щоб обрати.";
    }
}


