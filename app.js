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
const cartSection = document.querySelector(".cartSection");
const cartSection__closeIcon = document.querySelector(
  ".cartSection__closeIcon"
);
const basket__closeIcon = document.querySelector(".basket__closeIcon");
const cartSection__leftBtn = document.querySelector(".cartSection__leftBtn");
const cartSection__rightBtn = document.querySelector(".cartSection__rightBtn");
const basket = document.querySelector(".basket");
const menu__cart__itemCount = document.querySelector(".menu__cart--itemCount");
const basket__itemList = document.querySelector(".basket__itemList");
const basket__itemList__totalPrice = document.querySelector(
  ".basket__itemList--totalPrice"
);
/* Fiyatların sıralandığı Array */
let newArr = [];

/* yemeklerin ui üzerinde dizilmesi */
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

/* x ikonunun cartSection kısmını gizlemesi */
cartSection__closeIcon.addEventListener("click", function () {
  cartSection.style.transform = "translateY(100%)";
  cartSection__closeIcon.style.transform = "translateY(-300%)";
  cartSection__closeIcon.style.transform += "translate(-50%, -50%)";
  cartSection__leftBtn.style.transform = "translateX(-300%)";
  cartSection__rightBtn.style.transform = "translateX(300%)";
});

/* reducer fonksiyonunun ne yapması gerektiğini belirten toplama fonk. */
function getSum(total, num) {
  return total + num;
}

/* Bir Item seçildiğinde tekrarlanan fonk. */
function selectItem(event) {
  /* cartSection kısmını ve x ikonunu ortaya çıkarma */
  cartSection.style.transform = "translateY(0%)";
  cartSection__closeIcon.style.transform = "translateY(0%)";
  cartSection__closeIcon.style.transform += "translate(-50%, -50%)";
  cartSection__leftBtn.style.transform = "translateX(0%)";
  cartSection__rightBtn.style.transform = "translateX(0%)";

  /* seçilen yeni Item'in bilgilerini çektiğimiz ana yapı */
  let newItem = event.target.parentNode.children;
  /*
  console.log("newItem", newItem);
  itemArray.push(newItem);
  console.log("itemArray", itemArray);
  */

  /* seçilen item'ın fiyat verisini alıp float'a çevirip array içine push
  ettiğimiz kısım */
  let newItemPrice = parseFloat(
    event.target.parentNode.children[3].textContent.slice(1, -1)
  );
  newArr.push(newItemPrice);
  //console.log(newArr);

  /* reduce metodu ile toplam fiyat bilgisini elde ediyoruz. */
  //console.log(newArr.reduce(getSum, 0));

  /* seçilen item'ın verilerini cartSection üzerinde display ediyoruz. */
  cartSection.innerHTML = `
  <img class="cartSection__Img" src="${event.target.parentNode.children[0].src}"/>
  <h1 class="cartSection__Heading">${event.target.parentNode.children[1].textContent}</h1>
  <p class="cartSection__Ingridients">${event.target.parentNode.children[2].textContent}</p>
  <h3 class="cartSection__Price">${event.target.parentNode.children[3].textContent}</h3>
  `;
}

/* sepetteki item sayısını ınteger cinsine çavirip siteden başta alıyoruz. */
let itemCount = parseInt(menu__cart__itemCount.innerText);
let itemArray = [];
function addBasket(event) {
  /* add Basket butonunun cartSection kısmını gizlemesi */
  cartSection.style.transform = "translateY(100%)";
  cartSection__closeIcon.style.transform = "translateY(-300%)";
  cartSection__closeIcon.style.transform += "translate(-50%, -50%)";
  cartSection__leftBtn.style.transform = "translateX(-300%)";
  cartSection__rightBtn.style.transform = "translateX(300%)";

  /* basket kısmının görünür hale getirilmesi */
  basket.style.transform = "translateX(0%)";

  /* her addBaket butonuna basıldığında sepetteki item sayısının artması */
  itemCount++;

  /* ui tarafında bu sayının güncellenmesi */
  menu__cart__itemCount.textContent = newArr.length;

  /* her bir eklenen item için card yapısı oluşturma */

  /* Ana Div */
  let itemCard = document.createElement("div");
  itemCard.classList.add("basket__itemList--itemCard");
  basket__itemList.appendChild(itemCard);

  /* span */
  let divv = document.createElement("div");
  divv.classList.add("basket__itemList--divv");
  itemCard.appendChild(divv);

  /* Img */

  let itemImg = document.createElement("img");
  itemImg.classList.add("basket__itemList--itemImg");
  itemImg.src = `${event.target.parentNode.nextElementSibling.nextElementSibling.children[0].src}`;
  divv.appendChild(itemImg);

  /* Heading */

  let itemHeading = document.createElement("h1");
  itemHeading.classList.add("basket__itemList--itemHeading");
  itemHeading.innerText = `${event.target.parentNode.nextElementSibling.nextElementSibling.children[1].textContent}`;
  divv.appendChild(itemHeading);

  /* Parag */

  let itemParag = document.createElement("p");
  itemParag.classList.add("basket__itemList--itemParag");
  itemParag.innerText = `${event.target.parentNode.nextElementSibling.nextElementSibling.children[2].textContent}`;
  divv.appendChild(itemParag);

  /* Price */

  let itemPrice = document.createElement("p");
  itemPrice.classList.add("basket__itemList--itemPrice");
  itemPrice.innerText = `${event.target.parentNode.nextElementSibling.nextElementSibling.children[3].textContent}`;
  itemCard.appendChild(itemPrice);

  /* Counter Div */

  let itemCounterDiv = document.createElement("div");
  itemCounterDiv.classList.add("basket__itemList--counterDiv");
  itemCard.appendChild(itemCounterDiv);

  /* Counter Minus Btn */
  let itemCounterMinusBtn = document.createElement("i");
  itemCounterMinusBtn.classList.add("basket__itemList--counterMinusBtn");
  itemCounterMinusBtn.classList.add("fas", "fa-minus");
  itemCounterDiv.appendChild(itemCounterMinusBtn);

  /* Count Number */
  let itemCounterNumber = document.createElement("div");
  itemCounterNumber.classList.add("basket__itemList--counterNumber");
  itemCounterNumber.innerText = 1;
  itemCounterDiv.appendChild(itemCounterNumber);

  /* Counter Plus Btn */
  let itemCounterPlusBtn = document.createElement("i");
  itemCounterPlusBtn.classList.add("basket__itemList--counterPlusBtn");
  itemCounterPlusBtn.classList.add("fas", "fa-plus");
  itemCounterDiv.appendChild(itemCounterPlusBtn);

  /* plus */
  itemCounterPlusBtn.addEventListener("click", function (event) {
    let newItemPrice = parseFloat(
      event.target.parentNode.parentNode.children[1].textContent.slice(1, -1)
    );
    /* addBasket içinde kaldığı için artmıyor olabilir */
    let counterSpanPlus = parseInt(
      event.target.parentNode.parentNode.children[2].children[1].innerText
    );
    counterSpanPlus = ++counterSpanPlus;
    console.log(counterSpanPlus);
    /* */

    newArr.push(newItemPrice);
    console.log(newArr);
    basket__itemList__totalPrice.innerText = `${newArr.reduce(getSum, 0)}`;
    menu__cart__itemCount.textContent = newArr.length;
  });

  /* minus */
  itemCounterMinusBtn.addEventListener("click", function (event) {
    let newItemPrice = parseFloat(
      event.target.parentNode.parentNode.children[1].textContent.slice(1, -1)
    );
    let counterSpan =
      event.target.parentNode.parentNode.children[2].children[1].textContent;
    console.log(counterSpan);
    if (counterSpan > 0) {
      //newArr.pop(newItemPrice);
      //console.log(newArr.indexOf(newItemPrice));
      let lastItem = newArr.indexOf(newItemPrice);
      if (lastItem > -1) {
        newArr.splice(lastItem, 1);
      }

      //console.log(newArr);
      basket__itemList__totalPrice.innerText = `${newArr.reduce(getSum, 0)}`;
      menu__cart__itemCount.textContent = newArr.length;
    } else {
      itemCounterMinusBtn.style.display = "none";
    }
  });
  basket__itemList__totalPrice.innerText = `${newArr.reduce(getSum, 0)}`;
}

/* basket kısmını kapatmamızı sağlayan closeIcon fonskiyonu*/
basket__closeIcon.addEventListener("click", function () {
  basket.style.transform = "translateX(150%)";
});

/* bu section içindeki herhangi bir item'a tıklanırsa selectItem fonksiyonu
devreye girsin */
shop__productSection.addEventListener("click", selectItem);

/* Add Basket(rightBtn) butonuna tıklanırsa addBasket fonksiyonu çalışsın */
cartSection__rightBtn.addEventListener("click", addBasket);
