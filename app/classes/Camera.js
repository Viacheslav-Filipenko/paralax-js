import { toRadians, checkInfinity } from "../utils/Math.js";
import Object3D from "./Object3D.js";
import Graphic from "./Graphic.js";
import Matrix from './Matrix.js';

export default class Camera {
    constructor(obj) {
        this.position = obj.position;
        this.fov = obj.fov;
        this.aspectRatio = obj.aspectRatio;
        this.near = obj.near;
        this.graphic = new Graphic();
        this.far = obj.far;
        this.rotation = { x: 0, y: 0, z: 0 };
        this.matrixService = new Matrix;
    }

    

    view(matrix) {
        Object.keys(this.rotation).forEach(axios => {
            const angle = this.rotation[axios];

            matrix = this.graphic.rotate(matrix, { axios, angle });
        });

        // matrix = this.graphic.translate(matrix, this.position);
        return this.graphic.project(matrix, this.position);

    }
}
