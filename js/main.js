window.addEventListener("scroll", function () {
    // ヘッダーを変数の中に格納する
    const top_border = document.querySelector(".top-border");
    const bottom_border = document.querySelector(".bottom-border");
    // 100px以上スクロールしたらヘッダーに「scroll」クラスをつける
    top_border.classList.toggle("scroll", window.scrollY > 100);
    bottom_border.classList.toggle("scroll", window.scrollY > 100);
  });