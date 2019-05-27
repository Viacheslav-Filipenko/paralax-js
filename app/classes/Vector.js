import { toDegrees } from '../utils/Math.js';

export default class Vector {
	constructor(obj = {}, value = 0) {
		this.x = obj.x || value;
		this.y = obj.y || value;
		this.z = obj.z || value;
	}

	reverse() {
		const x = -this.x;
		const y = -this.y;
		const z = -this.z;
		return new Vector({ x, y, z });
	}

	length() {
		return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
	}

	divide(value) {
		const x = this.x / value;
		const y = this.y / value;
		const z = this.z / value;

		return new Vector({ x, y, z });
	}

	normalize() {
		const length = this.length();
		if (length !== 0) return this.divide(length);
	}

	static dotProduct(vector1, vector2) {
		const x = vector1.x * vector2.x;
		const y = vector1.y * vector2.y;
		const z = vector1.z * vector2.z;
		return x + y + z;
	}

	static getAngleBetweenTwoVectors(vector1, vector2) {
		const x = this.dotProduct(vector1, vector2) / (vector1.length() * vector2.length());
		return toDegrees(Math.acos(x));
	}
}
