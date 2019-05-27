export const grabbing = callback => {
	document.addEventListener('mousedown', event => {
		event.preventDefault();
		if (event.button) return;

		document.querySelector('body').style.cursor = 'grabbing';
		document.addEventListener('mousemove', callback);
	});

	document.addEventListener('mouseup', event => {
		event.preventDefault();
		if (event.button) return;
		document.querySelector('body').style.cursor = 'default';
		document.removeEventListener('mousemove', callback);
	});
};
