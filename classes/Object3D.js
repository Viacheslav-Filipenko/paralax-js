import Matrix3D from "../classes/Matrix3D.js";

const MatrixService = new Matrix3D;

export default class Object3D {
	
	constructor(position) {
        this.position = position;
        this.matrix = MatrixService.getTranslationMatrix(position);
    }

    get ProjectionMatrix() {
        return this.matrix;
    }

    set ProjectionMatrix(value) {
        this.matrix = value;
    }
}
