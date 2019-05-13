import { toRadians } from "../static/scripts/utils/Math.js";

export default class Matrix3D {
    constructor() {}

    getScaleMatrix(vector) {
        return math.matrix([
            [vector.x, 0, 0, 0],
            [0, vector.y, 0, 0],
            [0, 0, vector.z, 0],
            [0, 0, 0, 1]
        ]);
    }

    getStylesOf(matrix) {
        if (Array.isArray(matrix)) {
            matrix = this.multiply(matrix);
        }

        let result = "";
        matrix.forEach((value, index) => {
            result += `${value},`;
        });

        return result.slice(0, -1);
    }

    getTranslationMatrix(vector = {}) {
        if (
            vector.hasOwnProperty("x") &&
            vector.hasOwnProperty("y") &&
            vector.hasOwnProperty("z")
        ) {
            return math.matrix([
                [1, 0, 0, 0],
                [0, 1, 0, 0],
                [0, 0, 1, 0],
                [vector.x, vector.y, vector.z, 1]
            ]);
        }
        return null;
    }

    getTransfomationMatrix(
        transformXAxis,
        transformYAxis,
        transformZAxis,
        translation
    ) {
        return math.matrix([
            [transformXAxis.x, transformXAxis.y, transformXAxis.z, 0],
            [transformYAxis.x, transformYAxis.y, transformYAxis.z, 0],
            [transformZAxis.x, transformZAxis.y, transformZAxis.z, 0],
            [translation.x, translation.y, translation.z, 1]
        ]);
    }

    multiply(matrix) {
        let result = matrix[0];
        matrix.splice(0, 1);
        matrix.forEach(m => {
            result = math.multiply(result, m);
        });

        return result;
    }

    getRotationMatrix(axis, angle) {
        angle = toRadians(angle);

        if (axis.toLowerCase() === "x") {
            return math.matrix([
                [1, 0, 0, 0],
                [0, Math.cos(angle), -1 * Math.sin(angle), 0],
                [0, Math.sin(angle), Math.cos(angle), 0],
                [0, 0, 0, 1]
            ]);
        }

        if (axis.toLowerCase() === "y") {
            return math.matrix([
                [Math.cos(angle), 0, Math.sin(angle), 0],
                [0, 1, 0, 0],
                [-1 * Math.sin(angle), 0, Math.cos(angle), 0],
                [0, 0, 0, 1]
            ]);
        }

        if (axis.toLowerCase() === "z") {
            return math.matrix([
                [Math.cos(angle), -1 * Math.sin(angle), 0, 0],
                [Math.sin(angle), Math.cos(angle), 0, 0],
                [0, 0, 1, 0],
                [0, 0, 0, 1]
            ]);
        }
        return null;
    }
}
