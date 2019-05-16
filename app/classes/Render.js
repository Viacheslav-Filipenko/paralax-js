import Html from './render/Html.js';
import Canvas from './render/Canvas.js';

export default class Render {
	constructor() {
		this.html = new Html();
		this.canvas = new Canvas();
		this.elements = [];
	}
}
