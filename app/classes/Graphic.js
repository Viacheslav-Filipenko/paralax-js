import MatrixService from './Matrix.js';

export default class Graphic {
	constructor() {
		this.matrixService = new MatrixService();
	}

	primary() {
		return this.matrixService.getPrimaryMatrix();
	}

	scale(matrix, vector) {
		const scaleMatrix = this.matrixService.getScaleMatrix(vector);
		return this.multiply(matrix, scaleMatrix);
	}

	multiply(...matrix) {
		return this.matrixService.multiply(...matrix);
	}

	rotate(matrix, rotation) {
		Object.keys(rotation)
			.reverse()
			.forEach(axios => {
				const rotationMatrix = this.matrixService.getRotationMatrix(axios, rotation[axios]);

				if (axios === 'z') {
					matrix = this.multiply(matrix, math.transpose(rotationMatrix));
				} else {
					matrix = this.multiply(matrix, rotationMatrix);
				}
			});
		return matrix;
	}

	translate(matrix, vector) {
		const translationMatrix = this.matrixService.getTranslationMatrix(vector);
		return this.multiply(matrix, translationMatrix);
	}

	project(camera) {
		const projection = this.matrixService.getProjectionMatrix(camera);
		return projection;
	}

	view(camera) {
		const scale = this.scale(this.primary(), camera.scale);
		const result = this.rotate(scale, camera.rotation.reverse());
		return this.translate(result, camera.position.reverse());
	}

	trasformation(model) {
		let result = this.scale(this.primary(), model.scale);
		result = this.rotate(result, model.rotation);
		result = this.translate(result, model.position);
		return result;
	}

	world(model, world) {
		return this.multiply(model.matrix, world.matrix);
	}

	getMVP(model, world, camera) {
		const modelToWorld = this.multiply(model.matrix, world.matrix);

		const modelToView = this.multiply(camera.viewMatrix, modelToWorld);

		return modelToView;
	}
}
