import Space from '../../app/classes/Space.js';
import Rectangle from '../../app/classes/Rectangle.js';
import Scene from '../../app/classes/Scene.js';
import Camera from '../../app/classes/Camera.js';
import { toRadians } from '../../app/utils/Math.js';

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

document.addEventListener('keydown', event => {
	const counter = event.which === 87 ? 10 : event.which === 83 ? -10 : 0;
	const step = 30;

	const xR = toRadians(camera.rotation.x);
	const yR = toRadians(-camera.rotation.y);
	const zR = toRadians(camera.rotation.z);

	// const x = counter * Math.cos(xR);
	// const y = counter * Math.cos(yR);
	// const z = -counter * Math.cos(zR);

	const x = counter * Math.cos(xR) * Math.sin(yR);
	const y = counter * Math.sin(xR) * Math.cos(yR);
	const z = -counter * Math.cos(xR) * Math.cos(yR);

	if (event.which === 40 || event.which === 38) {
		const angleX = event.which === 40 ? step : event.which === 38 ? -step : 0;

		space.camera.rotation.x += angleX;
		const stepR = toRadians(angleX);

		const y = space.camera.rotation.y;
		const z = space.camera.rotation.z;

		space.camera.rotation.z += -x * Math.sin(stepR);
		space.camera.rotation.x += z * Math.sin(stepR);
	}

	if (event.which === 37 || event.which === 39) {
		const angleY = event.which === 37 ? step : event.which === 39 ? -step : 0;

		space.camera.rotation.y += angleY;
		const stepR = toRadians(angleY);

		// const z = space.camera.rotation.z;
		// const x = space.camera.rotation.x;

		// space.camera.rotation.x += z * Math.sin(stepR);
		// space.camera.rotation.z += -x * Math.sin(stepR);
	}

	if (event.which === 69 || event.which === 81) {
		const angleZ = event.which === 69 ? step : event.which === 81 ? -step : 0;

		space.camera.rotation.z += angleZ;
	}

	camera.position.x += x;
	camera.position.y += y;
	camera.position.z += z;

	space.camera.updateView();
	space.scene.updateModels(space.camera);

	console.log('rotation', camera.rotation);
	console.log('position', camera.position);
});

const change = event => {
	space.camera.rotation.y += event.movementX;
	space.camera.rotation.x += event.movementY;

	console.log('x: ', event.movementX);
	console.log('y: ', event.movementY);

	space.camera.updateView();
	space.scene.updateModels(space.camera);
};

document.addEventListener('mousedown', event => {
	if (event.button) return;

	document.querySelector('body').style.cursor = 'grabbing';
	document.addEventListener('mousemove', change);
});

document.addEventListener('mouseup', event => {
	if (event.button) return;
	document.querySelector('body').style.cursor = 'default';
	document.removeEventListener('mousemove', change);
});
