const regConroller = () => {
  let regestrationMainPage = document.querySelector('#regestration');
  let signIn = document.querySelector('#signIn');
  let accout = document.querySelector('#accout');
  let exit = document.querySelector('#exit');
  let regestrationCloseWindow = document.querySelector('.fa-times');
  let regestrationWindow = document.querySelector('.regestration__window');
  let regForm = document.querySelector('.regestration__form');

  let arrFullName = [];
  let arrPersonEmail = [];
  let arrPersonPassword = [];

  let authPersonName = '';
  let authPersonEmail = '';
  let authPersonPassword = '';

  const regFio = () => {
    let fio = document.querySelector('#reg__fio');
    let clearFio = fio.value.trim();
    let [name, surname] = clearFio.split(' ');
    if(name == '' || surname == '' || name == undefined || surname == undefined){
      fio.classList.add('error');
      fio.value = '';
    }else{
      fio.classList.remove('error');
    }
  }
  
  const regEmail = () => {
    let email = document.querySelector('#reg__email');
    let clearEmail = email.value.trim();
    if(clearEmail == '' || clearEmail.length < 8){
      email.classList.add('error');
      email.value = '';
    }else{
      email.classList.remove('error');
    }
  }
  
  const regPassword = () => {
    let password = document.querySelector('#reg__password');
    let clearPassword = password.value.trim();
    let againPassword = document.querySelector('#reg__again__password');
    let clearAgainPassword = againPassword.value.trim();
  
    if(clearPassword == '' || clearPassword.length < 8 ){
      password.classList.add('error');
      password.value = '';
    }else{
      password.classList.remove('error');
    }
  
    if(clearPassword != clearAgainPassword || clearPassword == '' || clearAgainPassword == ''){
      againPassword.classList.add('error');
      againPassword.value = '';
      againPassword.placeholder = 'Пароли должны совпадать!';
    }else
      againPassword.classList.remove('error');
  }

  const loadRegHash = () => {
    arrFullName = localStorage.getItem('ArrFullName');
    arrPersonEmail = localStorage.getItem('ArrPersonEmail');
    arrPersonPassword = localStorage.getItem('ArrPersonPassword');
    if(arrFullName != null || arrPersonEmail != null || arrPersonPassword != null){
      arrFullName = arrFullName.split(',');
      arrPersonEmail = arrPersonEmail.split(',');
      arrPersonPassword = arrPersonPassword.split(',');
    }else{
      arrFullName = [];
      arrPersonEmail = [];
      arrPersonPassword = [];
    }
  }
  
  const loadAuthHash = () => {
    authPersonName = localStorage.getItem('AuthPersonName');
    authPersonEmail = localStorage.getItem('AuthPersonEmail');
    authPersonPassword = localStorage.getItem('AuthPersonPassword');
  }

  const saveRegHash = () => {
    if(arrFullName != '' || arrPersonEmail != '' || arrPersonPassword != ''){
      localStorage.setItem('ArrFullName', arrFullName);
      localStorage.setItem('ArrPersonEmail', arrPersonEmail);
      localStorage.setItem('ArrPersonPassword', arrPersonPassword);
    }
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
      accout.innerText = `Аккаунт:  ${authPersonName}`;
    }
  }

  regForm.addEventListener('submit', (e) => {
    e.preventDefault();
    loadRegHash();
    let fio = document.querySelector('#reg__fio');
    let email = document.querySelector('#reg__email');
    let password = document.querySelector('#reg__password');
    let againPassword = document.querySelector('#reg__again__password');
    regFio();
    regEmail();
    regPassword();
    if(fio.classList.contains('error') || email.classList.contains('error') || password.classList.contains('error') || againPassword.classList.contains('error')){
      return authPersonName;
    }else{
      arrFullName.push(fio.value.trim());
      arrPersonEmail.push(email.value.trim());
      arrPersonPassword.push(password.value.trim());
      authPersonName = fio.value.trim();
      authPersonEmail = email.value.trim();
      authPersonPassword = password.value.trim();
      saveRegHash();
      saveAuthHash();
      aboutAuth()
      accout.innerText = `Аккаунт:  ${authPersonName}`;
      regForm.reset();
      regestrationWindow.classList.add('hidden');
    }
  });

  // window.addEventListener('unload', saveAuthHash);

  setTimeout(loadAuthHash, 100);
  setTimeout(aboutAuth, 200);

  exit.addEventListener('click', () => {
    authPersonName = '';
    authPersonEmail = '';
    authPersonPassword = '';
    aboutAuth();
    saveAuthHash();
  })

  regestrationMainPage.addEventListener('click', () => {
    regestrationWindow.classList.remove('hidden')
  })

  regestrationCloseWindow.addEventListener('click', () => {
    regestrationWindow.classList.add('hidden')
  })

  return authPersonName;
}

export default regConroller;