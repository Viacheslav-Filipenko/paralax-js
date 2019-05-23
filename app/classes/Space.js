export default class Space {
	constructor(scene, camera) {
		this.scene = scene || null;
		this.camera = camera || null;
	}

	init(parent) {
		const scene = this.scene.render(this.camera);
		parent.appendChild(scene);
	}
}
