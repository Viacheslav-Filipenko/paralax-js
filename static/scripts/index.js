import Matrix3D from "../../classes/Matrix3D.js";

const matrix = new Matrix3D();

const background = document.createElement('div');


const setStyles = (element, styles) => {

    Object.keys(styles).forEach(style => {
        element.style[style] = styles[style];
    });
} 

const test = matrix.getTranslationMatrix({x: 1, y: 1, z: 0})
const rotated = matrix.getRotationMatrix('z', 45);
setStyles(background, {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'black'
});


const rectengle = document.createElement('div');

rectengle.innerHTML = "some text";

setStyles(rectengle, {
    width: '100px',
    height: '100px',
    backgroundColor: 'white',
    position: 'absolute',
    transform: `matrix3d(${matrix.getCSS(math.multiply(test, rotated))})`
})

background.appendChild(rectengle);

document.querySelector('body').appendChild(background)


