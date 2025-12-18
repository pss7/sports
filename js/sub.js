
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
  $('.applicationScrollBox').each(function () {
    const $w = $(this);

    $w.scroll(function () {
      const st = $w.scrollTop();
      const h = $w.innerHeight();
      const sh = this.scrollHeight;

      if (sh > h + 1) {
        $w.addClass('hasScroll')
          .toggleClass('scrollEnd', st + h >= sh - 5);
      } else {
        $w.removeClass('hasScroll scrollEnd');
      }
    }).trigger('scroll');
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
  // $('.fileImgList li .fileBtn').click(function () {
  //   $(this).toggleClass('active');

  //   let total = $('.fileImgList .fileBtn').length;
  //   let selected = $('.fileImgList .fileBtn.active').length;

  //   if (total === selected && total > 0) {
  //     $('.checkAllBtn').addClass('active').text('전체 해제');
  //   } else {
  //     $('.checkAllBtn').removeClass('active').text('전체 선택');
  //   }
  // });

  // 전체 선택
  // $('.checkAllBtn').click(function () {
  //   let total = $('.fileImgList .fileBtn').length;
  //   let selected = $('.fileImgList .fileBtn.active').length;

  //   if (total === selected && total > 0) {
  //     $('.fileImgList .fileBtn').removeClass('active');
  //     $(this).removeClass('active').text('전체 선택');
  //   } else {
  //     $('.fileImgList .fileBtn').addClass('active');
  //     $(this).addClass('active').text('전체 해제');
  //   }
  // });

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

  const gap = 20;

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

  /* 육성현황 탭 */
  $('.trainingStatusTabContentBox .trainingStatusList').hide();
  $('.trainingStatusTabContentBox .trainingStatusList').first().show();

  $('.trainingStatusBox .comTabBtn .btn').click(function () {

    $('.trainingStatusBox .comTabBtn .btn').removeClass('active');
    $(this).addClass('active');

    let idx = $(this).index();

    $('.trainingStatusTabContentBox .trainingStatusList').hide();
    $('.trainingStatusTabContentBox .trainingStatusList').eq(idx).show();

  });

  //선택박스
  $('.customSelectBox .selectBtn').click(function () {

    if ($(this).hasClass('active')) {
      $(this).next().slideUp();
      $(this).removeClass('active');
    } else {
      $(this).next().slideDown();
      $(this).addClass('active');
    }

    return false;

  });

  //링크 복사 및 프린트
  $('.shareBtn').click(function (e) {
    e.preventDefault();

    const url = location.href;

    navigator.clipboard.writeText(url)
      .then(function () {
        alert('링크가 복사되었습니다.');
      })
      .catch(function () {
        alert('복사에 실패했습니다.');
      });
  });

  $('.printerBtn').click(function (e) {
    e.preventDefault();
    window.print();
  });



});
