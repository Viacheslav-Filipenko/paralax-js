import Graphic from './Graphic.js';
import Vector from './Vector.js';

export default class Camera {
	constructor(obj) {
		this.graphic = new Graphic();

		this.position = new Vector(obj.position, 0);
		this.rotation = new Vector(obj.rotation, 0);
		this.scale = new Vector({}, 1);

		this.top = obj.top;
		this.bottom = obj.bottom;
		this.left = obj.left;
		this.right = obj.right;

		this.near = obj.near || 1;
		this.far = obj.far || 10;

		this._viewMatrix = this.graphic.view(this);
		this._projectionMatrix = this.graphic.project(this);
	}

	get viewMatrix() {
		return this._viewMatrix;
	}

	get projectionMatrix() {
		return this._projectionMatrix;
	}
}
