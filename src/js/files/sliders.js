/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Мы подключаем Swider Slider с node_modules
// При необходимости подключите дополнительные модули слайдера, указав на них в {} черезКому
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Scrollbar } from "swiper"
/*
Основные модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Посмотрите больше https://swiperjs.com/
*/

// Стили Swiper
// Основные стили
import "../../scss/base/swiper.scss"
// Полный набор стилей с scss/libs/swiper.scss
//import "../../scss/libs/swiper.scss"
// Полный набор стилей с node_modules
//import "swiper/css"

// Инициализация ползунков
function initSliders() {
  // Список ползунков
  // Проверьте, находится ли слайдер на странице
  if (document.querySelector(".person__slider")) {
    new Swiper(".person__slider", {
      modules: [Navigation, Scrollbar],
      observer: true,
      observeParents: true,
      slidesPerView: 4,
      centeredSlides: true,
      initialSlide: 1,
      spaceBetween: 30,
      autoHeight: false,
      speed: 800,
      lazy: true,
      scrollbar: {
        el: "._person-scrollbar",
        draggable: true,
        dragSize: 200,
      },
      navigation: {
        prevEl: "._person-prev",
        nextEl: "._person-next",
      },
      breakpoints: {
        319: {
          slidesPerView: 1.4,
          spaceBetween: 30,
          scrollbar: {
            dragSize: 100,
          },
        },
        520: {
          slidesPerView: 2.4,
          spaceBetween: 30,
          scrollbar: {
            dragSize: 200,
          },
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1100: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    })
  }
  if (document.querySelector(".place__slider")) {
    new Swiper(".place__slider", {
      modules: [Navigation, Scrollbar],
      observer: true,
      observeParents: true,
      slidesPerView: 3,
      centeredSlides: true,
      initialSlide: 1,
      spaceBetween: 30,
      autoHeight: false,
      speed: 800,
      lazy: true,
      scrollbar: {
        el: "._place-scrollbar",
        draggable: true,
        dragSize: 200,
      },
      navigation: {
        prevEl: "._place-prev",
        nextEl: "._place-next",
      },
      breakpoints: {
        320: {
          slidesPerView: 1.4,
          spaceBetween: 30,
          scrollbar: {
            el: "._place-scrollbar",
            draggable: true,
            dragSize: 100,
          },
        },
        600: {
          slidesPerView: 2.4,
          spaceBetween: 30,
          scrollbar: {
            el: "._place-scrollbar",
            draggable: true,
            dragSize: 200,
          },
        },
        960: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    })
  }
  if (document.querySelector(".coaches__slider")) {
    new Swiper(".coaches__slider", {
      modules: [Navigation, Scrollbar],
      observer: true,
      observeParents: true,
      slidesPerView: 3.4,
      spaceBetween: 28,
      autoHeight: false,
      speed: 800,
      lazy: true,
      scrollbar: {
        el: ".coaches__scrollbar",
        draggable: true,
        dragSize: 100,
      },
      navigation: {
        prevEl: ".coaches__prev-slide",
        nextEl: ".coaches__next-slide",
      },
      breakpoints: {
        319: {
          slidesPerView: 1.4,
          spaceBetween: 30,
        },
        450: {
          slidesPerView: 2.4,
          spaceBetween: 30,
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    })
  }
}
// Свиток на основе слайдера (по классу swiper scroll дляОболонкиСлайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll(".swiper_scroll")
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index]
      const sliderScrollBar =
        sliderScrollItem.querySelector(".swiper-scrollbar")
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      })
      sliderScroll.scrollbar.updateSize()
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск ползунков инициализации
  initSliders()
  // Запуск инициализации прокрутки на слайдере (по классу swiper_scroll)
  //initSlidersScroll();
})
