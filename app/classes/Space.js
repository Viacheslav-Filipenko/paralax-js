export default class Space {
	constructor(scene, camera) {
		this.scene = scene || null;
		this.camera = camera || null;
	}

	init(parent) {
		const scene = this.scene.render(this.camera);
		parent.appendChild(scene);
		this.scene.keydown(this.camera);
		this.scene.keyDown(this.camera);
		this.scene.keyUp(this.camera);
		this.scene.rotateXY(this.camera);
	}
}
