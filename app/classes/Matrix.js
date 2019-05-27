import { toRadians } from '../utils/Math.js';

export default class MatrixService {
	constructor() {}

	getPrimaryMatrix() {
		return math.matrix([[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]);
	}

	getScaleMatrix(vector = {}) {
		const x = vector.x || 1;
		const y = vector.y || 1;
		const z = vector.z || 1;
		return math.matrix([[x, 0, 0, 0], [0, y, 0, 0], [0, 0, z, 0], [0, 0, 0, 1]]);
	}

	getTranslationMatrix(vector = {}) {
		const x = vector.x || 0;
		const y = vector.y || 0;
		const z = vector.z || 0;
		return math.matrix([[1, 0, 0, x], [0, 1, 0, y], [0, 0, 1, z], [0, 0, 0, 1]]);
	}

	multiply(...matrix) {
		let result = matrix[0];
		matrix.splice(0, 1);
		matrix.forEach(m => {
			result = math.multiply(result, m);
		});

		return result;
	}

	getRotationMatrixX(angle = 0) {
		const angleX = toRadians(angle);

		return math.matrix([
			[1, 0, 0, 0],
			[0, Math.cos(angleX), -Math.sin(angleX), 0],
			[0, Math.sin(angleX), Math.cos(angleX), 0],
			[0, 0, 0, 1]
		]);
	}
	getRotationMatrixY(angle = 0) {
		const angleY = toRadians(angle);

		return math.matrix([
			[Math.cos(angleY), 0, Math.sin(angleY), 0],
			[0, 1, 0, 0],
			[-Math.sin(angleY), 0, Math.cos(angleY), 0],
			[0, 0, 0, 1]
		]);
	}
	getRotationMatrixZ(angle = 0) {
		const angleZ = toRadians(angle);

		return math.matrix([
			[Math.cos(angleZ), -Math.sin(angleZ), 0, 0],
			[Math.sin(angleZ), Math.cos(angleZ), 0, 0],
			[0, 0, 1, 0],
			[0, 0, 0, 1]
		]);
	}

	getRotationMatrix(axis, angle = 0) {
		if (axis.toLowerCase() === 'x') return this.getRotationMatrixX(angle);
		if (axis.toLowerCase() === 'y') return this.getRotationMatrixY(angle);
		if (axis.toLowerCase() === 'z') return this.getRotationMatrixZ(angle);

		return null;
	}
}
