import Graphic from './Graphic.js';
import Vector from './Vector.js';

export default class Camera {
	#viewMatrix;
	constructor(obj) {
		this.graphic = new Graphic();

		this._rotationMatrix = this.graphic.rotate(new Vector(obj.rotation, 0).reverse());
		this._translationMatrix = this.graphic.translate(new Vector(obj.position, 0).reverse());
		this._scaleMatrix = this.graphic.scale(new Vector(obj.scale, 1));

		this.perspective = obj.perspective;
		this.#viewMatrix = this.view();
	}

	updateView() {
		this.#viewMatrix = this.view();
	}

	get viewMatrix() {
		return this.#viewMatrix;
	}

	rotate(x = 0, y = 0, z = 0) {
		this.rotateZ(z);
		this.rotateY(y);
		this.rotateX(x);
	}

	rotateX(angle = 0) {
		this._rotationMatrix = this.graphic.multiply(
			this.graphic.rotateX(angle),
			this._rotationMatrix
		);
	}
	rotateY(angle = 0) {
		this._rotationMatrix = this.graphic.multiply(
			this.graphic.rotateY(angle),
			this._rotationMatrix
		);
	}
	rotateZ(angle = 0) {
		this._rotationMatrix = this.graphic.multiply(
			this.graphic.rotateZ(-angle),
			this._rotationMatrix
		);
	}

	translate(x = 0, y = 0, z = 0) {
		this.translateX(x);
		this.translateY(y);
		this.translateZ(z);
	}

	translateX(distance = 0) {
		const { right } = this.getDirection(this._rotationMatrix);

		const x = distance * right.x;
		const y = distance * right.y;
		const z = -distance * right.z;

		this._translationMatrix = this.graphic.multiply(
			this._translationMatrix,
			this.graphic.translate({ x, y, z })
		);
	}

	translateY(distance) {
		const { up } = this.getDirection(this._rotationMatrix);

		const x = distance * up.x;
		const y = distance * up.y;
		const z = -distance * up.z;

		this._translationMatrix = this.graphic.multiply(
			this._translationMatrix,
			this.graphic.translate({ x, y, z })
		);
	}

	translateZ(distance) {
		const { forward } = this.getDirection(this._rotationMatrix);

		const x = distance * forward.x;
		const y = distance * forward.y;
		const z = -distance * forward.z;

		this._translationMatrix = this.graphic.multiply(
			this._translationMatrix,
			this.graphic.translate({ x, y, z })
		);
	}

	scale(x = 1, y = 1, z = 1) {
		this.scaleX(x);
		this.scaleY(y);
		this.scaleZ(z);
	}

	scaleX(x = 1) {
		this.#viewMatrix = this.graphic.multiply(this.#viewMatrix, this.graphic.scaleX(x));
	}

	scaleY(y = 1) {
		this.#viewMatrix = this.graphic.multiply(this.#viewMatrix, this.graphic.scaleY(y));
	}

	scaleZ(z = 1) {
		this.#viewMatrix = this.graphic.multiply(this.#viewMatrix, this.graphic.scaleZ(z));
	}

	getDirection() {
		return this.graphic.getDirection(this.#viewMatrix);
	}

	getPosition() {
		return this.graphic.getPosition(this.#viewMatrix);
	}

	view() {
		let viewMatrix = this.graphic.primary();
		viewMatrix = this.graphic.multiply(viewMatrix, this._scaleMatrix);
		viewMatrix = this.graphic.multiply(viewMatrix, this._rotationMatrix);
		return this.graphic.multiply(viewMatrix, this._translationMatrix);
	}
}
