export default class Canvas {
	constructor() {}

	clear(context) {
		context.clearRect(0, 0, this.width, this.height);
	}
}
