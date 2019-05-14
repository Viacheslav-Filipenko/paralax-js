import Matrix from "./Matrix.js";
import Render from "./Render.js";
import Graphic from "./Graphic.js";
import { toRadians } from '../utils/Math.js';

export default class Space {
    constructor(camera, scene) {
        this.scene = scene;
        this.camera = camera;
        this.matrixService = new Matrix();
        this.graphic = new Graphic();
        this.renderer = new Render();
        this.rendered = [];
        this.rotation = 0;
    }

    init(parent) {
        const scene = this.renderer.render("div", {
            overflow: "hidden",
            position: "relative",
            backgroundColor: "black",
            width: "100vw",
            height: "100vh",
            perspective: `${this.camera.far}px`,
            perspectiveOrigin: "center"
        });

        this.scene.models.forEach(model => {
            const element = this.renderer.render("div", {
                ...model.properties
            });
          
            // model.matrix = this.graphic.rotate(model.matrix, {
            //     axios: "y",
            //     angle: -this.camera.fov
            // });
          
            // model.matrix = this.graphic.rotate(model.matrix, {
            //     axios: "x",
            //     angle: -this.camera.fov
            // });

            model.matrix = this.graphic.translate(model.matrix, model.position);

            const matrix = this.camera.view(model.matrix)
          
            this.renderer.renderHTML(element, matrix);
            element.classList.add("black");
            scene.appendChild(element);
            this.rendered.push(element);
        });

        parent.appendChild(scene);
        this.mouseWheelINIT(this.scene.models);
    }


    keydown() {

        document.addEventListener('keydown', (event) => {
        
      
            if (event.which !== 38) return ;
            
            const counter = 50;

            this.camera.position.z += counter;
   
        })

    }

    keyup() {
        document.addEventListener('keydown', (event) => {
        
            if (event.which !== 40) return ;
            const counter = -50;

            this.camera.position.z += counter;

        })
    }

    keyRight() {
        document.addEventListener('keydown', (event) => {
        
            if (event.which !== 39) return ;
            let angle = -10;
            this.camera.rotation.y += angle;
        
        })
    }

    keyLeft() {
        document.addEventListener('keydown', (event) => {
        
            if (event.which !== 37) return ;
            let angle = 10;
            this.camera.rotation.y += angle;
        
        })
    }


    mouseWheelINIT(models) {


        this.keyLeft();
        this.keyRight();
        this.keyup();
        this.keydown();

        setInterval(()=> {
            this.moveModelsHTML(0, models);
        }, 500);
        


        document.addEventListener("mousewheel", () => {
            const counter = event.wheelDelta > 0 ? -100 : 100;
            this.moveModelsHTML(counter, models);
        });
    }

    moveModelsHTML(number, models) {
        models.forEach((model, index) => {
            // console.log(model.rotation);

            // const rotate = model.rotation.y < 90 ? 1 : 0;
            // model.rotation.y += rotate ? 1 : 0;

            //     model.matrix = this.graphic.rotate(model.matrix, {
            //         axios: "y",
            //         angle: rotate
            //     });

            // model.matrix = this.graphic.translate(model.matrix, {
            //     x: 0,
            //     y: 0,
            //     z: number
            // });

            const matrix = this.camera.view(model.matrix);

            this.renderer.renderHTML(this.rendered[index], matrix);
        });
    }
}
