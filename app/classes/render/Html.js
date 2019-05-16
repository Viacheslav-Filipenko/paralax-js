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

	// setStyle(element, style, value) {
	// 	const updatedMatrix = this.matrixService.getStylesOf(matrix);
	// 	setStyles(element, { transform: `matrix3d(${updatedMatrix})` });
	// }

	render(type, styles) {
		const element = document.createElement(type);
		this.setStyles(element, styles);
		return element;
	}
}
