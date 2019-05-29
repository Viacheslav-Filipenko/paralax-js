import Object3D from './Object3D.js';

export default class Rectangle extends Object3D {
	constructor(obj) {
		super(obj.transformation);
		this.properties = obj.properties;
		this.classList = obj.classList;
		this.src = obj.src;
		this.type = obj.type;
	}

	getAngle(camera) {
		super.getAngleToCamera(camera);
	}

	onViewAngleChange(callback) {
		super.onViewAngleChange(callback);
	}

	getPosition() {
		return super.getPosition();
	}
}
