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

/* matrix3d(
	2, 0, 0, 0,
 	0, 2, 0, 0,
	0, 0, 8.9798,-2.0202,
	0, 0, -1, 0)
 */
