// Modal
$('#reg_btn, #login_btn').on('click', function () {
	$('body, #navbar').css({
		overflow: 'auto',
		'padding-right': 0
	})
})

// section03 的 .active 問題 ----------------------------------------------
$('#race a').on('click', function () {
	$('#race a').removeClass('active')
	$(this).addClass('active')
})

// swiper ----------------------------------------------------------------
const swiper = new Swiper('#swiper', {
	direction: 'horizontal',
	loop: true,
	speed: 1000,
	spaceBetween: 15,
	centeredSlides: true, // 將 item 放置在中間，開始時第一張惠在正中間
	autoplay: {
		delay: 50000000
	},
	slidesPerView: 'auto', // 依照每個 item 的寬度自動調整顯示的數量
	effect: 'coverflow',
	coverflowEffect: {
		rotate: 50,
		stretch: 0,
		depth: 100,
		modifier: 1,
		slideShadows: true
	},

	breakpoints: {
		576: {
			slidesPerView: 2
		},
		768: {
			slidesPerView: 3
		},
		992: {
			slidesPerView: 3
		},
		1200: {
			slidesPerView: 4
		}
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: false
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}
})


// GSAP --------------------------------
//  註冊Plugin
gsap.registerPlugin(ScrollTrigger,ScrollToPlugin)

$('#navbar .main-link, .backtop a').each(function(index,link){
	$(this).on('click', function(val){
		val.preventDefault() //阻止 a 連結預設動作
		gsap.to($(window), {
			scrollTo: {
				y: `#section0${index + 1} ` ,
				offsetY: (index + 1 != 4 && index + 1 != 5) ? 250 : 0
			},
			duration:1.5,
			// gsap的速度可以去文件上找
			// ease: 'elastic.inOut',
			// ease: 'power4',
		})
	})
})

//  導覽列 active -------------------------------------

$('.main-link').each(function(index,link){
	let id = $(link).attr('href')
	gsap.to(link,{
		scrollTrigger: {
			trigger: `${id}`,
			start: 'top center',
			end: 'bottom center',
			toggleClass: {
				targets: link,
				className: 'active'
			},
			// markers: true
		}
	})
})


//  導覽列收合 -------------------------------------

const tween = gsap.from('#navbar',{
	yPercent: -100,
	paused: false,
	duration: 0.5,
	scrollTrigger: {
		start: 'top 60',
		end: () => '+=' + document.documentElement.scrollHeight, //抓到整個文件的高度
		onEnter(self){
			// console.log(self)
			// self.animation.paused(ture)
			self.animation.play()
		},
		// onUpdate 是在 scrollTrigger 處於活動狀態時,每次滾動時都會觸發
		onUpdate(self) {
			// console.log(self.direction)
			self.direction === -1 ? self.animation.play() : self.animation.reverse() // -1 往上正向撥放, 1往下反向撥放

		},
		// markers: true,
		
	}
	
})

// 霧的動畫------------------------------

$('.fog').each(function (index,fog) {
	gsap.set(fog, {
		width: '100%',
		height: '100%',
		background: `url('./images/fog.png') no-prepeat center/80%`,
		opacity: 0.8,
		position: 'absolute',
		top: 'random(0,100)' + '%',
		x: function (i,fog,fogs){
			// console.log(index,fog,fogs)
			// 0,1,2,3
			// 0,2(一組) => 畫面外的左邊
			// 1,3(一組) => 畫面外的右邊
			return index % 2 === 0 ? -$(window).width() : $(window).width()
		}
	})
	// 當動畫重複播放時,將霧的位置隨機設定 
	gsap.to(fog,{
		x: function (i,fog,fogs){
			return index % 2 == 1 ? -$(window).width() : $(window).width()
		},
		// 當動畫重複播放時,將霧的位置隨機設定
		onRepeat(){
			$(fog).css({
				top: gsap.utils.random(0,100)+ '%'
			})
		},
		duration: 30,
		repeat: -1,
		ease: 'none'
	})
	
})

// 星空背景 ----------------------------
gsap.to('body',{
	scrollTrigger:{
		trigger:'body',
		start: 'top 0%',
		end: 'bottom 0%',
		scrub: 5,
		// markers: true,
	},
	backgroundPosition: '50% 100%',
	// scale: 0,
	// opacity:0,
	// rotation:3600,
	ease:'none',
})

// backtop -------------------------------------

gsap.to('.backtop',{
	scrollTrigger: {
		trigger: '#footer',
		start: 'top bottom',
		end: '100% bottom',
		toggleActions: 'play none none reverse',
		// markers:true
	},
	display: 'block',
	opacity: 1,
	duration: 1,
})


// 流星 -----------------------------------------
// 1.創建流星的數目
function createStar(starNumber){
	for (let i = 0 ; i < starNumber; i++) {
		$('.shooting_star').append('<div class=star></div>')
	}
	// 利用 js的方法轉陣列 (如果是nodeList類別的話可以用的方法比較少)
	// const stars = document.querySelectorAll('.star')
	// const stars = Array.from(document.querySelectorAll('.star'))
	// 利用 gsap的方法轉陣列
	const stars = gsap.utils.toArray('.star')
	// console.log(stars)

	return stars
}

// 2.設定補間動畫的預設值
function setStarTween(stars) {
	gsap.set('shooting_star',{
		perspective: 800 // 讓整個舞台有 3D 效果 (透視遠近的感覺)
	})

	stars.forEach((star,index) => {
		gsap.set(star, {
			transformOrigin: '0 50%', //以左邊中央為基準點
			position: 'absolute',
			left: gsap.utils.random($(window).width()/2, $(window).width() * 2), // 假設 window 寬度 1000 , 1000/2 = 500 , 1000*2 = 2000
			top:gsap.utils.random(-100,-200),
			rotation: -25,
		})
	})
	return stars
}

// 3.設定流星群的動畫
function playStarTimeline(stars) {
	const tl = gsap.timeline({
		repeat: -1
	})
	tl.to(stars, {
		x: `-=${$(window).width() * 1.5}`, //流星往左
		y: `+=${$(window).height() * 1.5}`, //流星往下
		z: `random(-100, 500)`,
		duration: 'random(0.5, 3, 0.1)', // 0.5、0.6、0.7....3 其中一個
		ease: 'none'
	})
}

// 管道流程 , 會產生一個入口函式
// 管道設計模式,可以將一整個功能拆解成多個小功能
//  會將函式功能串接在一起，第一個函式回傳值會傳給第二個函式，第二個函式回傳值會傳給第三個函式，以此類推
const playStar = gsap.utils.pipe(createStar, setStarTween, playStarTimeline)
playStar(15)