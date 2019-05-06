import Matrix3D from '../../classes/Matrix3D.js';

const matrix = new Matrix3D();

const translated = matrix.getTranslationMatrix({x:1.5,y:1.0,z:1.5})
const rotatedX = matrix.getRotationMatrix('x', 180);
const rotatedY = matrix.getRotationMatrix('y', 90);

console.log(translated);
console.log(rotatedX);
console.log(rotatedY)

console.log(
    math.multiply(math.multiply(rotatedX, rotatedX), rotatedY))
