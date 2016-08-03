function filter(filter, param) {
  return this.map( (item) => {
    if (filter === 'all') {
      return item;
    }

    if (item.dataset[param] !== filter) {
      item.classList.add('hide');
    }
    return item;
  });
}

function clearFilter(checkRadio = false) {
  if (checkRadio) {
    [...document.querySelectorAll('input[type="radio"]')].forEach( (item) => {
      item.checked = false;
    });
  }

  return this.map( (item) => {
    item.classList.remove('hide');
    return item;
  });
}


export { filter, clearFilter };
