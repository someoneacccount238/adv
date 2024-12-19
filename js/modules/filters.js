
function priceSort(rule, cardBox, cardList) {
  const newList = cardList.sort((prevCardEl, nextCardEl) => {
    const prevDataPrice = prevCardEl.querySelector('[data-price]');
    const prevNumPrice = +prevDataPrice.firstChild.nextSibling.innerHTML.replaceAll(' ', '');
    const nextDataPrice = nextCardEl.querySelector('[data-price]');
    const nextNumPrice = +nextDataPrice.firstChild.nextSibling.innerHTML.replaceAll(' ', '');
    
    if (rule) return prevNumPrice - nextNumPrice;
    else return nextNumPrice - prevNumPrice;
  });
  
  cardBox.innerHTML = '';
  for (let li of newList) {
    cardBox.appendChild(li);
  }
};

function articleSort(cardBox, cardList) {
  const newList = cardList.sort((prevCardEl, nextCardEl) => {
    const prevDataPrice = prevCardEl.querySelector('[data-article]');
    const prevNumPrice = Number(prevDataPrice.lastChild.firstChild.nextSibling.innerHTML);
    const nextDataPrice = nextCardEl.querySelector('[data-article]');
    const nextNumPrice = Number(nextDataPrice.lastChild.firstChild.nextSibling.innerHTML);
    
    return prevNumPrice - nextNumPrice
  });
  
  cardBox.innerHTML = '';
  for (let li of newList) {
    cardBox.appendChild(li);
  }
}

function sortState(rule, cardList) {
  cardList.forEach(card => card.classList.add('isHidden'));
  cardList.forEach(card => {
    const cardParamItem = card.querySelector('[data-sale-type]');
    const cardParmValue = cardParamItem.dataset.saleType.trim();
    
    if (rule === 'all') card.classList.remove('isHidden');
    else if (rule === cardParmValue) card.classList.remove('isHidden');
  });
};

function showfilterName(clickEl, dropdownBtn) {
  const sortRuleName = clickEl.innerHTML;
  const dropdownBtnName = dropdownBtn.firstChild.nextSibling;
  
  dropdownBtnName.innerHTML = sortRuleName
};

export function filter(filterItems, dropdownBtn) {
  filterItems.forEach(filterEl => {
    filterEl.addEventListener('click', e => {
      e.preventDefault();
      const ruleSort = filterEl.dataset.sort.trim();
      const [cardBox] = document.getElementsByClassName('js-card-box');
      const cardList = [...cardBox.children];
      
      switch (ruleSort) {
        case 'all':
          sortState(ruleSort, cardList);
          showfilterName(filterEl, dropdownBtn);
          break;
        case 'ownCar':
          sortState(ruleSort, cardList);
          showfilterName(filterEl, dropdownBtn);
          break;
        case 'realization':
          sortState(ruleSort, cardList);
          showfilterName(filterEl, dropdownBtn);
          break;
        case 'sold':
          sortState(ruleSort, cardList);
          showfilterName(filterEl, dropdownBtn);
          break;
        case 'new':
          articleSort(cardBox, cardList)
          showfilterName(filterEl, dropdownBtn);
          break;
        case 'price+':
          priceSort(1, cardBox, cardList,);
          showfilterName(filterEl, dropdownBtn);
          break;
        case 'price-':
          priceSort(0, cardBox, cardList,);
          showfilterName(filterEl, dropdownBtn);
          break;
      }
    })
  });
}
