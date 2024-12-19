function showCounter(numSlideActive, totalSlides) {
  const [counterSlider] = document.getElementsByClassName('js-counter-slader');
  console.log(counterSlider);
  
  const bodyNumberActive = counterSlider.firstChild;
  const bodyTotal = counterSlider.lastChild;
  console.log(bodyNumberActive, " / ", bodyTotal);
  
  bodyNumberActive.innerHTML = +numSlideActive + 1;
  bodyTotal.innerHTML = totalSlides;
}

export function couterSlick() {
  const [slider] = document.getElementsByClassName('js-car-slider');
  if (!slider) return;
  
  const btnList = [...slider.getElementsByClassName('slick-arrow')];
  const totalSlides = [...slider.getElementsByClassName('slick-track')][0].children.length;
  
  showCounter(0, totalSlides);
  btnList.forEach(btnClick => {
    btnClick.addEventListener('click', () => {
      // const totalSlides = [[...slider.getElementsByClassName('slick-track')][0].children].length;
      const [slideActive] = slider.getElementsByClassName('slick-active');
      const numberSlideActive = slideActive.dataset.slickIndex;

      console.log(numberSlideActive, ' / ', totalSlides);
      showCounter(numberSlideActive, totalSlides);
    });
    
  });
}