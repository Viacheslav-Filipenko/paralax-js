import { toRadians, checkInfinity } from '../utils/Math.js';

export default class Matrix {
	constructor() {}

	getPrimaryMatrix() {
		return math.matrix([[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]);
	}

	getScaleMatrix(vector) {
		return math.matrix([
			[vector.x, 0, 0, 0],
			[0, vector.y, 0, 0],
			[0, 0, vector.z, 0],
			[0, 0, 0, 1]
		]);
	}

	getTranslationMatrix(vector) {
		return math.matrix([
			[1, 0, 0, vector.x],
			[0, 1, 0, vector.y],
			[0, 0, 1, vector.z],
			[0, 0, 0, 1]
		]);
	}

	// getTransfomationMatrix(transformXAxis, transformYAxis, transformZAxis, translation) {
	// 	return math.matrix([
	// 		[transformXAxis.x, transformXAxis.y, transformXAxis.z, 0],
	// 		[transformYAxis.x, transformYAxis.y, transformYAxis.z, 0],
	// 		[transformZAxis.x, transformZAxis.y, transformZAxis.z, 0],
	// 		[translation.x, translation.y, translation.z, 1]
	// 	]);
	// }

	multiply(...matrix) {
		let result = matrix[0];
		matrix.splice(0, 1);
		matrix.forEach(m => {
			result = math.multiply(result, m);
		});

		return result;
	}

	getProjectionMatrix(camera) {
		return math.matrix([
			[
				(camera.near * 2) / (camera.right - camera.left),
				0,
				(camera.right + camera.left) / (camera.right - camera.left),
				0
			],
			[
				0,
				(camera.near * 2) / (camera.top - camera.bottom),
				(camera.top + camera.bottom) / (camera.top - camera.bottom),
				0
			],
			[
				0,
				0,
				-(camera.far + camera.near) / (camera.far - camera.near),
				(-2 * camera.far * camera.near) / (camera.far - camera.near)
			],
			[0, 0, -1, 0]
		]);
	}
	getRotationMatrix(axis, angle) {
		angle = toRadians(angle);

		if (axis.toLowerCase() === 'x') {
			return math.matrix([
				[1, 0, 0, 0],
				[0, Math.cos(angle), Math.sin(angle), 0],
				[0, -Math.sin(angle), Math.cos(angle), 0],
				[0, 0, 0, 1]
			]);
		}

		if (axis.toLowerCase() === 'y') {
			return math.matrix([
				[Math.cos(angle), 0, Math.sin(angle), 0],
				[0, 1, 0, 0],
				[-Math.sin(angle), 0, Math.cos(angle), 0],
				[0, 0, 0, 1]
			]);
		}

		if (axis.toLowerCase() === 'z') {
			return math.matrix([
				[Math.cos(angle), Math.sin(angle), 0, 0],
				[-Math.sin(angle), Math.cos(angle), 0, 0],
				[0, 0, 1, 0],
				[0, 0, 0, 1]
			]);
		}
		return null;
	}
}
