var Welcome = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Welcome ()
    {
        Phaser.Scene.call(this, { key: 'welcome' })

		this.centerX = game.config.width / 2
		this.centerY = game.config.height / 2

		this.vegas
		this.slots
		this.showdown_off
		this.showdown_active = {}
		this.bolt
		this.mustdrop
		this.player
	},
	preload () {
		this.load.setBaseURL('./assets/showdown')

		this.load.image('header', 'header.png')
		this.load.image('showdown-off', 'showdown-off.png')
		this.load.image('slots', 'slots@2x.png')
		this.load.image('vegas', 'vegas@2x.png')
		this.load.image('s', 's@2x.png')
		this.load.image('h', 'h@2x.png')
		this.load.image('o1', 'o-1@2x.png')
		this.load.image('w1', 'w-1@2x.png')
		this.load.image('d', 'd@2x.png')
		this.load.image('o2', 'o-2@2x.png')
		this.load.image('w2', 'w-2@2x.png')
		this.load.image('n', 'n@2x.png')
		this.load.image('bolt', 'bolt@2x.png')
		this.load.image('mustdrop', 'must_drop.png')
	},
	create () {
		this.add.image(this.centerX, game.config.height - 20, 'header')

		this.showdown_off = this.add.image(this.centerX, this.centerY, 'showdown-off').setScale(0.75, 0.75)

		this.showdown_active['s'] = this.add.image(this.centerX*0.22, this.centerY*1.20, 's').setScale(0.37, 0.37).setAlpha(0)
		this.showdown_active['h'] = this.add.image(this.centerX*0.45, this.centerY*1.20, 'h').setScale(0.37, 0.37).setAlpha(0)
		this.showdown_active['o1'] = this.add.image(this.centerX*0.62, this.centerY*1.18, 'o1').setScale(0.37, 0.37).setAlpha(0)
		this.showdown_active['w1'] = this.add.image(this.centerX*0.87, this.centerY*1.12, 'w1').setScale(0.37, 0.37).setAlpha(0)
		this.showdown_active['d'] = this.add.image(this.centerX*1.14, this.centerY*1.07, 'd').setScale(0.37, 0.37).setAlpha(0)
		this.showdown_active['o2'] = this.add.image(this.centerX*1.34, this.centerY*1.10, 'o2').setScale(0.37, 0.37).setAlpha(0)
		this.showdown_active['w2'] = this.add.image(this.centerX*1.54, this.centerY*1.18, 'w2').setScale(0.37, 0.37).setAlpha(0)
		this.showdown_active['n'] = this.add.image(this.centerX*1.79, this.centerY*1.20, 'n').setScale(0.37, 0.37).setAlpha(0)

		this.vegas = this.add.image(this.centerX*0.62, this.centerY*0.42, 'vegas').setScale(0.37, 0.37)
		this.slots = this.add.image(this.centerX*1.45, this.centerY*0.42, 'slots').setScale(0.37, 0.37)

		this.bolt = this.add.image(this.centerX*1.04, this.centerY*0.35, 'bolt').setScale(0.35, 0.35).setAlpha(0)
		this.mustdrop = this.add.image(this.centerX, this.centerY*1.65, 'mustdrop').setScale(0.5, 0.5).setAlpha(0)

		this.add.tween({
			targets: [this.vegas, this.slots],
			ease: 'Sine.easeInOut',
			duration: 200,
			delay: 0,
			alpha: {
				getStart: () => 0,
				getEnd: () => 1
			},
			loop: 0,
			yoyo: false
		})
		this.add.tween({
			targets: [this.vegas, this.slots],
			ease: 'Sine.easeInOut',
			duration: 100,
			delay: 750,
			alpha: {
				getStart: () => 0,
				getEnd: () => 1
			},
			loop: 1,
			yoyo: false
		})
		this.add.tween({
			targets: [this.showdown_active['s']],
			ease: 'Sine.easeInOut',
			duration: 100,
			delay: 400,
			alpha: {
				getStart: () => 0,
				getEnd: () => 1
			},
			loop: 0,
			yoyo: false
		})
		this.add.tween({
			targets: [this.showdown_active['h']],
			ease: 'Sine.easeInOut',
			duration: 100,
			delay: 600,
			alpha: {
				getStart: () => 0,
				getEnd: () => 1
			},
			loop: 0,
			yoyo: false
		})
		this.add.tween({
			targets: [this.showdown_active['o1']],
			ease: 'Sine.easeInOut',
			duration: 100,
			delay: 800,
			alpha: {
				getStart: () => 0,
				getEnd: () => 1
			},
			loop: 0,
			yoyo: false
		})
		this.add.tween({
			targets: [this.showdown_active['w1']],
			ease: 'Sine.easeInOut',
			duration: 100,
			delay: 1000,
			alpha: {
				getStart: () => 0,
				getEnd: () => 1
			},
			loop: 0,
			yoyo: false
		})
		this.add.tween({
			targets: [this.showdown_active['d']],
			ease: 'Sine.easeInOut',
			duration: 100,
			delay: 1200,
			alpha: {
				getStart: () => 0,
				getEnd: () => 1
			},
			loop: 0,
			yoyo: false
		})
		this.add.tween({
			targets: [this.showdown_active['o2']],
			ease: 'Sine.easeInOut',
			duration: 100,
			delay: 1400,
			alpha: {
				getStart: () => 0,
				getEnd: () => 1
			},
			loop: 0,
			yoyo: false
		})
		this.add.tween({
			targets: [this.showdown_active['w2']],
			ease: 'Sine.easeInOut',
			duration: 100,
			delay: 1600,
			alpha: {
				getStart: () => 0,
				getEnd: () => 1
			},
			loop: 0,
			yoyo: false
		})
		this.add.tween({
			targets: [this.showdown_active['n']],
			ease: 'Sine.easeInOut',
			duration: 100,
			delay: 1800,
			alpha: {
				getStart: () => 0,
				getEnd: () => 1
			},
			loop: 0,
			yoyo: false
		})
		this.add.tween({
			targets: [this.mustdrop],
			ease: 'Sine.easeInOut',
			duration: 200,
			delay: 2000,
			alpha: {
				getStart: () => 0,
				getEnd: () => 1
			},
			loop: 0,
			yoyo: false
		})
		this.add.tween({
			targets: [this.mustdrop],
			ease: 'Sine.easeInOut',
			duration: 100,
			delay: 2400,
			alpha: {
				getStart: () => 0,
				getEnd: () => 1
			},
			loop: 1,
			yoyo: false
		})
		this.add.tween({
			targets: [this.bolt],
			ease: 'Sine.easeInOut',
			duration: 150,
			delay: 1000,
			alpha: {
				getStart: () => 0,
				getEnd: () => 1
			},
			loop: 0,
			yoyo: false
		})
		setInterval(function() {
			console.log("bolt")
			this.add.tween({
				targets: [this.bolt],
				ease: 'Sine.easeInOut',
				duration: 150,
				delay: 1000,
				alpha: {
					getStart: () => 0,
					getEnd: () => 1
				},
				loop: 1,
				yoyo: false
			})
		}.bind(this), 10000)
		
        // this.input.on('pointerup', function (pointer) {
		// 	this.cameras.main.once('camerafadeoutcomplete', function (camera) {
		// 		this.scene.scene.start('demo')
		// 		this.scene.scene.stop('welcome')
		// 		camera.fadeIn(500)
		// 	})
		// 	this.cameras.main.fadeOut(500)
        // }, this);

	},
	update (time, delta) {
	}
})

var config = {
		type: Phaser.CANVAS,
		width: 650,
		height: 291,
		parent: 'header',
		physics: {
			default: 'arcade',
			arcade: {
				gravity: { y: 0 }
			}
		},
		scene: [ Welcome ]
	},
	game = new Phaser.Game(config)

resize()
window.addEventListener("resize", resize, false)

function resize() {
	var canvas = document.querySelector("canvas")

	if(!canvas) return

	console.log("canvas", canvas)

	var windowWidth = 650,
		windowHeight = window.innerHeight,
		windowRatio = windowWidth / windowHeight,
		gameRatio = game.config.width / game.config.height

	if (windowRatio < gameRatio) {
		canvas.style.width = windowWidth + "px"
		canvas.style.height = (windowWidth / gameRatio) + "px"
	} else {
		canvas.style.width = (windowHeight * gameRatio) + "px"
		canvas.style.height = windowHeight + "px"
	}
}