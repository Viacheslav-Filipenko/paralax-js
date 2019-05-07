import Object3D from "./Object3D.js";

export default class Rectangle extends Object3D {
	constructor(obj) {
		super(obj.center);
		this.leftTop = obj.leftTop;
		this.rightTop = obj.rightTop;
		this.leftBottom = obj.leftBottom;
		this.rightBottom = obj.rightBottom;
	}
}
