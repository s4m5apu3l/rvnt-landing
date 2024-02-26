import { CountUp } from './countUp.min.js';

document.addEventListener('DOMContentLoaded', () => {
    console.dir('init js');
    const burgerBtn = document.querySelector('.l-header__burger');
    const headerNav = document.querySelector('.l-header__nav');

    burgerBtn.addEventListener('click', () => {
        headerNav.classList.toggle('active');
        burgerBtn.classList.toggle('active');
    });

    const swiperCases = new Swiper('.l-cases__swiper', {
        // Optional parameters
        // loop: true,
        // initialSlide: 1,
        spaceBetween: 20,
        breakpoints: {
            0: {
                grid: {
                    rows: 2,
                    fill: 'row',
                },
                slidesPerView: 1.1,
                centeredSlides: true,
            },
            390: {
                grid: {
                    rows: 2,
                    fill: 'row',
                },
                slidesPerView: 1.2,
                centeredSlides: false,
            },
            724: {
                grid: {
                    rows: 1,
                },
                slidesPerView: 1.2,
            },
            750: {
                slidesPerView: 2,
            },
            1300: {
                slidesPerView: 3,
            },
        },
        navigation: {
            nextEl: '.custom-swiper-btn-next',
            prevEl: '.custom-swiper-btn-prev',
        },
    });
    const swiperServices = new Swiper('.l-services__swiper', {
        spaceBetween: 20,
        // centeredSlides: true,
        breakpoints: {
            0: {
                slidesPerView: 1.1,
            },
            724: {
                slidesPerView: 1.2,
            },
            1024: {
                slidesPerView: 2,
            },
        },
    });
    const swiperProjects = new Swiper('.l-projects__swiper', {
        spaceBetween: 20,
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            640: {
                spaceBetween: 20,
                slidesPerView: 1.6,
            },
            924: {
                slidesPerView: 2,
            },
            1420: {
                slidesPerView: 3,
            },
        },
        navigation: {
            nextEl: '.l-projects--swiper-btn-next',
            prevEl: '.l-projects--swiper-btn-prev',
        },
    });

    const swiperCertificate = new Swiper('.l-certificate__swiper', {
        effect: 'creative',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',

        breakpoints: {
            0: {
                creativeEffect: {
                    enabled: false,
                    prev: {
                        // scale: 1,
                        translate: ['-110%', 0, 0],
                    },
                    next: {
                        // scale: 1,
                        translate: ['110%', 0, 0],
                    },
                    limitProgress: 2,
                },
            },
            590: {
                creativeEffect: {
                    prev: {
                        scale: 0.7,
                        translate: ['-100%', 0, 0],
                    },
                    next: {
                        scale: 0.7,
                        translate: ['100%', 0, 0],
                    },
                    limitProgress: 2,
                },
            },
        },
        navigation: {
            nextEl: '.l-certificate--swiper-btn-next',
            prevEl: '.l-certificate--swiper-btn-prev',
        },
    });

    // для формата чисел
    const formatNumber = number => {
        return number.toLocaleString('ru-RU') + ' ₽';
    };

    const elements = document.querySelectorAll('.l-number');

    elements.forEach(element => {
        const number = parseInt(element.textContent.replace(/\s+/g, ''), 10); // Удаление пробелов и преобразование в число
        if (!isNaN(number)) {
            element.textContent = formatNumber(number);
        }
    });

    //для табов
    const tabsBtn = document.querySelectorAll('.l-cases__tab-btn');

    tabsBtn.forEach(tab => {
        tab.addEventListener('click', () => {
            document
                .querySelectorAll('.l-cases__tab-btn.active')
                .forEach(activeTab => activeTab.classList.remove('active'));
            document
                .querySelectorAll('.l-tab-content.active')
                .forEach(activeContent => activeContent.classList.remove('active'));

            tab.classList.add('active');

            const targetContent = document.querySelector(tab.dataset.tabBtn);
            targetContent.classList.add('active');
        });
    });

    const countNums = () => {
        const numbersObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.dir(entry.target.dataset.suffix);
                    
                    const count = new CountUp(
                        entry.target.id,
                        entry.target.dataset.num,
                        // entry.target.dataset.duration || 4,
                        {
                            prefix: entry.target.dataset.prefix || '',
                            suffix: entry.target.dataset.suffix || '', 
                            useEasing: true, //анимация
                            separator: '',
                        }
                    );
                    count.start();
                    observer.unobserve(entry.target);
                }
            });
        });
        document.querySelectorAll('.js-count').forEach(num => {
            numbersObserver.observe(num);
        });
    };
    countNums();
});
