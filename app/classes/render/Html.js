export default class Html {
	constructor() {}

	getStylesOfMatrix(matrix) {
		const cssMatrix = [[], [], [], []];
		matrix.forEach((value, index) => {
			cssMatrix[index[1]].push(value);
		});
		return cssMatrix.toString();
	}

	setStyles(element, styles) {
		Object.keys(styles).forEach(style => {
			element.style[style] = styles[style];
		});
	}

	renderDebugNode(target) {
		const props = target.getBoundingClientRect();
		const styles = {
			border: '1px solid green',
			position: 'fixed',
			width: `${props.width}px`,
			height: `${props.height}px`,
			left: `${props.left}px`,
			top: `${props.top}px`
		};
		const element = document.createElement('div');
		this.setStyles(element, styles);
		document.querySelector('body').appendChild(element);
	}

	render(type, styles) {
		const element = document.createElement(type);
		this.setStyles(element, styles);
		return element;
	}
}
