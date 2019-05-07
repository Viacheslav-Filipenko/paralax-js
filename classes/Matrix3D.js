export default class Matrix3D {

    getScaleMatrix(vector) {

        if (vector.hasOwnProperty('x') && vector.hasOwnProperty('y') && vector.hasOwnProperty('z')) {

            return math.matrix([
                [vector.x, 0, 0, 0],
                [0, vector.y, 0, 0],
                [0, 0, vector.z, 0],
                [0, 0, 0, 1],
            ]);
        }
        return null;
    }

    getTranslationMatrix(vector) {

        if (vector.hasOwnProperty('x') && vector.hasOwnProperty('y') && vector.hasOwnProperty('z')) {

            return math.matrix([
                [1, 0, 0, vector.x],
                [0, 1, 0, vector.y],
                [0, 0, 1, vector.z],
                [0, 0, 0, 1],
            ]);
        }
        return null;
    }


    getTransfomationMatrix(transformXAxis, transformYAxis, transformZAxis, translation) {

        return math.matrix([
            [transformXAxis.x, transformXAxis.y, transformXAxis.z, 0],
            [transformYAxis.x, transformYAxis.y, transformYAxis.z, 0],
            [transformZAxis.x, transformZAxis.y, transformZAxis.z, 0],
            [translation.x, translation.y, translation.z, 1]
        ]);
    }

    getPerspectiveProjection(FOV, near, far) {

        return math.matrix([
            [Math.pow(Math.tan(FOV.x / 2), -1), 0, 0, 0],
            [0, Math.pow(Math.tan(FOV.y / 2), -1), 0, 0],
            [0, 0, -1*((far.z + near.z) / (far.z - near.z)), -2*((far.z * near.z) / (far.z - near.z))],
            [0, 0, -1, 0]
        ]);
    }

    getRotationMatrix(axis, angle) {

        if (axis.toLowerCase() === 'x') {

            return math.matrix([
                [1, 0, 0, 0],
                [0, Math.cos(angle), -1*Math.sin(angle), 0],
                [0, Math.sin(angle), Math.cos(angle), 0],
                [0, 0, 0, 1],
            ]);
        }

        if (axis.toLowerCase() === 'y') {

            return math.matrix([
                [Math.cos(angle), 0, Math.sin(angle), 0],
                [0, 1, 0, 0],
                [-1*Math.sin(angle), 0, Math.cos(angle), 0],
                [0, 0, 0, 1],
            ]);
        }

        if (axis.toLowerCase() === 'z') {

            return math.matrix([
                [Math.cos(angle), -1*Math.sin(angle), 0, 0],
                [Math.sin(angle), Math.cos(angle), 0, 0],
                [0, 0, 1, 0],
                [0, 0, 0, 1],
            ]);
        }
        return null;
    }
}