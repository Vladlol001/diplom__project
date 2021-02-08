import view from '../view/Trash.js';

const blockForTrash = (doc,item) => {
  doc.innerHTML += `
    <div class="trash__block">
      <div class="trash__item">
        <img src="${item.src}" data-price="${item.dataset.price}" data-title="${item.dataset.title}" data-materials="${item.dataset.materials}" data-color="${item.dataset.color}" data-country="${item.dataset.country}" alt="${item.alt}">
        <div class="shoes__name">${item.dataset.title}</div>
        <div class="shoes__price">${item.dataset.price}</div>
      </div>
      <div class="trash__close">
        <i class="fas fa-times"></i>
      </div>
    </div> 
    `
}

const allPrice = (divElement) => {
  let trashItem = divElement.querySelectorAll('.trash__item img');
  let priceCount = 0;
  trashItem.forEach((el) => {
    priceCount += parseInt(el.dataset.price);
  })
  return priceCount;
}

const deleteItem = (divElement) => {
  let trashClose = divElement.querySelectorAll('.trash__close');
  let allPrices = divElement.querySelector('.all__price');

  trashClose.forEach((el) => {
    el.addEventListener('click', () => {
      el.parentElement.remove();
      let trashImg = divElement.querySelectorAll('.trash__item img');
      let allElem = '';
      trashImg.forEach(elem => {
        allElem += elem.outerHTML + ',';
      })
      if(trashImg.length == 0)
        dontHaveElement(divElement)
      localStorage.setItem('image', allElem);
      allPrices.innerHTML = allPrice(divElement);
    })
  })
}

const itogValue = (trashContainer, divElement) => {
  let trashFooter = document.createElement('div');
  if(trashFooter.childElementCount == 0){
    trashFooter.innerHTML = '';
  }
  if(trashFooter.childElementCount == 0){
    trashFooter.className = 'trash__footer';
    trashFooter.innerHTML = `
        <div class="trash__itog">Итого: <span class="all__price">${allPrice(divElement)}</span> BYN</div>
        <a href="#/ordering" class="trash__btn">Оформить заказ</a>
      `;
      trashContainer.appendChild(trashFooter);
  }
}

const dontHaveElement = (divElement) => {
  divElement.innerHTML = `
  <div class="mini__container">
    <div class="emptyItem">Нет товаров</div>
    <a href=" " class="back__to__shoes2"><i class="fas fa-arrow-right"></i>Назад к главной<i class="fas fa-arrow-left"></i></a>
  </div>
  `
  return divElement;
}

export default () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = view();
  let trashContainer = divElement.querySelector('.trash__container');
  
  let storg = localStorage.getItem('image').split('>,');
  if(storg.length <= 1){
    dontHaveElement(divElement);
    return divElement;
  }else{
    storg.forEach((el) => {
      let emptyDiv = document.createElement('div');
      el = el + '>';
      emptyDiv.innerHTML = el;
      if(emptyDiv.innerHTML != '&gt;')
        blockForTrash(trashContainer, emptyDiv.firstElementChild);
    })
    itogValue(trashContainer, divElement);
    deleteItem(divElement);
    
    return divElement;
  }
}
