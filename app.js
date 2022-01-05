/* preload */

let loader;
function loadNow(opacity) {
  if (opacity <= 0) {
    displayContent();
  } else {
    loader.style.opacity = opacity;
    window.setTimeout(function () {
      loadNow(opacity - 0.07);
    }, 70);
  }
}

function displayContent() {
  loader.style.display = "none";
  document.querySelector(".menu").style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  loader = document.querySelector(".preload");
  loadNow(2);
});

/* Menu List */

const list = document.querySelector(".shop__menuList");

list.addEventListener("click", activeFunction);

function activeFunction(event) {
  //* .active class'ına sahip olan elementi bul ve ondaki active class'ını sil!
  document.querySelector(".active").classList.remove("active");
  //* üzerine tıklanmış olan elemente .active class'ını ekle!
  event.target.classList.add("active");
}

//? Ürünlerin bilgilerini içeren Array'in başlangıcı

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

//? Ürünlerin bilgilerini içeren Array'in sonu

const shop__productSection = document.querySelector(".shop__productSection");

const cartSection = document.querySelector(".cartSection");

const cartSection__closeIcon = document.querySelector(
  ".cartSection__closeIcon"
);

const basket__closeIcon = document.querySelector(".basket__closeIcon");
//* Sepet kısmının tamamının tekrar sağ tarafa kayıp kaybolmasını sağlayan DOM elementi

const basket = document.querySelector(".basket");
//* Ürünlerin sıralandığı sağ taraftan beliren beyaz section'ın tamamı olan DOM elementi

const menu__cart__itemCount = document.querySelector(".menu__cart--itemCount");
//* Toplamda kaç ürün sipariş edildiğini belirten ikon üzerindeki span elementinin DOM elementi

const basket__itemList = document.querySelector(".basket__itemList");
//* Basket penceresine eklenen ürünleri card yapısında içerisinde barındıran DOM elementi

const basket__itemList__totalPrice = document.querySelector(
  ".basket__itemList--totalPrice"
);
//* Basket penceresinin en alt kısmında, checkout butonu üzerinde bulunan toplam ürün ücretini belirten DOM elementi

const customizeSection = document.querySelector(".customizeSection");
//* Ürünleri customize etmemizi sağlayan pencerenin DOM elementi

const customizeSection__closeIcon = document.querySelector(
  ".customizeSection__closeIcon"
);
//* Ürünü customize ettiğimiz pencerenin kapanmasını sağlayan x ikonunun DOM elementi

const cartSection__Btns = document.querySelector(".cartSection__Btns");
//* Ürünlerden herhangi birine tıkladığımızda gelen penceredaki butonları kapsayan DOM elementi

const shop = document.querySelector(".shop");
//* Kumpi Logosunun altıdaki ürünler ve ürün çeşit listesinin tamamını kapsayan DOM elementi

const menu__heading = document.querySelector(".menu__heading");
//* Kumpi Menu yazan başlığım DOM elementi

let newArr = [];
//? Her yeni ürün eklendiğinde toplam fiyatın hesaplanması için eklenen ürünlerin fiyatlarının toplandığı Array

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
//! Ürünler Arrayîndeki verileri kullanarak grid yapısında ürünlerimizi sıraladık.

//? Ürüne tıkladığımızda gelen seçim ekranın kapanmasını sağlayan ikonun fonksiyonu
cartSection__closeIcon.addEventListener("click", function () {
  cartSection.style.transform = "translateY(100%)";
  //* Section'ın kaybolması
  cartSection__closeIcon.style.transform = "translateY(-300%)";
  cartSection__closeIcon.style.transform += "translate(-50%, -50%)";
  //* X ikonun kaybolması
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
  if (
    event.target.parentNode.children[1] != undefined ||
    event.target.parentNode.children[2] != undefined ||
    event.target.parentNode.children[3] != undefined ||
    event.target.parentNode.children[0].src != undefined
  ) {
    /* cartSection kısmını ve x ikonunu ortaya çıkarma */

    cartSection__closeIcon.style.transform = "translateY(0%)";
    cartSection__closeIcon.style.transform += "translate(-50%, -50%)";
    cartSection.style.transform = "translateY(0%)";

    /* seçilen yeni Item'in bilgilerini çektiğimiz ana yapı */
    let newItem = event.target.parentNode.children;

    /* seçilen item'ın fiyat verisini alıp float'a çevirip array içine push
ettiğimiz kısım */
    let newItemPrice = parseFloat(
      event.target.parentNode.children[3].textContent.slice(1, -1)
    );

    /* reduce metodu ile toplam fiyat bilgisini elde ediyoruz. */
    //console.log(newArr.reduce(getSum, 0));

    /* seçilen item'ın verilerini cartSection üzerinde display ediyoruz. */
    cartSection.innerHTML = `
<img class="cartSection__Img" src="${event.target.parentNode.children[0].src}"/>
<h1 class="cartSection__Heading">${event.target.parentNode.children[1].textContent}</h1>
<p class="cartSection__Ingridients">${event.target.parentNode.children[2].textContent}</p>
<h3 class="cartSection__Price">${event.target.parentNode.children[3].textContent}</h3>
<div class="cartSection__Btns">
          <a class="cartSection__leftBtn" href="#">Customize</a>
          <a class="cartSection__rightBtn" href="#">Add Basket</a>
        </div>
`;
  }
  const cartSection__leftBtn = document.querySelector(".cartSection__leftBtn");
  //* Ürünlerden birine tıkladığımızda Customize yazan ve customize penceresini açan butonun DOM elementi

  const cartSection__rightBtn = document.querySelector(
    ".cartSection__rightBtn"
  );
  //* Ürünlerden birine tıkladığımızda Add to Basket yazan ve sepete ekleyen butonun DOM elementi

  cartSection__rightBtn.addEventListener("click", addBasket);
  cartSection__leftBtn.addEventListener("click", addCustomize);
  cartSection__leftBtn.style.transform = "translateX(0%)";
  cartSection__rightBtn.style.transform = "translateX(0%)";
  // Finish doing things after the pause
  /* Add Basket(rightBtn) butonuna tıklanırsa addBasket fonksiyonu çalışsın */
  /* Add Customize(leftBtn) butonuna tıklanırsa addCustomize fonksiyonu çalışsın */
  /*
  function continueExecution() {
    
  }
  setTimeout(continueExecution, 3000); // Wait ten seconds before continuing
  */
}

/* sepetteki item sayısını integer cinsine çavirip siteden başta alıyoruz. */
let itemCount = parseInt(menu__cart__itemCount.innerText);
let itemArray = [];

function addBasket(event) {
  let productCount = 1;

  menu__heading.textContent = `Basket`;

  /* add Basket butonunun cartSection kısmını gizlemesi */
  cartSection.style.transform = "translateY(100%)";
  cartSection__closeIcon.style.transform = "translateY(-300%)";
  cartSection__closeIcon.style.transform += "translate(-50%, -50%)";
  /*
  cartSection__leftBtn.style.transform = "translateX(-300%)";
  cartSection__rightBtn.style.transform = "translateX(300%)";
  cartSection__Btns.style.transform = "translateY(300%)";
  */
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
  //itemImg.src = `${event.target.parentNode.nextElementSibling.nextElementSibling.children[0].src}`;
  itemImg.src = `${event.target.parentNode.parentNode.children[0].src}`;
  divv.appendChild(itemImg);

  //! Remove Function is here!

  let removeItemIcon = document.createElement("p");
  removeItemIcon.classList.add("basket__itemList--removeItemIcon");
  removeItemIcon.innerText = "✖";
  itemCard.appendChild(removeItemIcon);

  removeItemIcon.addEventListener("click", function (event) {
    let lastItem = parseFloat(
      event.target.parentNode.children[3].textContent.slice(1, 5)
    );
    function removeItemAll(arr, value) {
      var i = 0;
      while (i < arr.length) {
        if (arr[i] === value) {
          arr.splice(i, 1);
        } else {
          ++i;
        }
      }
      return arr;
    }
    console.log(removeItemAll(newArr, lastItem));
    event.target.parentNode.remove();
    basket__itemList__totalPrice.innerText = `₤${(
      Math.round(newArr.reduce(getSum, 0) * 100) / 100
    ).toFixed(2)}`;

    menu__cart__itemCount.textContent = newArr.length;
  });

  /* Heading */

  let itemHeading = document.createElement("h1");
  itemHeading.classList.add("basket__itemList--itemHeading");
  itemHeading.innerText = `${event.target.parentNode.parentNode.children[1].textContent}`;
  divv.appendChild(itemHeading);

  /* Parag */

  let itemParag = document.createElement("p");
  itemParag.classList.add("basket__itemList--itemParag");
  itemParag.innerText = `${event.target.parentNode.parentNode.children[2].textContent}`;
  divv.appendChild(itemParag);

  /* Price */

  let itemPrice = document.createElement("p");
  itemPrice.classList.add("basket__itemList--itemPrice");
  itemPrice.innerText = `${event.target.parentNode.parentNode.children[3].textContent}`;
  itemCard.appendChild(itemPrice);

  /* Remove Item Icon */

  //* vertical div

  const verticalCardDiv = document.createElement("div");
  verticalCardDiv.classList.add("verticalCardDiv");
  itemCard.appendChild(verticalCardDiv);

  let VerticalitemHeading = itemHeading.cloneNode(true);
  let VerticalitemParag = itemParag.cloneNode(true);
  let VerticalitemPrice = itemPrice.cloneNode(true);
  let VerticalitemImg =
    event.target.parentNode.parentNode.children[0].cloneNode(true);
  VerticalitemImg.classList.add("verticalitemImg");
  itemCard.appendChild(VerticalitemImg);
  itemCard.insertBefore(VerticalitemImg, itemCard.firstChild);
  verticalCardDiv.appendChild(VerticalitemHeading);
  verticalCardDiv.appendChild(VerticalitemParag);
  verticalCardDiv.appendChild(VerticalitemPrice);
  VerticalitemImg.style.display = "none";
  verticalCardDiv.style.display = "none";

  //* vertical div

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
    if (document.querySelector(".menu__heading").textContent === "Checkout") {
      let newItemPrice = parseFloat(
        event.target.parentNode.parentNode.children[3].textContent.slice(1, 5)
      );

      productCount = productCount + 1;

      event.target.parentNode.parentNode.children[5].children[1].innerText = `${productCount}`;

      newArr.push(newItemPrice);

      basket__itemList__totalPrice.innerText = `₤${(
        Math.round(newArr.reduce(getSum, 0) * 100) / 100
      ).toFixed(2)}`;

      menu__cart__itemCount.textContent = newArr.length;
      console.log(productCount);
      console.log(newArr);
    } else {
      let newItemPrice = parseFloat(
        event.target.parentNode.parentNode.children[3].textContent.slice(1, 5)
      );

      productCount = productCount + 1;

      event.target.parentNode.parentNode.children[5].children[1].innerText = `${productCount}`;

      newArr.push(newItemPrice);

      basket__itemList__totalPrice.innerText = `₤${(
        Math.round(newArr.reduce(getSum, 0) * 100) / 100
      ).toFixed(2)}`;
      menu__cart__itemCount.textContent = newArr.length;
      console.log(productCount);
      console.log(newArr);
    }
  });

  /* minus */
  itemCounterMinusBtn.addEventListener("click", function (event) {
    let newItemPrice = parseFloat(
      event.target.parentNode.parentNode.children[3].textContent.slice(1, 5)
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

      event.target.parentNode.parentNode.children[5].children[1].innerText = `${productCount}`;
      menu__cart__itemCount.textContent = newArr.length;
      basket__itemList__totalPrice.innerText = `₤${(
        Math.round(newArr.reduce(getSum, 0) * 100) / 100
      ).toFixed(2)}`;
    } else {
      let lastItem = newArr.indexOf(newItemPrice);
      newArr.splice(lastItem, 1);
      //console.log(event.target.parentNode.parentNode);
      //event.target.parentNode.parentNode.style.display = "none";
      event.target.parentNode.parentNode.remove();
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
    event.target.parentNode.parentNode.children[3].textContent
      .split("₤")
      .join("")
  );

  newArr.push(newPriceBasket);
  basket__itemList__totalPrice.innerText = `₤${(
    Math.round(newArr.reduce(getSum, 0) * 100) / 100
  ).toFixed(2)}`;

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
  /*cartSection__Btns.style.transform = "translateY(300%)";*/

  menu__heading.textContent = `Kumpi Menu`;

  function resetList() {
    /* customize kısmı kaybolurken önceden oluşturulmuş olan malzeme listesini resetler */
    event.target.parentNode.lastElementChild.innerHTML = "";
  }
  /* customize kartı kaybolana kadar silme işini yapmaz sonra yapar */
  //setTimeout(resetList, 2000);
  resetList();
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

  /* seçilen yeni Item'in bilgilerini çektiğimiz ana yapı */

  let newItemSrc = event.target.parentNode.parentNode.children[0].src;
  let newItemName = event.target.parentNode.parentNode.children[1].innerText;
  let newItemParag = event.target.parentNode.parentNode.children[2].innerText;
  let newItemPrice = event.target.parentNode.parentNode.children[3].innerText;
  let newItemPriceFloat = parseFloat(
    event.target.parentNode.parentNode.children[3].textContent.slice(1, 5)
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
    "Lettuce",
    "Red Sauce",
    "Pepper",
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

      let newIndexName = e.target.id;
      let lastItem = IngridientsArray.indexOf(newIndexName);
      if (IngridientsArray.includes(newIndexName)) {
        if (lastItem > -1) {
          IngridientsArray.splice(lastItem, 1);
        }
      } else {
        IngridientsArray.push(newIndexName);
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
        ExtraProteinDiv.style.transform = "translateY(-126%)"; /* -150 */
        ExtraSaladDiv.style.transform = "translateY(0%)"; /* -275 */
        ExtraSauceDiv.style.transform = "translateY(0%)";
        RemoveHeading.textContent = `Add Extra Protein`;
        RemoveParag.textContent = `Choose up to 3`;
        break;
      case `Add Extra Protein`:
        IngridientsDiv.style.transform = "translateY(200%)";
        ExtraProteinDiv.style.transform = "translateY(0%)";
        ExtraSaladDiv.style.transform = "translateY(-240%)"; /* 275 */
        ExtraSauceDiv.style.transform = "translateY(0%)";
        RemoveHeading.textContent = `Add Extra Salads and Vegetables`;
        RemoveParag.textContent = `Choose up to 3`;
        break;
      case `Add Extra Salads and Vegetables`:
        IngridientsDiv.style.transform = "translateY(200%)";
        ExtraProteinDiv.style.transform = "translateY(0%)";
        ExtraSaladDiv.style.transform = "translateY(0%)";
        ExtraSauceDiv.style.transform = "translateY(-353%)";
        RemoveHeading.textContent = `Add Extra Sauce`;
        RemoveParag.textContent = `Choose up to 2`;
        break;
      case `Add Extra Sauce`:
        IngridientsDiv.style.transform = "translateY(200%)";
        ExtraProteinDiv.style.transform = "translateY(0%)";
        ExtraSaladDiv.style.transform = "translateY(0%)";
        ExtraSauceDiv.style.transform = "translateY(0%)";
        ExtraDealDiv.style.transform = "translateY(-228rem)"; /* -3700% */
        RemoveHeading.textContent = `Make Deal with Drink and Brownie`;
        RemoveParag.textContent = `Choose up to 1`;
        BtnsDiv.classList.add("effectOff");
        MainItemDiv__NextBtnDOM.style.visibility = "hidden";
        MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
          Math.round(newItemPriceFloat * 100) / 100
        ).toFixed(2)}`;
        break;
      default:
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
        ExtraProteinDiv.style.transform = "translateY(-128%)";
        ExtraSaladDiv.style.transform = "translateY(0%)";
        RemoveHeading.textContent = `Add Extra Protein`;
        RemoveParag.textContent = `Choose up to 3`;
        break;
      case `Add Extra Sauce`:
        IngridientsDiv.style.transform = "translateY(200%)";
        ExtraProteinDiv.style.transform = "translateY(0%)";
        ExtraSaladDiv.style.transform = "translateY(-240%)";
        ExtraSauceDiv.style.transform = "translateY(0%)";
        RemoveHeading.textContent = `Add Extra Salads and Vegetables`;
        RemoveParag.textContent = `Choose up to 3`;
        break;

      case `Make Deal with Drink and Brownie`:
        IngridientsDiv.style.transform = "translateY(200%)";
        ExtraProteinDiv.style.transform = "translateY(0%)";
        ExtraSaladDiv.style.transform = "translateY(0%)";
        ExtraSauceDiv.style.transform = "translateY(-355%)";
        ExtraDealDiv.style.transform = "translateY(0rem)";
        RemoveHeading.textContent = `Add Extra Sauce`;
        RemoveParag.textContent = `Choose up to 2`;
        BtnsDiv.classList.remove("effectOff");
        MainItemDiv__NextBtnDOM.style.visibility = "visible";
        break;
      default:
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
    "Steak",
    "Ricotta",
    "Avocado",
  ];

  let BeefMeatballswithTomatoSouceCounter = 0;
  let RoastedChorizoCounter = 0;
  let LemonandChilliChickenCounter = 0;
  let CrispyChickenCounter = 0;
  let GoldenHalloumiVegetarianCounter = 0;
  let FalafelCounter = 0;
  let SteakCounter = 0;
  let RicottaCounter = 0;
  let AvocadoCounter = 0;

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

  /* Steak */

  let SteakNumber = document.querySelector("#Steak__number");
  let SteakPlus = document.querySelector("#Steak__plus");
  let SteakMinus = document.querySelector("#Steak__minus");

  /* RicottaChorizo */

  let RicottaNumber = document.querySelector("#Ricotta__number");
  let RicottaPlus = document.querySelector("#Ricotta__plus");
  let RicottaMinus = document.querySelector("#Ricotta__minus");

  /* Avocado */

  let AvocadoNumber = document.querySelector("#Avocado__number");
  let AvocadoPlus = document.querySelector("#Avocado__plus");
  let AvocadoMinus = document.querySelector("#Avocado__minus");

  BeefPlus.addEventListener("click", () => {
    BeefMeatballswithTomatoSouceCounter =
      BeefMeatballswithTomatoSouceCounter + 1;
    BeefNumber.textContent = BeefMeatballswithTomatoSouceCounter;
    newItemPriceFloat = newItemPriceFloat + 2.5;
    MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
      Math.round(newItemPriceFloat * 100) / 100
    ).toFixed(2)}`;
  });

  BeefMinus.addEventListener("click", () => {
    if (BeefMeatballswithTomatoSouceCounter > 0) {
      BeefMeatballswithTomatoSouceCounter =
        BeefMeatballswithTomatoSouceCounter - 1;
      BeefNumber.textContent = BeefMeatballswithTomatoSouceCounter;
      newItemPriceFloat = newItemPriceFloat - 2.5;
      MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
        Math.round(newItemPriceFloat * 100) / 100
      ).toFixed(2)}`;
    }
  });

  RoastedPlus.addEventListener("click", () => {
    RoastedChorizoCounter = RoastedChorizoCounter + 1;
    RoastedNumber.textContent = RoastedChorizoCounter;
    newItemPriceFloat = newItemPriceFloat + 2.5;
    MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
      Math.round(newItemPriceFloat * 100) / 100
    ).toFixed(2)}`;
  });

  RoastedMinus.addEventListener("click", () => {
    if (RoastedChorizoCounter > 0) {
      RoastedChorizoCounter = RoastedChorizoCounter - 1;
      RoastedNumber.textContent = RoastedChorizoCounter;
      newItemPriceFloat = newItemPriceFloat - 2.5;
      MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
        Math.round(newItemPriceFloat * 100) / 100
      ).toFixed(2)}`;
    }
  });

  LemonPlus.addEventListener("click", () => {
    LemonandChilliChickenCounter = LemonandChilliChickenCounter + 1;
    LemonNumber.textContent = LemonandChilliChickenCounter;
    newItemPriceFloat = newItemPriceFloat + 2.5;
    MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
      Math.round(newItemPriceFloat * 100) / 100
    ).toFixed(2)}`;
  });

  LemonMinus.addEventListener("click", () => {
    if (LemonandChilliChickenCounter > 0) {
      LemonandChilliChickenCounter = LemonandChilliChickenCounter - 1;
      LemonNumber.textContent = LemonandChilliChickenCounter;
      newItemPriceFloat = newItemPriceFloat - 2.5;
      MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
        Math.round(newItemPriceFloat * 100) / 100
      ).toFixed(2)}`;
    }
  });

  CrispyPlus.addEventListener("click", () => {
    CrispyChickenCounter = CrispyChickenCounter + 1;
    CrispyNumber.textContent = CrispyChickenCounter;
    newItemPriceFloat = newItemPriceFloat + 2.5;
    MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
      Math.round(newItemPriceFloat * 100) / 100
    ).toFixed(2)}`;
  });

  CrispyMinus.addEventListener("click", () => {
    if (CrispyChickenCounter > 0) {
      CrispyChickenCounter = CrispyChickenCounter - 1;
      CrispyNumber.textContent = CrispyChickenCounter;
      newItemPriceFloat = newItemPriceFloat - 2.5;
      MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
        Math.round(newItemPriceFloat * 100) / 100
      ).toFixed(2)}`;
    }
  });

  GoldenPlus.addEventListener("click", () => {
    GoldenHalloumiVegetarianCounter = GoldenHalloumiVegetarianCounter + 1;
    GoldenNumber.textContent = GoldenHalloumiVegetarianCounter;
    newItemPriceFloat = newItemPriceFloat + 2.5;
    MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
      Math.round(newItemPriceFloat * 100) / 100
    ).toFixed(2)}`;
  });

  GoldenMinus.addEventListener("click", () => {
    if (GoldenHalloumiVegetarianCounter > 0) {
      GoldenHalloumiVegetarianCounter = GoldenHalloumiVegetarianCounter - 1;
      GoldenNumber.textContent = GoldenHalloumiVegetarianCounter;
      newItemPriceFloat = newItemPriceFloat - 2.5;
      MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
        Math.round(newItemPriceFloat * 100) / 100
      ).toFixed(2)}`;
    }
  });

  FalafelPlus.addEventListener("click", () => {
    FalafelCounter = FalafelCounter + 1;
    FalafelNumber.textContent = FalafelCounter;
    newItemPriceFloat = newItemPriceFloat + 2.5;
    MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
      Math.round(newItemPriceFloat * 100) / 100
    ).toFixed(2)}`;
  });

  FalafelMinus.addEventListener("click", () => {
    if (FalafelCounter > 0) {
      FalafelCounter = FalafelCounter - 1;
      FalafelNumber.textContent = FalafelCounter;
      newItemPriceFloat = newItemPriceFloat - 2.5;
      MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
        Math.round(newItemPriceFloat * 100) / 100
      ).toFixed(2)}`;
    }
  });

  SteakPlus.addEventListener("click", () => {
    SteakCounter = SteakCounter + 1;
    SteakNumber.textContent = SteakCounter;
    newItemPriceFloat = newItemPriceFloat + 2.5;
    MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
      Math.round(newItemPriceFloat * 100) / 100
    ).toFixed(2)}`;
  });

  SteakMinus.addEventListener("click", () => {
    if (SteakCounter > 0) {
      SteakCounter = SteakCounter - 1;
      SteakNumber.textContent = SteakCounter;
      newItemPriceFloat = newItemPriceFloat - 2.5;
      MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
        Math.round(newItemPriceFloat * 100) / 100
      ).toFixed(2)}`;
    }
  });

  RicottaPlus.addEventListener("click", () => {
    RicottaCounter = RicottaCounter + 1;
    RicottaNumber.textContent = RicottaCounter;
    newItemPriceFloat = newItemPriceFloat + 2.5;
    MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
      Math.round(newItemPriceFloat * 100) / 100
    ).toFixed(2)}`;
  });

  RicottaMinus.addEventListener("click", () => {
    if (RicottaCounter > 0) {
      RicottaCounter = RicottaCounter - 1;
      RicottaNumber.textContent = RicottaCounter;
      newItemPriceFloat = newItemPriceFloat - 2.5;
      MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
        Math.round(newItemPriceFloat * 100) / 100
      ).toFixed(2)}`;
    }
  });

  AvocadoPlus.addEventListener("click", () => {
    AvocadoCounter = AvocadoCounter + 1;
    AvocadoNumber.textContent = AvocadoCounter;
    newItemPriceFloat = newItemPriceFloat + 2.5;
    MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
      Math.round(newItemPriceFloat * 100) / 100
    ).toFixed(2)}`;
  });

  AvocadoMinus.addEventListener("click", () => {
    if (AvocadoCounter > 0) {
      AvocadoCounter = AvocadoCounter - 1;
      AvocadoNumber.textContent = AvocadoCounter;
      newItemPriceFloat = newItemPriceFloat - 2.5;
      MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
        Math.round(newItemPriceFloat * 100) / 100
      ).toFixed(2)}`;
    }
  });

  /* Add Extra Salads and Vegetables Array */
  let ExtraSaladArray = [
    { name: "Charred Sweetcorn", price: 0.75 },
    { name: "Chopped Pickles", price: 0.75 },
    { name: "Roasted Red Peppers", price: 0.75 },
    { name: "Kimchi (Mild)", price: 0.95 },
    { name: "Black Olives", price: 0.95 },
    { name: "Smashed Avocado", price: 1.25 },
    { name: "Seafood", price: 1.25 },
    { name: "Corn", price: 1.25 },
    { name: "Tofu", price: 1.25 },
  ];

  let CharredSweetcornCounter = 0;
  let ChoppedPicklesCounter = 0;
  let RoastedRedPeppersCounter = 0;
  let KimchiMildCounter = 0;
  let BlackOlivesCounter = 0;
  let SmashedAvocadoCounter = 0;
  let SeafoodCounter = 0;
  let CornCounter = 0;
  let TofuCounter = 0;

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
      <i id=${item.name
        .split(" ")
        .join("")
        .split("(")
        .join("")
        .split(")")
        .join("")
        .concat(
          "__minus"
        )} class="ExtraSaladDiv__CountBtns--minus fas fa-minus"></i>
      <span id=${item.name
        .split(" ")
        .join("")
        .split("(")
        .join("")
        .split(")")
        .join("")
        .concat("__number")} class="ExtraSaladDiv__CountBtns--number">0</span>
      <i id=${item.name
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
    <span class="ExtraSaladDiv__Text">${item.name}</span>
    <span class="ExtraSaladDiv__Price">+&#8356;${item.price}</span>
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
    newItemPriceFloat = newItemPriceFloat + 0.75;
    MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
      Math.round(newItemPriceFloat * 100) / 100
    ).toFixed(2)}`;
  });

  CharredSweetcornMinus.addEventListener("click", () => {
    if (CharredSweetcornCounter > 0) {
      CharredSweetcornCounter = CharredSweetcornCounter - 1;
      CharredSweetcornNumber.textContent = CharredSweetcornCounter;
      newItemPriceFloat = newItemPriceFloat - 0.75;
      MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
        Math.round(newItemPriceFloat * 100) / 100
      ).toFixed(2)}`;
    }
  });

  /* ChoppedPickles */

  let ChoppedPicklesNumber = document.querySelector("#ChoppedPickles__number");
  let ChoppedPicklesPlus = document.querySelector("#ChoppedPickles__plus");
  let ChoppedPicklesMinus = document.querySelector("#ChoppedPickles__minus");

  ChoppedPicklesPlus.addEventListener("click", () => {
    ChoppedPicklesCounter = ChoppedPicklesCounter + 1;
    ChoppedPicklesNumber.textContent = ChoppedPicklesCounter;
    newItemPriceFloat = newItemPriceFloat + 0.75;
    MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
      Math.round(newItemPriceFloat * 100) / 100
    ).toFixed(2)}`;
  });

  ChoppedPicklesMinus.addEventListener("click", () => {
    if (ChoppedPicklesCounter > 0) {
      ChoppedPicklesCounter = ChoppedPicklesCounter - 1;
      ChoppedPicklesNumber.textContent = ChoppedPicklesCounter;
      newItemPriceFloat = newItemPriceFloat - 0.75;
      MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
        Math.round(newItemPriceFloat * 100) / 100
      ).toFixed(2)}`;
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
    newItemPriceFloat = newItemPriceFloat + 0.75;
    MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
      Math.round(newItemPriceFloat * 100) / 100
    ).toFixed(2)}`;
  });

  RoastedRedPeppersMinus.addEventListener("click", () => {
    if (RoastedRedPeppersCounter > 0) {
      RoastedRedPeppersCounter = RoastedRedPeppersCounter - 1;
      RoastedRedPeppersNumber.textContent = RoastedRedPeppersCounter;
      newItemPriceFloat = newItemPriceFloat - 0.75;
      MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
        Math.round(newItemPriceFloat * 100) / 100
      ).toFixed(2)}`;
    }
  });

  /* KimchiMild */

  let KimchiMildNumber = document.querySelector("#KimchiMild__number");
  let KimchiMildPlus = document.querySelector("#KimchiMild__plus");
  let KimchiMildMinus = document.querySelector("#KimchiMild__minus");

  KimchiMildPlus.addEventListener("click", () => {
    KimchiMildCounter = KimchiMildCounter + 1;
    KimchiMildNumber.textContent = KimchiMildCounter;
    newItemPriceFloat = newItemPriceFloat + 0.95;
    MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
      Math.round(newItemPriceFloat * 100) / 100
    ).toFixed(2)}`;
  });

  KimchiMildMinus.addEventListener("click", () => {
    if (KimchiMildCounter > 0) {
      KimchiMildCounter = KimchiMildCounter - 1;
      KimchiMildNumber.textContent = KimchiMildCounter;
      newItemPriceFloat = newItemPriceFloat - 0.95;
      MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
        Math.round(newItemPriceFloat * 100) / 100
      ).toFixed(2)}`;
    }
  });

  /* BlackOlives */

  let BlackOlivesNumber = document.querySelector("#BlackOlives__number");
  let BlackOlivesPlus = document.querySelector("#BlackOlives__plus");
  let BlackOlivesMinus = document.querySelector("#BlackOlives__minus");

  BlackOlivesPlus.addEventListener("click", () => {
    BlackOlivesCounter = BlackOlivesCounter + 1;
    BlackOlivesNumber.textContent = BlackOlivesCounter;
    newItemPriceFloat = newItemPriceFloat + 0.95;
    MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
      Math.round(newItemPriceFloat * 100) / 100
    ).toFixed(2)}`;
  });

  BlackOlivesMinus.addEventListener("click", () => {
    if (BlackOlivesCounter > 0) {
      BlackOlivesCounter = BlackOlivesCounter - 1;
      BlackOlivesNumber.textContent = BlackOlivesCounter;
      newItemPriceFloat = newItemPriceFloat - 0.95;
      MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
        Math.round(newItemPriceFloat * 100) / 100
      ).toFixed(2)}`;
    }
  });

  /* SmashedAvocado */

  let SmashedAvocadoNumber = document.querySelector("#SmashedAvocado__number");
  let SmashedAvocadoPlus = document.querySelector("#SmashedAvocado__plus");
  let SmashedAvocadoMinus = document.querySelector("#SmashedAvocado__minus");

  SmashedAvocadoPlus.addEventListener("click", () => {
    SmashedAvocadoCounter = SmashedAvocadoCounter + 1;
    SmashedAvocadoNumber.textContent = SmashedAvocadoCounter;
    newItemPriceFloat = newItemPriceFloat + 1.25;
    MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
      Math.round(newItemPriceFloat * 100) / 100
    ).toFixed(2)}`;
  });

  SmashedAvocadoMinus.addEventListener("click", () => {
    if (SmashedAvocadoCounter > 0) {
      SmashedAvocadoCounter = SmashedAvocadoCounter - 1;
      SmashedAvocadoNumber.textContent = SmashedAvocadoCounter;
      newItemPriceFloat = newItemPriceFloat - 1.25;
      MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
        Math.round(newItemPriceFloat * 100) / 100
      ).toFixed(2)}`;
    }
  });

  /* Seafood */

  let SeafoodNumber = document.querySelector("#Seafood__number");
  let SeafoodPlus = document.querySelector("#Seafood__plus");
  let SeafoodMinus = document.querySelector("#Seafood__minus");

  SeafoodPlus.addEventListener("click", () => {
    SeafoodCounter = SeafoodCounter + 1;
    SeafoodNumber.textContent = SeafoodCounter;
    newItemPriceFloat = newItemPriceFloat + 1.25;
    MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
      Math.round(newItemPriceFloat * 100) / 100
    ).toFixed(2)}`;
  });

  SeafoodMinus.addEventListener("click", () => {
    if (SeafoodCounter > 0) {
      SeafoodCounter = SeafoodCounter - 1;
      SeafoodNumber.textContent = SeafoodCounter;
      newItemPriceFloat = newItemPriceFloat - 1.25;
      MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
        Math.round(newItemPriceFloat * 100) / 100
      ).toFixed(2)}`;
    }
  });

  /* Corn */

  let CornNumber = document.querySelector("#Corn__number");
  let CornPlus = document.querySelector("#Corn__plus");
  let CornMinus = document.querySelector("#Corn__minus");

  CornPlus.addEventListener("click", () => {
    CornCounter = CornCounter + 1;
    CornNumber.textContent = CornCounter;
    newItemPriceFloat = newItemPriceFloat + 1.25;
    MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
      Math.round(newItemPriceFloat * 100) / 100
    ).toFixed(2)}`;
  });

  CornMinus.addEventListener("click", () => {
    if (CornCounter > 0) {
      CornCounter = CornCounter - 1;
      CornNumber.textContent = CornCounter;
      newItemPriceFloat = newItemPriceFloat - 1.25;
      MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
        Math.round(newItemPriceFloat * 100) / 100
      ).toFixed(2)}`;
    }
  });

  /* Tofu */

  let TofuNumber = document.querySelector("#Tofu__number");
  let TofuPlus = document.querySelector("#Tofu__plus");
  let TofuMinus = document.querySelector("#Tofu__minus");

  TofuPlus.addEventListener("click", () => {
    TofuCounter = TofuCounter + 1;
    TofuNumber.textContent = TofuCounter;
    newItemPriceFloat = newItemPriceFloat + 1.25;
    MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
      Math.round(newItemPriceFloat * 100) / 100
    ).toFixed(2)}`;
  });

  TofuMinus.addEventListener("click", () => {
    if (TofuCounter > 0) {
      TofuCounter = TofuCounter - 1;
      TofuNumber.textContent = TofuCounter;
      newItemPriceFloat = newItemPriceFloat - 1.25;
      MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
        Math.round(newItemPriceFloat * 100) / 100
      ).toFixed(2)}`;
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
    "Ranch",
    "Burger",
    "Mustard",
  ];

  let GarlicSauceCounter = 0;
  let MayonnaiseCounter = 0;
  let SourCreamCounter = 0;
  let SmokyBBQCounter = 0;
  let TomatoKetchupCounter = 0;
  let SrirachaHotSauceFermentedHotSauceMildCounter = 0;
  let RanchCounter = 0;
  let BurgerCounter = 0;
  let MustardCounter = 0;

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
    <span class="ExtraSauceDiv__Price">+&#8356;0.75</span>
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
    newItemPriceFloat = newItemPriceFloat + 0.75;
    MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
      Math.round(newItemPriceFloat * 100) / 100
    ).toFixed(2)}`;
  });

  GarlicSauceMinus.addEventListener("click", () => {
    if (GarlicSauceCounter > 0) {
      GarlicSauceCounter = GarlicSauceCounter - 1;
      GarlicSauceNumber.textContent = GarlicSauceCounter;
      newItemPriceFloat = newItemPriceFloat - 0.75;
      MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
        Math.round(newItemPriceFloat * 100) / 100
      ).toFixed(2)}`;
    }
  });

  /* Mayonnaise */

  let MayonnaiseNumber = document.querySelector("#Mayonnaise__number");
  let MayonnaisePlus = document.querySelector("#Mayonnaise__plus");
  let MayonnaiseMinus = document.querySelector("#Mayonnaise__minus");

  MayonnaisePlus.addEventListener("click", () => {
    MayonnaiseCounter = MayonnaiseCounter + 1;
    MayonnaiseNumber.textContent = MayonnaiseCounter;
    newItemPriceFloat = newItemPriceFloat + 0.75;
    MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
      Math.round(newItemPriceFloat * 100) / 100
    ).toFixed(2)}`;
  });

  MayonnaiseMinus.addEventListener("click", () => {
    if (MayonnaiseCounter > 0) {
      MayonnaiseCounter = MayonnaiseCounter - 1;
      MayonnaiseNumber.textContent = MayonnaiseCounter;
      newItemPriceFloat = newItemPriceFloat - 0.75;
      MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
        Math.round(newItemPriceFloat * 100) / 100
      ).toFixed(2)}`;
    }
  });

  /* SourCream */

  let SourCreamNumber = document.querySelector("#SourCream__number");
  let SourCreamPlus = document.querySelector("#SourCream__plus");
  let SourCreamMinus = document.querySelector("#SourCream__minus");

  SourCreamPlus.addEventListener("click", () => {
    SourCreamCounter = SourCreamCounter + 1;
    SourCreamNumber.textContent = SourCreamCounter;
    newItemPriceFloat = newItemPriceFloat + 0.75;
    MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
      Math.round(newItemPriceFloat * 100) / 100
    ).toFixed(2)}`;
  });

  SourCreamMinus.addEventListener("click", () => {
    if (SourCreamCounter > 0) {
      SourCreamCounter = SourCreamCounter - 1;
      SourCreamNumber.textContent = SourCreamCounter;
      newItemPriceFloat = newItemPriceFloat - 0.75;
      MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
        Math.round(newItemPriceFloat * 100) / 100
      ).toFixed(2)}`;
    }
  });

  /* SmokyBBQ */

  let SmokyBBQNumber = document.querySelector("#SmokyBBQ__number");
  let SmokyBBQPlus = document.querySelector("#SmokyBBQ__plus");
  let SmokyBBQMinus = document.querySelector("#SmokyBBQ__minus");

  SmokyBBQPlus.addEventListener("click", () => {
    SmokyBBQCounter = SmokyBBQCounter + 1;
    SmokyBBQNumber.textContent = SmokyBBQCounter;
    newItemPriceFloat = newItemPriceFloat + 0.75;
    MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
      Math.round(newItemPriceFloat * 100) / 100
    ).toFixed(2)}`;
  });

  SmokyBBQMinus.addEventListener("click", () => {
    if (SmokyBBQCounter > 0) {
      SmokyBBQCounter = SmokyBBQCounter - 1;
      SmokyBBQNumber.textContent = SmokyBBQCounter;
      newItemPriceFloat = newItemPriceFloat - 0.75;
      MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
        Math.round(newItemPriceFloat * 100) / 100
      ).toFixed(2)}`;
    }
  });

  /* TomatoKetchup */

  let TomatoKetchupNumber = document.querySelector("#TomatoKetchup__number");
  let TomatoKetchupPlus = document.querySelector("#TomatoKetchup__plus");
  let TomatoKetchupMinus = document.querySelector("#TomatoKetchup__minus");

  TomatoKetchupPlus.addEventListener("click", () => {
    TomatoKetchupCounter = TomatoKetchupCounter + 1;
    TomatoKetchupNumber.textContent = TomatoKetchupCounter;
    newItemPriceFloat = newItemPriceFloat + 0.75;
    MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
      Math.round(newItemPriceFloat * 100) / 100
    ).toFixed(2)}`;
  });

  TomatoKetchupMinus.addEventListener("click", () => {
    if (TomatoKetchupCounter > 0) {
      TomatoKetchupCounter = TomatoKetchupCounter - 1;
      TomatoKetchupNumber.textContent = TomatoKetchupCounter;
      newItemPriceFloat = newItemPriceFloat - 0.75;
      MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
        Math.round(newItemPriceFloat * 100) / 100
      ).toFixed(2)}`;
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
    newItemPriceFloat = newItemPriceFloat + 0.75;
    MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
      Math.round(newItemPriceFloat * 100) / 100
    ).toFixed(2)}`;
  });

  SrirachaHotSauceFermentedHotSauceMildMinus.addEventListener("click", () => {
    if (SrirachaHotSauceFermentedHotSauceMildCounter > 0) {
      SrirachaHotSauceFermentedHotSauceMildCounter =
        SrirachaHotSauceFermentedHotSauceMildCounter - 1;
      SrirachaHotSauceFermentedHotSauceMildNumber.textContent =
        SrirachaHotSauceFermentedHotSauceMildCounter;
      newItemPriceFloat = newItemPriceFloat - 0.75;
      MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
        Math.round(newItemPriceFloat * 100) / 100
      ).toFixed(2)}`;
    }
  });

  /* Ranch */

  let RanchNumber = document.querySelector("#Ranch__number");
  let RanchPlus = document.querySelector("#Ranch__plus");
  let RanchMinus = document.querySelector("#Ranch__minus");

  RanchPlus.addEventListener("click", () => {
    RanchCounter = RanchCounter + 1;
    RanchNumber.textContent = RanchCounter;
    newItemPriceFloat = newItemPriceFloat + 0.75;
    MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
      Math.round(newItemPriceFloat * 100) / 100
    ).toFixed(2)}`;
  });

  RanchMinus.addEventListener("click", () => {
    if (RanchCounter > 0) {
      RanchCounter = RanchCounter - 1;
      RanchNumber.textContent = RanchCounter;
      newItemPriceFloat = newItemPriceFloat - 0.75;
      MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
        Math.round(newItemPriceFloat * 100) / 100
      ).toFixed(2)}`;
    }
  });

  /* Burger */

  let BurgerNumber = document.querySelector("#Burger__number");
  let BurgerPlus = document.querySelector("#Burger__plus");
  let BurgerMinus = document.querySelector("#Burger__minus");

  BurgerPlus.addEventListener("click", () => {
    BurgerCounter = BurgerCounter + 1;
    BurgerNumber.textContent = BurgerCounter;
    newItemPriceFloat = newItemPriceFloat + 0.75;
    MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
      Math.round(newItemPriceFloat * 100) / 100
    ).toFixed(2)}`;
  });

  BurgerMinus.addEventListener("click", () => {
    if (BurgerCounter > 0) {
      BurgerCounter = BurgerCounter - 1;
      BurgerNumber.textContent = BurgerCounter;
      newItemPriceFloat = newItemPriceFloat - 0.75;
      MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
        Math.round(newItemPriceFloat * 100) / 100
      ).toFixed(2)}`;
    }
  });

  /* Mustard */

  let MustardNumber = document.querySelector("#Mustard__number");
  let MustardPlus = document.querySelector("#Mustard__plus");
  let MustardMinus = document.querySelector("#Mustard__minus");

  MustardPlus.addEventListener("click", () => {
    MustardCounter = MustardCounter + 1;
    MustardNumber.textContent = MustardCounter;
    newItemPriceFloat = newItemPriceFloat + 0.75;
    MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
      Math.round(newItemPriceFloat * 100) / 100
    ).toFixed(2)}`;
  });

  MustardMinus.addEventListener("click", () => {
    if (MustardCounter > 0) {
      MustardCounter = MustardCounter - 1;
      MustardNumber.textContent = MustardCounter;
      newItemPriceFloat = newItemPriceFloat - 0.75;
      MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
        Math.round(newItemPriceFloat * 100) / 100
      ).toFixed(2)}`;
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
    newItemPriceFloat = newItemPriceFloat + 3.5;
    MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
      Math.round(newItemPriceFloat * 100) / 100
    ).toFixed(2)}`;
    console.log(newItemPriceFloat);
  });

  MakeDealwithDrinkandBrownieMinus.addEventListener("click", () => {
    if (MakeDealwithDrinkandBrownieCounter > 0) {
      MakeDealwithDrinkandBrownieCounter =
        MakeDealwithDrinkandBrownieCounter - 1;
      MakeDealwithDrinkandBrownieNumber.textContent =
        MakeDealwithDrinkandBrownieCounter;
      newItemPriceFloat = newItemPriceFloat - 3.5;
      MainItemDiv__AddBasketBtnDOM.textContent = `CheckOut £${(
        Math.round(newItemPriceFloat * 100) / 100
      ).toFixed(2)}`;
      console.log(newItemPriceFloat);
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
    if (document.querySelector(".activeDrink") === null) {
      event.target.classList.add("activeDrink");
      document.querySelector(".activeDrink").classList.remove("activeDrink");
      event.target.classList.add("activeDrink");
      let lastDrink = event.target.parentNode.innerText;
      lastDrinkDom = lastDrink;
    } else {
      document.querySelector(".activeDrink").classList.remove("activeDrink");
      event.target.classList.add("activeDrink");
      let lastDrink = event.target.parentNode.innerText;
      lastDrinkDom = lastDrink;
    }
  }

  let checkOutDOM = document.querySelector(".MainItemDiv__AddBasketBtn");
  checkOutDOM.addEventListener("click", function (event) {
    menu__heading.textContent = `Basket`;
    let ExtraProteinTotalPrice =
      BeefMeatballswithTomatoSouceCounter * 2.5 +
      RoastedChorizoCounter * 2.5 +
      LemonandChilliChickenCounter * 2.5 +
      CrispyChickenCounter * 2.5 +
      GoldenHalloumiVegetarianCounter * 2.5 +
      FalafelCounter * 2.5 +
      SteakCounter * 2.5 +
      RicottaCounter * 2.5 +
      AvocadoCounter * 2.5;

    let ExtraSaladTotalPrice =
      CharredSweetcornCounter * 0.75 +
      ChoppedPicklesCounter * 0.75 +
      RoastedRedPeppersCounter * 0.75 +
      KimchiMildCounter * 0.95 +
      BlackOlivesCounter * 0.95 +
      SmashedAvocadoCounter * 1.25 +
      SeafoodCounter * 1.25 +
      TofuCounter * 1.25 +
      CornCounter * 1.25;

    let ExtraSauceTotalPrice =
      GarlicSauceCounter * 0.75 +
      MayonnaiseCounter * 0.75 +
      SourCreamCounter * 0.75 +
      SmokyBBQCounter * 0.75 +
      TomatoKetchupCounter * 0.75 +
      SrirachaHotSauceFermentedHotSauceMildCounter * 0.75 +
      RanchCounter * 2.5 +
      BurgerCounter * 2.5 +
      MustardCounter * 2.5;

    customizeSection.style.transform = "translateY(100%)";
    customizeSection__closeIcon.style.transform = "translateY(-300%)";
    customizeSection__closeIcon.style.transform += "translate(-50%, -50%)";

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

    //! Remove Function is here!

    let removeItemIcon = document.createElement("p");
    removeItemIcon.classList.add("basket__itemList--removeItemIcon");
    removeItemIcon.innerText = "✖";
    itemCard.appendChild(removeItemIcon);

    removeItemIcon.addEventListener("click", function (event) {
      let lastItem = newItemPriceFloat;
      function removeItemAll(arr, value) {
        var i = 0;
        while (i < arr.length) {
          if (arr[i] === value) {
            arr.splice(i, 1);
            console.log(lastItem);
          } else {
            ++i;
            console.log(lastItem);
          }
        }
        return arr;
      }
      console.log(removeItemAll(newArr, lastItem));
      event.target.parentNode.remove();
      basket__itemList__totalPrice.innerText = `₤${(
        Math.round(newArr.reduce(getSum, 0) * 100) / 100
      ).toFixed(2)}`;

      menu__cart__itemCount.textContent = newArr.length;
    });

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
    itemPrice.innerText =
      `₤` + (Math.round(newItemPriceFloat * 100) / 100).toFixed(2);
    itemCard.appendChild(itemPrice);

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
      { counter: SteakCounter, name: "Steak", number: SteakNumber },
      { counter: RicottaCounter, name: "Ricotta", number: RicottaNumber },
      { counter: AvocadoCounter, name: "Avocado", number: AvocadoNumber },
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
      { counter: SeafoodCounter, name: "Seafood", number: SeafoodNumber },
      { counter: TofuCounter, name: "Tofu", number: TofuNumber },
      { counter: CornCounter, name: "Corn", number: CornNumber },
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
      { counter: RanchCounter, name: "Ranch", number: RanchNumber },
      { counter: BurgerCounter, name: "Burger", number: BurgerNumber },
      { counter: MustardCounter, name: "Mustard", number: MustardNumber },
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

    ExtraProteinCounters.forEach(function (item) {
      item.counter = 0;
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

    ExtraSaladCounters.forEach(function (item) {
      item.counter = 0;
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

    ExtraSauceCounters.forEach(function (item) {
      item.counter = 0;
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
      <p class="customizeSection__basketParag">Meal Deal with Drink and Brownie, Choice of Drink, ${
        lastDrinkDom !== undefined ? lastDrinkDom : ""
      }</p> 
    `;

    //* vertical div

    const verticalCardDiv = document.createElement("div");
    verticalCardDiv.classList.add("verticalCardDiv");
    itemCard.appendChild(verticalCardDiv);

    let VerticalitemHeading = itemHeading.cloneNode(true);
    let VerticalitemParag = itemParag.cloneNode(true);
    let VerticalitemPrice = itemPrice.cloneNode(true);
    let VerticalitemImg =
      event.target.parentNode.parentNode.children[0].cloneNode(true);
    VerticalitemImg.classList.add("verticalitemImg");
    itemCard.appendChild(VerticalitemImg);
    itemCard.insertBefore(VerticalitemImg, itemCard.firstChild);
    verticalCardDiv.appendChild(VerticalitemHeading);
    verticalCardDiv.appendChild(VerticalitemParag);
    verticalCardDiv.appendChild(VerticalitemPrice);
    VerticalitemImg.style.display = "none";
    verticalCardDiv.style.display = "none";

    //* vertical div

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

    let productCountCustomize = 1;

    itemCounterPlusBtn.addEventListener("click", function (event) {
      let newItemPrice = newItemPriceFloat;

      productCountCustomize = productCountCustomize + 1;

      console.log(
        event.target.parentNode.parentNode.children[5].children[1].innerText
      );

      event.target.parentNode.parentNode.children[5].children[1].innerText = `${productCountCustomize}`;

      newArr.push(newItemPrice);

      basket__itemList__totalPrice.innerText = `₤${(
        Math.round(newArr.reduce(getSum, 0) * 100) / 100
      ).toFixed(2)}`;
      menu__cart__itemCount.textContent = newArr.length;
      console.log(productCountCustomize);
      console.log(newArr);
    });

    /* minus */
    itemCounterMinusBtn.addEventListener("click", function (event) {
      let newItemPrice = newItemPriceFloat;

      if (productCountCustomize > 1) {
        //newArr.pop(newItemPrice);
        //console.log(newArr.indexOf(newItemPrice));
        let lastItem = newArr.indexOf(newItemPrice);
        basket__itemList__totalPrice.innerText = `₤${(
          Math.round(newArr.reduce(getSum, 0) * 100) / 100
        ).toFixed(2)}`;

        if (lastItem > -1) {
          newArr.splice(lastItem, 1);
        }
        productCountCustomize = productCountCustomize - 1;

        event.target.parentNode.parentNode.children[5].children[1].innerText = `${productCountCustomize}`;

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
        event.target.parentNode.parentNode.remove();
        //event.target.parentNode.parentNode.style.display = "none";
        basket__itemList__totalPrice.innerText = `₤${(
          Math.round(newArr.reduce(getSum, 0) * 100) / 100
        ).toFixed(2)}`;
        menu__cart__itemCount.textContent = newArr.length;
      }
      console.log(productCountCustomize);
      console.log(newArr);
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
  });
}

const checkoutBtnDom = document.querySelector(".basket__itemList--checkout");
const menuCartDom = document.querySelector(".menu__cart");

//! PAZAR ARABASI İKONUNA BASILMASIYLA BASKET KISMININ GÖRÜNÜR HALE GELMESİ
menuCartDom.addEventListener("click", function () {
  document.querySelector(".basket").style.transform = "translateX(0%)";
});

let paymentStatus = false;
//! ÖDEMENİN YAPILIP YAPILAMADIĞINI BELİRTEN BOOLEAN CİNSİNDEN DEĞERE SAHİP DEĞİŞKEN

//! BASKET KISMINDAKİ CHECKOUT BUTONUNA BASILDIĞINDA GERÇEKLEŞECEKLER
checkoutBtnDom.addEventListener("click", function (e) {
  if (newArr.length > 0) {
    document.querySelector(".basket__itemList--removeItemIcon").style.right =
      "0px";
    document.querySelector(".basket__itemList--removeItemIcon").style.left =
      "unset";
  }

  basket__itemList.classList.replace("basket__itemList", "checkout__itemList");
  document.querySelector(".basket__itemList__checkoutDiv").style.bottom =
    "0rem";
  document.querySelector(".basket__itemList__checkoutDiv").style.left =
    "-60rem";

  checkoutBtnDom.style.width = "45rem";
  menuCartDom.style.display = "none";
  document.querySelector(".checkoutCloseBtnDiv").style.display = "flex";

  document.querySelector(".checkout__itemList").classList.add("checkout");

  if (document.querySelector(".menu__heading").textContent === "Checkout") {
    if (paymentStatus) {
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

  //! Ödeme Başarılı div'ine tıklanırsa ortadan kaybolsun
  document
    .querySelector(".successPayment")
    .addEventListener("click", function () {
      document.querySelector(".menu").style.filter = "brightness(1)";
      document.querySelector(".successPayment").style.bottom = "-50%";
      document.querySelector(".successPayment").style.left = "50%";
      document.querySelector(".successPayment").style.transform =
        "translate(-50%, -50%)";
      document.querySelector(".successPayment").style.transform += "scale(0)";
    });

  //! Ödeme Başarısız div'ine tıklanırsa ortadan kaybolsun
  document
    .querySelector(".errorPayment")
    .addEventListener("click", function () {
      document.querySelector(".menu").style.filter = "brightness(1)";
      document.querySelector(".errorPayment").style.bottom = "-60%";
      document.querySelector(".errorPayment").style.left = "50%";
      document.querySelector(".errorPayment").style.transform =
        "translate(-50%, -50%)";
      document.querySelector(".errorPayment").style.transform += "scale(0)";
    });

  //! Checkout kısmına geçildiğinde Make Payment butonunun oluşması için gereken style eklemeleri
  checkoutBtnDom.textContent = `Make Payment`;
  checkoutBtnDom.style.backgroundColor = "#202326";
  checkoutBtnDom.style.color = "#fff";
  menu__heading.textContent = `Checkout`;
  checkoutBtnDom.style.padding = "1.5rem 13rem";

  //! butonun genişliğinin artması için içerisinde olan div'in genişliğini 100% haline getirdik.
  document.querySelector(".basket__itemList__checkoutDiv").style.width = "100%";

  //? Vertical Div'in Görünür hale gelmesi ve eski div düzeninin görünmez hale
  //? gelmesi için gerekenler Start

  document
    .querySelectorAll(".basket__itemList--itemCard")
    .forEach(function (item) {
      item.classList.add("checkout");
    });

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
      item.style.fontSize = "1.5rem";
    });

  document
    .querySelectorAll(".verticalCardDiv .basket__itemList--itemHeading")
    .forEach(function (item) {
      item.style.fontSize = "1.2rem";
    });

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

  //? Vertical Div End

  //! Ürünlerin ödeme kısmında görüntülenmesi için Ana sayfadaki elemanları yok ettik ve yerlerine
  //! sepetten getirdiğimiz ürünleri yerleştirdik.
  document.querySelector(".shop__menu").style.display = "none";
  document.querySelector(".shop__products").style.display = "none";
  basket.style.transform = "translateX(150%)";

  //! Ödeme kısmından Ana Sayfaya ulaşmamızı sağlayan CLOSE butonu
  document
    .querySelector(".checkoutCloseBtnDiv")
    .addEventListener("click", function () {
      if (newArr.length > 0) {
        document.querySelector(
          ".basket__itemList--removeItemIcon"
        ).style.right = "unset";
        document.querySelector(".basket__itemList--removeItemIcon").style.left =
          "0px";
      }

      document.querySelector(".basket__itemList__checkoutDiv").style.bottom =
        "6rem";
      document.querySelector(".basket__itemList__checkoutDiv").style.left =
        "50%";
      basket__itemList.classList.replace(
        "checkout__itemList",
        "basket__itemList"
      );
      menuCartDom.style.display = "flex";
      document.querySelector(".checkoutCloseBtnDiv").style.display = "none";
      checkoutBtnDom.style.width = "37rem";

      //? Vertical Div'den eski düzene geçilmesi için gereken değişiklikler Start

      document
        .querySelectorAll(".basket__itemList--itemCard")
        .forEach(function (item) {
          item.classList.remove("checkout");
        });

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
          item.style.fontSize = "1.5rem";
        });
      document
        .querySelectorAll(".verticalCardDiv .basket__itemList--itemHeading")
        .forEach(function (item) {
          item.style.fontSize = "1.5rem";
        });

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

      //? Vertical Div'den eski düzene geçilmesi için gereken değişiklikler End

      checkoutBtnDom.textContent = `Checkout`;
      checkoutBtnDom.style.backgroundColor = "#CBCFD3";
      checkoutBtnDom.style.color = "#202326";
      checkoutBtnDom.style.padding = "1.8rem 12rem";
      document.querySelector(".basket__itemList").classList.remove("checkout");
      menu__heading.textContent = `Kumpi Menu`;
      document.querySelector(".shop__menu").style.display = "block";
      document.querySelector(".shop__products").style.display = "block";
      shop.classList.remove("checkout");
      document.querySelector(".basket").appendChild(basket__itemList);
    });
  shop.classList.add("checkout");
  shop.appendChild(basket__itemList);
});

/* bu section içindeki herhangi bir item'a tıklanırsa selectItem fonksiyonu
devreye girsin */
shop__productSection.addEventListener("click", selectItem);
