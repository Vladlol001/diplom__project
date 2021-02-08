const Authorization = () => {
  const view = `
    <div class="authorization__window hidden">
      <div class="authorization__container">
          <form class="authorization__form">
            <div class="authorization__header">
              <div class="authorization__title">Авторизация</div>
              <i class="fas fa-times"></i>
            </div>
            <hr> 
            <label for="auth__email">Email:</label>
            <input id="auth__email" type="email" placeholder="Введите ваш email">
            <label for="auth__password">Пароль:</label>
            <input id="auth__password" type="password" placeholder="Введите ваш пароль">

            <button class="auth__btn" type="submit">Войти</button>
          </form>
      </div>
    </div>
  `
  return view;
}

export default Authorization;