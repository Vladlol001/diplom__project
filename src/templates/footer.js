import Youtube from '../img/youtube.png'; 
import Facebook from '../img/fb.png'; 
import Inst from '../img/insta.png'; 


const Footer = () => {
  const view = `
    <div class="footer">
      <div class="container">
        <div class="footer__container">
          <div class="footer__blocks">
            <ul class="footer__list">
              <li><a class="footer__items" href="#">Распродажа</a></li>
              <li><a class="footer__items" href="#">Оплата и Доставка</a></li>
              <li><a class="footer__items" href="#">Гарантии и возврат</a></li>
              <li><a class="footer__items" href="#">Cервис</a></li>
            </ul>
          </div>
          <div class="footer__blocks">
            <ul class="footer__list">
              <li><a class="footer__items" href="#">Контакты</a></li>
              <li><a class="footer__items bold" href="#">(33) 600 67 65</a></li>
              <li><a class="footer__items disable" href="" disabled>Заказы принимаем:<br> 10:00 - 20:00 без выходных</a></li>
              <li><a class="footer__items bold" href="#">MySite@gmail.com</a></li>
            </ul>
          </div>
          <div class="footer__blocks">
            <ul class="footer__list">
              <li><a class="footer__items" href="#">Блог</a></li>
              <li><a class="footer__items" href="#">FAQ</a></li>
              <li><a class="footer__items" href="#">Скачать руководство</a></li>
              <li><a class="footer__items" href="#">Политика конфиденциальности</a></li>
            </ul>
          </div>
          <div class="footer__blocks">
            <div class="footer__images">
              <img src="${Youtube}" alt="Youtube">
              <img src="${Inst}" alt="Instagram">
              <img src="${Facebook}" alt="Facebook">
            </div>
          </div>
        </div>
      </div>
    </div>

  `;
  return view;
}

export default Footer;