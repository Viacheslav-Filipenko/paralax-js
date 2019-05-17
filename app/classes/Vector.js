export default class Vector {
	constructor(obj = {}, value = 0) {
		this.x = obj.x || value;
		this.y = obj.y || value;
		this.z = obj.z || value;
	}

	reverse() {
		return new Vector({ x: -this.x, y: -this.y, z: -this.z });
	}
}
