$(function () {

  /* 사이드바 스크롤 */
  $(window).scroll(function () {
    let y = $(this).scrollTop() * 0.2;

    y = Math.max(0, Math.min(y, 300));

    $('.applicationSideBox').css(
      'transform',
      `translateY(${y}px)`
    );
    $('#searchContentBox').removeClass('active');
  });

  //헤더 
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#headerWrap').addClass('scroll');
    } else {
      $('#headerWrap').removeClass('scroll');
    }
  });

  $('#headerWrap').addClass('active');
  $(window).load(function () {
    setInterval(function () {
      $('#headerWrap').removeClass('active');
      setTimeout(function () {
        $('#headerWrap').addClass('active');
      }, 20);
    }, 5000);
  });

  $('#headerWrap .depth01 li h2 a').mouseover(function () {
    $('#headerWrap .depth01 li h2 a').removeClass('active');
    $(this).addClass('active');
    $('.subMenuWrap').removeClass('active');
    $(this).parents('li').find('.subMenuWrap').addClass('active');
  });

  $('#headerWrap .subMenuWrap').mouseleave(function () {
    $('#headerWrap .depth01 li h2 a').removeClass('active');
    $('.subMenuWrap').removeClass('active');
  });

  $('#headerWrap .headerTopWrap').mouseover(function () {
    $('#headerWrap .depth01 li h2 a').removeClass('active');
    $('.subMenuWrap').removeClass('active');
  });

  //검색
  $('#headerWrap .searchBtnBox .searchBtn').click(function () {
    $('#searchContentBox').toggleClass('active');
  });

  //모바일메뉴
  $('#headerWrap .mobileBtn').click(function () {
    $(this).hide();
    $('#headerWrap .mobileCloseBtn').fadeIn();
    $('#mobileMenuBox').addClass('active');
    $('.mobilebg').addClass('active');
    $('body').addClass('mobileNonScroll');
  });

  $('#headerWrap .mobileCloseBtn').click(function () {
    $(this).hide();
    $('#headerWrap .mobileBtn').fadeIn();
    $('#mobileMenuBox').removeClass('active');
    $('.mobilebg').removeClass('active');
    $('body').removeClass('mobileNonScroll');
  });

  $('#mobileMenuBox .mobileDepth01 > li').first().find('h2 > a').addClass('active');
  $('#mobileMenuBox .mobileDepth01 li h2 a').click(function () {
    $('#mobileMenuBox .mobileDepth01 > li > h2 > a').removeClass('active');
    $(this).addClass('active');
    $('#mobileMenuBox .mobileDepth02').hide();
    $(this).parents('li').find('.mobileDepth02').show();
  });

  $('#mobileMenuBox .mobileDepth02 li h3 a').click(function () {
    if ($(this).parent().parent().find('.mobileDepth03').length) {
      if ($(this).parent().hasClass('active')) {
        $(this).parent().parent().find('.mobileDepth03').slideUp();
        $(this).parent().removeClass('active');
      } else {
        $('#mobileMenuBox .mobileDepth02 li').find('.mobileDepth03').slideUp();
        $(this).parent().parent().find('.mobileDepth03').slideDown();
        $('#mobileMenuBox .mobileDepth02 li h3').removeClass('active');
        $(this).parent().addClass('active');
      }
      return false;
    }
  });
  $('#mobileMenuBox .mobileDepth02 li:has(ul)').children('h3').addClass('depth03');

  //사이트맵
  $('#headerWrap .sitemapBtn').click(function () {
    $('body').addClass('sitemapNonScroll');
    $('#sitemapBox').addClass('active');
  });
  $('#headerWrap .sitemapCloseBtn ').click(function () {
    $('body').removeClass('sitemapNonScroll');
    $('#sitemapBox').removeClass('active');
  });

});
