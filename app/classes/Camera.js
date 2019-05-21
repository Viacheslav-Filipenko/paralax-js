import Graphic from './Graphic.js';
import Vector from './Vector.js';

export default class Camera {
	constructor(obj) {
		this.graphic = new Graphic();

		this.position = new Vector(obj.position, 0);
		this.rotation = new Vector(obj.rotation, 0);
		this.scale = new Vector(obj.scale, 1);

		this.perspective = obj.perspective;

		this._viewMatrix = this.graphic.view(this);
		this._projectionMatrix = this.graphic.project(this);
	}

	updateView() {
		this._viewMatrix = this.graphic.view(this);
	}

	get viewMatrix() {
		return this._viewMatrix;
	}

	get projectionMatrix() {
		return this._projectionMatrix;
	}
}
