(function () {
  var tabsList = document.querySelectorAll('.day-tab li');
  for (var i = 0; i < tabsList.length; i++) {
    tabsList[i].addEventListener('click', function (event) {
      var content = $('.list.' + this.getAttribute('data-target'));
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      content.siblings('.list').removeClass('active');
      content.addClass('active');
    });
  }

  var schedule = document.querySelector('.schedule');
  var dayTab = document.querySelector('.day-tab');

  var scrollEvent = function (event) {
    if ( document.body.scrollTop > schedule.offsetTop && !dayTab.classList.contains('fixed') ) {
      dayTab.classList.add('fixed');
    } else if ( document.body.scrollTop < schedule.offsetTop && dayTab.classList.contains('fixed') ) {
      dayTab.classList.remove('fixed');
    }

  };
  window.addEventListener('scroll', scrollEvent);
}) ();
