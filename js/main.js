
$(function () {

  //메인 슬라이드
  $('#mainSlideWrap .mainSlickBox .slick01').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    let i = (currentSlide ? currentSlide : 0) + 1;
    $('#mainSlideWrap .mainSlickBox .slick01 .count').html('<em>' + i + '</em> / ' + slick.slideCount);
  });

  $('#mainSlideWrap .mainSlickBox .slick01').slick({
    autoplay: false,
    arrows: true,
    dots: false,
    accessibility: false,
    draggable: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 5000,
    speed: 1300,
    prevArrow: $('#mainSlideWrap .mainSlickBox .slick01 .prev'),
    nextArrow: $('#mainSlideWrap .mainSlickBox .slick01 .next'),
  });

  //공지사항 슬라이드
  $('#mainSlideWrap .noticeBox .slick02').slick({
    autoplay: false,
    arrows: true,
    dots: false,
    accessibility: false,
    draggable: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 3000,
    speed: 1300,
    vertical: true,
    prevArrow: $('#mainSlideWrap .noticeBox .prev'),
    nextArrow: $('#mainSlideWrap .noticeBox .next'),
  });

  //메인 우측 슬라이드
  $('#mainSlideWrap .mainBannerBox .slick03').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    let i = (currentSlide ? currentSlide : 0) + 1;
    $('#mainSlideWrap .mainBannerBox .count').html('<em>' + i + '</em> / ' + slick.slideCount);
  });

  $('#mainSlideWrap .mainBannerBox .slick03').slick({
    autoplay: false,
    arrows: true,
    dots: false,
    accessibility: false,
    draggable: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 5000,
    speed: 1300,
    prevArrow: $('#mainSlideWrap .mainBannerBox .prev'),
    nextArrow: $('#mainSlideWrap .mainBannerBox .next'),
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          variableWidth: true,
          slidesToShow: 1,
        }
      },
    ]
  });

  //함께 하는 기관 슬라이드
  $('#partnerWrap .slick').slick({
    autoplay: false,
    variableWidth: true,
    arrows: true,
    dots: false,
    accessibility: false,
    draggable: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 5000,
    speed: 1300,
    prevArrow: $('#partnerWrap .control .prev'),
    nextArrow: $('#partnerWrap .control .next'),
  });







  //aos 초기화
  $(window).load(function () {
    AOS.init({
      duration: 2000
    });
  });

  //메인
  $('#mainTitleWrap .slick').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $('#mainTitleWrap').removeClass('active');
    $('#mainTitleWrap .mainTitle').removeClass('active');
    $('#mainTitleWrap .progressbarBox .dots').removeClass('active');
  });
  $('#mainTitleWrap .slick').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    $('#mainTitleWrap').addClass('active');
    $('#mainTitleWrap .mainTitle').addClass('active');
    $('#mainTitleWrap .progressbarBox .dots').addClass('active');
  });

  $('#mainTitleWrap .slick').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('#mainTitleWrap .progressbarBox .count').html('<em class="current">' + i + '</em> <em class="total">' + slick.slideCount + '</em>');
    $("#mainTitleWrap").addClass("active");
    $("#mainTitleWrap .mainTitle").addClass("active");
    $('#mainTitleWrap .progressbarBox .dots').addClass('active');
  });










  //후기 영상
  $("#reviewVideoWrap .slick").slick({
    variableWidth: false,
    autoplay: false,
    arrows: true,
    dots: true,
    accessibility: false,
    draggable: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 5000,
    centerMode: false,
    speed: 1500,
    prevArrow: $('#reviewVideoWrap .control .prev'),
    nextArrow: $('#reviewVideoWrap .control .next'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          variableWidth: true,
        }
      }
    ]
  });

  //후기 슬라이드
  $("#reviewWrap .slick").slick({
    variableWidth: true,
    autoplay: false,
    arrows: false,
    dots: false,
    accessibility: false,
    draggable: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 5000,
    speed: 1500,
  });

  //수상 슬라이드 영역 
  $("#slideWrap .slick").slick({
    autoplay: false,
    arrows: true,
    dots: true,
    accessibility: false,
    draggable: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 5000,
    speed: 1500,
    prevArrow: $('#slideWrap .controlBox .prev'),
    nextArrow: $('#slideWrap .controlBox .next'),
  });

  //자주 묻는 질문 
  $('#questionWrap .questionList li a').click(function () {
    if ($(this).hasClass('active')) {
      $('#questionWrap .questionList li a').removeClass('active');
      $('#questionWrap .questionList li a').next().slideUp();

    } else {
      $('#questionWrap .questionList li a').removeClass('active');
      $('#questionWrap .questionList li a').next().slideUp();
      $(this).addClass('active');
      $(this).next().slideDown();
    }
    return false
  })

  //탭 슬라이드
  $('#infoWrap03 .tabBox .tabBtn').on('click', function () {

    let index = $(this).index();

    $('#infoWrap03 .slick').slick('slickGoTo', index);
    $('#infoWrap03 .tabBox .tabBtn').removeClass('active');
    $(this).addClass('active');

  });

  $('#infoWrap03 .slick').on('afterChange', function (event, slick, currentSlide) {
    $('#infoWrap03 .tabBox .tabBtn').removeClass('active');
    $('#infoWrap03 .tabBox .tabBtn').eq(currentSlide).addClass('active');
  });

  $("#infoWrap03 .slick").slick({
    autoplay: true,
    arrows: true,
    dots: false,
    accessibility: false,
    draggable: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 5000,
    speed: 1500,
    prevArrow: $('#infoWrap03 .prev'),
    nextArrow: $('#infoWrap03 .next'),
  });

  $('#infoWrap03 .box').on('click keydown', function (e) {
    // 키보드 접근성: Enter(13), Space(32)
    if (e.type === 'keydown' && e.which !== 13 && e.which !== 32) {
      return;
    }
    e.preventDefault();
    $(this).toggleClass('is-flipped');
  });


});
