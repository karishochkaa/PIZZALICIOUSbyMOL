import datas from '../db/pizza.json';


export let goodsDataPizza = [];

function getdataPizza(){
    goodsDataPizza.push(datas.pizza);
    renderCardPizza(datas)
  
}
  function renderCardPizza(foods) {
    // console.log("Fn", foods);
    const { pizza } = foods;
    // console.log(drinks);
    pizza.forEach((food) => {
      // food.pricePizza = pricePizza;
      food.count = 1;
      const { title, imageUrl, pricePizza, id } = food;
      const card = `<div class="card">
      <img src='${imageUrl}'>
      <h3>${title}</h3>
      <button class="buyBtn" data-id=${id} data-price=${pricePizza}><span class="text">Замовити <span>${pricePizza} грн</span></span></button>
      </div>`;
      document
        .querySelector(".goods_container")
        .insertAdjacentHTML("beforeend", card);
    });
  }
getdataPizza();
