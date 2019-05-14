import Matrix from "./Matrix.js";

const MatrixService = new Matrix;

export default class Object3D {
	
	constructor(position) {
        this.position = position;
        this.matrix = MatrixService.getTranslationMatrix(position);
    }
}
