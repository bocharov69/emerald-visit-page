//// block9 filter
const block9_filters = document.querySelectorAll('.block9__button');
const block9_items = document.querySelectorAll('.block9__card');

if (block9_filters.length > 0 && block9_items.length > 0) {
	block9_filters.forEach(element => {
		element.addEventListener('click', event => {
			block9_filters.forEach(e => {
				if (e.classList.contains('active')) {
					e.classList.remove('active');
				}
			});
			event.target.classList.add('active');
			let filter_class = event.target.dataset['f'];

			block9_items.forEach(elem => {
				elem.classList.remove('hiden');
				if (!elem.classList.contains(filter_class) & filter_class != 'block9__all') {
					elem.classList.add('hiden');
				}
			})
		});
	});
}

//// slider
const block1_slider = new Swiper('.block1__slider', {
    direction: 'horizontal',
    speed: 1000,
    slidesPerView: '1',
    loop: true,
    navigation: {
        nextEl: '.block1__slider-next',
        prevEl: '.block1__slider-prev',
    },
    autoplay: {
        delay: 6000,
    }
});
const block7_slider = new Swiper('.block7__slider', {
    direction: 'horizontal',
    speed: 600,
    slidesPerView: '1',
    loop: true,
    initialSlide: 2,
    navigation: {
        nextEl: '.block7__slider-next',
        prevEl: '.block7__slider-prev',
    },
    pagination: {
        el: '.block7__slider-pagination',
        clickable: true,
    },
    thumbs: {
        swiper: {
            el: '.block7__slider-thumbs',
            slidesPerView: 3,
            centeredSlides: true,
            spaceBetween: 0,
        }
    }
});
