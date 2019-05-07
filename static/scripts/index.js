import Matrix3D from "../../classes/Matrix3D.js";
import Space from '../../classes/Space.js';
import Camera from '../../classes/Camera.js';
import Rectangle from '../../classes/Rectangle.js';
import { setStyles } from '../scripts/utils/styles.js'; 

const matrix = new Matrix3D();

const rectangle = new Rectangle({position: {}, size: {
    
}});

const Objects3D = [];

const background = document.createElement('div');

const test = matrix.getTranslationMatrix({x: 900, y: 1, z: 1})
const rotated = matrix.getRotationMatrix('z', 0);

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
    transform: `matrix3d(${matrix.getStylesOf([test, rotated])})`
})

background.appendChild(rectengle);

document.querySelector('body').appendChild(background)


