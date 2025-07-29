// main.js

window.addEventListener("load", () => {
    // Mobile nav
    const mobileNav = document.querySelector('.mnav');
    const closeBtn = document.querySelector('.mnav__close-btn');
    const closeBtnIcn = document.querySelector('.mnav__close-btn-icon');

    if (mobileNav && closeBtn && closeBtnIcn) {
        const navOpenedClass = 'left-0';
        const navClosedClass = '-left-[300px]';
        const arrowLeftClass = 'ri-arrow-left-s-line';
        const arrowRightClass = 'ri-arrow-right-s-line';

        closeBtn.addEventListener('click', () => {
            mobileNav.classList.toggle(navOpenedClass);
            mobileNav.classList.toggle(navClosedClass);
            closeBtnIcn.classList.toggle(arrowLeftClass);
            closeBtnIcn.classList.toggle(arrowRightClass);
        });
    }

    // Swiper Slider
    const swiper = new Swiper('.swiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // FAQ toggle
    const faqItems = document.querySelectorAll('.faq__item');
    faqItems.forEach((item) => {
        const faqBtn = item.querySelector('.faq__btn');
        const faqAnswer = item.querySelector('.faq__answer');

        item.addEventListener('click', () => {
            const isOpen = item.classList.toggle('open');
            const iconClass = isOpen ? 'ri-subtract-fill' : 'ri-add-fill';
            const iconElement = faqBtn.querySelector('i');
            if (iconElement) iconElement.className = `${iconClass} text-2xl`;

            if (faqAnswer) {
                faqAnswer.style.height = isOpen ? `${faqAnswer.scrollHeight}px` : "0px";
            }
        });
    });

    // ScrollReveal animations
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 2000,
        delay: 500,
        reset: true,
    });

    // hero
    sr.reveal('.hero__text', { origin: 'top' });
    sr.reveal('.hero__img');

    // stats
    sr.reveal('.stats__item', {
        delay: 600,
        distance: '100px',
        interval: 100,
        origin: 'top',
    });

    //services
    sr.reveal('.services');
    sr.reveal('.services__top');
    sr.reveal('.services__item', {
        delay: 600,
        distance: '100px',
        interval: 100,
        origin: 'bottom',
    });

    //appointment
    sr.reveal('.appointment__title');
    sr.reveal('.appointment__form');

    //testimonial
    sr.reveal('.testimonial');
    sr.reveal('.testimonial__container');
    
    //team
    sr.reveal('.team__title');
    sr.reveal('.team__slider');

    //faq
    sr.reveal('.faq__title');
    sr.reveal('.faq__item'), {
        delay: 600,
        distance: '100px',
        interval: 100,
        origin: 'bottom',
    };

    //departement
    sr.reveal('.departements__bg');
    sr.reveal('.departements__container');

    //blog
    sr.reveal('.blog__title');
    sr.reveal('.blog__post'), {
        delay: 600,
        distance: '100px',
        interval: 100,
        origin: 'bottom',
    };

    //brands
    sr.reveal('.brands__logo'), {
        delay: 600,
        distance: '100px',
        interval: 100,
        origin: 'bottom',
    };

    //newsletter
    sr.reveal('.newsletter');
    sr.reveal('.newsletter__container');

    //appointment
    sr.reveal('.footer__item'), {
        delay: 600,
        distance: '100px',
        interval: 100,
        origin: 'bottom'
    };
});
