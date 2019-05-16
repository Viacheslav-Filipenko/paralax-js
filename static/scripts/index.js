import Space from '../../app/classes/Space.js';
import Rectangle from '../../app/classes/Rectangle.js';
import Scene from '../../app/classes/Scene.js';

const scene = new Scene({
	transformation: {
		position: { x: 100, y: 100, z: 0 }
	}
});

// const b = new Rectangle({
// 	transformation: {
// 		position: { x: 100, y: 0, z: 1 }
// 	},
// 	properties: {
// 		width: 200,
// 		height: 200
// 	}
// });

const a = new Rectangle({
	transformation: {
		position: { x: 100, y: 100, z: -500 },
		rotation: { z: 0 }
	},
	properties: {
		width: '100px',
		height: '100px'
	}
	// 	leftTop: { x: 20 + 50, y: 40, z: 10 },
	// 	leftBottom: { x: 20, y: 400, z: 10 },
	// 	rightTop: { x: 500 + 50, y: 40, z: 10 },
	// 	rightBottom: { x: 500, y: 400, z: 10 }
});

scene.add(a);

const canvas = document.querySelector('#scene');

const space = new Space(scene);

const body = document.querySelector('body');

space.init(body);
