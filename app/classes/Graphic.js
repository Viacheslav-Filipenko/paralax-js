import Matrix from './Matrix.js';

export default class Graphic {
	constructor() {
		this.matrixService = new Matrix();
	}

	primary() {
		return this.matrixService.getPrimaryMatrix();
	}

	scale(matrix, vector) {
		const scaleMatrix = this.matrixService.getScaleMatrix(vector);
		return this.matrixService.multiply(matrix, scaleMatrix);
	}

	rotate(matrix, rotation) {
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

	project(matrix, camera) {
		const projection = this.matrixService.getProjectionMatrix(camera);
		return this.matrixService.multiply(matrix, projection);
	}

	view(matrix, camera) {
		let result = this.rotate(matrix, camera.rotation.reverse());
		result = this.translate(result, camera.position.reverse());
		return result;
	}

	trasformation(matrix, model) {
		let result = this.scale(matrix, model.scale);
		result = this.rotate(result, model.rotation);
		result = this.translate(result, model.position);
		return result;
	}

	world(model, world) {
		const result = this.matrixService.multiply(model.matrix, world.matrix);
		return result;
	}

	getMVP(model, world, camera) {
		const modelToWorldMatrix = this.world(model, world);
		const viewMatrix = this.view(this.primary(), camera);
		const viewModelMatrix = this.matrixService.multiply(viewMatrix, modelToWorldMatrix);
		const ModelViewProjection = this.matrixService.multiply(
			camera.projectionMatrix,
			viewModelMatrix
		);
		console.log(viewModelMatrix, camera.projectionMatrix);
		// model.matrix = this.project(model.matrix, camera);

		return ModelViewProjection;
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
