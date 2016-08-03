import SendFunc from './sendForm.js';
import FloatMenu from './floatMenu.js';
import { filter, clearFilter } from './filters.js';

//   $(document).ready(function () {
//     'use strict';
// //Аякс отправка форм
//     $("#application").submit(function () {
//       var data = {
//         name : document.querySelector('input[name="name"]').value,
//         email : document.querySelector('input[name="email"]').value,
//         telephone : document.querySelector('input[name="telephone"]').value
//       };
//       $.ajax({
//         type: "POST",
//         url: "mail.php",
//         data: data
//       }).done(function (value) {
//         $('#mail')[0].innerHTML = value;
//         $('#mail').removeClass('not_visible_mail');
//         setTimeout(function () {
//           $("#form").trigger("reset");
//         }, 1000);
//       });
//     return false;
//     });
//  function  test() {
// 	console.log('test!');
// }
//         $("img, a").on("dragstart", function (event) { event.preventDefault(); });
//   });

//Плавающее меню
new FloatMenu().init({
    elem : document.querySelector('.menu_desktop'),
    height : 200,
    first_class : 'menu_fixed_on_top',
    second_class : 'float_menu'
  });

// Can also be used with $(document).ready()
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "none",
	  prevText: " ",           //Текст для пункта "предыдущий" directionNav
	  nextText: " ",
  });
});

// Открытие мобильного меню
document.querySelector('.menu_little .burger').addEventListener('click', () => {
  document.querySelector('.menu_big').classList.remove('close');
});

// закрытие мобильного меню
document.querySelector('.menu_big  .closer').addEventListener('click', () => {
  document.querySelector('.menu_big').classList.add('close');
});


// Обработка нажатия на фильтры
if (application.catalog) {
  // Второе нажатие на фильтры убирает их активность

  // Открытие фильтров на моб. версии
  document.querySelector('.mobile_closer').addEventListener('click', () => {
    document.querySelector('.filters').classList.add('hidden');
    document.querySelector('.content_kitchen').style.zIndex = 1;
  });

  // Закрытие фильтров на моб. версии
  document.querySelector('.open_filters').addEventListener('click', () => {
    document.querySelector('.filters').classList.remove('hidden');
    document.querySelector('.content_kitchen').style.zIndex = 20;
  });

  window.allObj = [...document.querySelectorAll('.catalog_elem')];
  allObj.filter = filter;
  allObj.clearFilter = clearFilter;

  window.filtersStore = {
    _shape: 'all',
    get shape() {
      return this._shape;
    },
    set shape(value) {
      this._shape = value;
      callAllFilters(this);
    },

    _size: 'all',
    get size() {
      return this._size;
    },
    set size(value) {
      this._size = value;
      callAllFilters(this);
    },

    _color: 'all',
    get color() {
      return this._color;
    },
    set color(value) {
      this._color = value;
      callAllFilters(this);
    },

    _style: 'all',
    get style() {
      return this._style;
    },
    set style(value) {
      this._style = value;
      callAllFilters(this);
    },

    _location: 'all',
    get location() {
      return this._location;
    },
    set location(value) {
      this._location = value;
      callAllFilters(this);
    },

    _material: 'all',
    get material() {
      return this._material;
    },
    set material(value) {
      this._material = value;
      callAllFilters(this);
    }

  };
}

new WOW().init();

if (application.kitchen) {
  //Отправка формы обратной связи скрипту для отправления по почте
  let data = {
    name : 'input[name="name"]',
    telephone : 'input[name="telephone"]'
  };

  new SendFunc('application', data, 'mail');
}


function callAllFilters(self) {
    allObj.clearFilter();
    allObj.filter(self.shape, 'shape');
    allObj.filter(self.size, 'size');
    allObj.filter(self.color, 'color');
    allObj.filter(self.style, 'style');
    allObj.filter(self.location, 'location');
    allObj.filter(self.material, 'material');
}


window.labelClick = function(self, nameFilter, valueFilter) {
  console.log(self.dataset.checked == 'nope');
  if (self.dataset.checked == 'nope') {
    self.dataset.checked = 'click';
    filtersStore[nameFilter] = valueFilter;
  } else {
    self.dataset.checked = 'nope';
    filtersStore[nameFilter] = 'all';
  }
  return false;
}
