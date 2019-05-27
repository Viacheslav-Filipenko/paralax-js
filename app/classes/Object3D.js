import Graphic from './Graphic.js';
import Vector from './Vector.js';

export default class Object3D {
	constructor(obj) {
		this.graphic = new Graphic();
		this.position = new Vector(obj.position, 0);

		this._rotationMatrix = this.graphic.rotate(new Vector(obj.rotation, 0));
		this._translationMatrix = this.graphic.translate(new Vector(obj.position, 0));
		this._scaleMatrix = this.graphic.scale(new Vector(obj.scale, 1));

		this._matrix = this.graphic.trasform(this);

		this.ViewAngleChange = () => {};

		this.ViewAngle = { x: 0, y: 0, z: 0 };
	}

	get matrix() {
		return this._matrix;
	}

	onViewAngleChange(callback) {
		this.ViewAngleChange = callback;
	}

	getPosition() {
		return this.graphic.getPosition(this._matrix);
	}

	getAngleToCamera(camera) {
		const x = this.getAngleToCameraX(camera);
		const y = this.getAngleToCameraY(camera);
		const z = this.getAngleToCameraZ(camera);

		this.ViewAngle = { x, y, z };
		console.log(this.ViewAngle);

		return this.ViewAngle;
	}

	getAngleToCameraX(camera) {
		const { right } = this.graphic.getDirection(this._rotationMatrix);
		const cameraRight = this.graphic.getDirection(camera._rotationMatrix).right;
		const angleX = Vector.getAngleBetweenTwoVectors(right, cameraRight);

		return Math.ceil(angleX);
	}
	getAngleToCameraY(camera) {
		const { up } = this.graphic.getDirection(this._rotationMatrix);
		const cameraUp = this.graphic.getDirection(camera._rotationMatrix).up;
		const angleY = Vector.getAngleBetweenTwoVectors(up, cameraUp);

		return Math.ceil(angleY);
	}

	getAngleToCameraZ(camera) {
		const { forward } = this.graphic.getDirection(this._rotationMatrix);
		const cameraForward = this.graphic.getDirection(camera._rotationMatrix).forward;
		const angleZ = Vector.getAngleBetweenTwoVectors(forward, cameraForward);

		return Math.ceil(angleZ);
	}
}
