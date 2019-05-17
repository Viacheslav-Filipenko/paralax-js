import Graphic from './Graphic.js';
import Vector from './Vector.js';

export default class Object3D {
	constructor(obj) {
		this.position = new Vector(obj.position, 0);
		this.rotation = new Vector(obj.rotation, 0);
		this.scale = new Vector(obj.scale, 1);
		this.graphic = new Graphic();
		this._matrix = this.graphic.trasformation(this.graphic.primary(), this);
	}

	get matrix() {
		return this._matrix;
	}
	// toWorld(model, world) {
	// 	model.matrix = this.graphic.world(model, world);
	// 	return model.matrix;
	// }
}
