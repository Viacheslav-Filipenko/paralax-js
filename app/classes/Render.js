import { Html } from './render/Html.js.js.js';
import { Canvas } from './render/Canvas.js.js.js';

export default class Render {
	constructor() {
		this.perspetive = 0;
		this.width = 0;
		this.height = 0;
		this.projectionCenterX = 0;
		this.projectionCenterY = 0;
		this.resizeTimeout = null;
		this.html = new Html();
		this.canvas = new Canvas();
		this.elements = [];
	}

	// getMVP(camera, model) {
	//     // const projection = camera.projection();
	//     // const view = camera.view();
	//     return model.matrix;
	// }

	// renderCanvas(canvas) {

	//     canvas.width = canvas.clientWidth;
	//     canvas.heigth = canvas.clientHeigth;
	//     const context = canvas.getContext("2d");

	//     if (window.devicePixelRatio > 1) {
	//         canvas.width = canvas.clientWidth * 2;
	//         canvas.heigth = canvas.clientHeigth * 2;
	//         context.scale(2, 2);
	//     }

	//     let width = canvas.offsetWidth;
	//     let heigth = canvas.offsetHeight;
	// }

	getProjectionCanvas(position) {
		const projection = {};

		projection.scale = this.perspetive / (this.perspetive + position.z);

		console.log(projection.scale);

		this.projectionCenterX = this.width / 2;
		this.projectionCenterY = this.height / 2;

		projection.x = position.x * projection.scale + this.projectionCenterX;
		projection.y = position.y * projection.scale + this.projectionCenterY;

		return projection;
	}

	clearCanvas(context) {
		context.clearRect(0, 0, this.width, this.height);
	}

	drawCanvas(context, model) {
		const projection = this.getProjectionCanvas(model.position);
		context.globalAlpha = Math.abs(1 - model.position.z / this.perspetive);

		const x = projection.x - model.properties.width / 2;
		const y = projection.y - model.properties.height / 2;

		if (model.position.z >= -100) {
			context.fillRect(
				x,
				y,
				model.properties.width * projection.scale,
				model.properties.height * projection.scale
			);
		}
	}

	getProjectionScale(position) {
		return this.perspetive / (this.perspetive + position);
	}

	checkPixelRatio() {
		return window.devicePixelRatio > 1 ? true : false;
	}

	drawRectangle(context, models) {
		models.forEach(model => {
			context.beginPath();
			context.moveTo(
				model.leftBottom.x * this.getProjectionScale(model.leftBottom.z),
				model.leftBottom.y * this.getProjectionScale(model.leftBottom.z)
			);
			context.lineTo(
				model.leftTop.x * this.getProjectionScale(model.leftTop.z),
				model.leftTop.y * this.getProjectionScale(model.leftTop.z)
			);
			context.lineTo(
				model.rightTop.x * this.getProjectionScale(model.rightTop.z),
				model.rightTop.y * this.getProjectionScale(model.rightTop.z)
			);
			context.lineTo(
				model.rightBottom.x * this.getProjectionScale(model.rightBottom.z),
				model.rightBottom.y * this.getProjectionScale(model.rightBottom.z)
			);
			context.fill();
		});
	}

	renderCanvas(canvas, models) {
		canvas.width = canvas.clientWidth;
		canvas.heigth = canvas.clientHeigth;

		const context = canvas.getContext('2d');

		this.width = canvas.width;
		this.height = canvas.height;

		if (this.checkPixelRatio()) {
			canvas.width = canvas.clientWidth * 2;
			canvas.height = canvas.clientHeight * 2;
			context.scale(2, 2);
			console.log('here');
		}

		this.clearCanvas(context);

		models.forEach(model => {
			this.drawCanvas(context, model);
		});

		this.subscribeResizeCanvas();
	}

	// onResizeCanvas() {
	// 	try {
	// 		clearTimeout(this.resizeTimeout);
	// 		this.resizeTimeout = setTimeout(this.afterResizeCanvas, 500);
	// 	} catch (error) {
	// 		console.log(error.message);
	// 	}
	// }

	// subscribeResizeCanvas() {
	// 	document.addEventListener('resize', this.onResizeCanvas);
	// }

	// afterResizeCanvas() {
	// 	const width = canvas.offsetWidth;
	// 	const height = canvas.offsetHeight;

	// 	console.log('here');

	// 	const context = canvas.getContext('2d');

	// 	if (this.checkPixelRatio()) {
	// 		canvas.width = canvas.clientWidth * 2;
	// 		canvas.height = canvas.clientHeight * 2;
	// 		context.scale(2, 2);
	// 	} else {
	// 		canvas.width = width;
	// 		canvas.height = height;
	// 	}

	// 	this.projectionCenterX = width / 2;
	// 	this.projectionCenterY = height / 2;
	// }
}
