const Ordering = () => {
  const view = `
    <div class="accept__window hidden">
      <div class="accept__container">
        <div class="mini__container">
          <div class="emptyItem">Спасибо за заказ!</div>
          <a href=" " class="back__to__shoes2"><i class="fas fa-arrow-right"></i>Назад к главной<i class="fas fa-arrow-left"></i></a>
        </div>
      </div>
    </div>
    <div class="ordering ">
      <div class="container">
        <h3 class="ordering__title">Оформление заказа</h3>
        <div class="ordering__container">
          <div class="ordering__personal__information">
            <div class="ordering__name">Name:</div>
            <div class="ordering__email">Email:</div>
            <div class="ordering__size">
              <label for="ordering__size__count">Ваш размер: </label>
              <input list="ordering__sizes" id="ordering__size__count">
              <datalist id="ordering__sizes">
                <option value="40">
                <option value="41">
                <option value="42">
                <option value="43">
              </datalist>
            </div>
          </div>
          <div class="ordering__product__information">
            <div class="ordering__product">
              <div class="ordering__product__name">Товар</div>
              <div class="ordering__product__price">Стоимость</div>
            </div>
            <div class="ordering__product last__item">
              <div class="ordering__product__name">Итого</div>
              <div class="ordering__product__allPrice">234 BYN</div>
            </div>
          </div>
        </div>
        <span class="payment">Оплата наличными или банковской картой в нашем магазине</span>
        <div class="ordering__accept">Подтвердить заказ</div>
      </div>
    </div>
  `;
  return view;
}

export default Ordering;