/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _sendForm = __webpack_require__(1);

	var _sendForm2 = _interopRequireDefault(_sendForm);

	var _floatMenu = __webpack_require__(2);

	var _floatMenu2 = _interopRequireDefault(_floatMenu);

	var _filters = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
	new _floatMenu2.default().init({
	  elem: document.querySelector('.menu_desktop'),
	  height: 200,
	  first_class: 'menu_fixed_on_top',
	  second_class: 'float_menu'
	});

	// Can also be used with $(document).ready()
	$(window).load(function () {
	  $('.flexslider').flexslider({
	    animation: "slide",
	    prevText: " ", //Текст для пункта "предыдущий" directionNav
	    nextText: " "
	  });
	});

	// Открытие мобильного меню
	document.querySelector('.menu_little .burger').addEventListener('click', function () {
	  document.querySelector('.menu_big').classList.remove('close');
	});

	// закрытие мобильного меню
	document.querySelector('.menu_big  .closer').addEventListener('click', function () {
	  document.querySelector('.menu_big').classList.add('close');
	});

	// Обработка нажатия на фильтры
	if (application.catalog) {
	  // Открытие фильтров на моб. версии
	  document.querySelector('.mobile_closer').addEventListener('click', function () {
	    document.querySelector('.filters').classList.add('hidden');
	    document.querySelector('.content_kitchen').style.zIndex = 1;
	  });

	  // Закрытие фильтров на моб. версии
	  document.querySelector('.open_filters').addEventListener('click', function () {
	    document.querySelector('.filters').classList.remove('hidden');
	    document.querySelector('.content_kitchen').style.zIndex = 20;
	  });

	  window.allObj = [].concat(_toConsumableArray(document.querySelectorAll('.catalog_elem')));
	  allObj.filter = _filters.filter;
	  allObj.clearFilter = _filters.clearFilter;

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

	function callAllFilters(self) {
	  allObj.clearFilter();
	  allObj.filter(self.shape, 'shape');
	  allObj.filter(self.size, 'size');
	  allObj.filter(self.color, 'color');
	  allObj.filter(self.style, 'style');
	  allObj.filter(self.location, 'location');
	  allObj.filter(self.material, 'material');
	}

	new WOW().init();

	if (application.kitchen) {
	  //Отправка формы обратной связи скрипту для отправления по почте
	  var data = {
	    name: 'input[name="name"]',
	    telephone: 'input[name="telephone"]'
	  };

	  new _sendForm2.default('application', data, 'mail');
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var sendForm = function sendForm(id, dates, idMail) {
	  _classCallCheck(this, sendForm);

	  //document.getElementById(id).addEventListener('submit', () => {
	  $("#" + id).submit(function () {
	    var data = {
	      name: document.querySelector(dates.name).value,
	      telephone: document.querySelector(dates.telephone).value
	    };

	    $.ajax({
	      type: "POST",
	      url: "/mail.php",
	      data: data
	    }).done(function (value) {
	      var mail = document.getElementById(idMail);

	      mail.innerHTML = value;
	      mail.classList.remove('not_visible_mail');

	      setTimeout(function () {
	        $("#" + id).trigger("reset");
	        mail.classList.add('not_visible_mail');
	      }, 1000);
	    });

	    return false;
	  });
	};

	exports.default = sendForm;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// Принимает объект с настройками для меню

	var FloatMenu = function FloatMenu() {
	  _classCallCheck(this, FloatMenu);

	  this.init = function (params) {

	    if (window.pageYOffset > params.height) {
	      params.elem.classList.add(params.first_class);
	      params.elem.classList.add(params.second_class);
	      params.active_class = params.second_class;
	    } else {
	      params.elem.classList.add(params.first_class);
	      params.active_class = params.first_class;
	    }

	    window.addEventListener('scroll', function () {

	      if (window.pageYOffset > params.height && params.active_class === params.first_class) {
	        params.elem.classList.add(params.second_class);
	        params.active_class = params.second_class;
	      } else if (window.pageYOffset < params.height && params.active_class === params.second_class) {
	        params.elem.classList.remove(params.second_class);
	        params.active_class = params.first_class;
	      }
	    });
	  };
	}
	// @params - object

	;

	exports.default = FloatMenu;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function filter(filter, param) {
	  return this.map(function (item) {
	    if (filter === 'all') {
	      return item;
	    }

	    if (item.dataset[param] !== filter) {
	      item.classList.add('hide');
	    }
	    return item;
	  });
	}

	function clearFilter() {
	  var checkRadio = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

	  if (checkRadio) {
	    [].concat(_toConsumableArray(document.querySelectorAll('input[type="radio"]'))).forEach(function (item) {
	      item.checked = false;
	    });
	  }

	  return this.map(function (item) {
	    item.classList.remove('hide');
	    return item;
	  });
	}

	exports.filter = filter;
	exports.clearFilter = clearFilter;

/***/ }
/******/ ]);