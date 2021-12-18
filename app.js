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
const customizeSection = document.querySelector(".customizeSection");
const customizeSection__closeIcon = document.querySelector(
  ".customizeSection__closeIcon"
);
const cartSection__Btns = document.querySelector(".cartSection__Btns");

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
  let productCount = 1;
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

    productCount = productCount + 1;
    event.target.parentNode.parentNode.children[2].children[1].innerText = `${productCount}`;
    console.log(productCount);

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

    if (productCount > 1) {
      //newArr.pop(newItemPrice);
      //console.log(newArr.indexOf(newItemPrice));
      let lastItem = newArr.indexOf(newItemPrice);
      if (lastItem > -1) {
        newArr.splice(lastItem, 1);
      }
      productCount = productCount - 1;
      event.target.parentNode.parentNode.children[2].children[1].innerText = `${productCount}`;
      console.log(productCount);

      //console.log(newArr);
      basket__itemList__totalPrice.innerText = `${newArr.reduce(getSum, 0)}`;
      menu__cart__itemCount.textContent = newArr.length;
    } else {
      let lastItem = newArr.indexOf(newItemPrice);
      if (lastItem > -1) {
        newArr.splice(lastItem, 1);
      }
      event.target.parentNode.parentNode.style.display = "none";
      basket__itemList__totalPrice.innerText = `${newArr.reduce(getSum, 0)}`;
      menu__cart__itemCount.textContent = newArr.length;
    }
  });
  basket__itemList__totalPrice.innerText = `${newArr.reduce(getSum, 0)}`;
}

/* basket kısmını kapatmamızı sağlayan closeIcon fonskiyonu*/
basket__closeIcon.addEventListener("click", function () {
  basket.style.transform = "translateX(150%)";
});

/* customize kısmının kapanmasını sağlayan x ikonunun fonksiyonu */
customizeSection__closeIcon.addEventListener("click", function (event) {
  customizeSection.style.transform = "translateY(100%)";
  customizeSection__closeIcon.style.transform = "translateY(-300%)";
  customizeSection__closeIcon.style.transform += "translate(-50%, -50%)";

  function resetList() {
    /* customize kısmı kaybolurken önceden oluşturulmuş olan malzeme listesini resetler */
    event.target.parentNode.lastElementChild.innerHTML = "";
  }
  /* customize kartı kaybolana kadar silme işini yapmaz sonra yapar */
  setTimeout(resetList, 2000);
});

function addCustomize(event) {
  /* customize kısmının belirmesi */
  customizeSection.style.transform = "translateY(0%)";
  customizeSection__closeIcon.style.transform = "translateY(0%)";
  customizeSection__closeIcon.style.transform += "translate(-50%, -50%)";

  /* customize ve addBasket butonlarının olduğu cartSection kısmının kaybolması */
  cartSection.style.transform = "translateY(100%)";
  cartSection__closeIcon.style.transform = "translateY(-300%)";
  cartSection__closeIcon.style.transform += "translate(-50%, -50%)";
  cartSection__leftBtn.style.transform = "translateY(300%)";
  cartSection__rightBtn.style.transform = "translateY(300%)";
  cartSection__Btns.style.transform = "translateY(300%)";

  /* seçilen yeni Item'in bilgilerini çektiğimiz ana yapı */
  let newItemSrc =
    event.target.parentNode.nextElementSibling.nextElementSibling.children[0]
      .src;
  let newItemName =
    event.target.parentNode.nextElementSibling.nextElementSibling.children[1]
      .innerText;
  let newItemParag =
    event.target.parentNode.nextElementSibling.nextElementSibling.children[2]
      .innerText;
  let newItemPrice =
    event.target.parentNode.nextElementSibling.nextElementSibling.children[3]
      .innerText;
  let newItemPriceFloat = parseFloat(
    event.target.parentNode.nextElementSibling.nextElementSibling.children[3].textContent.slice(
      1,
      -1
    )
  );

  /* Seçilen Item'ın verileri ana div */
  let MainItemDiv = document.createElement("div");
  MainItemDiv.classList.add("MainItemDiv");
  customizeSection.appendChild(MainItemDiv);

  /* Seçilen Item'ın Image display aşaması */
  let ItemImg = document.createElement("img");
  ItemImg.classList.add("MainItemDiv__ItemImg");
  ItemImg.src = newItemSrc;
  MainItemDiv.appendChild(ItemImg);

  /* Seçilen Item'ın heading display aşaması */
  let ItemHeading = document.createElement("h1");
  ItemHeading.classList.add("MainItemDiv__ItemHeading");
  ItemHeading.textContent = newItemName;
  MainItemDiv.appendChild(ItemHeading);

  /* Seçilen Item'ın parag display aşaması */
  let ItemParag = document.createElement("p");
  ItemParag.classList.add("MainItemDiv__ItemParag");
  ItemParag.textContent = newItemParag;
  MainItemDiv.appendChild(ItemParag);

  /* Seçilen Item'ın price display aşaması */
  let ItemPrice = document.createElement("p");
  ItemPrice.classList.add("MainItemDiv__ItemPrice");
  ItemPrice.textContent = newItemPrice;
  MainItemDiv.appendChild(ItemPrice);

  /* Remove Elements Heading */
  let RemoveHeading = document.createElement("h1");
  RemoveHeading.classList.add("MainItemDiv__RemoveHeading");
  RemoveHeading.textContent = `Remove Elements`;
  MainItemDiv.appendChild(RemoveHeading);

  /* Remove Elements Parag */
  let RemoveParag = document.createElement("p");
  RemoveParag.classList.add("MainItemDiv__RemoveParag");
  RemoveParag.textContent = `Choose what you remove`;
  MainItemDiv.appendChild(RemoveParag);

  /* Çıkarilabilir malzeme listesi */
  let IngridientsArray = [
    "Slow Roast Peppers",
    "Tomato Sauce",
    "Onion",
    "Garlic",
    "White Sauce",
    "Tabouli",
  ];

  /* listeyi kapsayan div */
  let IngridientsDiv = document.createElement("div");
  IngridientsDiv.classList.add("IngridientsDiv");
  MainItemDiv.appendChild(IngridientsDiv);

  /* listenin kendisi */
  let IngridientsList = document.createElement("ul");
  IngridientsList.classList.add("IngridientsDiv__IngridientsList");
  IngridientsDiv.appendChild(IngridientsList);

  /* liste elemanlarının liste içerisine eklenmesi */
  let IngridientsItems = IngridientsArray.map(function (item) {
    return `
    <li class="IngridientsDiv__IngridientsListItem">
    <div id="${item}" class="IngridientsDiv__IngridientsListItem--btn"></div>
    ${item}</li>
    `;
  }).join("");
  IngridientsList.innerHTML = IngridientsItems;

  /* Butonları ayarlama kısmı */
  let customizeFullBtn = document.querySelectorAll(".customizeSection  li div");
  customizeFullBtn.forEach((el) => {
    el.addEventListener("click", function (e) {
      el.classList.toggle("empty");
      console.log(e.target.id);
      let newIndexName = e.target.id;
      let lastItem = IngridientsArray.indexOf(newIndexName);
      if (IngridientsArray.includes(newIndexName)) {
        if (lastItem > -1) {
          IngridientsArray.splice(lastItem, 1);
        }
        console.log(IngridientsArray);
      } else {
        IngridientsArray.push(newIndexName);
        console.log(IngridientsArray);
      }
    });
  });
  /* Buttons Div */
  let BtnsDiv = document.createElement("div");
  BtnsDiv.classList.add("MainItemDiv__BtnsDiv");
  MainItemDiv.appendChild(BtnsDiv);

  /* Back Button */
  let BackBtn = document.createElement("button");
  BackBtn.classList.add("MainItemDiv__BackBtn");
  BackBtn.innerText = `Back`;
  BtnsDiv.appendChild(BackBtn);

  /* Center Button */
  let AddBasketBtn = document.createElement("button");
  AddBasketBtn.classList.add("MainItemDiv__AddBasketBtn");
  AddBasketBtn.innerText = `Add Basket`;
  BtnsDiv.appendChild(AddBasketBtn);

  /* Next Button */
  let NextBtn = document.createElement("button");
  NextBtn.classList.add("MainItemDiv__NextBtn");
  NextBtn.innerText = `Next`;
  BtnsDiv.appendChild(NextBtn);

  let MainItemDiv__NextBtnDOM = document.querySelector(".MainItemDiv__NextBtn");

  MainItemDiv__NextBtnDOM.addEventListener("click", function () {
    IngridientsDiv.style.transform = "translateY(200%)";
    ExtraProteinDiv.style.transform = "translateY(-150%)";
    RemoveHeading.textContent = `Add Extra Protein`;
    RemoveParag.textContent = `Choose up to 3`;
  });

  let MainItemDiv__BackBtnDOM = document.querySelector(".MainItemDiv__BackBtn");

  MainItemDiv__BackBtnDOM.addEventListener("click", function () {
    IngridientsDiv.style.transform = "translateY(0%)";
    ExtraProteinDiv.style.transform = "translateY(0%)";
    RemoveHeading.textContent = `Remove Elements`;
    RemoveParag.textContent = `Choose what you remove`;
  });

  /* Çıkarilabilir malzeme listesi */
  let ExtraProteinArray = [
    "Beef Meatballs with Tomato Souce",
    "Roasted Chorizo",
    "Lemon and Chilli Chicken (Mild)",
    "Crispy Chicken",
    "Golden Halloumi (Vegetarian)",
    "Falafel (Vegetarian)",
  ];

  let BeefMeatballswithTomatoSouceCounter = 0;
  let RoastedChorizoCounter = 0;
  let LemonandChilliChickenCounter = 0;
  let CrispyChickenCounter = 0;
  let GoldenHalloumiVegetarianCounter = 0;
  let FalafelCounter = 0;

  /* Extra Protein listesi div'i */
  let ExtraProteinDiv = document.createElement("div");
  ExtraProteinDiv.classList.add("ExtraProteinDiv");
  MainItemDiv.appendChild(ExtraProteinDiv);

  /* Extra Protein listesinin kendisi */
  let ExtraProteinList = document.createElement("ul");
  ExtraProteinList.classList.add("ExtraProteinDiv__ExtraProteinList");
  ExtraProteinDiv.appendChild(ExtraProteinList);

  /* liste elemanlarının liste içerisine eklenmesi */
  let ExtraProteinItems = ExtraProteinArray.map(function (item) {
    return `
    <li class="ExtraProteinDiv__ExtraProteinListItem">
    <div class="ExtraProteinDiv__CountBtns">
      <i id=${item
        .split(" ")
        .join("")
        .split("(")
        .join("")
        .split(")")
        .join("")
        .concat(
          "__minus"
        )} class="ExtraProteinDiv__CountBtns--minus fas fa-minus"></i>
      <span id=${item
        .split(" ")
        .join("")
        .split("(")
        .join("")
        .split(")")
        .join("")
        .concat("__number")} class="ExtraProteinDiv__CountBtns--number">0</span>
      <i id=${item
        .split(" ")
        .join("")
        .split("(")
        .join("")
        .split(")")
        .join("")
        .concat(
          "__plus"
        )} class="ExtraProteinDiv__CountBtns--plus fas fa-plus"></i>
    </div>
    <span class="ExtraProteinDiv__Text">${item}</span>
    <span class="ExtraProteinDiv__Price">+&#8356;2.50</span>
    </li>
    `;
  }).join("");
  ExtraProteinList.innerHTML = ExtraProteinItems;
  let BeefNumber = document.querySelector(
    "#BeefMeatballswithTomatoSouce__number"
  );
  let BeefPlus = document.querySelector("#BeefMeatballswithTomatoSouce__plus");
  let BeefMinus = document.querySelector(
    "#BeefMeatballswithTomatoSouce__minus"
  );

  let RoastedNumber = document.querySelector("#RoastedChorizo__number");
  let RoastedPlus = document.querySelector("#RoastedChorizo__plus");
  let RoastedMinus = document.querySelector("#RoastedChorizo__minus");

  //LemonandChilliChicken(Mild)__minus

  let LemonNumber = document.querySelector(
    "#LemonandChilliChickenMild__number"
  );
  let LemonPlus = document.querySelector("#LemonandChilliChickenMild__plus");
  let LemonMinus = document.querySelector("#LemonandChilliChickenMild__minus");

  BeefPlus.addEventListener("click", () => {
    BeefMeatballswithTomatoSouceCounter =
      BeefMeatballswithTomatoSouceCounter + 1;
    console.log(BeefMeatballswithTomatoSouceCounter);
    BeefNumber.textContent = BeefMeatballswithTomatoSouceCounter;
  });

  BeefMinus.addEventListener("click", () => {
    if (BeefMeatballswithTomatoSouceCounter > 0) {
      BeefMeatballswithTomatoSouceCounter =
        BeefMeatballswithTomatoSouceCounter - 1;
      console.log(BeefMeatballswithTomatoSouceCounter);
      BeefNumber.textContent = BeefMeatballswithTomatoSouceCounter;
    }
  });

  RoastedPlus.addEventListener("click", () => {
    RoastedChorizoCounter = RoastedChorizoCounter + 1;
    console.log(RoastedChorizoCounter);
    RoastedNumber.textContent = RoastedChorizoCounter;
  });

  RoastedMinus.addEventListener("click", () => {
    if (RoastedChorizoCounter > 0) {
      RoastedChorizoCounter = RoastedChorizoCounter - 1;
      console.log(RoastedChorizoCounter);
      RoastedNumber.textContent = RoastedChorizoCounter;
    }
  });

  console.log(
    "LemonandChilliChicken(Mild)__minus".split("(").join("").split(")").join("")
  );
  console.log(
    "Beef Meatballs with Tomato Souce"
      .split(" ")
      .join("")
      .split("(")
      .join("")
      .split(")")
      .join("")
      .concat("__minus")
  );

  LemonPlus.addEventListener("click", () => {
    LemonandChilliChickenCounter = LemonandChilliChickenCounter + 1;
    console.log(LemonandChilliChickenCounter);
    LemonNumber.textContent = LemonandChilliChickenCounter;
  });

  LemonMinus.addEventListener("click", () => {
    if (LemonandChilliChickenCounter > 0) {
      LemonandChilliChickenCounter = LemonandChilliChickenCounter - 1;
      console.log(LemonandChilliChickenCounter);
      LemonNumber.textContent = LemonandChilliChickenCounter;
    }
  });

  ExtraProteinList.addEventListener("click", (event) => {
    console.log(event.target);
  });
}

/* bu section içindeki herhangi bir item'a tıklanırsa selectItem fonksiyonu
devreye girsin */
shop__productSection.addEventListener("click", selectItem);

/* Add Basket(rightBtn) butonuna tıklanırsa addBasket fonksiyonu çalışsın */
cartSection__rightBtn.addEventListener("click", addBasket);

/* Add Customize(leftBtn) butonuna tıklanırsa addCustomize fonksiyonu çalışsın */
cartSection__leftBtn.addEventListener("click", addCustomize);
