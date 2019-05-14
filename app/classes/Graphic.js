import Matrix from "./Matrix.js";

export default class Graphic {
    constructor() {
        this.matrixService = new Matrix;
    }

    scale(matrix, vector) {
        const slaceMatrix = this.matrixService.getScaleMatrix(vector);
        return this.matrixService.multiply(matrix, slaceMatrix);
    }

    rotate(matrix, options = {}) {
        const rotationMatrix = this.matrixService.getRotationMatrix(options.axios, options.angle);
        return this.matrixService.multiply(matrix, rotationMatrix);
    }

    translate(matrix, vector) {
        const translationMatrix = this.matrixService.getTranslationMatrix(vector);
        return this.matrixService.multiply(matrix, translationMatrix);
        
    }

    getMVP(camera, model) {

    }

}
