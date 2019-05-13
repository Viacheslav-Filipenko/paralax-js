import Matrix3D from "../classes/Matrix3D.js";

export default class Render {
    constructor(camera, scene) {
        this.camera = camera;
        this.scene = scene;
    }

    getMVP(camera, matrix) {

        const projection = camera.projection();
        const view = camera.view();
        const model = matrix;

        return Matrix3D.multiply();
    }


    renderHTML() {

    }



}