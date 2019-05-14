import Matrix from "./Matrix.js";
import { checkInfinity } from "../utils/Math.js";


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

    

    project(matrix, cameraPosition) {
        const p = checkInfinity(1 / cameraPosition.x) ? 0 : 1 / cameraPosition.x;
        const q = checkInfinity(1 / cameraPosition.y) ? 0 : 1 / cameraPosition.y;
        const r = checkInfinity(1 / cameraPosition.z) ? 0 : 1 / cameraPosition.z;

        const projectionMatrix = math.matrix([
            [1, 0, 0, p],
            [0, 1, 0, q],
            [0, 0, 1, r],
            [0, 0, 0, 1]
        ]);


        return this.matrixService.multiply(matrix, projectionMatrix);
    }

    // getMVP(camera, matrix) {


    //     return this.matrixService.multiply(matrix, camera.projection());
    // }

}
