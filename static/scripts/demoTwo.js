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
	position: { x: 0, y: 0, z: 0 },
	rotation: { x: 0, y: 0, z: 0 },
	perspective: 1000
});

const assasin = new Rectangle({
	transformation: {
		position: { x: -190, y: -62, z: -500 },
		rotation: { x: 0, y: 0, z: 0 }
	},
	properties: {
		width: '250px',
		height: '300px'
	}
});

const camel = new Rectangle({
	transformation: {
		position: { x: 120, y: 100, z: -800 },
		rotation: { x: 0, y: 0, z: 0 }
	},
	properties: {
		width: '200px',
		height: '200px'
	}
});

const eagle = new Rectangle({
	transformation: {
		position: { x: -300, y: -300, z: -950 },
		rotation: { x: 0, y: 0, z: 0 }
	},
	properties: {
		width: '100px',
		height: '100px'
	}
});

const background = new Rectangle({
	transformation: {
		position: { x: -960, y: -540, z: -1000 },
		rotation: { x: 0, y: 0, z: 0 }
	},
	properties: {
		width: '1920px',
		height: '1080px'
	}
});
scene.add(assasin, camel, eagle, background);

const space = new Space(scene, camera, background);

const body = document.querySelector('body');

space.init(body);
