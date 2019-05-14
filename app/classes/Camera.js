import Object3D from "../classes/Object3D.js";
import  { toRadians } from "../utils/Math.js";


export default class Camera extends Object3D {
   
    constructor(obj) {
        super(obj.position);
        this.fov = obj.fov;
        this.aspectRatio = obj.aspectRatio;
        this.near = obj.near;
        this.far = obj.far;
    }

    projection() {
        const S = 1 / Math.tan(toRadians(this.fov / 2));

        return math.matrix([
            [S, 0, 0, 0],
            [0, S, 0, 0],
            [0, 0, (-1 * this.far) / (this.far - this.near), -1],
            [0, 0, (-1 * this.far * this.near) / (this.far - this.near), 0]
        ]);
    }

    // view() {
    //     return math.matrix([
    //         [S, 0, 0, 0],
    //         [0, S, 0, 0],
    //         [0, 0, (-1 * this.far) / (this.far - this.near), -1],
    //         [0, 0, 0, 1]
    //     ]);
    // }

}
