/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js', {
	particles: {
		number: {
			value: 10,
			density: {
				enable: true,
				value_area: 800
			}
		},
		color: {
			value: '#efff00'
		},
		shape: {
			type: 'circle',
			stroke: {
				width: 4,
				color: '#ffffff'
			},
			polygon: {
				nb_sides: 5
			},
			image: {
				src: 'https://upload.wikimedia.org/wikipedia/zh/8/87/1000NTD-new.jpg',
				width: 250,
				height: 100
			}
		},
		opacity: {
			value: 0.5,
			random: true,
			anim: {
				enable: false,
				speed: 1.8677775882930938,
				opacity_min: 0.1,
				sync: false
			}
		},
		size: {
			value: 112.2388442605866,
			random: true,
			anim: {
				enable: false,
				speed: 92.57680220235335,
				size_min: 2.436231636904035,
				sync: false
			}
		},
		line_linked: {
			enable: false,
			distance: 1619.446181474178,
			color: '#ffffff',
			opacity: 0.625330703737554,
			width: 1.4430708547789706
		},
		move: {
			enable: true,
			speed: 3.206824121731046,
			direction: 'left',
			random: true,
			straight: true,
			out_mode: 'bounce',
			bounce: false,
			attract: {
				enable: true,
				rotateX: 3928.359549120531,
				rotateY: 3607.6771369474263
			}
		}
	},
	interactivity: {
		detect_on: 'canvas',
		events: {
			onhover: {
				enable: false,
				mode: 'bubble'
			},
			onclick: {
				enable: true,
				mode: 'repulse'
			},
			resize: true
		},
		modes: {
			grab: {
				distance: 400,
				line_linked: {
					opacity: 0.5
				}
			},
			bubble: {
				distance: 400,
				size: 4,
				duration: 0.3,
				opacity: 1,
				speed: 3
			},
			repulse: {
				distance: 511.4885114885115,
				duration: 0.4
			},
			push: {
				particles_nb: 4
			},
			remove: {
				particles_nb: 2
			}
		}
	},
	retina_detect: true
})
