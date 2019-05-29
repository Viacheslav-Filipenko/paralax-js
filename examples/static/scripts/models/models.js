const models = {};

models.racoon = new Rectangle({
	transformation: {
		position: { x: 2800, y: 1170, z: -200 },
		rotation: { x: 0, y: 0, z: 0 }
	},
	properties: {
		width: '136px',
		height: '192px'
	},
	src: '../img/racoon.svg'
});

// models.middle = new Rectangle({
// 	transformation: {
// 		position: { x: -7900, y: -200, z: -5000 },
// 		rotation: { x: 0, y: 0, z: 0 }
// 	},
// 	properties: {
// 		width: '8990px',
// 		height: '3323px'
// 	},
// 	src: '../img/middle.svg'
// });

models.clouds = new Rectangle({
	transformation: {
		position: { x: 0, y: 0, z: 0 },
		rotation: { x: 0, y: 0, z: 0 }
	},
	properties: {
		width: '400em',
		height: '400em'
	},
	classList: ['gray']
});

models.sky = new Rectangle({
	transformation: {
		position: { x: -14000, y: -26300, z: -10000 },
		rotation: { x: 0, y: 0, z: 0 }
	},
	properties: {
		width: '12753px',
		height: '14880px'
	},
	src: '../img/Sky.svg'
});

models.mountinsNear = new Rectangle({
	transformation: {
		position: { x: -4900, y: -7400, z: -8000 },
		rotation: { x: 0, y: 0, z: 0 }
	},
	properties: {
		width: '6609px',
		height: '6904px'
	},
	src: '../img/Mountins_1.svg'
});

models.mountinsFar = new Rectangle({
	transformation: {
		position: { x: -9300, y: -9500, z: -9000 }
	},
	properties: {
		width: ' 7953px',
		height: '7033px'
	},
	src: '../img/Mountins_2.svg'
});

models.platformDown = new Rectangle({
	transformation: {
		position: { x: -1200, y: 1020, z: -300 },
		rotation: { x: 0, y: 0, z: 0 }
	},
	properties: {
		width: '3860px',
		height: '827px'
	},
	src: '../img/PLATFORM_DOWN.svg'
});
models.platformRight = new Rectangle({
	transformation: {
		position: { x: 3900, y: -4440, z: -400 },
		rotation: { x: 0, y: 0, z: 0 }
	},
	properties: {
		width: '2261px',
		height: '3228px'
	},
	src: '../img/PLATFORM_RIGHT.svg'
});

models.platformLeft = new Rectangle({
	transformation: {
		position: { x: -3340, y: -5440, z: -400 },
		rotation: { x: 0, y: 0, z: 0 }
	},
	properties: {
		width: '2261px',
		height: '3228px'
	},
	src: '../img/PLATFORM_LEFT.svg'
});

models.platformDecor = new Rectangle({
	transformation: {
		position: { x: 20, y: -2420, z: -100 },
		rotation: { x: 0, y: 0, z: 0 }
	},
	properties: {
		width: '395px',
		height: '1451px'
	},
	src: '../img/PLATFORM_decor.svg'
});

models.downFirstLine = new Rectangle({
	transformation: {
		position: { x: -500, y: 650, z: -800 },
		rotation: { x: 0, y: 0, z: 0 }
	},
	properties: {
		width: '3163px',
		height: ' 1048px'
	},
	src: '../img/Down_first_line (1).svg'
});

models.centralElements = new Rectangle({
	transformation: {
		position: { x: -1900, y: -120, z: -4000 },
		rotation: { x: 0, y: 0, z: 0 }
	},
	properties: {
		width: '3913px',
		height: '1832px'
	},
	src: '../img/Central_elements.svg'
});

models.futuristicObjectNear = new Rectangle({
	transformation: {
		position: { x: 2800, y: -1720, z: -1200 },
		rotation: { x: 0, y: 0, z: 0 }
	},
	properties: {
		width: '1813px',
		height: '1032px'
	},
	src: '../img/Futuristic_object_2.svg'
});

models.futuristicObjectMiddle = new Rectangle({
	transformation: {
		position: { x: 4400, y: -2400, z: -1400 },
		rotation: { x: 0, y: 0, z: 0 }
	},
	properties: {
		width: '1613px',
		height: '862px'
	},
	src: '../img/Futuristic_object_3.svg'
});

models.futuristicObjectFar = new Rectangle({
	transformation: {
		position: { x: 2500, y: -620, z: -1600 },
		rotation: { x: 0, y: 0, z: 0 }
	},
	properties: {
		width: '1413px',
		height: '532px'
	},
	src: '../img/Futuristic_object_1.svg'
});

export default models;
