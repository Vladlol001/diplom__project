import view from '../view/Shoes.js';
import regeneratorRuntime from "regenerator-runtime";

const getShoes = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

const goUp = (element) => {
  window.scrollTo({
    top: element,
    behavior: 'smooth'
  })
}

const shoesPair = (pair) => {
  const shoes = `
    <div class="shoes__pairs">
      <p class="for__img">
        <img src="${pair.main_photo}" data-price="${pair.price}" data-title="${pair.title}" data-materials="${pair.materials}" data-color="${pair.color}" data-country="${pair.country}" alt="${pair.alt}">
      </p>
      <div class="shoes__title">
        <span class="shoes__name">${pair.title}</span>
        <span class="shoes__price">${pair.price}</span>
      </div>
      <div class="shoes__bucket">
        <a href="#/trash">Добавить в корзину</a>
      </div>
    </div> 
  `
  return shoes;
} 

const pairDescription = (pair) => {
  const shoesDesc = `
    <div class="shoes__description__block">
      <div class="shoes__mainImg">
        <img src="${pair.main_photo}">
      </div>
      <div class="shoes__secondaryImg">
      <img src="${pair.second_photo}">
      <img src="${pair.third_photo}">
      <img src="${pair.fourth_photo}">
      </div>
    </div>
    <div class="shoes__description__block2">
      <div class="shoes__description__title">${pair.title}</div>
      <div class="shoes__description__price">Цена: ${pair.price}</div>
      <div class="shoes__description__materials">Материалы: ${pair.materials}</div>
      <div class="shoes__description__color">Цвет: ${pair.color}</div>
      <div class="shoes__description__country">Страна: ${pair.country}</div>
    </div>
  `
  return shoesDesc;
} 

const descPhoto = (divElement) => {
  let shoesMainImg = divElement.querySelector('.shoes__mainImg');
  let shoesSecondaryImg = divElement.querySelector('.shoes__secondaryImg');

  shoesSecondaryImg.addEventListener('click', (e) => {
    if(e.target.tagName === 'IMG'){
      let targetElement = e.target;
      targetElement.before(shoesMainImg.firstElementChild);
      shoesMainImg.innerHTML = '';
      shoesMainImg.appendChild(targetElement);
    }
  })
}

let storg = [];

const trashBucket = (divElement) => {
  let shoesBucket = divElement.querySelectorAll('.shoes__bucket');

  shoesBucket.forEach((el) => {
    if(localStorage.getItem('image'))
      storg = localStorage.getItem('image').split('> ');
    el.addEventListener('click', (e) => {
      let parent = el.parentElement;
      let img = parent.firstElementChild;
      if(e.target.innerText === 'Добавить в корзину'){
        e.preventDefault();
        storg.push(img.innerHTML.trim());
        localStorage.setItem('image', storg);
        e.target.innerText = 'Перейти в корзину'
      }else{
        e.target.innerText = 'Добавить в корзину'
      }
    })
  })
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

const Shoes = async (url) => {
  const divElement = document.createElement('div');
  divElement.innerHTML = view();

  let shoesContainer = divElement.querySelector('.shoes__container');


  if(url == 'http://localhost:3006/newBalanceShoes'){
    dontHaveElement(divElement);
    return divElement;
  }else{
    const pairs = await getShoes(url);
    let getSearch = localStorage.getItem('search');
    pairs.forEach((pair) => {
      if(url == 'http://localhost:3006/allShoes'){
        if(pair.title.indexOf(getSearch) != -1)
          shoesContainer.innerHTML += shoesPair(pair);
      }else
        shoesContainer.innerHTML += shoesPair(pair);
    });
    if(shoesContainer.childElementCount == 0)
          dontHaveElement(divElement);
    let shoesDescriptionContainer = divElement.querySelector('.shoes__description__container');
    let pairOfShoes = divElement.querySelectorAll('.for__img');
    let shoesDiscription = divElement.querySelector('.shoes__discription');
    pairOfShoes.forEach((el) => {
      el.addEventListener('click', (e) => {
        pairs.forEach((pair) => {
          if(e.target.dataset.title == pair.title){
            shoesDiscription.classList.remove('hidden');
            shoesDescriptionContainer.innerHTML = pairDescription(pair);
            goUp(shoesDiscription.offsetTop);
            descPhoto(divElement);
          }
        })
      })
    })
    trashBucket(divElement);
    return divElement;
  }
}

export { Shoes, trashBucket }