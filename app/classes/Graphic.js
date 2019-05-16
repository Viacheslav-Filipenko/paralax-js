import Matrix from './Matrix.js';
import { checkInfinity } from '../utils/Math.js';

export default class Graphic {
	constructor() {
		this.matrixService = new Matrix();
	}

	scale(matrix, vector) {
		const scaleMatrix = this.matrixService.getScaleMatrix(vector);
		return this.matrixService.multiply(matrix, scaleMatrix);
	}

	rotate(matrix, rotation = {}) {
		Object.keys(rotation).forEach(axios => {
			const rotationMatrix = this.matrixService.getRotationMatrix(axios, rotation[axios]);

			matrix = this.matrixService.multiply(matrix, rotationMatrix);
		});

		return matrix;
	}

	translate(matrix, vector) {
		const translationMatrix = this.matrixService.getTranslationMatrix(vector);
		return this.matrixService.multiply(matrix, translationMatrix);
	}

	project(matrix, cameraPosition) {
		const p = checkInfinity(1 / cameraPosition.x) ? 0 : 1 / cameraPosition.x;
		const q = checkInfinity(1 / cameraPosition.y) ? 0 : 1 / cameraPosition.y;
		const r = checkInfinity(1 / cameraPosition.z) ? 0 : 1 / cameraPosition.z;

		const projectionMatrix = math.matrix([
			[1, 0, 0, p],
			[0, 1, 0, q],
			[0, 0, 1, r],
			[0, 0, 0, 1]
		]);

		return this.matrixService.multiply(matrix, projectionMatrix);
	}

	getMVP(model, scene) {
		model.matrix = this.rotate(model.matrix, model.rotation);
		model.matrix = this.translate(model.matrix, model.position);
		const sceneMatrix = this.translate(scene.matrix, scene.position);
		model.matrix = this.matrixService.multiply(model.matrix, sceneMatrix);

		return model.matrix;
	}

	// getProjectionCanvas(position) {
	// 	const projection = {};

	// 	projection.scale = this.perspetive / (this.perspetive + position.z);

	// 	console.log(projection.scale);

	// 	this.projectionCenterX = this.width / 2;
	// 	this.projectionCenterY = this.height / 2;

	// 	projection.x = position.x * projection.scale + this.projectionCenterX;
	// 	projection.y = position.y * projection.scale + this.projectionCenterY;

	// 	return projection;
	// }
}
