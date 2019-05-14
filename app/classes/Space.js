import { setStyles } from "../utils/styles.js";
import Matrix from "./Matrix.js";
import Render from "./Render.js";
import Graphic from './Graphic.js';

const graphic = new Graphic;

const renderer = new Render();
const matrix = new Matrix();

export default class Space {
    constructor(camera, scene) {
        this.scene = scene;
        this.camera = camera;
        this.matrixService = matrix;
        this.rendered = [];
    }

    transformElement(element, matrix) {
        element.style.transform = `matrix3d(${this.matrixService.getStylesOf(
            matrix
        )}`;
    }

    init(parent) {
        const scene = document.createElement("div");

        setStyles(scene, {
            overflow: "hidden",
            position: "relative",
            backgroundColor: "black",
            width: "100vw",
            height: "100vh",
            perspective: "100px",
            perspectiveOrigin: "center"
        });

        this.scene.models.forEach(model => {
            const container = document.createElement("div");
            setStyles(container, model.properties, { position: "absolute" });
            const matrix = renderer.getMVP(this.camera, model);
            this.transformElement(container, matrix);
            container.classList.add("black");
            scene.appendChild(container);
            this.rendered.push(container);
        });

        parent.appendChild(scene);
        this.mouseWheelINIT(this.scene.models);
    }

    mouseWheelINIT(models) {
        document.addEventListener("mousewheel", () => {
            const counter = event.wheelDelta > 0 ? -100 : 100;
            this.moveModelsHTML(counter, models);
        });
    }

    moveModelsHTML(number, models) {
        models.forEach((model, index) => {

            model.matrix = graphic.rotate(model.matrix, {axios: 'x', angle: 1});
            model.matrix = graphic.translate(model.matrix, {x: 0, y: 0, z: number});

            renderer.updateHTML(this.rendered[index], model.matrix);
        });
    }
}
