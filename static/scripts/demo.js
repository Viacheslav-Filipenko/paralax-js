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
	position: { x: 0, y: 0, z: 1000 },
	rotation: { x: 0, y: 0, z: 0 },
	perspective: 1000
});

const a = new Rectangle({
	transformation: {
		position: { x: 100, y: 0, z: -1000 },
		rotation: { x: 0, y: 0, z: 0 }
	},
	properties: {
		width: '200px',
		height: '200px'
	}
});

const b = new Rectangle({
	transformation: {
		position: { x: 200, y: 0, z: -800 },
		rotation: { x: 0, y: 0, z: 0 }
	},
	properties: {
		width: '400px',
		height: '400px'
	}
});

scene.add(a, b);

const space = new Space(scene, camera);

const body = document.querySelector('body');

space.init(body);
