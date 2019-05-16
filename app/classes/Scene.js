import Object3D from '../classes/Object3D.js';

export default class Scene extends Object3D {
	constructor(obj) {
		super(obj.transformation);
		this.props = obj.props;
		this.models = [];
	}

	add(...models) {
		models.forEach(model => {
			this.models.push(model);
		});
	}
}
