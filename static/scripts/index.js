import Space from '../../app/classes/Space.js';
import Rectangle from '../../app/classes/Rectangle.js';
import Scene from '../../app/classes/Scene.js';
import Camera from '../../app/classes/Camera.js';

const scene = new Scene({
	transformation: {
		position: { x: 0, y: 0, z: 0 }
	}
});

const camera = new Camera({
	position: { x: 0, y: 0, z: 20 },
	rotation: { x: 0, y: 0, z: 0 },
	far: 100,
	near: 1,
	left: -1,
	right: 1,
	top: 1,
	bottom: -1
});

const a = new Rectangle({
	transformation: {
		position: { x: 0, y: 0, z: 10 },
		rotation: { x: 0 }
	},
	properties: {
		width: '100px',
		height: '100px'
	}
});

scene.add(a);

const space = new Space(scene, camera);

const body = document.querySelector('body');

space.init(body);
