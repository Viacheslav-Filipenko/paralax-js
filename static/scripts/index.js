import Space from '../../app/classes/Space.js';
import Camera from '../../app/classes/Camera.js';
import Rectangle from '../../app/classes/Rectangle.js';
import Scene from '../../app/classes/Scene.js';


const scene = new Scene({position: {x: 0, y: 0, z: 0}});

const camera = new Camera({
    position: {x: 1, y: 1, z: 1}, 
    far: 1,
    near: 0.1,
    fov: 10
});


const b = new Rectangle({
    position: {x: 100, y: 156, z: -100}, 
    properties: {
    width: '200px',
    height: '200px'
    }
});

const a = new Rectangle({position: {x: 200, y: 0, z: -200}, properties: {
    width: '400px',
    height: '400px'
}});

scene.add(a, b);

const body = document.querySelector('body');




const space = new Space(camera, scene); 

space.init(body);


