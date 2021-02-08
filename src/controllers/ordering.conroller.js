import view from '../view/Ordering.js';

const newProduct = (item) => {
  const newProductblock = `
    <div class="ordering__product">
      <div class="ordering__product__name">${item.dataset.title}</div>
      <div class="ordering__product__price">${item.dataset.price}</div>
    </div>
  `
  return newProductblock;
}

const dontHaveElement = (divElement) => {
  divElement.innerHTML = `
  <div class="mini__container">
    <div class="emptyItem">Авторизуйтесь или Зарегистрируйтесь</div>
    <a href=" " class="back__to__shoes2"><i class="fas fa-arrow-right"></i>Назад к главной<i class="fas fa-arrow-left"></i></a>
  </div>
  `
  return divElement;
}

const checkout = (divElement) => {
  let orderingBtn = divElement.querySelector('.ordering__accept');

  orderingBtn.addEventListener('click', () => {
    let orderingSizeCount = divElement.querySelector('#ordering__size__count').value;
    let acceptWindow = divElement.querySelector('.accept__window');
    if(orderingSizeCount == '')
      alert('Введите Размер кроссовок');
    else
      acceptWindow.classList.remove('hidden');
  })  
}

export default () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = view();

  let priceForAllShoes = divElement.querySelector('.ordering__product__allPrice');

  let authPesonName = localStorage.getItem('AuthPersonName');
  let authPesonEmail = localStorage.getItem('AuthPersonEmail');
  if(authPesonName == '' || authPesonEmail == ''){
    dontHaveElement(divElement);
    return divElement;
  }else{
    let orderingName = divElement.querySelector('.ordering__name');
    let orderingEmail = divElement.querySelector('.ordering__email');
    orderingName.innerHTML = `Ваше имя: ${authPesonName}`;
    orderingEmail.innerHTML = `Ваш email: ${authPesonEmail}`;
  
  
    let storg = localStorage.getItem('image').split('>,');
    let allPrice = 0;
  
    storg.forEach((el) => {
      let emptyDiv = document.createElement('div');
      let newDiv = document.createElement('div');
      el = el + '>';
      emptyDiv.innerHTML = el;
      if(emptyDiv.innerHTML != '&gt;'){
        let lastitem = divElement.querySelector('.last__item');
        newDiv.innerHTML = newProduct(emptyDiv.firstElementChild);
        lastitem.before(newDiv);
        allPrice += parseInt(emptyDiv.firstElementChild.dataset.price)
      }
    })
    priceForAllShoes.innerHTML = `${allPrice} BYN`; 
    checkout(divElement);
    return divElement;
  }
}