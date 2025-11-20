
$(function () {

  //aos 초기화
  $(window).load(function () {
    AOS.init({
      duration: 2000
    });
  });

  $('#mainSlideWrap .mainSlickBox .slick01').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $('#mainSlideWrap .mainSlickBox .textBox p').removeClass('active');
  });
  $('#mainSlideWrap .mainSlickBox .slick01').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    $('#mainSlideWrap .mainSlickBox .textBox p').addClass('active');
  });

  //메인 슬라이드
  $('#mainSlideWrap .mainSlickBox .slick01').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    let i = (currentSlide ? currentSlide : 0) + 1;
    $('#mainSlideWrap .mainSlickBox .slick01 .count').html('<em>' + i + '</em> / ' + slick.slideCount);
    $("#mainSlideWrap .mainSlickBox .textBox p").addClass("active");
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

  //뉴스 탭 
  $('#newsWrap .tabBtn').first().addClass('active');
  $('#newsWrap .newsContentBox .newsContent').first().show();


  $('#newsWrap .tabBtn').click(function () {

    $('#newsWrap .tabBtn').removeClass('active');
    $(this).addClass('active');

    let idx = $(this).index();

    $('#newsWrap .newsContentBox .newsContent').hide();
    $('#newsWrap .newsContentBox .newsContent').eq(idx).show();

  })














});
