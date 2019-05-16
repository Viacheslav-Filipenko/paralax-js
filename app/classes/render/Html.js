export default class Html {
	constructor() {}

	getStylesOfMatrix(matrix) {
		let result = '';
		matrix.forEach(value => {
			result += `${value},`;
		});
		return result.slice(0, -1);
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
