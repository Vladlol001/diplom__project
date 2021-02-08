import view from '../view/Home.js'

export default () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = view();

  let sliderLeft = divElement.querySelector('.slider__left');
  let sliderRight = divElement.querySelector('.slider__right');
  let sliderPhoto = divElement.querySelectorAll('.slider__photo');
  let sliderAll = divElement.querySelector('.slider__all');

  const forArrows = () =>{
    let sliderPhoto = divElement.querySelectorAll('.slider__photo');
    let activeclass = 'slider__photo active__slide';
    
    sliderPhoto[0].className ===  activeclass? sliderLeft.classList.add('hidden') : sliderLeft.classList.remove('hidden');
    sliderPhoto[sliderPhoto.length - 3].className === activeclass ? sliderRight.classList.add('hidden') : sliderRight.classList.remove('hidden');
  }

  const nextSlide = () => {
    let findActiveSlide = divElement.querySelector('.active__slide');

    if(findActiveSlide.nextElementSibling.className === 'slider__photo'){
      findActiveSlide.classList.remove('active__slide');
      findActiveSlide.nextElementSibling.classList.add('active__slide');
    }
    forArrows();
    movePhotoRight();
  }

  const previousSlide = () => {
    let findActiveSlide = divElement.querySelector('.active__slide');

    if(findActiveSlide.previousElementSibling.className === 'slider__photo'){
      findActiveSlide.classList.remove('active__slide');
      findActiveSlide.previousElementSibling.classList.add('active__slide');
    }
    forArrows();
    movePhotoLeft();
  }

  let count = 0;

  const movePhotoRight = () => {
    ++count;
    sliderPhoto.forEach((el, index) => {
      el.style.transform = `translate3d(${((sliderAll.clientWidth-el.clientWidth) / 2) + (el.offsetLeft - (el.clientWidth * (index+(count))))}px, 0, 0)`;
    })
    return count;
  }

  const movePhotoLeft = () => {
    --count;
    sliderPhoto.forEach((el, index) => {
      el.style.transform = `translate3d(${((sliderAll.clientWidth-el.clientWidth) / 2) + (el.offsetLeft - (el.clientWidth * (index+(count))))}px, 0, 0)`;
    })
    return count;
  }

  const startMove = () => {
    count = 1;
    sliderPhoto.forEach((el, index) => {
      el.style.transform = `translate3d(${((sliderAll.clientWidth-el.clientWidth) / 2) + (el.offsetLeft - (el.clientWidth * (index+(count))))}px, 0, 0)`;
    })
    return count;
  }

  window.addEventListener('resize', startMove);
  setTimeout(startMove, 200);
  forArrows();
  sliderRight.addEventListener('click', nextSlide);
  sliderLeft.addEventListener('click', previousSlide);

  return divElement;
}