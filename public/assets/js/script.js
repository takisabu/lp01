$(function(){
  // ドロワーのis-active付け替え
  function toggleDrawer() {
    $("#js-header__hamburger").toggleClass("is-active");
    $("#js-drawer").toggleClass("is-active");
  }

  // ドロワーの開閉
  $("#js-header__hamburger").click(function() {
    toggleDrawer();
    return false;
  });

  // スムーススクロール
  $('a[href^="#"]').click(function() {
    const header_height = $("#header").innerHeight();
    const speed = 300;
    const id = $(this).attr("href");
    const target = $("#" == id ? "html" : id);
    const position = $(target).offset().top - header_height;
    $("html, body").animate(
      {
        scrollTop: position
      },
      speed
    );

    if ($("#js-drawer").hasClass("is-active")) {
      toggleDrawer();
    }
    return false;
  });
});