const models = {};

const Rectangle = paralax.Rectangle;
const Scene = paralax.Scene;
const Camera = paralax.Camera;
const Space = paralax.Space;

import { grabbing } from './utils/events.js';

models.racoon = new Rectangle({
	transformation: {
		position: { x: 1400, y: 280, z: -200 },
		rotation: { x: 0, y: 0, z: 0 }
	},
	properties: {
		width: '136px',
		height: '192px'
	},
	src: '../img/racoon.svg',
	type: 'img'
});

models.middle = new Rectangle({
	transformation: {
		position: { x: -1800, y: 0, z: -5000 },
		rotation: { x: 0, y: 0, z: 0 }
	},
	properties: {
		width: '7290px',
		height: '2323px'
	},
	src: '../img/middle.svg',
	type: 'img'
});

models.clouds = new Rectangle({
	transformation: {
		position: { x: 0, y: -3000, z: -9000 },
		rotation: { x: 0, y: 0, z: 0 }
	},
	properties: {
		width: '5863px',
		height: '4363px'
	},
	src: '../img/clouds.svg',
	type: 'img'
});

models.sky = new Rectangle({
	transformation: {
		position: { x: -8500, y: -7900, z: -10000 },
		rotation: { x: 0, y: 0, z: 0 }
	},
	properties: {
		width: '21753px',
		height: '14880px'
	},
	src: '../img/Sky.svg',
	type: 'img'
});

models.mountinsNear = new Rectangle({
	transformation: {
		position: { x: 0, y: -1500, z: -8000 },
		rotation: { x: 0, y: 0, z: 0 }
	},
	properties: {
		width: '4609px',
		height: '4904px'
	},
	src: '../img/Mountins_1.svg',
	type: 'img'
});

models.mountinsFar = new Rectangle({
	transformation: {
		position: { x: -1800, y: -400, z: -9000 }
	},
	properties: {
		width: ' 6953px',
		height: '2633px'
	},
	src: '../img/Mountins_2.svg',
	type: 'img'
});

models.platformDown = new Rectangle({
	transformation: {
		position: { x: 0, y: 200, z: -300 },
		rotation: { x: 0, y: 0, z: 0 }
	},
	properties: {
		width: '3860px',
		height: '827px'
	},
	src: '../img/PLATFORM_DOWN.svg',
	type: 'img'
});
models.platformRight = new Rectangle({
	transformation: {
		position: { x: 2350, y: -860, z: -400 },
		rotation: { x: 0, y: 0, z: 0 }
	},
	properties: {
		width: '1261px',
		height: '1728px'
	},
	src: '../img/PLATFORM_RIGHT.svg',
	type: 'img'
});

models.platformLeft = new Rectangle({
	transformation: {
		position: { x: -300, y: -1190, z: -400 },
		rotation: { x: 0, y: 0, z: 0 }
	},
	properties: {
		width: '1761px',
		height: '1828px'
	},
	src: '../img/PLATFORM_LEFT.svg',
	type: 'img'
});

models.platformDecor = new Rectangle({
	transformation: {
		position: { x: 700, y: -600, z: -100 },
		rotation: { x: 0, y: 0, z: 0 }
	},
	properties: {
		width: '295px',
		height: '1151px'
	},
	src: '../img/PLATFORM_decor.svg',
	type: 'img'
});

models.downFirstLine = new Rectangle({
	transformation: {
		position: { x: -3000, y: 200, z: -3000 },
		rotation: { x: 0, y: 0, z: 0 }
	},
	properties: {
		width: '10163px',
		height: ' 1048px'
	},
	src: '../img/Down_first_line (1).svg',
	type: 'img'
});

models.centralElements = new Rectangle({
	transformation: {
		position: { x: 400, y: -200, z: -4000 },
		rotation: { x: 0, y: 0, z: 0 }
	},
	properties: {
		width: '2913px',
		height: '1832px'
	},
	src: '../img/Central_elements.svg',
	type: 'img'
});

models.futuristicObjectNear = new Rectangle({
	transformation: {
		position: { x: 1400, y: -600, z: -1200 },
		rotation: { x: 0, y: 0, z: 0 }
	},
	properties: {
		width: '1813px',
		height: '1032px'
	},
	src: '../img/Futuristic_object_2.svg',
	type: 'img'
});

models.futuristicObjectMiddle = new Rectangle({
	transformation: {
		position: { x: 1900, y: -600, z: -1400 },
		rotation: { x: 0, y: 0, z: 0 }
	},
	properties: {
		width: '1613px',
		height: '862px'
	},
	src: '../img/Futuristic_object_3.svg',
	type: 'img'
});

models.futuristicObjectFar = new Rectangle({
	transformation: {
		position: { x: 1300, y: -400, z: -1600 },
		rotation: { x: 0, y: 0, z: 0 }
	},
	properties: {
		width: '1413px',
		height: '532px'
	},
	src: '../img/Futuristic_object_1.svg',
	type: 'img'
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

const camera = new Camera({
	position: { x: 1900, y: 0, z: 500 },
	rotation: { x: 0, y: 0, z: 0 },
	perspective: '3000px'
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
	console.log(getWidth());

	const s = getWidth() / 1980;

	space.camera.scale(s, s, s);

	space.camera.updateView();
	space.scene.updateModels(space.camera);
});

document.addEventListener('mousewheel', event => {
	const distance = event.deltaY > 0 ? 300 : -300;
	space.camera.translateZ(-distance);

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
