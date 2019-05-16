import Render from './Render.js';
import Graphic from './Graphic.js';

export default class Space {
	constructor(scene) {
		this.scene = scene;
		this.camera = null;
		this.graphic = new Graphic();
		this.renderer = new Render();
	}

	init(parent) {
		const scene = this.renderer.html.render('div', {
			overflow: 'hidden',
			position: 'relative',
			backgroundColor: 'black',
			width: '400px',
			height: '300px',
			perspective: `${100}px`,
			perspectiveOrigin: '0%, 0%'
		});

		this.scene.models.forEach(model => {
			const element = this.renderer.html.render('div', { ...model.properties });

			model.matrix = this.graphic.getMVP(model, this.scene);

			this.renderer.html.setStyles(element, {
				transform: `matrix3d(${this.renderer.html.getStylesOfMatrix(model.matrix)})`
			});

			element.classList.add('grey');
			this.renderer.elements.push(element);
			scene.appendChild(element);
		});

		parent.appendChild(scene);
	}

	keydown(canvas, models) {
		document.addEventListener('keydown', event => {
			if (event.which !== 38) return;

			const counter = 10;

			models.forEach(model => {
				model.position.z += counter;
				console.log(model.position.z);
			});

			this.renderer.renderCanvas(canvas, models);
		});
	}

	keyup(canvas, models) {
		document.addEventListener('keydown', event => {
			if (event.which !== 40) return;
			const counter = -10;

			models.forEach(model => {
				model.position.z += counter;
			});
			this.renderer.renderCanvas(canvas, models);
		});
	}

	keyRight() {
		document.addEventListener('keydown', event => {
			if (event.which !== 39) return;
			let angle = -10;
			this.camera.rotation.y += angle;
		});
	}

	keyLeft() {
		document.addEventListener('keydown', event => {
			if (event.which !== 37) return;
			let angle = 10;
			this.camera.rotation.y += angle;
		});
	}

	mouseWheelINIT(models) {
		this.keyLeft(models);
		this.keyRight(models);
		this.keyup(models);
		this.keydown(models);

		document.addEventListener('mousewheel', () => {
			const counter = event.wheelDelta > 0 ? -100 : 100;
			this.moveModelsHTML(counter, models);
		});
	}
}
