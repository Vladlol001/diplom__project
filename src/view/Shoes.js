const Shoes = () => {
  const view = `
    <div class="shoes__discription hidden">
      <a href=" " class="back__to__shoes"><i class="fas fa-arrow-left"></i>Назад ко всем кросовкам</a>
      <div class="container">
        <div class="shoes__description__container"></div>
      </div>
    </div>

    <div class="shoes">
      <div class="container">
        <h3 class="shoes__pretitle">Кроссовки</h3>
        <a href=" " class="back__to__shoes2"><i class="fas fa-arrow-left"></i>Назад ко всем кросовкам</a>
        <div class="shoes__container"></div>
      </div>
    </div>
  `;
  return view;
}

export default Shoes;