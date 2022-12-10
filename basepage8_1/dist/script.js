/*
 * github.com/n8maninger/button-hover
 */
(function() {
	'use strict';

	let mousePos = { x: 0, y: 0 };

	/**
	 * Resizes all canvas elements tied to the border code
	 */
	function sizeCanvas() {
		const canvas = document.querySelectorAll('.ms-border > canvas.ms-border-canvas');
		let i = 0,
			count = canvas.length;

		for(; i < canvas.length; i++) {
			canvas[i].setAttribute('width', `${canvas[i].parentNode.clientWidth}px`);
			canvas[i].setAttribute('height', `${canvas[i].parentNode.clientHeight}px`);
		}
	}

	/**
	 * Sets the mouse position on mouse move
	 * @param {*} e The mouse event
	 */
	function setMousePosition(e) {
		mousePos.x = e.clientX;
		mousePos.y = e.clientY;
	}

	/**
	 * Checks if two rectangle objects collide
	 * @param {*} r1 The first rectangle
	 * @param {*} r2 The second rectangle
	 */
	function doCollide(r1, r2) {
		if (r1.x1 > r2.x2 || r2.x1 > r1.x2)
			return false;

		if (r1.y2 < r2.y1 || r1.y2 < r2.y1)
			return false;

		return true;
	}

	/**
	 * Draws the border on the specified canvas element
	 * @param {*} canvas the canvas element to draw to
	 */
	function drawBorders(canvas) {
		const context = canvas.getContext('2d'),
			rect = canvas.getBoundingClientRect(),
			midX = rect.width / 2,
			midY = rect.height / 2,
			rad = Math.max(midX, midY) / 2,
			normalizedMouse = {
				x: mousePos.x - rect.left,
				y: mousePos.y - rect.top,
			},
			r1 = {
				x1: 0,
				y1: 0,
				x2: rect.width,
				y2: rect.height,
			},
			r2 = {
				x1: normalizedMouse.x - rad,
				y1: normalizedMouse.y - rad,
				x2: normalizedMouse.x + rad,
				y2: normalizedMouse.y + rad,
			};
		
		context.globalCompositeOperation = "source-over";
		context.clearRect(0, 0, rect.width, rect.height);

		if (doCollide(r1, r2)) {
			const grad = context.createRadialGradient(normalizedMouse.x, normalizedMouse.y, 1, normalizedMouse.x, normalizedMouse.y, rad);

			grad.addColorStop(0, 'rgba(230, 230, 230, 1)');
			grad.addColorStop(1, 'rgba(230, 230, 230, 0)');
			
			context.beginPath();
			context.fillStyle = 'rgb(191, 191, 191)';

			context.fillRect(0, 0, rect.width, 1);
			context.fillRect(0, rect.height - 1, rect.width, 1);
			context.fillRect(0, 0, 1, rect.height);
			context.fillRect(rect.width - 1, 0, 1, rect.height);

			context.globalCompositeOperation = 'destination-in';

			context.beginPath();
			context.fillStyle = grad;
			context.arc(normalizedMouse.x, normalizedMouse.y, rad, 0, Math.PI*2, false);
			context.fill();
		}
	}

	/**
	 * The animation loop. Draws to all current canvases using requestAnimationFrame.
	 */
	function animate() {
		let canvas = document.querySelectorAll('.ms-border > canvas.ms-border-canvas'),
			i = 0,
			count = canvas.length;

		for(; i < count; i++) {
			drawBorders(canvas[i]);
		}

		window.requestAnimationFrame(animate);
	}

	/**
	 * Initializes all new border elements. Creates the canvas if necessary.
	 */
	function initCanvas() {
		const borderEles = document.querySelectorAll('.ms-border');
		let i = 0,
			count = borderEles.length;

		for(; i < count; i++) {
			let b = borderEles[i];

			if(!b.querySelector('canvas.ms-border-canvas')) {
				let canvas = document.createElement('canvas');

				canvas.classList.add('ms-border-canvas');
				canvas.style.position = 'absolute';
				canvas.style.top = 0;
				canvas.style.left = 0;
				canvas.style.pointerEvents = 'none';
				canvas.style.zIndex = -1;

				canvas.setAttribute('width', `${b.clientWidth}px`);
				canvas.setAttribute('height', `${b.clientHeight}px`);
				b.appendChild(canvas);
			}
		}

		sizeCanvas();
		window.requestAnimationFrame(animate);
	}

	window.addEventListener('resize', sizeCanvas);
	window.addEventListener('mousemove', setMousePosition);


	initCanvas();
})();
