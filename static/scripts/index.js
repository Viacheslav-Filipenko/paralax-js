import Space from "../../app/classes/Space.js";
import Camera from "../../app/classes/Camera.js";
import Rectangle from "../../app/classes/Rectangle.js";
import Scene from "../../app/classes/Scene.js";

const scene = new Scene({
    transformation: {
        position: { x: 0, y: 0, z: 0 }
    }
});

const camera = new Camera({
    position: { x: 0, y: 0, z: 10 },
    far: 100,
    near: 1,
    fov: 90
});

const b = new Rectangle({
    transformation: {
        position: { x: 100, y: 0, z: 1 }
    },
    properties: {
        width: "200px",
        height: "200px"
    }
});

const a = new Rectangle({
    transformation: {
        position: { x: 200, y: 0, z: 200 },
    },
    properties: {
        width: "400px",
        height: "400px"
    }
});

scene.add(a, b);

const body = document.querySelector("body");

const space = new Space(camera, scene);

space.init(body);
