import slider1 from '../img/слайдер_1.jpg';
import slider2 from '../img/слайдер_2.jpg';
import slider3 from '../img/слайдер_3.jpg';
import slider4 from '../img/слайдер_4.jpg';
import slider5 from '../img/слайдер_5.jpg';
// import slider6 from '../img/слайдер_6.jpg';
import slider7 from '../img/слайдер_7.jpg';
import slider8 from '../img/слайдер_8.jpg';
import slider9 from '../img/слайдер_9.jpg';
import slider10 from '../img/слайдер_10.jpg';
import allNike from '../img/allNikes.jpg';
import allAdidas from '../img/allAdidas.jpg';
import allPuma from '../img/allPuma.jpeg';
import allNewBalance from '../img/allNewBalance.jpg';


const Home = () => {
    const view = `
        <div class="slider">
            <div class="slider__container">
                <div class="slider__all">
                    <div class="slider__left"><i class="fas fa-arrow-left"></i></div>
                        <div class="slider__photo active__slide">
                            <img src="${slider8}" alt="Кроссовки" data-item-photo="3">
                        </div>
                        <div class="slider__photo">
                            <img src="${slider1}" alt="Кроссовки" data-item-photo="1" >
                        </div>
                        <div class="slider__photo">
                            <img src="${slider7}" alt="Кроссовки" data-item-photo="2">
                        </div>
                        <div class="slider__photo">
                            <img src="${slider3}" alt="Кроссовки" data-item-photo="4">
                        </div>
                        <div class="slider__photo">
                            <img src="${slider4}" alt="Кроссовки" data-item-photo="5">
                        </div>
                        <div class="slider__photo">
                            <img src="${slider2}" alt="Кроссовки">
                        </div>
                        <div class="slider__photo">
                            <img src="${slider5}" alt="Кроссовки">
                        </div>
                        <div class="slider__photo">
                            <img src="${slider9}" alt="Кроссовки">
                        </div>
                        <div class="slider__photo">
                            <img src="${slider10}" alt="Кроссовки">
                        </div> 
                    <div class="slider__right"><i class="fas fa-arrow-right"></i></div>
                </div>
            </div>
        </div>
        <div class="main__blocks">
            <div class="container">
                <div class="main__shoes">Кроссовки</div>
                    <div class="main__blocks__container">
                        <a href="#/nikeShoes" class="main__block nike__block">
                            <img src="${allNike}" alt="Кроссовки Nike">
                            <div class="main__title">Nike</div>
                        </a>
                        <a href="#/adidasShoes" class="main__block adidas__block">
                            <img src="${allAdidas}" alt="Кроссовки Adidas">
                            <div class="main__title">Adidas</div>
                        </a>
                        <a href="#/pumaShoes" class="main__block puma__block">
                            <img src="${allPuma}" alt="Кроссовки Puma">
                            <div class="main__title">Puma</div>
                        </a>
                        <a href="#/newBalanceShoes" class="main__block newBalance__block">
                            <img src="${allNewBalance}" alt="Кроссовки NewBalance">
                            <div class="main__title">NewBalance</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `
    return view;
}

export default Home;