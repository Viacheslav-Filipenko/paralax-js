export default class Canvas {
	constructor() {
		this.canvas = null;
		this.context = null;
	}

	init(canvas) {
		this.canvas = canvas;
		this.context = canvas.getContext('2d');

		canvas.width = canvas.clientWidth;
		canvas.heigth = canvas.clientHeigth;

		this.width = canvas.width;
		this.height = canvas.height;

		if (window.devicePixelRatio > 1) {
			canvas.width = canvas.clientWidth * 2;
			canvas.height = canvas.clientHeight * 2;
			context.scale(2, 2);
		}
	}

	clear(context) {
		context.clearRect(0, 0, this.width, this.height);
	}

	draw(context, model) {
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
}
