import Matrix from "./Matrix.js";

const MatrixService = new Matrix;

export default class Object3D {
	
	constructor(transformation) {
        this.position = transformation.position;
        this.rotation = transformation.rotation || {x: 0, y: 0, z: 0};
        this.scale = transformation.scale || {x: 1, y: 1, z: 1};
        this.matrix = MatrixService.getTranslationMatrix(this.position);
    }
}
