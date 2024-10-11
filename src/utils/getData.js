const BASE_URL =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";


export let goodsData = [];

function getData() {
  return fetch(BASE_URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      goodsData.push(data.drinks);
      renderCard(data);
    });
}


function renderCard(cocktails) {
  // console.log("Fn", cocktails);
  const { drinks } = cocktails;
  // console.log(drinks);
  drinks.forEach((cocktail) => {
    cocktail.price = Math.round(Math.random() * 1000);
    cocktail.count = 1;
    const { strDrink, strDrinkThumb, price, idDrink } = cocktail;
    const card = `<div class="card">
    <img src='${strDrinkThumb}'>
    <h3>${strDrink}</h3>
    <button class="buyBtn" data-id=${idDrink} data-price=${price}><span class="text">Замовити <span>${price} грн</span></span></button>
    </div>`;
    document
      .querySelector(".goods_container")
      .insertAdjacentHTML("beforeend", card);
  });
}


getData();
