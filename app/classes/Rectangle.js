import Object3D from './Object3D.js';

export default class Rectangle extends Object3D {
	constructor(obj) {
		super(obj.transformation);
		this.properties = obj.properties;

		this.leftTop = obj.leftTop;
		this.leftBottom = obj.leftBottom;
		this.rightTop = obj.rightTop;
		this.rightBottom = obj.rightBottom;
	}
}
