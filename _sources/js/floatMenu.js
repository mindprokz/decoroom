// Принимает объект с настройками для меню
export default class FloatMenu{
  // @params - object

  init = (params) => {

    if(window.pageYOffset > params.height){
      params.elem.classList.add(params.first_class);
      params.elem.classList.add(params.second_class);
      params.active_class = params.second_class;
    }else{
      params.elem.classList.add(params.first_class);
      params.active_class = params.first_class;
    }

    window.addEventListener('scroll', () => {

      if(window.pageYOffset > params.height &&  params.active_class === params.first_class){
        params.elem.classList.add(params.second_class);
        params.active_class = params.second_class;
      }else if(window.pageYOffset < params.height && params.active_class === params.second_class ){
        params.elem.classList.remove(params.second_class);
        params.active_class = params.first_class;
      }
	  });
  }
}
