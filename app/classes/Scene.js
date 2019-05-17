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
			overflow: 'hidden',
			position: 'relative',
			backgroundColor: 'black',
			width: '1000px',
			height: '1800px',
			perspective: `${0}px`,
			perspectiveOrigin: '0%, 0%'
		});

		this.models.forEach(model => {
			const element = this.renderer.html.render('div', { ...model.properties });

			const matrix = this.graphic.getMVP(model, this, camera);

			this.renderer.html.setStyles(element, {
				transform: `matrix3d(${this.renderer.html.getStylesOfMatrix(matrix)})`
			});

			element.classList.add('grey');
			this.renderer.elements.push(element);
			scene.appendChild(element);
		});

		return scene;
	}
}
