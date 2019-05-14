import Object3D from "./Object3D.js";

export default class Rectangle extends Object3D {
	constructor(obj) {
		super(obj.position);
		this.properties = obj.properties;

	}
}
