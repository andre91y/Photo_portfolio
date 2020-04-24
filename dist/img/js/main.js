// настройки слайдера в хэдере 
(function($) {
      $('#slides').slideshow({
        randomize: true,      // Случайный порядок воспроизведения слайдов
        slideDuration: 6000,  // Продолжительность каждого отдельного слайда.
        fadeDuration: 2000,    // Длительность затухающего перехода. Должно быть короче, чем продолжительность слайда.
        animate: true,        // Включение и выключение CSS-анимации.
        pauseOnTabBlur: true, // Приостановите слайд-шоу, когда вкладка не в фокусе. Это предотвращает глюки с помощью setTimeout ()..
        enableLog: true      // Включить запись сообщений журнала в консоль. Полезно для отладки.
      });
  })(need_new_jquery);


// Делаем адаптивное меню гамбургер
var open = document.getElementById('hamburger');
var changeIcon = true;

open.addEventListener("click", function(){

    var overlay = document.querySelector('.overlay');
    var nav = document.querySelector('nav');
    var icon = document.querySelector('.menu-toggle i');

    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

    if (changeIcon) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");

        changeIcon = false;
    }
    else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        changeIcon = true;
    }
});        
		//делаем scroll down

		//слайдер в разделе обо мне

(function($) {

	var container = $('#slider-about'),
		li = container.find('li');

	// Using the tzShutter plugin. We are giving the path
	// to he shutter.png image in the plugin folder and two
	// callback functions.

	container.tzShutter({
		imgSrc: 'js/jquery.shutter/shutter.png',
		closeCallback: function(){

			// Cycling the visibility of the li items to
			// create a simple slideshow.

			li.filter(':visible:first').hide();
			
			if(li.filter(':visible').length == 0){
				li.show();
			}
			
			// Scheduling a shutter open in 0.1 seconds:
			setTimeout(function(){container.trigger('shutterOpen')},100);
		},
		loadCompleteCallback:function(){
			setInterval(function(){
				container.trigger('shutterClose');
			},4000);
			
			container.trigger('shutterClose');
		}
	});
	
})(need_old_jquery);	