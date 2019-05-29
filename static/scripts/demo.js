import Space from '../../app/classes/Space.js';
import Rectangle from '../../app/classes/Rectangle.js';
import Scene from '../../app/classes/Scene.js';
import Camera from '../../app/classes/Camera.js';
import { grabbing } from '../../app/utils/events.js';

const setStyles = (element, styles) => {
	Object.keys(styles).forEach(style => {
		element.style[style] = styles[style];
	});
};

const callback = (element, model) => {
	if (!element.classList.contains('sprite')) return;
	const angleZ = model.ViewAngle.z;
	const angleX = model.ViewAngle.x;

	const angle = angleX > angleZ ? angleZ : angleX;

	if (angle < 45) {
		setStyles(element, {
			backgroundPositionX: `0px`
		});
	} else if (angle > 45 && angle < 135) {
		setStyles(element, {
			backgroundPositionX: `-410px`
		});
	} else {
		setStyles(element, {
			backgroundPositionX: `-820px`
		});
	}
};

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
	},
	src: 'http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c28a.png'
});

const camel = new Rectangle({
	transformation: {
		position: { x: 120, y: 100, z: -800 },
		rotation: { x: 0, y: 0, z: 0 }
	},
	properties: {
		width: '200px',
		height: '200px'
	},
	src: 'http://pngriver.com/wp-content/uploads/2018/04/Download-Camel-PNG-3.png'
});

const eagle = new Rectangle({
	transformation: {
		position: { x: -300, y: -300, z: -950 },
		rotation: { x: 0, y: 0, z: 0 }
	},
	properties: {
		width: '100px',
		height: '100px'
	},
	src: 'https://ru.ashesofcreation.wiki/images/thumb/3/3c/Hawk.png/450px-Hawk.png'
});

const background = new Rectangle({
	transformation: {
		position: { x: -960, y: -540, z: -1000 },
		rotation: { x: 0, y: 0, z: 0 }
	},
	properties: {
		width: '1920px',
		height: '1080px'
	},
	src:
		'http://virtualgameinfo.ru/wp-content/uploads/2017/10/Assassin---s-Creed-Origins-Location-Tombs.jpg'
});

const geralt = new Rectangle({
	transformation: {
		position: { x: -190, y: -62, z: -500 },
		rotation: { x: 0, y: 0, z: 0 }
	},
	properties: {
		width: '450px',
		height: '700px'
	},
	classList: ['sprite'],
	src: 'https://static.gosunoob.com/img/1/2015/10/tw3-hearts-of-stone-viper-armor-set.jpg'
});
geralt.onViewAngleChange(callback);

scene.add(assasin, camel, eagle, background, geralt);

const space = new Space(scene, camera, background);

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

document.addEventListener('mousewheel', event => {
	const distance = event.deltaY > 0 ? 10 : -10;
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
