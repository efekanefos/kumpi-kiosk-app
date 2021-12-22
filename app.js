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

const shop = document.querySelector(".shop");
const menu__heading = document.querySelector(".menu__heading");

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

  menu__heading.textContent = `Kumpi Menu`;
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
  cartSection__Btns.style.transform = "translateY(0%)";

  /* seçilen yeni Item'in bilgilerini çektiğimiz ana yapı */
  let newItem = event.target.parentNode.children;

  /* seçilen item'ın fiyat verisini alıp float'a çevirip array içine push
  ettiğimiz kısım */
  let newItemPrice = parseFloat(
    event.target.parentNode.children[3].textContent.slice(1, -1)
  );
  console.log(newArr);

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

  menu__heading.textContent = `Basket`;

  /* add Basket butonunun cartSection kısmını gizlemesi */
  cartSection.style.transform = "translateY(100%)";
  cartSection__closeIcon.style.transform = "translateY(-300%)";
  cartSection__closeIcon.style.transform += "translate(-50%, -50%)";
  cartSection__leftBtn.style.transform = "translateX(-300%)";
  cartSection__rightBtn.style.transform = "translateX(300%)";
  cartSection__Btns.style.transform = "translateY(300%)";
  /* cartSection__Btns aşağı insin diye */

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

  //* vertical div
  /*
  const verticalCardDiv = document.createElement("div");
  verticalCardDiv.classList.add("verticalCardDiv");
  itemCard.appendChild(verticalCardDiv);

  let VerticalitemHeading = itemHeading.cloneNode(true);
  let VerticalitemParag = itemParag.cloneNode(true);
  let VerticalitemPrice = itemPrice.cloneNode(true);
  let VerticalitemImg =
    event.target.parentNode.nextElementSibling.nextElementSibling.children[0].cloneNode(
      true
    );
  VerticalitemImg.classList.add("verticalitemImg");
  itemCard.appendChild(VerticalitemImg);
  itemCard.insertBefore(VerticalitemImg, itemCard.firstChild);
  verticalCardDiv.appendChild(VerticalitemHeading);
  verticalCardDiv.appendChild(VerticalitemParag);
  verticalCardDiv.appendChild(VerticalitemPrice);
  VerticalitemImg.style.display = "none";
  verticalCardDiv.style.display = "none";
  */

  /* plus */
  itemCounterPlusBtn.addEventListener("click", function (event) {
    let newItemPrice = parseFloat(
      event.target.parentNode.parentNode.children[1].textContent.slice(1, -1)
    );

    productCount = productCount + 1;
    //* İşlem sonrası olması gereken: event.target.parentNode.parentNode.children[3].children[1].innerText;

    event.target.parentNode.parentNode.children[2].children[1].innerText = `${productCount}`;
    console.log(productCount);

    newArr.push(newItemPrice);
    console.log(newArr);
    basket__itemList__totalPrice.innerText = `₤${(
      Math.round(newArr.reduce(getSum, 0) * 100) / 100
    ).toFixed(2)}`;

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
      basket__itemList__totalPrice.innerText = `₤${(
        Math.round(newArr.reduce(getSum, 0) * 100) / 100
      ).toFixed(2)}`;
      if (lastItem > -1) {
        newArr.splice(lastItem, 1);
      }
      productCount = productCount - 1;
      event.target.parentNode.parentNode.children[2].children[1].innerText = `${productCount}`;
      console.log(productCount);

      //console.log(newArr);

      menu__cart__itemCount.textContent = newArr.length;
      basket__itemList__totalPrice.innerText = `₤${(
        Math.round(newArr.reduce(getSum, 0) * 100) / 100
      ).toFixed(2)}`;
    } else {
      let lastItem = newArr.indexOf(newItemPrice);

      newArr.splice(lastItem, 1);

      event.target.parentNode.parentNode.style.display = "none";

      basket__itemList__totalPrice.innerText = `₤${(
        Math.round(newArr.reduce(getSum, 0) * 100) / 100
      ).toFixed(2)}`;
      menu__cart__itemCount.textContent = newArr.length;
    }
  });
  basket__itemList__totalPrice.innerText = `₤${(
    Math.round(newArr.reduce(getSum, 0) * 100) / 100
  ).toFixed(2)}`;

  /* Sadece Itemlara tıklandığında bile sepete ekleme problemi çözümü */

  let newPriceBasket = parseFloat(
    event.target.parentNode.nextElementSibling.nextElementSibling.children[3].textContent
      .split("₤")
      .join("")
  );

  newArr.push(newPriceBasket);
  basket__itemList__totalPrice.innerText = `₤${newArr.reduce(getSum, 0)}`;
  menu__cart__itemCount.textContent = newArr.length;
}

/* basket kısmını kapatmamızı sağlayan closeIcon fonskiyonu*/
basket__closeIcon.addEventListener("click", function () {
  basket.style.transform = "translateX(150%)";
  menu__heading.textContent = `Kumpi Menu`;
});

/* customize kısmının kapanmasını sağlayan x ikonunun fonksiyonu */
customizeSection__closeIcon.addEventListener("click", function (event) {
  customizeSection.style.transform = "translateY(100%)";
  customizeSection__closeIcon.style.transform = "translateY(-300%)";
  customizeSection__closeIcon.style.transform += "translate(-50%, -50%)";
  cartSection__Btns.style.transform = "translateY(0%)";

  menu__heading.textContent = `Kumpi Menu`;

  function resetList() {
    /* customize kısmı kaybolurken önceden oluşturulmuş olan malzeme listesini resetler */
    event.target.parentNode.lastElementChild.innerHTML = "";
  }
  /* customize kartı kaybolana kadar silme işini yapmaz sonra yapar */
  setTimeout(resetList, 2000);
});

function addCustomize(event) {
  menu__heading.textContent = `Customize`;
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
  let MainItemDiv__AddBasketBtnDOM = document.querySelector(
    ".MainItemDiv__AddBasketBtn"
  );

  MainItemDiv__NextBtnDOM.addEventListener("click", function () {
    switch (RemoveHeading.innerText) {
      case `Remove Elements`:
        IngridientsDiv.style.transform = "translateY(200%)";
        ExtraProteinDiv.style.transform = "translateY(-150%)"; /* -150 */
        ExtraSaladDiv.style.transform = "translateY(0%)"; /* -275 */
        ExtraSauceDiv.style.transform = "translateY(0%)";
        RemoveHeading.textContent = `Add Extra Protein`;
        RemoveParag.textContent = `Choose up to 3`;
        break;
      case `Add Extra Protein`:
        IngridientsDiv.style.transform = "translateY(200%)";
        ExtraProteinDiv.style.transform = "translateY(0%)";
        ExtraSaladDiv.style.transform = "translateY(-275%)";
        ExtraSauceDiv.style.transform = "translateY(0%)";
        RemoveHeading.textContent = `Add Extra Salads and Vegetables`;
        RemoveParag.textContent = `Choose up to 3`;
        break;
      case `Add Extra Salads and Vegetables`:
        IngridientsDiv.style.transform = "translateY(200%)";
        ExtraProteinDiv.style.transform = "translateY(0%)";
        ExtraSaladDiv.style.transform = "translateY(0%)";
        ExtraSauceDiv.style.transform = "translateY(-375%)";
        RemoveHeading.textContent = `Add Extra Sauce`;
        RemoveParag.textContent = `Choose up to 2`;
        break;
      case `Add Extra Sauce`:
        IngridientsDiv.style.transform = "translateY(200%)";
        ExtraProteinDiv.style.transform = "translateY(0%)";
        ExtraSaladDiv.style.transform = "translateY(0%)";
        ExtraSauceDiv.style.transform = "translateY(0%)";
        ExtraDealDiv.style.transform = "translateY(-220rem)"; /* -3700% */
        RemoveHeading.textContent = `Make Deal with Drink and Brownie`;
        RemoveParag.textContent = `Choose up to 1`;
        MainItemDiv__NextBtnDOM.style.visibility = "hidden";
        MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
          Math.round(newItemPriceFloat * 100) / 100
        ).toFixed(2)}`;
        break;
      default:
      // code block
    }
  });

  let MainItemDiv__BackBtnDOM = document.querySelector(".MainItemDiv__BackBtn");

  MainItemDiv__BackBtnDOM.addEventListener("click", function () {
    switch (RemoveHeading.innerText) {
      case `Add Extra Protein`:
        IngridientsDiv.style.transform = "translateY(0%)";
        ExtraProteinDiv.style.transform = "translateY(0%)";
        ExtraSaladDiv.style.transform = "translateY(0%)";
        RemoveHeading.textContent = `Remove Elements`;
        RemoveParag.textContent = `Choose what you remove`;
        break;
      case `Add Extra Salads and Vegetables`:
        IngridientsDiv.style.transform = "translateY(200%)";
        ExtraProteinDiv.style.transform = "translateY(-150%)";
        ExtraSaladDiv.style.transform = "translateY(0%)";
        RemoveHeading.textContent = `Add Extra Protein`;
        RemoveParag.textContent = `Choose up to 3`;
        break;
      case `Add Extra Sauce`:
        IngridientsDiv.style.transform = "translateY(200%)";
        ExtraProteinDiv.style.transform = "translateY(0%)";
        ExtraSaladDiv.style.transform = "translateY(-275%)";
        ExtraSauceDiv.style.transform = "translateY(0%)";
        RemoveHeading.textContent = `Add Extra Sauce`;
        RemoveParag.textContent = `Choose up to 2`;
        break;
      default:
      // code block
    }
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

  /* BeefMeatballswithTomatoSouce */

  let BeefNumber = document.querySelector(
    "#BeefMeatballswithTomatoSouce__number"
  );
  let BeefPlus = document.querySelector("#BeefMeatballswithTomatoSouce__plus");
  let BeefMinus = document.querySelector(
    "#BeefMeatballswithTomatoSouce__minus"
  );

  /* RoastedChorizo */

  let RoastedNumber = document.querySelector("#RoastedChorizo__number");
  let RoastedPlus = document.querySelector("#RoastedChorizo__plus");
  let RoastedMinus = document.querySelector("#RoastedChorizo__minus");

  /* LemonandChilliChickenMild */

  let LemonNumber = document.querySelector(
    "#LemonandChilliChickenMild__number"
  );
  let LemonPlus = document.querySelector("#LemonandChilliChickenMild__plus");
  let LemonMinus = document.querySelector("#LemonandChilliChickenMild__minus");

  /* CrispyChicken */

  let CrispyNumber = document.querySelector("#CrispyChicken__number");
  let CrispyPlus = document.querySelector("#CrispyChicken__plus");
  let CrispyMinus = document.querySelector("#CrispyChicken__minus");

  /* GoldenHalloumiVegetarian */

  let GoldenNumber = document.querySelector(
    "#GoldenHalloumiVegetarian__number"
  );
  let GoldenPlus = document.querySelector("#GoldenHalloumiVegetarian__plus");
  let GoldenMinus = document.querySelector("#GoldenHalloumiVegetarian__minus");

  /* Falafel */

  let FalafelNumber = document.querySelector("#FalafelVegetarian__number");
  let FalafelPlus = document.querySelector("#FalafelVegetarian__plus");
  let FalafelMinus = document.querySelector("#FalafelVegetarian__minus");

  BeefPlus.addEventListener("click", () => {
    BeefMeatballswithTomatoSouceCounter =
      BeefMeatballswithTomatoSouceCounter + 1;
    BeefNumber.textContent = BeefMeatballswithTomatoSouceCounter;
  });

  BeefMinus.addEventListener("click", () => {
    if (BeefMeatballswithTomatoSouceCounter > 0) {
      BeefMeatballswithTomatoSouceCounter =
        BeefMeatballswithTomatoSouceCounter - 1;
      BeefNumber.textContent = BeefMeatballswithTomatoSouceCounter;
    }
  });

  RoastedPlus.addEventListener("click", () => {
    RoastedChorizoCounter = RoastedChorizoCounter + 1;
    RoastedNumber.textContent = RoastedChorizoCounter;
  });

  RoastedMinus.addEventListener("click", () => {
    if (RoastedChorizoCounter > 0) {
      RoastedChorizoCounter = RoastedChorizoCounter - 1;
      RoastedNumber.textContent = RoastedChorizoCounter;
    }
  });

  LemonPlus.addEventListener("click", () => {
    LemonandChilliChickenCounter = LemonandChilliChickenCounter + 1;
    LemonNumber.textContent = LemonandChilliChickenCounter;
  });

  LemonMinus.addEventListener("click", () => {
    if (LemonandChilliChickenCounter > 0) {
      LemonandChilliChickenCounter = LemonandChilliChickenCounter - 1;
      LemonNumber.textContent = LemonandChilliChickenCounter;
    }
  });

  CrispyPlus.addEventListener("click", () => {
    CrispyChickenCounter = CrispyChickenCounter + 1;
    CrispyNumber.textContent = CrispyChickenCounter;
  });

  CrispyMinus.addEventListener("click", () => {
    if (CrispyChickenCounter > 0) {
      CrispyChickenCounter = CrispyChickenCounter - 1;
      CrispyNumber.textContent = CrispyChickenCounter;
    }
  });

  GoldenPlus.addEventListener("click", () => {
    GoldenHalloumiVegetarianCounter = GoldenHalloumiVegetarianCounter + 1;
    GoldenNumber.textContent = GoldenHalloumiVegetarianCounter;
  });

  GoldenMinus.addEventListener("click", () => {
    if (GoldenHalloumiVegetarianCounter > 0) {
      GoldenHalloumiVegetarianCounter = GoldenHalloumiVegetarianCounter - 1;
      GoldenNumber.textContent = GoldenHalloumiVegetarianCounter;
    }
  });

  FalafelPlus.addEventListener("click", () => {
    FalafelCounter = FalafelCounter + 1;
    FalafelNumber.textContent = FalafelCounter;
  });

  FalafelMinus.addEventListener("click", () => {
    if (FalafelCounter > 0) {
      FalafelCounter = FalafelCounter - 1;
      FalafelNumber.textContent = FalafelCounter;
    }
  });

  /* Add Extra Salads and Vegetables Array */
  let ExtraSaladArray = [
    "Charred Sweetcorn ",
    "Chopped Pickles",
    "Roasted Red Peppers",
    "Kimchi (Mild)",
    "Black Olives",
    "Smashed Avocado",
  ];

  let CharredSweetcornCounter = 0;
  let ChoppedPicklesCounter = 0;
  let RoastedRedPeppersCounter = 0;
  let KimchiMildCounter = 0;
  let BlackOlivesCounter = 0;
  let SmashedAvocadoCounter = 0;

  /* Add Extra Salads and Vegetables listesi div'i */
  let ExtraSaladDiv = document.createElement("div");
  ExtraSaladDiv.classList.add("ExtraSaladDiv");
  MainItemDiv.appendChild(ExtraSaladDiv);

  /* Add Extra Salads and Vegetables listesinin kendisi */
  let ExtraSaladList = document.createElement("ul");
  ExtraSaladList.classList.add("ExtraSaladDiv__ExtraSaladList");
  ExtraSaladDiv.appendChild(ExtraSaladList);

  /* liste elemanlarının liste içerisine eklenmesi */
  let ExtraSaladItems = ExtraSaladArray.map(function (item) {
    return `
    <li class="ExtraSaladDiv__ExtraSaladListItem">
    <div class="ExtraSaladDiv__CountBtns">
      <i id=${item
        .split(" ")
        .join("")
        .split("(")
        .join("")
        .split(")")
        .join("")
        .concat(
          "__minus"
        )} class="ExtraSaladDiv__CountBtns--minus fas fa-minus"></i>
      <span id=${item
        .split(" ")
        .join("")
        .split("(")
        .join("")
        .split(")")
        .join("")
        .concat("__number")} class="ExtraSaladDiv__CountBtns--number">0</span>
      <i id=${item
        .split(" ")
        .join("")
        .split("(")
        .join("")
        .split(")")
        .join("")
        .concat(
          "__plus"
        )} class="ExtraSaladDiv__CountBtns--plus fas fa-plus"></i>
    </div>
    <span class="ExtraSaladDiv__Text">${item}</span>
    <span class="ExtraSaladDiv__Price">+&#8356;2.50</span>
    </li>
    `;
  }).join("");
  ExtraSaladList.innerHTML = ExtraSaladItems;

  /* CharredSweetcorn */

  let CharredSweetcornNumber = document.querySelector(
    "#CharredSweetcorn__number"
  );
  let CharredSweetcornPlus = document.querySelector("#CharredSweetcorn__plus");
  let CharredSweetcornMinus = document.querySelector(
    "#CharredSweetcorn__minus"
  );

  CharredSweetcornPlus.addEventListener("click", () => {
    CharredSweetcornCounter = CharredSweetcornCounter + 1;
    CharredSweetcornNumber.textContent = CharredSweetcornCounter;
  });

  CharredSweetcornMinus.addEventListener("click", () => {
    if (CharredSweetcornCounter > 0) {
      CharredSweetcornCounter = CharredSweetcornCounter - 1;
      CharredSweetcornNumber.textContent = CharredSweetcornCounter;
    }
  });

  /* ChoppedPickles */

  let ChoppedPicklesNumber = document.querySelector("#ChoppedPickles__number");
  let ChoppedPicklesPlus = document.querySelector("#ChoppedPickles__plus");
  let ChoppedPicklesMinus = document.querySelector("#ChoppedPickles__minus");

  ChoppedPicklesPlus.addEventListener("click", () => {
    ChoppedPicklesCounter = ChoppedPicklesCounter + 1;
    ChoppedPicklesNumber.textContent = ChoppedPicklesCounter;
  });

  ChoppedPicklesMinus.addEventListener("click", () => {
    if (ChoppedPicklesCounter > 0) {
      ChoppedPicklesCounter = ChoppedPicklesCounter - 1;
      ChoppedPicklesNumber.textContent = ChoppedPicklesCounter;
    }
  });

  /* RoastedRedPeppers */

  let RoastedRedPeppersNumber = document.querySelector(
    "#RoastedRedPeppers__number"
  );
  let RoastedRedPeppersPlus = document.querySelector(
    "#RoastedRedPeppers__plus"
  );
  let RoastedRedPeppersMinus = document.querySelector(
    "#RoastedRedPeppers__minus"
  );

  RoastedRedPeppersPlus.addEventListener("click", () => {
    RoastedRedPeppersCounter = RoastedRedPeppersCounter + 1;
    RoastedRedPeppersNumber.textContent = RoastedRedPeppersCounter;
  });

  RoastedRedPeppersMinus.addEventListener("click", () => {
    if (RoastedRedPeppersCounter > 0) {
      RoastedRedPeppersCounter = RoastedRedPeppersCounter - 1;
      RoastedRedPeppersNumber.textContent = RoastedRedPeppersCounter;
    }
  });

  /* KimchiMild */

  let KimchiMildNumber = document.querySelector("#KimchiMild__number");
  let KimchiMildPlus = document.querySelector("#KimchiMild__plus");
  let KimchiMildMinus = document.querySelector("#KimchiMild__minus");

  KimchiMildPlus.addEventListener("click", () => {
    KimchiMildCounter = KimchiMildCounter + 1;
    KimchiMildNumber.textContent = KimchiMildCounter;
  });

  KimchiMildMinus.addEventListener("click", () => {
    if (KimchiMildCounter > 0) {
      KimchiMildCounter = KimchiMildCounter - 1;
      KimchiMildNumber.textContent = KimchiMildCounter;
    }
  });

  /* BlackOlives */

  let BlackOlivesNumber = document.querySelector("#BlackOlives__number");
  let BlackOlivesPlus = document.querySelector("#BlackOlives__plus");
  let BlackOlivesMinus = document.querySelector("#BlackOlives__minus");

  BlackOlivesPlus.addEventListener("click", () => {
    BlackOlivesCounter = BlackOlivesCounter + 1;
    BlackOlivesNumber.textContent = BlackOlivesCounter;
  });

  BlackOlivesMinus.addEventListener("click", () => {
    if (BlackOlivesCounter > 0) {
      BlackOlivesCounter = BlackOlivesCounter - 1;
      BlackOlivesNumber.textContent = BlackOlivesCounter;
    }
  });

  /* SmashedAvocado */

  let SmashedAvocadoNumber = document.querySelector("#SmashedAvocado__number");
  let SmashedAvocadoPlus = document.querySelector("#SmashedAvocado__plus");
  let SmashedAvocadoMinus = document.querySelector("#SmashedAvocado__minus");

  SmashedAvocadoPlus.addEventListener("click", () => {
    SmashedAvocadoCounter = SmashedAvocadoCounter + 1;
    SmashedAvocadoNumber.textContent = SmashedAvocadoCounter;
  });

  SmashedAvocadoMinus.addEventListener("click", () => {
    if (SmashedAvocadoCounter > 0) {
      SmashedAvocadoCounter = SmashedAvocadoCounter - 1;
      SmashedAvocadoNumber.textContent = SmashedAvocadoCounter;
    }
  });

  /* Add Extra Sauce Array */
  let ExtraSauceArray = [
    "Garlic Sauce",
    "Mayonnaise",
    "Sour Cream",
    "Smoky BBQ",
    "Tomato Ketchup",
    "Sriracha Hot Sauce Fermented Hot Sauce (Mild)",
  ];

  let GarlicSauceCounter = 0;
  let MayonnaiseCounter = 0;
  let SourCreamCounter = 0;
  let SmokyBBQCounter = 0;
  let TomatoKetchupCounter = 0;
  let SrirachaHotSauceFermentedHotSauceMildCounter = 0;

  /* Add Extra Sauce listesi div'i */
  let ExtraSauceDiv = document.createElement("div");
  ExtraSauceDiv.classList.add("ExtraSauceDiv");
  MainItemDiv.appendChild(ExtraSauceDiv);

  /* Add Extra Sauce listesinin kendisi */
  let ExtraSauceList = document.createElement("ul");
  ExtraSauceList.classList.add("ExtraSauceDiv__ExtraSauceList");
  ExtraSauceDiv.appendChild(ExtraSauceList);

  /* liste elemanlarının liste içerisine eklenmesi */
  let ExtraSauceItems = ExtraSauceArray.map(function (item) {
    return `
    <li class="ExtraSauceDiv__ExtraSauceListItem">
    <div class="ExtraSauceDiv__CountBtns">
      <i id=${item
        .split(" ")
        .join("")
        .split("(")
        .join("")
        .split(")")
        .join("")
        .concat(
          "__minus"
        )} class="ExtraSauceDiv__CountBtns--minus fas fa-minus"></i>
      <span id=${item
        .split(" ")
        .join("")
        .split("(")
        .join("")
        .split(")")
        .join("")
        .concat("__number")} class="ExtraSauceDiv__CountBtns--number">0</span>
      <i id=${item
        .split(" ")
        .join("")
        .split("(")
        .join("")
        .split(")")
        .join("")
        .concat(
          "__plus"
        )} class="ExtraSauceDiv__CountBtns--plus fas fa-plus"></i>
    </div>
    <span class="ExtraSauceDiv__Text">${item}</span>
    <span class="ExtraSauceDiv__Price">+&#8356;2.50</span>
    </li>
    `;
  }).join("");
  ExtraSauceList.innerHTML = ExtraSauceItems;

  /* GarlicSauce */

  let GarlicSauceNumber = document.querySelector("#GarlicSauce__number");
  let GarlicSaucePlus = document.querySelector("#GarlicSauce__plus");
  let GarlicSauceMinus = document.querySelector("#GarlicSauce__minus");

  GarlicSaucePlus.addEventListener("click", () => {
    GarlicSauceCounter = GarlicSauceCounter + 1;
    GarlicSauceNumber.textContent = GarlicSauceCounter;
  });

  GarlicSauceMinus.addEventListener("click", () => {
    if (GarlicSauceCounter > 0) {
      GarlicSauceCounter = GarlicSauceCounter - 1;
      GarlicSauceNumber.textContent = GarlicSauceCounter;
    }
  });

  /* Mayonnaise */

  let MayonnaiseNumber = document.querySelector("#Mayonnaise__number");
  let MayonnaisePlus = document.querySelector("#Mayonnaise__plus");
  let MayonnaiseMinus = document.querySelector("#Mayonnaise__minus");

  MayonnaisePlus.addEventListener("click", () => {
    MayonnaiseCounter = MayonnaiseCounter + 1;
    MayonnaiseNumber.textContent = MayonnaiseCounter;
  });

  MayonnaiseMinus.addEventListener("click", () => {
    if (MayonnaiseCounter > 0) {
      MayonnaiseCounter = MayonnaiseCounter - 1;
      MayonnaiseNumber.textContent = MayonnaiseCounter;
    }
  });

  /* SourCream */

  let SourCreamNumber = document.querySelector("#SourCream__number");
  let SourCreamPlus = document.querySelector("#SourCream__plus");
  let SourCreamMinus = document.querySelector("#SourCream__minus");

  SourCreamPlus.addEventListener("click", () => {
    SourCreamCounter = SourCreamCounter + 1;
    SourCreamNumber.textContent = SourCreamCounter;
  });

  SourCreamMinus.addEventListener("click", () => {
    if (SourCreamCounter > 0) {
      SourCreamCounter = SourCreamCounter - 1;
      SourCreamNumber.textContent = SourCreamCounter;
    }
  });

  /* SmokyBBQ */

  let SmokyBBQNumber = document.querySelector("#SmokyBBQ__number");
  let SmokyBBQPlus = document.querySelector("#SmokyBBQ__plus");
  let SmokyBBQMinus = document.querySelector("#SmokyBBQ__minus");

  SmokyBBQPlus.addEventListener("click", () => {
    SmokyBBQCounter = SmokyBBQCounter + 1;
    SmokyBBQNumber.textContent = SmokyBBQCounter;
  });

  SmokyBBQMinus.addEventListener("click", () => {
    if (SmokyBBQCounter > 0) {
      SmokyBBQCounter = SmokyBBQCounter - 1;
      SmokyBBQNumber.textContent = SmokyBBQCounter;
    }
  });

  /* TomatoKetchup */

  let TomatoKetchupNumber = document.querySelector("#TomatoKetchup__number");
  let TomatoKetchupPlus = document.querySelector("#TomatoKetchup__plus");
  let TomatoKetchupMinus = document.querySelector("#TomatoKetchup__minus");

  TomatoKetchupPlus.addEventListener("click", () => {
    TomatoKetchupCounter = TomatoKetchupCounter + 1;
    TomatoKetchupNumber.textContent = TomatoKetchupCounter;
  });

  TomatoKetchupMinus.addEventListener("click", () => {
    if (TomatoKetchupCounter > 0) {
      TomatoKetchupCounter = TomatoKetchupCounter - 1;
      TomatoKetchupNumber.textContent = TomatoKetchupCounter;
    }
  });

  /* SrirachaHotSauceFermentedHotSauceMild */

  let SrirachaHotSauceFermentedHotSauceMildNumber = document.querySelector(
    "#SrirachaHotSauceFermentedHotSauceMild__number"
  );
  let SrirachaHotSauceFermentedHotSauceMildPlus = document.querySelector(
    "#SrirachaHotSauceFermentedHotSauceMild__plus"
  );
  let SrirachaHotSauceFermentedHotSauceMildMinus = document.querySelector(
    "#SrirachaHotSauceFermentedHotSauceMild__minus"
  );

  SrirachaHotSauceFermentedHotSauceMildPlus.addEventListener("click", () => {
    SrirachaHotSauceFermentedHotSauceMildCounter =
      SrirachaHotSauceFermentedHotSauceMildCounter + 1;
    SrirachaHotSauceFermentedHotSauceMildNumber.textContent =
      SrirachaHotSauceFermentedHotSauceMildCounter;
  });

  SrirachaHotSauceFermentedHotSauceMildMinus.addEventListener("click", () => {
    if (SrirachaHotSauceFermentedHotSauceMildCounter > 0) {
      SrirachaHotSauceFermentedHotSauceMildCounter =
        SrirachaHotSauceFermentedHotSauceMildCounter - 1;
      SrirachaHotSauceFermentedHotSauceMildNumber.textContent =
        SrirachaHotSauceFermentedHotSauceMildCounter;
    }
  });

  /* Make Deal with Drink and Brownie Array */
  let ExtraDealArray = [
    { name: "Make Deal with Drink and Brownie", price: 3.95 },
  ];

  let MakeDealwithDrinkandBrownieCounter = 0;

  /* Add Extra Deal listesi div'i */
  let ExtraDealDiv = document.createElement("div");
  ExtraDealDiv.classList.add("ExtraDealDiv");
  MainItemDiv.appendChild(ExtraDealDiv);

  /* Add Extra Deal listesinin kendisi */
  let ExtraDealList = document.createElement("ul");
  ExtraDealList.classList.add("ExtraDealDiv__ExtraDealList");
  ExtraDealDiv.appendChild(ExtraDealList);

  /* liste elemanlarının liste içerisine eklenmesi */
  let ExtraDealItems = ExtraDealArray.map(function (item) {
    return `
    <li class="ExtraDealDiv__ExtraDealListItem">
    <div class="ExtraDealDiv__CountBtns">
      <i id=${item.name
        .split(" ")
        .join("")
        .split("(")
        .join("")
        .split(")")
        .join("")
        .concat(
          "__minus"
        )} class="ExtraDealDiv__CountBtns--minus fas fa-minus"></i>
      <span id=${item.name
        .split(" ")
        .join("")
        .split("(")
        .join("")
        .split(")")
        .join("")
        .concat("__number")} class="ExtraDealDiv__CountBtns--number">0</span>
      <i id=${item.name
        .split(" ")
        .join("")
        .split("(")
        .join("")
        .split(")")
        .join("")
        .concat(
          "__plus"
        )} class="ExtraDealDiv__CountBtns--plus fas fa-plus"></i>
    </div>
    <span class="ExtraDealDiv__Text">${item.name}</span>
    <span class="ExtraDealDiv__Price">+&#8356;${item.price}</span>
    </li>
    `;
  }).join("");
  ExtraDealList.innerHTML = ExtraDealItems;

  /* MakeDealwithDrinkandBrownie */

  let MakeDealwithDrinkandBrownieNumber = document.querySelector(
    "#MakeDealwithDrinkandBrownie__number"
  );
  let MakeDealwithDrinkandBrowniePlus = document.querySelector(
    "#MakeDealwithDrinkandBrownie__plus"
  );
  let MakeDealwithDrinkandBrownieMinus = document.querySelector(
    "#MakeDealwithDrinkandBrownie__minus"
  );

  MakeDealwithDrinkandBrowniePlus.addEventListener("click", () => {
    MakeDealwithDrinkandBrownieCounter = MakeDealwithDrinkandBrownieCounter + 1;
    MakeDealwithDrinkandBrownieNumber.textContent =
      MakeDealwithDrinkandBrownieCounter;
  });

  MakeDealwithDrinkandBrownieMinus.addEventListener("click", () => {
    if (MakeDealwithDrinkandBrownieCounter > 0) {
      MakeDealwithDrinkandBrownieCounter =
        MakeDealwithDrinkandBrownieCounter - 1;
      MakeDealwithDrinkandBrownieNumber.textContent =
        MakeDealwithDrinkandBrownieCounter;
    }
  });

  let DrinkArray = [
    "San Pellegrino Lemonade",
    "San Pellegrino Blood Orange",
    "Coca Cola",
    "Diet Coca Cola",
    "Still Water",
    "Sparkling Water",
  ];

  let DrinkDiv = document.createElement("div");
  DrinkDiv.classList.add("DrinkDiv");
  ExtraDealDiv.appendChild(DrinkDiv);

  let DrinkHeading = document.createElement("h1");
  DrinkHeading.classList.add("DrinkDiv__DrinkHeading");
  DrinkHeading.textContent = `Choice of Drink`;
  DrinkDiv.appendChild(DrinkHeading);

  let DrinkParag = document.createElement("p");
  DrinkParag.classList.add("DrinkDiv__DrinkParag");
  DrinkParag.textContent = `Required`;
  DrinkDiv.appendChild(DrinkParag);

  /* listenin kendisi */
  let DrinkList = document.createElement("ul");
  DrinkList.classList.add("DrinkDiv__DrinkList");
  DrinkDiv.appendChild(DrinkList);

  /* liste elemanlarının liste içerisine eklenmesi */
  let DrinkItems = DrinkArray.map(function (item) {
    return `
    <li class="DrinkDiv__DrinkListItem">
    <div id="${item}" class="DrinkDiv__DrinkListItem--btn"></div>
    ${item}</li>
    `;
  }).join("");
  DrinkList.innerHTML = DrinkItems;

  const DrinklistDOM = document.querySelector(".DrinkDiv__DrinkList");

  DrinklistDOM.addEventListener("click", activeFunctionDrink);

  let lastDrinkDom;

  function activeFunctionDrink(event) {
    console.log(document.querySelector(".active"));
    if (document.querySelector(".active") === null) {
      event.target.classList.add("active");
      document.querySelector(".active").classList.remove("active");
      event.target.classList.add("active");
      let lastDrink = event.target.parentNode.innerText;
      lastDrinkDom = lastDrink;
    } else {
      document.querySelector(".active").classList.remove("active");
      event.target.classList.add("active");
      let lastDrink = event.target.parentNode.innerText;
      lastDrinkDom = lastDrink;
    }
  }

  checkOutDOM = document.querySelector(".MainItemDiv__AddBasketBtn");
  checkOutDOM.addEventListener("click", function (event) {
    menu__heading.textContent = `Basket`;
    let ExtraProteinTotalPrice =
      BeefMeatballswithTomatoSouceCounter * 2.5 +
      RoastedChorizoCounter * 2.5 +
      LemonandChilliChickenCounter * 2.5 +
      CrispyChickenCounter * 2.5 +
      GoldenHalloumiVegetarianCounter * 2.5 +
      FalafelCounter * 2.5;

    let ExtraSaladTotalPrice =
      CharredSweetcornCounter * 0.75 +
      ChoppedPicklesCounter * 0.75 +
      RoastedRedPeppersCounter * 0.75 +
      KimchiMildCounter * 0.95 +
      BlackOlivesCounter * 0.95 +
      SmashedAvocadoCounter * 1.25;

    let ExtraSauceTotalPrice =
      GarlicSauceCounter * 0.75 +
      MayonnaiseCounter * 0.75 +
      SourCreamCounter * 0.75 +
      SmokyBBQCounter * 0.75 +
      TomatoKetchupCounter * 0.75 +
      SrirachaHotSauceFermentedHotSauceMildCounter * 0.75;

    newItemPriceFloat =
      newItemPriceFloat +
      MakeDealwithDrinkandBrownieCounter * 3.95 +
      ExtraProteinTotalPrice +
      ExtraSaladTotalPrice +
      ExtraSauceTotalPrice;

    console.log(newArr);
    customizeSection.style.transform = "translateY(100%)";
    customizeSection__closeIcon.style.transform = "translateY(-300%)";
    customizeSection__closeIcon.style.transform += "translate(-50%, -50%)";
    cartSection__Btns.style.transform = "translateY(300%)";

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
    itemImg.src = newItemSrc;
    divv.appendChild(itemImg);

    /* Heading */

    let itemHeading = document.createElement("h1");
    itemHeading.classList.add("basket__itemList--itemHeading");
    itemHeading.innerText = newItemName;
    divv.appendChild(itemHeading);

    /* Parag */

    let itemParag = document.createElement("p");
    itemParag.classList.add("basket__itemList--itemParag");
    itemParag.innerText = newItemParag;
    divv.appendChild(itemParag);

    /* Price */

    let itemPrice = document.createElement("p");
    itemPrice.classList.add("basket__itemList--itemPrice");
    itemPrice.innerText = (Math.round(newItemPriceFloat * 100) / 100).toFixed(
      2
    );
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

    productCount = 1;

    /* plus */
    itemCounterPlusBtn.addEventListener("click", function (event) {
      let newItemPrice = newItemPriceFloat;

      productCount = productCount + 1;
      event.target.parentNode.parentNode.children[2].children[1].innerText = `${productCount}`;
      console.log(productCount);

      newArr.push(newItemPrice);
      console.log(newArr);
      basket__itemList__totalPrice.innerText = `₤${(
        Math.round(newArr.reduce(getSum, 0) * 100) / 100
      ).toFixed(2)}`;
      menu__cart__itemCount.textContent = newArr.length;
    });

    /* minus */
    itemCounterMinusBtn.addEventListener("click", function (event) {
      let newItemPrice = newItemPriceFloat;

      if (productCount > 1) {
        //newArr.pop(newItemPrice);
        //console.log(newArr.indexOf(newItemPrice));
        let lastItem = newArr.indexOf(newItemPrice);
        basket__itemList__totalPrice.innerText = `₤${(
          Math.round(newArr.reduce(getSum, 0) * 100) / 100
        ).toFixed(2)}`;

        if (lastItem > -1) {
          newArr.splice(lastItem, 1);
        }
        productCount = productCount - 1;
        event.target.parentNode.parentNode.children[2].children[1].innerText = `${productCount}`;
        console.log(productCount);

        //console.log(newArr);
        basket__itemList__totalPrice.innerText = `₤${(
          Math.round(newArr.reduce(getSum, 0) * 100) / 100
        ).toFixed(2)}`;
        menu__cart__itemCount.textContent = newArr.length;
      } else {
        let lastItem = newArr.indexOf(newItemPrice);
        if (lastItem > -1) {
          newArr.splice(lastItem, 1);
        }
        event.target.parentNode.parentNode.style.display = "none";
        basket__itemList__totalPrice.innerText = `₤${(
          Math.round(newArr.reduce(getSum, 0) * 100) / 100
        ).toFixed(2)}`;
        menu__cart__itemCount.textContent = newArr.length;
      }
      basket__itemList__totalPrice.innerText = `₤${(
        Math.round(newArr.reduce(getSum, 0) * 100) / 100
      ).toFixed(2)}`;
    });
    /* Sadece Itemlara tıklandığında bile sepete ekleme problemi çözümü */

    newArr.push(newItemPriceFloat);
    basket__itemList__totalPrice.innerText = `₤${(
      Math.round(newArr.reduce(getSum, 0) * 100) / 100
    ).toFixed(2)}`;
    menu__cart__itemCount.textContent = newArr.length;

    /* basket kısmının görünür hale getirilmesi */
    basket.style.transform = "translateX(0%)";

    /* her addBaket butonuna basıldığında sepetteki item sayısının artması */
    itemCount++;

    /* ui tarafında bu sayının güncellenmesi */
    menu__cart__itemCount.textContent = newArr.length;

    IngridientsDiv.style.transform = "translateY(0%)";
    ExtraProteinDiv.style.transform = "translateY(0%)";
    ExtraSaladDiv.style.transform = "translateY(0%)";
    ExtraSauceDiv.style.transform = "translateY(0%)";
    RemoveHeading.textContent = `Remove Elements`;
    RemoveParag.textContent = `Choose what you remove`;

    customizeSection.firstElementChild.remove();
    BtnsDiv.style.display = "flex";

    let ExtraProteinCounters = [
      {
        counter: BeefMeatballswithTomatoSouceCounter,
        name: "Beef Meatballs with Tomato Souce",
        number: BeefNumber,
      },
      {
        counter: RoastedChorizoCounter,
        name: "Roasted Chorizo",
        number: RoastedNumber,
      },
      {
        counter: LemonandChilliChickenCounter,
        name: "Lemon and Chilli Chicken",
        number: LemonNumber,
      },
      {
        counter: CrispyChickenCounter,
        name: "Crispy Chicken",
        number: CrispyNumber,
      },
      {
        counter: GoldenHalloumiVegetarianCounter,
        name: "Golden Halloumi Vegetarian",
        number: GoldenNumber,
      },
      { counter: FalafelCounter, name: "Falafel", number: FalafelNumber },
    ];

    let ExtraSaladCounters = [
      {
        counter: CharredSweetcornCounter,
        name: "Charred Sweetcorn",
        number: CharredSweetcornNumber,
      },
      {
        counter: ChoppedPicklesCounter,
        name: "Chopped Pickles",
        number: ChoppedPicklesNumber,
      },
      {
        counter: RoastedRedPeppersCounter,
        name: "Roasted Red Peppers",
        number: RoastedRedPeppersNumber,
      },
      {
        counter: KimchiMildCounter,
        name: "Kimchi (Mild)",
        number: KimchiMildNumber,
      },
      {
        counter: BlackOlivesCounter,
        name: "Black Olives",
        number: BlackOlivesNumber,
      },
      {
        counter: SmashedAvocadoCounter,
        name: "Smashed Avocado",
        number: SmashedAvocadoNumber,
      },
    ];

    let ExtraSauceCounters = [
      {
        counter: GarlicSauceCounter,
        name: "Garlic Sauce",
        number: GarlicSauceNumber,
      },
      {
        counter: MayonnaiseCounter,
        name: "Mayonnaise",
        number: MayonnaiseNumber,
      },
      {
        counter: SourCreamCounter,
        name: "Sour Cream",
        number: SourCreamNumber,
      },
      {
        counter: SmokyBBQCounter,
        name: "Smoky BBQ",
        number: SmokyBBQNumber,
      },
      {
        counter: TomatoKetchupCounter,
        name: "Tomato Ketchup",
        number: TomatoKetchupNumber,
      },
      {
        counter: SrirachaHotSauceFermentedHotSauceMildCounter,
        name: "Sriracha Hot Sauce Fermented Hot Sauce (Mild)",
        number: SrirachaHotSauceFermentedHotSauceMildNumber,
      },
    ];

    let ExtraProteinBasketArray = [];
    let ExtraSaladBasketArray = [];
    let ExtraSauceBasketArray = [];

    //? PROTEIN SECTION

    ExtraProteinCounters.forEach(function (item) {
      if (item.counter > 0) {
        ExtraProteinBasketArray.push(item.name);
      } else {
      }
    });
    console.log("Extra", ExtraProteinBasketArray);

    ExtraProteinCounters.forEach(function (item) {
      item.counter = 0;
      console.log(item.counter);
    });

    ExtraProteinCounters.forEach(function (item) {
      item.number.textContent = item.counter;
      /* BeefNumber.textContent = BeefMeatballswithTomatoSouceCounter; */
    });

    //? SALAD SECTION

    ExtraSaladCounters.forEach(function (item) {
      if (item.counter > 0) {
        ExtraSaladBasketArray.push(item.name);
      } else {
      }
    });
    console.log("Extra", ExtraSaladBasketArray);

    ExtraSaladCounters.forEach(function (item) {
      item.counter = 0;
      console.log(item.counter);
    });

    ExtraSaladCounters.forEach(function (item) {
      item.number.textContent = item.counter;
      /* BeefNumber.textContent = BeefMeatballswithTomatoSouceCounter; */
    });

    //? SAUCE SECTION

    ExtraSauceCounters.forEach(function (item) {
      if (item.counter > 0) {
        ExtraSauceBasketArray.push(item.name);
      } else {
      }
    });
    console.log("Extra", ExtraSauceBasketArray);

    ExtraSauceCounters.forEach(function (item) {
      item.counter = 0;
      console.log(item.counter);
    });

    ExtraSauceCounters.forEach(function (item) {
      item.number.textContent = item.counter;
      //! BeefNumber.textContent = BeefMeatballswithTomatoSouceCounter;
    });

    //*IngridientsArray
    itemParag.innerText = IngridientsArray.join(" ");

    itemParag.innerHTML = `
    <p class="customizeSection__basketParag">${(itemParag.innerText =
      IngridientsArray.join(" "))}</p>
    <h1 class="customizeSection__basketHeading" >Add Extra Protein (£${ExtraProteinTotalPrice})</h1>
    <p>${ExtraProteinBasketArray.join(", ")}</p>
      <h1 class="customizeSection__basketHeading">Add Extra Salads and Vegetables (£${ExtraSaladTotalPrice})</h1>
      <p>${ExtraSaladBasketArray.join(", ")}</p>
      <h1 class="customizeSection__basketHeading">Add Extra Sauce (£${ExtraSauceTotalPrice})</h1>
      <p>${ExtraSauceBasketArray.join(", ")}</p>
      <h1 class="customizeSection__basketHeading">Make it a Meal Deal  (£${
        MakeDealwithDrinkandBrownieCounter * 3.95
      })</h1>
      <p class="customizeSection__basketParag">Meal Deal with Drink and Brownie, Choice of Drink, ${lastDrinkDom}}</p> 
    `;

    console.log(basket__itemList);
  });
}

const checkoutBtnDom = document.querySelector(".basket__itemList--checkout");
const menuCartDom = document.querySelector(".menu__cart");

//! pazar arabası ikonu ile basket kısmını görünür hale getirme
menuCartDom.addEventListener("click", function () {
  document.querySelector(".basket").style.transform = "translateX(0%)";
});

let boolelo = false;
/* basket kısmındaki checkout butonuna basıldığında olması gerekenler fonksiyonu */
//* CHECKOUT BUTONU
checkoutBtnDom.addEventListener("click", function (e) {
  if (document.querySelector(".menu__heading").textContent === "Checkout") {
    if (boolelo) {
      document.querySelector(".menu").style.filter = "brightness(0.5)";
      document.querySelector(".successPayment").style.filter = "brightness(1)";
      document.querySelector(".successPayment").style.bottom = "40%";
      document.querySelector(".successPayment").style.left = "50%";
      document.querySelector(".successPayment").style.transform =
        "translate(-50%, -50%)";
      document.querySelector(".successPayment").style.transform += "scale(1)";
    } else {
      document.querySelector(".errorPayment").style.transform += "scale(1)";
      document.querySelector(".menu").style.filter = "brightness(0.5)";
      document.querySelector(".errorPayment").style.filter = "brightness(1)";
      document.querySelector(".errorPayment").style.bottom = "22%";
      document.querySelector(".errorPayment").style.left = "50%";
      document.querySelector(".errorPayment").style.transform =
        "translate(-50%, -50%)";
    }
  }

  menu__heading.textContent = `Checkout`;

  document
    .querySelectorAll(".basket__itemList--itemCard")
    .forEach(function (item) {
      item.classList.add("checkout");
    });

  document.querySelector(".shop__menu").style.display = "none";
  document.querySelector(".shop__products").style.display = "none";
  menuCartDom.innerHTML = `<h3>Back</h3>`;
  basket.style.transform = "translateX(150%)";

  //* MENUCARTDOM CHECKOUT'TAN ÇIKMA BUTONU YANİ BACK
  menuCartDom.addEventListener("click", function () {
    menu__heading.textContent = `Kumpi Menu`;
    document.querySelector(".shop__menu").style.display = "block";

    document.querySelector(".shop__products").style.display = "block";

    shop.classList.remove("checkout");

    document.querySelector(".basket").appendChild(basket__itemList);

    document
      .querySelectorAll(".basket__itemList--itemCard")
      .forEach(function (item) {
        item.classList.remove("checkout");
      });

    menuCartDom.innerHTML = `
    <div class="menu__cart">
          <i class="menu__cart--icon fas fa-shopping-cart"></i>
          <span class="menu__cart--itemCount"> 0 </span>
        </div>
    `;
  });
  shop.classList.add("checkout");
  shop.appendChild(basket__itemList);
});

/* bu section içindeki herhangi bir item'a tıklanırsa selectItem fonksiyonu
devreye girsin */
shop__productSection.addEventListener("click", selectItem);

/* Add Basket(rightBtn) butonuna tıklanırsa addBasket fonksiyonu çalışsın */
cartSection__rightBtn.addEventListener("click", addBasket);

/* Add Customize(leftBtn) butonuna tıklanırsa addCustomize fonksiyonu çalışsın */
cartSection__leftBtn.addEventListener("click", addCustomize);

/*
  document
    .querySelectorAll(".basket__itemList--itemImg")
    .forEach(function (item) {
      item.classList.add("checkout");
    });
    */
//* Price start
/*
  document
    .querySelectorAll(
      ".basket__itemList--itemCard .basket__itemList--itemPrice"
    )
    .forEach(function (item) {
      item.style.display = "none";
    });
  document
    .querySelectorAll(".verticalCardDiv .basket__itemList--itemPrice")
    .forEach(function (item) {
      item.style.display = "block";
      item.style.position = "unset";
    });
    */

//* Price end
/*
  document.querySelectorAll(".basket__itemList--divv").forEach(function (item) {
    item.classList.add("checkout");
    item.style.display = "none";
  });
  document.querySelectorAll(".verticalCardDiv").forEach(function (item) {
    item.style.display = "flex";
  });
  document.querySelectorAll(".verticalitemImg").forEach(function (item) {
    item.style.display = "block";
  });

  let verticalCardDiv = document.createElement("div");
  verticalCardDiv.classList.add("verticalCardDiv");
  */

/*
    //*price start
    document
      .querySelectorAll(
        ".basket__itemList--itemCard .basket__itemList--itemPrice"
      )
      .forEach(function (item) {
        item.style.display = "block";
      });
    document
      .querySelectorAll(".verticalCardDiv .basket__itemList--itemPrice")
      .forEach(function (item) {
        item.style.display = "block";
        item.style.position = "absolute";
      });
    //*price end

    
    document
      .querySelectorAll(".basket__itemList--itemImg")
      .forEach(function (item) {
        item.classList.remove("checkout");
      });

    document
      .querySelectorAll(".basket__itemList--divv")
      .forEach(function (item) {
        item.classList.remove("checkout");
        item.style.display = "block";
      });
    document.querySelectorAll(".verticalCardDiv").forEach(function (item) {
      item.style.display = "none";
    });
    document.querySelectorAll(".verticalitemImg").forEach(function (item) {
      item.style.display = "none";
    });
    */
