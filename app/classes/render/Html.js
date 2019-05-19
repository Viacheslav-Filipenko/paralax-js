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

	render(type, styles) {
		const element = document.createElement(type);
		this.setStyles(element, styles);
		return element;
	}
}
