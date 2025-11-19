
$(function () {

  $(window).load(function () {
    $('.introduceBox .top').addClass('active');
    AOS.init({
      duration: 2000
    });
    $('.productDetailBox .titleBox_01').addClass('active');
    $('#subWrap .topBox').addClass('active');
  });

  //선택
  $('.selectBox .selectBtn').click(function () {

    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).next().slideUp();
    } else {
      $(this).addClass('active');
      $(this).next().slideDown();
    }

  })

  //수상 슬라이드 영역 
  $(".newsBox .slick").slick({
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
    speed: 1500,
    prevArrow: $('.newsBox .controlBox .prev'),
    nextArrow: $('.newsBox .controlBox .next'),
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  //비전 탭
  $('.visionBox .coreValuesList_0602 > li a').click(function () {

    if ($(this).parent().hasClass('active')) {
      $('.visionBox .coreValuesTextBox_0604').slideUp();
      $('.visionBox .coreValuesList_0602 > li').removeClass('active');
    } else {
      $('.visionBox .coreValuesTextBox_0604').hide();
      $('.visionBox .coreValuesList_0602 > li').removeClass('active');
      $(this).parent().addClass('active');
      $(this).parent().find('.coreValuesTextBox_0604').slideDown();
    }

    return false;

  });

  //입-출금 신청
  $('.applicationBox .contentBox').hide();
  $('.applicationBox .contentBox').first().show();

  $('.applicationBox .tabBox .tab').click(function () {

    $('.applicationBox .tabBox .tab').removeClass('active');
    $(this).addClass('active');

    let idx = $(this).index();

    $('.applicationBox .contentBox').hide();
    $('.applicationBox .contentBox').eq(idx).show();

  });

  $('.applicationBox .inquiryBtn').click(function () {
    $('.issuedModalWrap').addClass('active');
  });

  $('.issuedModalWrap .modalCloseBtn').click(function () {
    $('.issuedModalWrap').removeClass('active');
  });

  //자주 묻는 질문 
  $('.questionBox .questionList li a').click(function () {
    if ($(this).hasClass('active')) {
      $('.questionBox .questionList li a').removeClass('active');
      $('.questionBox .questionList li a').next().slideUp();

    } else {
      $('.questionBox .questionList li a').removeClass('active');
      $('.questionBox .questionList li a').next().slideUp();
      $(this).addClass('active');
      $(this).next().slideDown();
    }
    return false
  })

  //모달
  $('.detail_btn02').click(function () {
    $('.productModalWrap02').addClass('active');
  })
  $('.productModalCloseBtn02').click(function () {
    $('.productModalWrap02').removeClass('active');
  })

  $('.detail_btn01').click(function () {
    $('.productModalWrap01').addClass('active');
  })
  $('.productModalCloseBtn01').click(function () {
    $('.productModalWrap01').removeClass('active');
  })

  //이벤트 슬라이드 영역 
  $(".eventListBox .slick").slick({
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
    speed: 1500,
    prevArrow: $('.eventListBox .comControl .prev'),
    nextArrow: $('.eventListBox .comControl .next'),
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

});
