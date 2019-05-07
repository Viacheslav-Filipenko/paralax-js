import Object3D from "./Object3D.js";

export default class Camera extends Object3D {
	constructor(position, direction, FOV) {
		super(position);
		this.directionVector = direction;
		this.FOV = FOV;
	}
}
