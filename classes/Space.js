import { setStyles } from '../static/scripts/utils/styles'; 

export default class Space {

	constructor(camera, Objects3D, services = []) {
		
		this.Objects3D = Objects3D;
		this.camera = camera;

		if (services.length) {
			Object.keys(services).forEach(service => {
				this[service] = new service();
			});
		}
	}

	projection(camera, Object3D) {

	}

	render() {}

	init() {

	}
}
