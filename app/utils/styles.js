export const setStyles = (element, styles, options = {}) => {
	Object.keys(styles).forEach(style => {
		element.style[style] = styles[style];

		if (Object.keys(options).length) {
			Object.keys(options).forEach(option => {
				element.style[option] = options[option];
			});
		}
	});
};
