
new WOW().init();

// Прокрутка "Последние проекты"
var mySwiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.projects-pagination',
      bulletClass: 'projects-bullet',
      bulletActiveClass: 'projects-bullet-active',
      clickable: true,
    },
    autoplay: {
      delay: 7000,
    }
  });

// Меняет фон страницы
const chk = document.getElementById('check1');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});



// Прокрутка страницы
$(document).ready(function () {

	$('a[href^="#"]').click(function () {
		//Сохраняем значение атрибута href в переменной:
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top //можно вычесть высоту меню
		}, 1100);
		return false;
	});

});