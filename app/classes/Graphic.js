import MatrixService from './Matrix.js';
import Vector from './Vector.js';

export default class Graphic {
	constructor() {
		this.matrixService = new MatrixService();
	}

	primary() {
		return this.matrixService.getPrimaryMatrix();
	}

	scale(vector) {
		return this.matrixService.getScaleMatrix(vector);
	}

	scaleX(x = 1) {
		return this.matrixService.getScaleMatrix({ x });
	}

	scaleY(y = 1) {
		return this.matrixService.getScaleMatrix({ y });
	}

	scaleZ(z = 1) {
		return this.matrixService.getScaleMatrix({ z });
	}

	multiply(...matrix) {
		return this.matrixService.multiply(...matrix);
	}

	rotate(rotation) {
		let matrix = this.primary();

		Object.keys(rotation)
			.reverse()
			.forEach(axios => {
				const rotationMatrix = this.matrixService.getRotationMatrix(axios, rotation[axios]);

				matrix = this.multiply(matrix, rotationMatrix);
			});
		return matrix;
	}

	rotateX(angle = 0) {
		const rotationMatrix = this.matrixService.getRotationMatrix('x', angle);
		return this.multiply(this.primary(), rotationMatrix);
	}

	rotateY(angle = 0) {
		const rotationMatrix = this.matrixService.getRotationMatrix('y', angle);
		return this.multiply(this.primary(), rotationMatrix);
	}

	rotateZ(angle = 0) {
		const rotationMatrix = this.matrixService.getRotationMatrix('z', angle);
		return this.multiply(this.primary(), rotationMatrix);
	}

	translate(vector) {
		return this.matrixService.getTranslationMatrix(vector);
	}

	trasform(model) {
		let result = this.primary();
		result = this.multiply(result, model._scaleMatrix);
		result = this.multiply(result, model._rotationMatrix);
		return this.multiply(result, model._translationMatrix);
	}

	getDirection(matrix) {
		const right = this.getDirectionRight(matrix);
		const up = this.getDirectionUp(matrix);
		const forward = this.getDirectionForward(matrix);
		return { right, up, forward };
	}

	getPosition(matrix) {
		const _matrix = matrix._data;
		const x = _matrix[0][3];
		const y = _matrix[1][3];
		const z = _matrix[2][3];

		return { x, y, z };
	}

	getDirectionRight(matrix) {
		const _matrix = matrix._data;
		return new Vector({
			x: _matrix[0][0],
			y: _matrix[1][0],
			z: _matrix[2][0]
		});
	}

	getDirectionUp(matrix) {
		const _matrix = matrix._data;
		return new Vector({
			x: _matrix[0][1],
			y: _matrix[1][1],
			z: _matrix[2][1]
		});
	}

	getDirectionForward(matrix) {
		const _matrix = matrix._data;
		return new Vector({
			x: _matrix[0][2],
			y: _matrix[1][2],
			z: _matrix[2][2]
		});
	}

	getMVP(model, world, camera) {
		const modelToWorld = this.multiply(model.matrix, world.matrix);
		const modelToView = this.multiply(camera.viewMatrix, modelToWorld);
		return modelToView;
	}
}
