import Render from './Render.js';
import Object3D from '../classes/Object3D.js';

export default class Scene extends Object3D {
	constructor(obj) {
		super(obj.transformation);
		this.props = obj.props;
		this.renderer = new Render();
		this.models = [];
	}

	add(...models) {
		models.forEach(model => {
			this.models.push(model);
		});
	}

	render(camera) {
		const scene = this.renderer.html.render('div', {
			display: 'flex',
			verticalAlign: 'middle',
			backgroundColor: 'black',
			alignItems: 'center',
			justifyContent: 'center',
			perspective: `${camera.perspective}px`,
			width: '100vw',
			height: '100vh'
		});

		const point = this.renderer.html.render('div', {
			backgroundColor: 'white',
			width: '1px',
			height: '1px'
		});
		const container = this.renderModels(camera, point);
		scene.appendChild(container);
		return scene;
	}

	renderModels(camera, container) {
		const urls = [
			'http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c28a.png',
			'http://pngriver.com/wp-content/uploads/2018/04/Download-Camel-PNG-3.png',
			'https://ru.ashesofcreation.wiki/images/thumb/3/3c/Hawk.png/450px-Hawk.png',
			'http://virtualgameinfo.ru/wp-content/uploads/2017/10/Assassin---s-Creed-Origins-Location-Tombs.jpg'
		];

		this.models.forEach((model, index) => {
			const element = this.renderer.html.render('div', {
				...model.properties,
				position: 'absolute',
				zIndex: model.position.z,
				transformOrigin: 'top left',
				backgroundImage: `url(${urls[index]})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'contain'
			});

			const matrix = this.graphic.getMVP(model, this, camera);

			this.renderer.html.setStyles(element, {
				transform: `matrix3d(${this.renderer.html.getStylesOfMatrix(matrix)})`
			});

			this.renderer.elements.push(element);
			container.appendChild(element);
		});

		return container;
	}

	updateModels(camera) {
		this.models.forEach((model, index) => {
			const matrix = this.graphic.getMVP(model, this, camera);

			this.renderer.html.setStyles(this.renderer.elements[index], {
				transform: `matrix3d(${this.renderer.html.getStylesOfMatrix(matrix)})`
			});
		});
	}

	keyUp(camera) {
		document.addEventListener('keydown', event => {
			if (event.which !== 38) return;

			const counter = 10;

			camera.position.z += counter;
			camera.updateView();
			this.updateModels(camera);
		});
	}

	keyDown(camera) {
		document.addEventListener('keydown', event => {
			if (event.which !== 40) return;

			const counter = -10;

			camera.position.z += counter;
			camera.updateView();
			this.updateModels(camera);
		});
	}

	rotateXY(camera) {
		document.addEventListener('keydown', event => {
			if (event.which !== 81 && event.which !== 69) return;

			const counter = event.keyCode === 81 ? 1 : -1;

			camera.rotation.y += counter;
			camera.updateView();
			this.updateModels(camera);
		});
	}

	keydown(camera) {
		document.addEventListener('keydown', event => {
			if (event.which !== 37 && event.which !== 39) return;

			const counter = event.keyCode === 37 ? -3 : 3;

			camera.position.x += counter;
			camera.updateView();
			this.updateModels(camera);
		});
	}
}
