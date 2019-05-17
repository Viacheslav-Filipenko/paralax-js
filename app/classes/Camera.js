import Graphic from './Graphic.js';
import Vector from './Vector.js';

export default class Camera {
	constructor(obj) {
		this.position = new Vector(obj.position, 0);
		this.rotation = new Vector(obj.rotation, 0);
		this.scale = new Vector({}, 1);

		this.top = obj.top;
		this.bottom = obj.bottom;
		this.left = obj.left;
		this.right = obj.right;

		this.props = obj.props;

		this.graphic = new Graphic();

		this.near = obj.near || 1;
		this.far = obj.far || 10;

		this._matrix = this.graphic.trasformation(this.graphic.primary(), this);
		this._projectionMatrix = this.graphic.project(this.graphic.primary(), this);
	}

	get matrix() {
		return this._matrix;
	}

	get projectionMatrix() {
		return this._projectionMatrix;
	}

	// project() {
	// 	this.projectionMatrix = this.graphic.project(this.projectionMatrix, this);
	// }
	// view() {
	// 	this.graphic.trasformation(this);
	// }
}
