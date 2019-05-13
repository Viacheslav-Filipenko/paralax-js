import Space from '../../classes/Space.js';
import Camera from '../../classes/Camera.js';
import Rectangle from '../../classes/Rectangle.js';
import Scene from '../../classes/Scene.js';


const scene = new Scene({position: {x: 100, y: 0, z: 0}});

const camera = new Camera({
    position: {x: 0, y: 0, z: 0}
});


const b = new Rectangle({
    position: {x: 100, y: 0, z: -100}, 
    properties: {
    width: '200px',
    height: '200px'
    }
});

const a = new Rectangle({position: {x: 200, y: 0, z: -200}, properties: {
    width: '400px',
    height: '400px'
}});

scene.add([a, b]);

const body = document.querySelector('body');




const space = new Space(camera, scene); 

space.init(body);


