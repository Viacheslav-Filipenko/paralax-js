import Render from './Render.js';
import Object3D from './Object3D.js';
import Graphic from './Graphic.js';
import { getClientHeight, getClientWidth } from '../utils/browser.js';

const graphic = new Graphic();

export default class Scene extends Object3D {
	constructor(obj) {
		super(obj.transformation);
		this.props = obj.props;
		this.renderer = new Render();
		this.models = [];
		this.container = null;
		this.proprtion = obj.proportion || {};
		this.animationTime = obj.animationTime || 0;
	}

	add(...models) {
		models.forEach(model => {
			this.models.push(model);
		});
	}

	getScaleWidth() {
		const k = (getClientHeight() / this.proprtion.height).toFixed(0);
		return Math.max(getClientWidth(), k * this.proprtion.width);
	}

	render(camera) {
		const scene = this.renderer.html.render('div', {
			display: 'flex',
			verticalAlign: 'middle',
			backgroundColor: 'white',
			alignItems: 'center',
			justifyContent: 'center',
			perspective: `${camera.perspective}`,
			width: '100vw',
			height: '100vh'
		});

		const k = this.getScaleWidth() / 1980;
		camera.scale(k, k, k);

		this.container = scene;

		const point = this.renderer.html.render('div', {
			backgroundColor: 'white',
			width: '3px',
			height: '3px'
		});
		const container = this.renderModels(camera, point);
		scene.appendChild(container);
		return scene;
	}

	renderModels(camera, container) {
		this.models.forEach(model => {
			const element = this.renderer.html.render(model.type, {
				...model.properties,
				position: 'absolute',
				zIndex: model.position.z * camera.getDirection(camera.viewMatrix).forward.z,
				transformOrigin: 'top left',
				transition: `all ${this.animationTime}s`
			});

			if (model.src !== undefined) element.setAttribute('src', model.src);

			const matrix = this.graphic.getMVP(model, this, camera);

			this.renderer.html.setStyles(element, {
				transform: `matrix3d(${this.renderer.html.getStylesOfMatrix(matrix)})`
			});

			this.renderer.html.setClass(element, model.classList);

			model.ViewAngleChange(element, model);

			this.renderer.elements.push(element);
			container.appendChild(element);
		});

		return container;
	}

	updateModels(camera) {
		this.models.forEach((model, index) => {
			const matrix = this.graphic.getMVP(model, this, camera);

			model.getAngle(camera);

			model.ViewAngleChange(this.renderer.elements[index], model);
			this.renderer.html.setStyles(this.renderer.elements[index], {
				transform: `matrix3d(${this.renderer.html.getStylesOfMatrix(matrix)})`,
				zIndex: graphic.getPosition(model.matrix).z,
				transition: `all ${this.animationTime}s`
			});
		});
	}
}
