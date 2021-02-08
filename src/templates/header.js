const Header = () => {
  const view = `
    <div class="header">
      <div class="container">
        <div class="header__container">
          <div class="header__title"><a href="">MySite</a></div>
          <div class="header__input">
            <input type="text" class="header__search" placeholder="Найти...">
            <a href="/#/searchPage"><i class="fas fa-search"></i></a>
          </div>
          <div class="header__nav">
            <a href="#/trash" class="nav__elements" id="trashHeader">Корзина( <i class="fas fa-shopping-cart"></i> )</a>
            <div class="nav__elements" id="signIn">Войти</div>
            <div class="nav__elements" id="regestration">Регистрация</div>
            <div class="nav__elements hidden" id="accout"></div>
            <div class="nav__elements hidden" id="exit">Выход</div>
          </div>
        </div>
      </div>
    </div>
  `;
  return view;
}

export default Header;