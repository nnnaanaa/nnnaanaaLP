
const scbk_point = 200

window.addEventListener("scroll", function () {
    // ヘッダーを変数の中に格納する
    const top_border = document.querySelector(".top-border");
    const bottom_border = document.querySelector(".bottom-border");
    const nav_menu = document.querySelector(".nav-menu");
    // 100px以上スクロールしたらヘッダーに「scroll」クラスをつける
    top_border.classList.toggle("scroll", window.scrollY > scbk_point);
    bottom_border.classList.toggle("scroll", window.scrollY > scbk_point);
    nav_menu.classList.toggle("scroll", window.scrollY > scbk_point);
});