export const setStyles = (element, styles) => {

    Object.keys(styles).forEach(style => {
        element.style[style] = styles[style];
    });
} 

