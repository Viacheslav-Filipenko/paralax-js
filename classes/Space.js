import { setStyles } from "../static/scripts/utils/styles.js";
import Matrix3D from "./Matrix3D.js";

const matrix = new Matrix3D();

export default class Space {
    constructor(camera, scene) {
        this.scene = scene;
        this.camera = camera;
		this.matrixService = matrix;
		this.rendered = [];
    }

    transformElement(element, coordinate) {
        const matrix = this.matrixService.getTranslationMatrix(coordinate);

        element.style.transform = `matrix3d(${this.matrixService.getStylesOf(matrix)}`;
    }

    init(parent) {
        const scene = document.createElement("div");

        setStyles(scene, {
            overflow: "hidden",
            position: "relative",
            backgroundColor: "black",
            width: "100vw",
            height: "100vh",
            perspective: "100px"
		});
		

        this.scene.models.forEach(model => {
            const container = document.createElement("div");
            setStyles(container, model.properties, { position: "absolute" });
            this.transformElement(container, model.position);
            container.classList.add("black");
            scene.appendChild(container);
            this.rendered.push(container);
        });

		parent.appendChild(scene);
		this.mouseWheelINIT(this.scene.models);;
    }

    mouseWheelINIT(models) {
		
		document.addEventListener("mousewheel", () => {
            const counter = event.wheelDelta > 0 ? -100 : 100;
            this.moveModelsHTML(counter, models);
        });
    }

    moveModelsHTML(number, models) {
        models.forEach((model, index) => {
            model.position.z += number;
            this.transformElement(this.rendered[index], model.position);
        });
    }
}
