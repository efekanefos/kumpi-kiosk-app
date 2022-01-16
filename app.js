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

fetch("https://wizioapi.com/touchscreen/kumpi/public/getCategories")
  .then((response) => response.json())
  .then((data) => {
    let html = "";
    data.forEach(function (item) {
      let htmlSegment = `
      <li class="shop__menuListItem">
              <span id=${item.id} class="shop__listText">${item.name}</span>
            </li>
      `;
      html += htmlSegment;
    });

    document.querySelector(".shop__menuList").innerHTML = html;
    list.children[0].classList.add("active");
  });
/* Menu List */

const list = document.querySelector(".shop__menuList");

fetch(
  `https://wizioapi.com/touchscreen/kumpi/public/getCategoryItems/OPAKOQNIBN6EO34HYL4YXKNI`
)
  .then((response) => response.json())
  .then((data) => {
    let card = "";
    data.forEach(function (item) {
      let cardSegment = `
      <div id=${item.id} class="shop__productSection--card">
  <img class="shop__productSection--image" src="${item.imageUrl}" />
  <h1 class="shop__productSection--cardHeading">${item.name}</h1>
  <p class="shop__productSection--cardParag">${
    item.description === null ? "No Description" : item.description
  }</p>
  <p class="shop__productSection--cardPrice">&#8356;${
    item.price / (100).toFixed(2).slice(0, -3)
  }</p>
  
  </div>
      `;
      card += cardSegment;
    });

    shop__productSection.innerHTML = card;
  });

list.addEventListener("click", activeFunction);

function activeFunction(event) {
  //* .active class'ına sahip olan elementi bul ve ondaki active class'ını sil!
  document.querySelector(".active").classList.remove("active");
  //* üzerine tıklanmış olan elemente .active class'ını ekle!
  event.target.classList.add("active");
  //let activeOne = event.target.children[0];
  console.log(event.target.children[0]);
  fetch(
    `https://wizioapi.com/touchscreen/kumpi/public/getCategoryItems/${event.target.children[0].id}`
  )
    .then((response) => response.json())
    .then((data) => {
      let card = "";
      data.forEach(function (item) {
        console.log("itemId:", item.modifierLists[0].id);
        let cardSegment = `
        <div id=${item.modifierLists[0].id}  class="shop__productSection--card">
    <img id=${
      event.target.children[0].id
    } class="shop__productSection--image" src="${item.imageUrl}" />
    <h1 id=${item.id} class="shop__productSection--cardHeading">${
          item.name
        }</h1>
    <p class="shop__productSection--cardParag">${
      item.description === null ? "No Description" : item.description
    }</p>
    <p class="shop__productSection--cardPrice">&#8356;${
      item.price / (100).toFixed(2).slice(0, -3)
    }</p>
    
    </div>
        `;
        card += cardSegment;
      });

      shop__productSection.innerHTML = card;
    });
}

//! Ürünler Arrayîndeki verileri kullanarak grid yapısında ürünlerimizi sıraladık.

//? Ürüne tıkladığımızda gelen seçim ekranın kapanmasını sağlayan ikonun fonksiyonu
cartSection__closeIcon.addEventListener("click", function () {
  cartSection.style.transform = "translateY(100%)";
  //* Section'ın kaybolması
  cartSection__closeIcon.style.transform = "translateY(-300%)";
  cartSection__closeIcon.style.transform += "translate(-50%, -50%)";
  //* X ikonun kaybolması
  /*
  cartSection__leftBtn.style.transform = "translateX(-300%)";
  cartSection__rightBtn.style.transform = "translateX(300%)";
  */
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
    /*
    console.log(
      event.target.parentNode.parentNode.parentNode.parentNode.children[0]
        .children[0]
    );
*/
    console.log(event.target.parentNode.children[0].id);

    /* seçilen item'ın verilerini cartSection üzerinde display ediyoruz. */
    cartSection.innerHTML = `
<img class="cartSection__Img" id=${event.target.parentNode.children[0].id} src="${event.target.parentNode.children[0].src}"/>
<h1 id=${event.target.parentNode.id} class="cartSection__Heading">${event.target.parentNode.children[1].textContent}</h1>
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
  itemArray.push(event.target.parentNode.parentNode.children[1].innerText);
  console.log(itemArray);
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
  basket.style.right = "0rem";

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
  basket.style.right = "-60rem";
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
  RemoveHeading.textContent = `Extra Protein`;
  MainItemDiv.appendChild(RemoveHeading);

  /* Remove Elements Parag */
  let RemoveParag = document.createElement("p");
  RemoveParag.classList.add("MainItemDiv__RemoveParag");
  RemoveParag.textContent = `Choose what you remove`;
  MainItemDiv.appendChild(RemoveParag);

  /* item id'sini alma item'in heading'inde duruyor */
  console.log(event.target.parentNode.parentNode.children[0].id);

  fetch(
    `https://wizioapi.com/touchscreen/kumpi/public/getCategoryItems/${event.target.parentNode.parentNode.children[0].id}`
  )
    .then((response) => response.json())
    .then((data) => {
      let list = "";
      data[0].modifierLists[0].modifiers.forEach(function (item) {
        let listSegment = `
        <li id=${item.id} class="ExtraProteinDiv__ExtraProteinListItem">
        <div id="${
          item.id
        }" class="IngridientsDiv__IngridientsListItem--btn empty"></div>
    
    <span class="ExtraProteinDiv__Text">${item.name}</span>
    <span class="ExtraProteinDiv__Price">+&#8356;${
      item.price / (100).toFixed(2).slice(0, -3)
    }</span>
    </li>
        `;
        list += listSegment;
      });

      ExtraProteinList.innerHTML = list;

      let ProteinArray = [];

      /* Butonları ayarlama kısmı */
      let customizeFullBtn = document.querySelectorAll(
        ".ExtraProteinDiv__ExtraProteinList li"
      );
      customizeFullBtn.forEach((el) => {
        el.addEventListener("click", function (e) {
          el.children[0].classList.toggle("empty");

          let newIndexName = e.target.id;

          let lastItem = ProteinArray.indexOf(newIndexName);
          if (ProteinArray.includes(newIndexName)) {
            if (lastItem > -1) {
              ProteinArray.splice(lastItem, 1);
            }
          } else {
            ProteinArray.push(newIndexName);
          }
        });
      });
    });

  /*
   */

  /* Extra Protein listesi div'i */

  let ExtraProteinDiv = document.createElement("div");
  ExtraProteinDiv.classList.add("ExtraProteinDiv");
  MainItemDiv.appendChild(ExtraProteinDiv);

  /* Extra Protein listesinin kendisi */

  let ExtraProteinList = document.createElement("ul");
  ExtraProteinList.classList.add("ExtraProteinDiv__ExtraProteinList");
  ExtraProteinDiv.appendChild(ExtraProteinList);

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
      case `Extra Protein`:
        ExtraProteinDiv.style.transform = "translateY(150%)"; /* -150 */
        ExtraSaladDiv.style.transform = "translateY(-123%)"; /* -275 */
        ExtraSauceDiv.style.transform = "translateY(0%)";
        RemoveHeading.textContent = `Go for Meals`;
        RemoveParag.textContent = `Choose what you want`;
        break;
      case `Go for Meals`:
        ExtraProteinDiv.style.transform = "translateY(150%)";
        ExtraSaladDiv.style.transform = "translateY(150%)"; /* 275 */
        ExtraSauceDiv.style.transform = "translateY(-225%)";
        RemoveHeading.textContent = `Salads & Vegetables`;

        break;
      case `Salads & Vegetables`:
        ExtraProteinDiv.style.transform = "translateY(150%)";
        ExtraSaladDiv.style.transform = "translateY(150%)";
        ExtraSauceDiv.style.transform = "translateY(150%)";
        ExtraDealDiv.style.transform = "translateY(-162rem)";
        RemoveHeading.textContent = `Sauces`;

        break;
      case `Sauces`:
        ExtraProteinDiv.style.transform = "translateY(150%)";
        ExtraSaladDiv.style.transform = "translateY(150%)";
        ExtraSauceDiv.style.transform = "translateY(150%)";
        ExtraDealDiv.style.transform = "translateY(150%)"; /* -3700% */
        ExtraPotatoDiv.style.transform = "translateY(-200rem)";
        RemoveHeading.textContent = `Your Potato`;

        break;
      case `Your Potato`:
        ExtraProteinDiv.style.transform = "translateY(150%)";
        ExtraSaladDiv.style.transform = "translateY(150%)";
        ExtraSauceDiv.style.transform = "translateY(150%)";
        ExtraDealDiv.style.transform = "translateY(150%)";
        ExtraPotatoDiv.style.transform = "translateY(150%)";
        ExtraToppersDiv.style.transform = "translateY(-230rem)";
        RemoveHeading.textContent = `Toppers`;

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
        ExtraProteinDiv.style.transform = "translateY(0%)";
        ExtraSaladDiv.style.transform = "translateY(0%)";
        RemoveHeading.textContent = `Remove Elements`;
        RemoveParag.textContent = `Choose what you want`;
        break;
      case `Add Extra Salads and Vegetables`:
        ExtraProteinDiv.style.transform = "translateY(-128%)";
        ExtraSaladDiv.style.transform = "translateY(0%)";
        RemoveHeading.textContent = `Add Extra Protein`;
        RemoveParag.textContent = `Choose up to 3`;
        break;
      case `Add Extra Sauce`:
        ExtraProteinDiv.style.transform = "translateY(0%)";
        ExtraSaladDiv.style.transform = "translateY(-240%)";
        ExtraSauceDiv.style.transform = "translateY(0%)";
        RemoveHeading.textContent = `Add Extra Salads and Vegetables`;
        RemoveParag.textContent = `Choose up to 3`;
        break;

      case `Make Deal with Drink and Brownie`:
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

  /* Add Extra Salads and Vegetables Array */

  fetch(
    `https://wizioapi.com/touchscreen/kumpi/public/getCategoryItems/T3EBX67GHEACO7F4L3BD5363`
  )
    .then((response) => response.json())
    .then((data) => {
      let list = "";
      data[0].modifierLists[1].modifiers.forEach(function (item) {
        let listSegment = `
        <li id=${item.id} class="ExtraProteinDiv__ExtraProteinListItem">
        <div id="${
          item.id
        }" class="IngridientsDiv__IngridientsListItem--btn empty"></div>
    <span class="ExtraProteinDiv__Text">${item.name}</span>
    <span class="ExtraProteinDiv__Price">+&#8356;${
      item.price / (100).toFixed(2).slice(0, -3)
    }</span>
    </li>
        `;
        list += listSegment;
      });

      ExtraSaladList.innerHTML = list;

      let MealsArray = [];

      let customizeFullBtn = document.querySelectorAll(
        ".ExtraSaladDiv__ExtraSaladList  li"
      );
      customizeFullBtn.forEach((el) => {
        el.addEventListener("click", function (e) {
          el.children[0].classList.toggle("empty");

          let newIndexName = e.target.id;
          console.log(newIndexName);
          console.log(MealsArray);

          let lastItem = MealsArray.indexOf(newIndexName);
          if (MealsArray.includes(newIndexName)) {
            if (lastItem > -1) {
              MealsArray.splice(lastItem, 1);
              console.log(MealsArray);
            }
          } else {
            MealsArray.push(newIndexName);
            console.log(MealsArray);
          }
        });
      });
    });

  /* Add Extra Salads and Vegetables listesi div'i */
  let ExtraSaladDiv = document.createElement("div");
  ExtraSaladDiv.classList.add("ExtraSaladDiv");
  MainItemDiv.appendChild(ExtraSaladDiv);

  /* Add Extra Salads and Vegetables listesinin kendisi */
  let ExtraSaladList = document.createElement("ul");
  ExtraSaladList.classList.add("ExtraSaladDiv__ExtraSaladList");
  ExtraSaladDiv.appendChild(ExtraSaladList);

  fetch(
    `https://wizioapi.com/touchscreen/kumpi/public/getCategoryItems/T3EBX67GHEACO7F4L3BD5363`
  )
    .then((response) => response.json())
    .then((data) => {
      let list = "";
      data[0].modifierLists[2].modifiers.forEach(function (item) {
        let listSegment = `
        <li id=${item.id} class="ExtraProteinDiv__ExtraProteinListItem">
        <div id="${
          item.id
        }" class="IngridientsDiv__IngridientsListItem--btn empty"></div>
    <span class="ExtraProteinDiv__Text">${item.name}</span>
    <span class="ExtraProteinDiv__Price">+&#8356;${
      item.price / (100).toFixed(2).slice(0, -3)
    }</span>
    </li>
        `;
        list += listSegment;
      });

      ExtraSauceList.innerHTML = list;

      let SauceArray = [];

      let customizeFullBtn = document.querySelectorAll(
        ".ExtraSauceDiv__ExtraSauceList  li"
      );
      customizeFullBtn.forEach((el) => {
        el.addEventListener("click", function (e) {
          el.children[0].classList.toggle("empty");

          let newIndexName = e.target.id;
          console.log(newIndexName);
          console.log(SauceArray);

          let lastItem = SauceArray.indexOf(newIndexName);
          if (SauceArray.includes(newIndexName)) {
            if (lastItem > -1) {
              SauceArray.splice(lastItem, 1);
              console.log(SauceArray);
            }
          } else {
            SauceArray.push(newIndexName);
            console.log(SauceArray);
          }
        });
      });
    });

  /* Add Extra Sauce listesi div'i */
  let ExtraSauceDiv = document.createElement("div");
  ExtraSauceDiv.classList.add("ExtraSauceDiv");
  MainItemDiv.appendChild(ExtraSauceDiv);

  /* Add Extra Sauce listesinin kendisi */
  let ExtraSauceList = document.createElement("ul");
  ExtraSauceList.classList.add("ExtraSauceDiv__ExtraSauceList");
  ExtraSauceDiv.appendChild(ExtraSauceList);

  /* liste elemanlarının liste içerisine eklenmesi */

  /* Make Deal with Drink and Brownie Array */

  fetch(
    `https://wizioapi.com/touchscreen/kumpi/public/getCategoryItems/T3EBX67GHEACO7F4L3BD5363`
  )
    .then((response) => response.json())
    .then((data) => {
      let list = "";
      data[0].modifierLists[3].modifiers.forEach(function (item) {
        let listSegment = `
        <li id=${item.id} class="ExtraProteinDiv__ExtraProteinListItem">
        <div id="${
          item.id
        }" class="IngridientsDiv__IngridientsListItem--btn empty"></div>
    <span class="ExtraProteinDiv__Text">${item.name}</span>
    <span class="ExtraProteinDiv__Price">+&#8356;${
      item.price / (100).toFixed(2).slice(0, -3)
    }</span>
    </li>
        `;
        list += listSegment;
      });

      ExtraDealList.innerHTML = list;

      let DealArray = [];

      let customizeFullBtn = document.querySelectorAll(
        ".ExtraDealDiv__ExtraDealList  li"
      );
      customizeFullBtn.forEach((el) => {
        el.addEventListener("click", function (e) {
          el.children[0].classList.toggle("empty");

          let newIndexName = e.target.id;
          console.log(newIndexName);
          console.log(DealArray);

          let lastItem = DealArray.indexOf(newIndexName);
          if (DealArray.includes(newIndexName)) {
            if (lastItem > -1) {
              DealArray.splice(lastItem, 1);
              console.log(DealArray);
            }
          } else {
            DealArray.push(newIndexName);
            console.log(DealArray);
          }
        });
      });
    });

  /* Add Extra Deal listesi div'i */
  let ExtraDealDiv = document.createElement("div");
  ExtraDealDiv.classList.add("ExtraDealDiv");
  MainItemDiv.appendChild(ExtraDealDiv);

  /* Add Extra Deal listesinin kendisi */
  let ExtraDealList = document.createElement("ul");
  ExtraDealList.classList.add("ExtraDealDiv__ExtraDealList");
  ExtraDealDiv.appendChild(ExtraDealList);

  fetch(
    `https://wizioapi.com/touchscreen/kumpi/public/getCategoryItems/T3EBX67GHEACO7F4L3BD5363`
  )
    .then((response) => response.json())
    .then((data) => {
      let list = "";
      data[0].modifierLists[4].modifiers.forEach(function (item) {
        let listSegment = `
        <li id=${item.id} class="ExtraPotatoDiv__ExtraPotatoListItem">
        <div id="${
          item.id
        }" class="IngridientsDiv__IngridientsListItem--btn empty"></div>
    <span class="ExtraPotatoDiv__Text">${item.name}</span>
    <span class="ExtraPotatoDiv__Price">+&#8356;${
      item.price / (100).toFixed(2).slice(0, -3)
    }</span>
    </li>
        `;
        list += listSegment;
      });

      ExtraPotatoList.innerHTML = list;

      let PotatoArray = [];

      let customizeFullBtn = document.querySelectorAll(
        ".ExtraPotatoDiv__ExtraPotatoList  li"
      );
      customizeFullBtn.forEach((el) => {
        el.addEventListener("click", function (e) {
          el.children[0].classList.toggle("empty");

          let newIndexName = e.target.id;
          console.log(newIndexName);
          console.log(PotatoArray);

          let lastItem = PotatoArray.indexOf(newIndexName);
          if (PotatoArray.includes(newIndexName)) {
            if (lastItem > -1) {
              PotatoArray.splice(lastItem, 1);
              console.log(PotatoArray);
            }
          } else {
            PotatoArray.push(newIndexName);
            console.log(PotatoArray);
          }
        });
      });
    });

  /* Add Extra Potato listesi div'i */
  let ExtraPotatoDiv = document.createElement("div");
  ExtraPotatoDiv.classList.add("ExtraPotatoDiv");
  MainItemDiv.appendChild(ExtraPotatoDiv);

  /* Add Extra Potato listesinin kendisi */
  let ExtraPotatoList = document.createElement("ul");
  ExtraPotatoList.classList.add("ExtraPotatoDiv__ExtraPotatoList");
  ExtraPotatoDiv.appendChild(ExtraPotatoList);

  fetch(
    `https://wizioapi.com/touchscreen/kumpi/public/getCategoryItems/T3EBX67GHEACO7F4L3BD5363`
  )
    .then((response) => response.json())
    .then((data) => {
      let list = "";
      data[0].modifierLists[5].modifiers.forEach(function (item) {
        let listSegment = `
        <li id=${item.id} class="ExtraToppersDiv__ExtraToppersListItem">
        <div id="${
          item.id
        }" class="IngridientsDiv__IngridientsListItem--btn empty"></div>
    <span class="ExtraToppersDiv__Text">${item.name}</span>
    <span class="ExtraToppersDiv__Price">+&#8356;${
      item.price / (100).toFixed(2).slice(0, -3)
    }</span>
    </li>
        `;
        list += listSegment;
      });

      ExtraToppersList.innerHTML = list;

      let ToppersArray = [];

      let customizeFullBtn = document.querySelectorAll(
        ".ExtraToppersDiv__ExtraToppersList  li"
      );
      customizeFullBtn.forEach((el) => {
        el.addEventListener("click", function (e) {
          el.children[0].classList.toggle("empty");

          let newIndexName = e.target.id;
          console.log(newIndexName);
          console.log(ToppersArray);

          let lastItem = ToppersArray.indexOf(newIndexName);
          if (ToppersArray.includes(newIndexName)) {
            if (lastItem > -1) {
              ToppersArray.splice(lastItem, 1);
              console.log(ToppersArray);
            }
          } else {
            ToppersArray.push(newIndexName);
            console.log(ToppersArray);
          }
        });
      });
    });

  /* Add Extra Toppers listesi div'i */
  let ExtraToppersDiv = document.createElement("div");
  ExtraToppersDiv.classList.add("ExtraToppersDiv");
  MainItemDiv.appendChild(ExtraToppersDiv);

  /* Add Extra Toppers listesinin kendisi */
  let ExtraToppersList = document.createElement("ul");
  ExtraToppersList.classList.add("ExtraToppersDiv__ExtraToppersList");
  ExtraToppersDiv.appendChild(ExtraToppersList);

  /* liste elemanlarının liste içerisine eklenmesi */

  let checkOutDOM = document.querySelector(".MainItemDiv__AddBasketBtn");
  checkOutDOM.addEventListener("click", function (event) {
    menu__heading.textContent = `Basket`;
    let ExtraProteinTotalPrice = 0;

    let ExtraSaladTotalPrice = 0;

    let ExtraSauceTotalPrice = 0;

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

    ExtraProteinDiv.style.transform = "translateY(0%)";
    ExtraSaladDiv.style.transform = "translateY(0%)";
    ExtraSauceDiv.style.transform = "translateY(0%)";
    ExtraDealDiv.style.transform = "translateY(0%)";
    ExtraPotatoDiv.style.transform = "translateY(0%)";
    ExtraToppersDiv.style.transform = "translateY(0%)";
    RemoveHeading.textContent = `Extra Protein`;

    customizeSection.firstElementChild.remove();
    BtnsDiv.style.display = "flex";

    let ExtraProteinBasketArray = [];
    let ExtraSaladBasketArray = [];
    let ExtraSauceBasketArray = [];

    //? PROTEIN SECTION

    //*IngridientsArray

    itemParag.innerHTML = `
    <h1 class="customizeSection__basketHeading" >Add Extra Protein (£${ExtraProteinTotalPrice})</h1>
    <p>${ExtraProteinBasketArray.join(", ")}</p>
      <h1 class="customizeSection__basketHeading">Add Extra Salads and Vegetables (£${ExtraSaladTotalPrice})</h1>
      <p>${ExtraSaladBasketArray.join(", ")}</p>
      <h1 class="customizeSection__basketHeading">Add Extra Sauce (£${ExtraSauceTotalPrice})</h1>
      <p>${ExtraSauceBasketArray.join(", ")}</p>
     
      
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
    basket.style.right = "0rem";

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
  document.querySelector(".basket").style.right = "0rem";
});

let paymentStatus = true;
//! ÖDEMENİN YAPILIP YAPILAMADIĞINI BELİRTEN BOOLEAN CİNSİNDEN DEĞERE SAHİP DEĞİŞKEN

//! BASKET KISMINDAKİ CHECKOUT BUTONUNA BASILDIĞINDA GERÇEKLEŞECEKLER
checkoutBtnDom.addEventListener("click", function (e) {
  if (newArr.length > 0) {
    document
      .querySelectorAll(".basket__itemList--removeItemIcon")
      .forEach(function (item) {
        item.style.right = "0px";
        item.style.left = "unset";
      });
  }

  document.querySelector(".errorPayment").style.opacity = "1";
  document.querySelector(".errorPayment").style.display = "block";

  basket__itemList.classList.replace("basket__itemList", "checkout__itemList");
  document.querySelector(".basket__itemList__checkoutDiv").style.bottom =
    "4rem";
  document.querySelector(".basket__itemList__checkoutDiv").style.left =
    "-39.5rem";

  checkoutBtnDom.style.width = "45rem";
  menuCartDom.style.display = "none";
  document.querySelector(".checkoutCloseBtnDiv").style.display = "flex";

  document.querySelector(".checkout__itemList").classList.add("checkout");

  if (document.querySelector(".menu__heading").textContent === "Checkout") {
    if (paymentStatus) {
      document.querySelector(".menu").style.filter = "brightness(0.5)";
      document.querySelector(".successPayment").style.filter = "brightness(1)";
      document.querySelector(".successPayment").style.bottom = "25%";
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
  /*
  document
    .querySelector(".successPayment")
    .addEventListener("click", function () {
      document.querySelector(".menu").style.filter = "brightness(1)";
      document.querySelector(".successPayment").style.bottom = "-50%";
      document.querySelector(".successPayment").style.left = "50%";
      document.querySelector(".successPayment").style.transform =
        "translate(-50%, -50%)";
    });
    */

  //! Ödeme Başarısız div'ine tıklanırsa ortadan kaybolsun

  document
    .querySelector(".errorPayment__cancelOrderBtn")
    .addEventListener("click", function () {
      document.querySelector(".menu").style.filter = "brightness(1)";
      document.querySelector(".errorPayment").style.bottom = "100%";
      document.querySelector(".errorPayment").style.left = "50%";
      document.querySelector(".errorPayment").style.transform =
        "translate(-50%, -50%)";
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
  basket.style.right = "-60rem";

  //! Ödeme kısmından Ana Sayfaya ulaşmamızı sağlayan CLOSE butonu
  document
    .querySelector(".checkoutCloseBtnDiv")
    .addEventListener("click", function () {
      if (newArr.length > 0) {
        document
          .querySelectorAll(".basket__itemList--removeItemIcon")
          .forEach(function (item) {
            item.style.right = "unset";
            item.style.left = "0px";
          });
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
