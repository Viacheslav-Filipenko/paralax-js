import Matrix from "./Matrix.js";
import { setStyles } from "../utils/styles.js";

export default class Render {
    constructor() {
        this.matrixService = new Matrix();
    }

    getMVP(camera, model) {
        // const projection = camera.projection();
        // const view = camera.view();
        return model.matrix;
    }

    updateHTML(element, matrix) {
        const updatedMatrix = this.matrixService.getStylesOf(matrix);
        setStyles(element, { transform: `matrix3d(${updatedMatrix})` });
    }

    renderHTML() {}
}
