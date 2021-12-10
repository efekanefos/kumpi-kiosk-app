/* Menu List */

const list = document.querySelector(".shop__menuList");

list.addEventListener("click", activeFunction);

function activeFunction(event) {
  document.querySelector(".active").classList.remove("active");
  event.target.classList.add("active");
}

/* Products */

const meals = [
  {
    name: "Kumpi Classic",
    image: "./images/meals/1.png",
    price: "4.95",
    ingridients: `Cheesy potato filling, (kasar, mozzarella & 
    cheddar), crispy onions, fresh herbs`,
  },
  {
    name: "Meatballs & Tomato",
    image: "./images/meals/2.png",
    price: "8.50",
    ingridients: `Meatballs, tomato sauce, slow roast peppers, crispy onions`,
  },
  {
    name: "Lemon & Green Chill Chicken Thigh",
    image: "./images/meals/3.png",
    price: "7.95",
    ingridients: `Roasted & pulled chicken thigh, kumpi slaw, garlic sauce, crispy onions`,
  },
  {
    name: "Lemon & Green Chill Chicken Thigh",
    image: "./images/meals/4.png",
    price: "7.95",
    ingridients: `Golden halloumi, pomegranate, kumpi slaw, charred corn, pickles, green sauce`,
  },
  {
    name: "Lemon & Green Chill Chicken Thigh",
    image: "./images/meals/5.png",
    price: "7.50",
    ingridients: `Falafel, charred corn, chopped pickles, garlic yoghurt, fresh herbs, hot sauce, crispy onions`,
  },
  {
    name: "Lemon & Green Chill Chicken Thigh",
    image: "./images/meals/6.png",
    price: "7.95",
    ingridients: `Roasted chorizo, kasar cheese, kumpi slaw, crispy onion`,
  },
  {
    name: "Lemon & Green Chill Chicken Thigh",
    image: "./images/meals/7.png",
    price: "8.50",
    ingridients: `Crispy tofu, kimchi, sriracha sauce, garlic sauce, crispy onions, fresh herbs`,
  },
  {
    name: "Lemon & Green Chill Chicken Thigh",
    image: "./images/meals/8.png",
    price: "7.95",
    ingridients: `Crispy chicken, kumpi slaw, bbq sauce, extra cheese, crispy onions`,
  },
  {
    name: "Kumpi Classic",
    image: "./images/meals/1.png",
    price: "4.95",
    ingridients: `Cheesy potato filling, (kasar, mozzarella & 
    cheddar), crispy onions, fresh herbs`,
  },
  {
    name: "Meatballs & Tomato",
    image: "./images/meals/2.png",
    price: "8.50",
    ingridients: `Meatballs, tomato sauce, slow roast peppers, crispy onions`,
  },
  {
    name: "Lemon & Green Chill Chicken Thigh",
    image: "./images/meals/3.png",
    price: "7.95",
    ingridients: `Roasted & pulled chicken thigh, kumpi slaw, garlic sauce, crispy onions`,
  },
  {
    name: "Lemon & Green Chill Chicken Thigh",
    image: "./images/meals/4.png",
    price: "7.95",
    ingridients: `Golden halloumi, pomegranate, kumpi slaw, charred corn, pickles, green sauce`,
  },
  {
    name: "Lemon & Green Chill Chicken Thigh",
    image: "./images/meals/5.png",
    price: "7.50",
    ingridients: `Falafel, charred corn, chopped pickles, garlic yoghurt, fresh herbs, hot sauce, crispy onions`,
  },
  {
    name: "Lemon & Green Chill Chicken Thigh",
    image: "./images/meals/6.png",
    price: "7.95",
    ingridients: `Roasted chorizo, kasar cheese, kumpi slaw, crispy onion`,
  },
  {
    name: "Lemon & Green Chill Chicken Thigh",
    image: "./images/meals/7.png",
    price: "8.50",
    ingridients: `Crispy tofu, kimchi, sriracha sauce, garlic sauce, crispy onions, fresh herbs`,
  },
  {
    name: "Lemon & Green Chill Chicken Thigh",
    image: "./images/meals/8.png",
    price: "7.95",
    ingridients: `Crispy chicken, kumpi slaw, bbq sauce, extra cheese, crispy onions`,
  },
  {
    name: "Kumpi Classic",
    image: "./images/meals/1.png",
    price: "4.95",
    ingridients: `Cheesy potato filling, (kasar, mozzarella & 
    cheddar), crispy onions, fresh herbs`,
  },
  {
    name: "Meatballs & Tomato",
    image: "./images/meals/2.png",
    price: "8.50",
    ingridients: `Meatballs, tomato sauce, slow roast peppers, crispy onions`,
  },
  {
    name: "Lemon & Green Chill Chicken Thigh",
    image: "./images/meals/3.png",
    price: "7.95",
    ingridients: `Roasted & pulled chicken thigh, kumpi slaw, garlic sauce, crispy onions`,
  },
  {
    name: "Lemon & Green Chill Chicken Thigh",
    image: "./images/meals/4.png",
    price: "7.95",
    ingridients: `Golden halloumi, pomegranate, kumpi slaw, charred corn, pickles, green sauce`,
  },
  {
    name: "Lemon & Green Chill Chicken Thigh",
    image: "./images/meals/5.png",
    price: "7.50",
    ingridients: `Falafel, charred corn, chopped pickles, garlic yoghurt, fresh herbs, hot sauce, crispy onions`,
  },
  {
    name: "Lemon & Green Chill Chicken Thigh",
    image: "./images/meals/6.png",
    price: "7.95",
    ingridients: `Roasted chorizo, kasar cheese, kumpi slaw, crispy onion`,
  },
  {
    name: "Lemon & Green Chill Chicken Thigh",
    image: "./images/meals/7.png",
    price: "8.50",
    ingridients: `Crispy tofu, kimchi, sriracha sauce, garlic sauce, crispy onions, fresh herbs`,
  },
  {
    name: "Lemon & Green Chill Chicken Thigh",
    image: "./images/meals/8.png",
    price: "7.95",
    ingridients: `Crispy chicken, kumpi slaw, bbq sauce, extra cheese, crispy onions`,
  },
  {
    name: "Kumpi Classic",
    image: "./images/meals/1.png",
    price: "4.95",
    ingridients: `Cheesy potato filling, (kasar, mozzarella & 
    cheddar), crispy onions, fresh herbs`,
  },
  {
    name: "Meatballs & Tomato",
    image: "./images/meals/2.png",
    price: "8.50",
    ingridients: `Meatballs, tomato sauce, slow roast peppers, crispy onions`,
  },
  {
    name: "Lemon & Green Chill Chicken Thigh",
    image: "./images/meals/3.png",
    price: "7.95",
    ingridients: `Roasted & pulled chicken thigh, kumpi slaw, garlic sauce, crispy onions`,
  },
  {
    name: "Lemon & Green Chill Chicken Thigh",
    image: "./images/meals/4.png",
    price: "7.95",
    ingridients: `Golden halloumi, pomegranate, kumpi slaw, charred corn, pickles, green sauce`,
  },
  {
    name: "Lemon & Green Chill Chicken Thigh",
    image: "./images/meals/5.png",
    price: "7.50",
    ingridients: `Falafel, charred corn, chopped pickles, garlic yoghurt, fresh herbs, hot sauce, crispy onions`,
  },
  {
    name: "Lemon & Green Chill Chicken Thigh",
    image: "./images/meals/6.png",
    price: "7.95",
    ingridients: `Roasted chorizo, kasar cheese, kumpi slaw, crispy onion`,
  },
  {
    name: "Lemon & Green Chill Chicken Thigh",
    image: "./images/meals/7.png",
    price: "8.50",
    ingridients: `Crispy tofu, kimchi, sriracha sauce, garlic sauce, crispy onions, fresh herbs`,
  },
  {
    name: "Lemon & Green Chill Chicken Thigh",
    image: "./images/meals/8.png",
    price: "7.95",
    ingridients: `Crispy chicken, kumpi slaw, bbq sauce, extra cheese, crispy onions`,
  },
];

const shop__productSection = document.querySelector(".shop__productSection");

shop__productSection.innerHTML = meals
  .map(function (item) {
    return `
  <div class="shop__productSection--card">
  <img class="shop__productSection--image" src="${item.image}" />
  <h1 class="shop__productSection--cardHeading">${item.name}</h1>
  <p class="shop__productSection--cardParag">${item.ingridients}</p>
  <p class="shop__productSection--cardPrice">&#8356;${item.price}</p>
  </div>
  `;
  })
  .join("");

console.log(shop__productSection);
