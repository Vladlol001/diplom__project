const Regestration = () => {
  const view = `
    <div class="regestration__window hidden">
      <div class="regestration__container">
          <form class="regestration__form">
            <div class="regestration__header">
              <div class="regestration__title">Регистрация</div>
              <i class="fas fa-times"></i>
            </div>
            <hr> 
            <label for="reg__fio">Имя и фамилия:</label><span></span>
            <input id="reg__fio" type="text" placeholder="Введите Имя и Фамилию полностью">
            <label for="reg__email">Email:</label>
            <input id="reg__email" type="email" placeholder="Введите ваш email (8 и более символов)">
            <label for="reg__password">Пароль:</label>
            <input id="reg__password" type="password" placeholder="Введите пароль(8 и более символов)">
            <label for="reg__again__password">Пароль:</label>
            <input id="reg__again__password" type="password" placeholder="Повторите пароль">

            <span class="regestration__footer">Нажимая  "Зарегистрироваться", Вы соглашаетесь с <a class="reg__rules" href="#">правилами сайта</a>.</span>

            <button class="reg__btn" type="submit">Зарегистрироваться</button>
          </form>
      </div>
    </div>
  `
  return view;
}

export default Regestration;