
const scbk_point = 300
// ヘッダーを変数の中に格納する
const top_border = document.querySelector(".top-border");
const bottom_border = document.querySelector(".bottom-border");
const left_border = document.querySelector(".left-border");
const right_border = document.querySelector(".right-border");
const nav_menu = document.querySelector(".nav-menu");

window.addEventListener("scroll", function () {
    // 100px以上スクロールしたらヘッダーに「scroll」クラスをつける
    top_border.classList.toggle("scroll", window.scrollY > scbk_point);
    bottom_border.classList.toggle("scroll", window.scrollY > scbk_point);
    left_border.classList.toggle("scroll", window.scrollY > scbk_point);
    right_border.classList.toggle("scroll", window.scrollY > scbk_point);
    nav_menu.classList.toggle("scroll", window.scrollY > scbk_point);
});

/*####################
Rotate-Word
####################*/
const CLASSNAME = "-visible";
const TIMEOUT = 1000;
const $target = $(".rotate-word");

setInterval(() => {
  $target.addClass(CLASSNAME);
  setTimeout(() => {
    // $target.removeClass(CLASSNAME);
  }, TIMEOUT)
}, TIMEOUT);

/*####################
ScrollReveal
####################*/
ScrollReveal({ reset: false, distance: "60px" , duration: 2000, delay: 200});
ScrollReveal().reveal('.gallery ul li', { reset: false, delay: 100, origin: "bottom", duration: 2000, interval: 100});
ScrollReveal().reveal('.contact .contact-form', { reset: false, delay: 100, origin: "bottom", duration: 2000});
