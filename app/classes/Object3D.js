import Matrix from './Matrix.js';

const MatrixService = new Matrix();

export default class Object3D {
	constructor(transformation) {
		transformation.rotation = transformation.rotation || {};
		transformation.scale = transformation.scale || {};
		transformation.position = transformation.position || {};

		this.position = {
			x: transformation.position.x || 0,
			y: transformation.position.y || 0,
			z: transformation.position.z || 0
		};
		this.rotation = {
			x: transformation.rotation.x || 0,
			y: transformation.rotation.y || 0,
			z: transformation.rotation.z || 0
		};
		this.scale = {
			x: transformation.scale.x || 1,
			y: transformation.scale.y || 1,
			z: transformation.scale.z || 1
		};
		this.matrix = MatrixService.getPrimaryMatrix();
	}
}
