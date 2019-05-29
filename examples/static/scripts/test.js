const models = {};

const Rectangle = paralax.Rectangle;
const Scene = paralax.Scene;
const Camera = paralax.Camera;
const Space = paralax.Space;

import { grabbing } from './utils/events.js';

models.clouds = new Rectangle({
	transformation: {
		position: { x: 100, y: 0, z: 0 },
		rotation: { x: 0, y: 0, z: 0 }
	},
	properties: {
		width: '200px',
		height: '200px'
	},
	classList: ['red'],
	type: 'div'
});

models.sky = new Rectangle({
	transformation: {
		position: { x: 200, y: 0, z: 200 },
		rotation: { x: 0, y: 0, z: 0 }
	},
	properties: {
		width: '400px',
		height: '400px'
	},
	classList: ['gray'],
	type: 'div'
});

const modelsObjects = Object.values(models);

const scene = new Scene({
	transformation: {
		position: { x: 0, y: 0, z: 0 }
	}
});

const getWidth = () => {
	return window.document.documentElement.clientWidth;
};

const s = getWidth() / 1980;

const camera = new Camera({
	position: { x: 0, y: 0, z: 1000 },
	rotation: { x: 0, y: 0, z: 0 },
	scale: { x: s, y: s, z: s },
	perspective: '50vw'
});

scene.add(...modelsObjects);

const space = new Space(scene, camera);

const body = document.querySelector('body');

space.init(body);

document.addEventListener('keydown', event => {
	const rotateStep = 10;
	const moveStep = 10;

	if (event.which === 87 || event.which === 83) {
		const distance = event.which === 87 ? moveStep : event.which === 83 ? -moveStep : 0;
		space.camera.translateY(distance);
	}

	if (event.which === 65 || event.which === 68) {
		const distance = event.which === 65 ? moveStep : event.which === 68 ? -moveStep : 0;
		space.camera.translateX(distance);
	}

	if (event.which === 40 || event.which === 38) {
		const angleX = event.which === 40 ? rotateStep : event.which === 38 ? -rotateStep : 0;
		space.camera.rotateX(angleX);
	}

	if (event.which === 37 || event.which === 39) {
		const angleY = event.which === 37 ? rotateStep : event.which === 39 ? -rotateStep : 0;
		space.camera.rotateY(angleY);
	}

	if (event.which === 69 || event.which === 81) {
		const angleZ = event.which === 69 ? rotateStep : event.which === 81 ? -rotateStep : 0;
		space.camera.rotateZ(angleZ);
	}

	space.camera.updateView();
	space.scene.updateModels(space.camera);
});

window.addEventListener('resize', event => {
	const s = getWidth() / 1980;

	space.camera.scale(s, s, s);
	space.camera.updateView();
	space.scene.updateModels(space.camera);
});

document.addEventListener('mousewheel', event => {
	const distance = event.deltaY > 0 ? 300 : -300;
	space.camera.translateZ(-distance);

	const moveStep = event.deltaY > 0 ? 10 : 10;

	counter++;
	space.camera.updateView();
	space.scene.updateModels(space.camera);
});

const change = event => {
	const x = event.movementY;
	const y = event.movementX;

	space.camera.rotate(x, y, 0);
	space.camera.updateView();
	space.scene.updateModels(space.camera);
};

grabbing(change);
