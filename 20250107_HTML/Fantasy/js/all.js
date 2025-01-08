
// Model 點擊時板會跑掉
$('#reg_btn, #login_btn').on('click', function (){
  $('body, #navbar').css({
    overflow: 'auto',
    'padding-right': 0
  })
})

// section03 的 .active 問題
$('#race a').on('click', function(){
  $('#race a').removeClass('active')
  console.log($(this))
  $(this).addClass('active')
})

// swiper
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  speed: 1000,
  spaceBetween:15,
  centeredSlides:true, // 將 item 放置在中間,開始時第一張會在正中間
  autoplay: {
    delay: 5000
  },
  slidesPerView: 'auto', // 依照每個 item 的寬度自動調整顯示的數量
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  
  breakpoints:{
    576:{
      slidesPerView:2
    },
    768:{
      slidesPerView:3
    },
    992:{
      slidesPerView:3
    },
    1200:{
      slidesPerView:4
    },
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }

})