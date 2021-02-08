const authConroller = () => {
  let regestrationMainPage = document.querySelector('#regestration');
  let accout = document.querySelector('#accout');
  let exit = document.querySelector('#exit');
  let signIn = document.querySelector('#signIn');
  let authorizationWindow = document.querySelector('.authorization__window');
  let closeAuthWindow = document.querySelector('.authorization__header .fa-times');
  let authorizationForm = document.querySelector('.authorization__form');

  let realEmail = 123;
  let realPassword = 321;

  let arrFullName = [];
  let arrPersonEmail = [];
  let arrPersonPassword = [];

  let authPersonName = '';
  let authPersonEmail = '';
  let authPersonPassword = '';


  const authEmail = () => {
    let email = document.querySelector('#auth__email');
    let clearEmail = email.value.trim();
    arrPersonEmail.forEach((el, index) => {
      if(clearEmail == el){
        realEmail = index;
      }else{
        email.value = '';
        email.placeholder = 'Такого email не существует!';
      }
    })
    return realEmail;
  }

  const authPassword = () => {
    let password = document.querySelector('#auth__password');
    let clearPassword = password.value.trim();

    arrPersonPassword.forEach((el, index) => {
      if(clearPassword == el){
        realPassword = index;
      }else{
        password.value = '';
        password.placeholder = 'Пароль не совпадает!';
      } 
    })
    return realPassword;
  }

  const myAuth = () => {
    if(authEmail() == authPassword()){
      authPersonName = arrFullName[authEmail()];
      authPersonEmail = arrPersonEmail[authEmail()];
      authPersonPassword = arrPersonPassword[authEmail()];
      saveAuthHash();
      aboutAuth();
      accout.innerText = `Аккаунт:  ${authPersonName}`;
      authorizationWindow.classList.add('hidden');
    }
  }

  const loadRegHash = () => {
    arrFullName = localStorage.getItem('ArrFullName');
    arrPersonEmail = localStorage.getItem('ArrPersonEmail');
    arrPersonPassword = localStorage.getItem('ArrPersonPassword');
    if(arrFullName != null || arrPersonEmail != null ||   arrPersonPassword != null){
      arrFullName = arrFullName.split(',');
      arrPersonEmail = arrPersonEmail.split(',');
      arrPersonPassword = arrPersonPassword.split(',');
    }
  }
  
  const loadAuthHash = () => {
    authPersonName = localStorage.getItem('AuthPersonName');
    authPersonEmail = localStorage.getItem('AuthPersonEmail');
    authPersonPassword = localStorage.getItem('AuthPersonPassword');
  }

  const saveAuthHash = () => {
    localStorage.setItem('AuthPersonName', authPersonName);
    localStorage.setItem('AuthPersonEmail', authPersonEmail);
    localStorage.setItem('AuthPersonPassword', authPersonPassword);
  }

  const aboutAuth = () => {
    if(authPersonName == '' || authPersonName == null){
      regestrationMainPage.classList.remove('hidden');
      signIn.classList.remove('hidden');
      accout.classList.add('hidden');
      exit.classList.add('hidden');
    }else{
      regestrationMainPage.classList.add('hidden');
      signIn.classList.add('hidden');
      accout.classList.remove('hidden');
      exit.classList.remove('hidden');
      accout.innerText = `Аккаунт: ${authPersonName}`;
    }
  }

  setTimeout(loadRegHash, 100);
  setTimeout(loadAuthHash, 250);
  setTimeout(aboutAuth, 300);
  
  exit.addEventListener('click', () => {
    authPersonName = '';
    authPersonEmail = '';
    authPersonPassword = '';
    aboutAuth();
    saveAuthHash();
  })

  authorizationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    myAuth();
  })

  signIn.addEventListener('click', () => {
    authorizationWindow.classList.remove('hidden')
  })

  closeAuthWindow.addEventListener('click', () => {
    authorizationWindow.classList.add('hidden')
  })

  return realEmail;
}

export default authConroller;