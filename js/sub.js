
$(function () {

  //상단
  $(window).load(function () {
    $('.subVisualBox .visualBox').addClass('active');
    // $('.visionBox .topImgBox').addClass('active');
  });

  //로그인 탭
  $('.signinBox .selectBtn').first().addClass('active');
  $('.signinBox .tabContentBox').hide();
  $('.signinBox .tabContentBox').first().show();

  $('.signinBox .selectBtn').click(function () {

    $('.signinBox .selectBtn').removeClass('active');
    $(this).addClass('active');

    let idx = $(this).index();

    $('.signinBox .tabContentBox').hide();
    $('.signinBox .tabContentBox').eq(idx).show();

  });

  //스크롤 그라데이션 
  $('.applicationScrollBox').scroll(function () {

    let $wrap = $(this);
    let scrollTop = $wrap.scrollTop();
    let wrapHeight = $wrap.innerHeight();
    let scrollHeight = this.scrollHeight;

    if (scrollTop + wrapHeight >= scrollHeight - 5) {
      $wrap.addClass('scrollEnd');
    } else {
      $wrap.removeClass('scrollEnd');
    }

  });

  //첨부파일
  $("#fileInput").change(function () {
    $("#fileNameText").text(this.files[0] ? this.files[0].name : "선택된 파일이 없습니다.");
  });

  $(".fileDelBtn").click(function () {
    $("#fileInput").val('');
    $("#fileNameText").text("선택된 파일이 없습니다.");
  });

  // 개별 선택
  $('.fileImgList li .fileBtn').click(function () {
    $(this).toggleClass('active');

    let total = $('.fileImgList .fileBtn').length;
    let selected = $('.fileImgList .fileBtn.active').length;

    if (total === selected && total > 0) {
      $('.checkAllBtn').addClass('active').text('전체 해제');
    } else {
      $('.checkAllBtn').removeClass('active').text('전체 선택');
    }
  });

  // 전체 선택
  $('.checkAllBtn').click(function () {
    let total = $('.fileImgList .fileBtn').length;
    let selected = $('.fileImgList .fileBtn.active').length;

    if (total === selected && total > 0) {
      $('.fileImgList .fileBtn').removeClass('active');
      $(this).removeClass('active').text('전체 선택');
    } else {
      $('.fileImgList .fileBtn').addClass('active');
      $(this).addClass('active').text('전체 해제');
    }
  });

  //스크롤 시 해당 영역 active 클래스 적용
  $(window).scroll(function () {

    const scrollPos = $(window).scrollTop();
    const winH = $(window).height();

    $('.scrollElement').each(function () {
      let elementOffset = $(this).offset().top;
      if (scrollPos > elementOffset - winH / 1.2) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });

  });

  // 클릭 시 부드럽게 이동
  const $links = $('.executiveStatusBox .linkBtn');

  function getHeaderH() {
    return $('#headerWrap').outerHeight() || 0;
  }

  const gap = 35;

  $links.click(function (e) {
    e.preventDefault();

    const $target = $($(this).attr('href'));
    if (!$target.length) return;

    const headerH = getHeaderH();

    $('html, body').stop().animate({
      scrollTop: $target.offset().top - headerH - gap
    }, 400);

    $links.removeClass('active');
    $(this).addClass('active');
  });











});
