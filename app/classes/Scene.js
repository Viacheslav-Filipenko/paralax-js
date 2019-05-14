import Object3D from "../classes/Object3D.js";

export default class Scene extends Object3D {
    constructor(obj) {
        super(obj.transformation);
        this.props = obj.props;
        this.models = [];
    }

    add(...model) {
        
        if (Array.isArray(model)) {
            model.forEach(item => {
                item.position.x += this.position.x;
                item.position.y += this.position.y;
                item.position.z += this.position.z;
                this.models.push(item);
            });
        } else {
            this.models.push(model);
        }
    }
}
