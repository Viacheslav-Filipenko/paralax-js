import Object3D from "../classes/Object3D.js";

export default class Scene extends Object3D {
    constructor(obj) {
        super(obj.position);
        this.props = obj.props;
        this.models = [];
    }

    add(model) {
        if (Array.isArray(model)) {
            model.forEach(item => {
                this.models.push(item);
            });
        } else {
            this.models.push(model);
        }
    }
}
