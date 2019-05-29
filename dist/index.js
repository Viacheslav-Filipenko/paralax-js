var paralax = (function (exports) {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  var Space =
  /*#__PURE__*/
  function () {
    function Space(scene, camera) {
      _classCallCheck(this, Space);

      this.scene = scene || null;
      this.camera = camera || null;
    }

    _createClass(Space, [{
      key: "init",
      value: function init(parent) {
        var scene = this.scene.render(this.camera);
        parent.appendChild(scene);
      }
    }]);

    return Space;
  }();

  var Html =
  /*#__PURE__*/
  function () {
    function Html() {
      _classCallCheck(this, Html);
    }

    _createClass(Html, [{
      key: "getStylesOfMatrix",
      value: function getStylesOfMatrix(matrix) {
        var cssMatrix = [[], [], [], []];
        matrix.forEach(function (value, index) {
          cssMatrix[index[1]].push(value);
        });
        return cssMatrix.toString();
      }
    }, {
      key: "setStyles",
      value: function setStyles(element, styles) {
        Object.keys(styles).forEach(function (style) {
          element.style[style] = styles[style];
        });
      }
    }, {
      key: "setClass",
      value: function setClass(element) {
        var classList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        classList.forEach(function (item) {
          element.classList.add(item);
        });
      }
    }, {
      key: "render",
      value: function render(type, styles) {
        var element = document.createElement(type);
        this.setStyles(element, styles);
        return element;
      }
    }]);

    return Html;
  }();

  var Render = function Render() {
    _classCallCheck(this, Render);

    this.html = new Html();
    this.elements = [];
  };

  var toRadians = function toRadians() {
    var angle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return angle * (Math.PI / 180);
  };
  var toDegrees = function toDegrees() {
    var angle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return angle * 180 / Math.PI;
  };

  var MatrixService =
  /*#__PURE__*/
  function () {
    function MatrixService() {
      _classCallCheck(this, MatrixService);
    }

    _createClass(MatrixService, [{
      key: "getPrimaryMatrix",
      value: function getPrimaryMatrix() {
        return math.matrix([[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]);
      }
    }, {
      key: "getScaleMatrix",
      value: function getScaleMatrix() {
        var vector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var x = vector.x || 1;
        var y = vector.y || 1;
        var z = vector.z || 1;
        return math.matrix([[x, 0, 0, 0], [0, y, 0, 0], [0, 0, z, 0], [0, 0, 0, 1]]);
      }
    }, {
      key: "getTranslationMatrix",
      value: function getTranslationMatrix() {
        var vector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var x = vector.x || 0;
        var y = vector.y || 0;
        var z = vector.z || 0;
        return math.matrix([[1, 0, 0, x], [0, 1, 0, y], [0, 0, 1, z], [0, 0, 0, 1]]);
      }
    }, {
      key: "multiply",
      value: function multiply() {
        for (var _len = arguments.length, matrix = new Array(_len), _key = 0; _key < _len; _key++) {
          matrix[_key] = arguments[_key];
        }

        var result = matrix[0];
        matrix.splice(0, 1);
        matrix.forEach(function (m) {
          result = math.multiply(result, m);
        });
        return result;
      }
    }, {
      key: "getRotationMatrixX",
      value: function getRotationMatrixX() {
        var angle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var angleX = toRadians(angle);
        return math.matrix([[1, 0, 0, 0], [0, Math.cos(angleX), -Math.sin(angleX), 0], [0, Math.sin(angleX), Math.cos(angleX), 0], [0, 0, 0, 1]]);
      }
    }, {
      key: "getRotationMatrixY",
      value: function getRotationMatrixY() {
        var angle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var angleY = toRadians(angle);
        return math.matrix([[Math.cos(angleY), 0, Math.sin(angleY), 0], [0, 1, 0, 0], [-Math.sin(angleY), 0, Math.cos(angleY), 0], [0, 0, 0, 1]]);
      }
    }, {
      key: "getRotationMatrixZ",
      value: function getRotationMatrixZ() {
        var angle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var angleZ = toRadians(angle);
        return math.matrix([[Math.cos(angleZ), -Math.sin(angleZ), 0, 0], [Math.sin(angleZ), Math.cos(angleZ), 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]);
      }
    }, {
      key: "getRotationMatrix",
      value: function getRotationMatrix(axis) {
        var angle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        if (axis.toLowerCase() === 'x') return this.getRotationMatrixX(angle);
        if (axis.toLowerCase() === 'y') return this.getRotationMatrixY(angle);
        if (axis.toLowerCase() === 'z') return this.getRotationMatrixZ(angle);
        return null;
      }
    }]);

    return MatrixService;
  }();

  var Vector =
  /*#__PURE__*/
  function () {
    function Vector() {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      _classCallCheck(this, Vector);

      this.x = obj.x || value;
      this.y = obj.y || value;
      this.z = obj.z || value;
    }

    _createClass(Vector, [{
      key: "reverse",
      value: function reverse() {
        var x = -this.x;
        var y = -this.y;
        var z = -this.z;
        return new Vector({
          x: x,
          y: y,
          z: z
        });
      }
    }, {
      key: "length",
      value: function length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
      }
    }, {
      key: "divide",
      value: function divide(value) {
        var x = this.x / value;
        var y = this.y / value;
        var z = this.z / value;
        return new Vector({
          x: x,
          y: y,
          z: z
        });
      }
    }, {
      key: "normalize",
      value: function normalize() {
        var length = this.length();
        if (length !== 0) return this.divide(length);
      }
    }], [{
      key: "dotProduct",
      value: function dotProduct(vector1, vector2) {
        var x = vector1.x * vector2.x;
        var y = vector1.y * vector2.y;
        var z = vector1.z * vector2.z;
        return x + y + z;
      }
    }, {
      key: "getAngleBetweenTwoVectors",
      value: function getAngleBetweenTwoVectors(vector1, vector2) {
        var x = this.dotProduct(vector1, vector2) / (vector1.length() * vector2.length());
        return toDegrees(Math.acos(x));
      }
    }]);

    return Vector;
  }();

  var Graphic =
  /*#__PURE__*/
  function () {
    function Graphic() {
      _classCallCheck(this, Graphic);

      this.matrixService = new MatrixService();
    }

    _createClass(Graphic, [{
      key: "primary",
      value: function primary() {
        return this.matrixService.getPrimaryMatrix();
      }
    }, {
      key: "scale",
      value: function scale(vector) {
        return this.matrixService.getScaleMatrix(vector);
      }
    }, {
      key: "scaleX",
      value: function scaleX() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        return this.matrixService.getScaleMatrix({
          x: x
        });
      }
    }, {
      key: "scaleY",
      value: function scaleY() {
        var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        return this.matrixService.getScaleMatrix({
          y: y
        });
      }
    }, {
      key: "scaleZ",
      value: function scaleZ() {
        var z = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        return this.matrixService.getScaleMatrix({
          z: z
        });
      }
    }, {
      key: "multiply",
      value: function multiply() {
        var _this$matrixService;

        return (_this$matrixService = this.matrixService).multiply.apply(_this$matrixService, arguments);
      }
    }, {
      key: "rotate",
      value: function rotate(rotation) {
        var _this = this;

        var matrix = this.primary();
        Object.keys(rotation).reverse().forEach(function (axios) {
          var rotationMatrix = _this.matrixService.getRotationMatrix(axios, rotation[axios]);

          matrix = _this.multiply(matrix, rotationMatrix);
        });
        return matrix;
      }
    }, {
      key: "rotateX",
      value: function rotateX() {
        var angle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var rotationMatrix = this.matrixService.getRotationMatrix('x', angle);
        return this.multiply(this.primary(), rotationMatrix);
      }
    }, {
      key: "rotateY",
      value: function rotateY() {
        var angle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var rotationMatrix = this.matrixService.getRotationMatrix('y', angle);
        return this.multiply(this.primary(), rotationMatrix);
      }
    }, {
      key: "rotateZ",
      value: function rotateZ() {
        var angle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var rotationMatrix = this.matrixService.getRotationMatrix('z', angle);
        return this.multiply(this.primary(), rotationMatrix);
      }
    }, {
      key: "translate",
      value: function translate(vector) {
        return this.matrixService.getTranslationMatrix(vector);
      }
    }, {
      key: "trasform",
      value: function trasform(model) {
        var result = this.primary();
        result = this.multiply(result, model._scaleMatrix);
        result = this.multiply(result, model._rotationMatrix);
        return this.multiply(result, model._translationMatrix);
      }
    }, {
      key: "getDirection",
      value: function getDirection(matrix) {
        var right = this.getDirectionRight(matrix);
        var up = this.getDirectionUp(matrix);
        var forward = this.getDirectionForward(matrix);
        return {
          right: right,
          up: up,
          forward: forward
        };
      }
    }, {
      key: "getPosition",
      value: function getPosition(matrix) {
        var _matrix = matrix._data;
        var x = _matrix[0][3];
        var y = _matrix[1][3];
        var z = _matrix[2][3];
        return {
          x: x,
          y: y,
          z: z
        };
      }
    }, {
      key: "getDirectionRight",
      value: function getDirectionRight(matrix) {
        var _matrix = matrix._data;
        return new Vector({
          x: _matrix[0][0],
          y: _matrix[1][0],
          z: _matrix[2][0]
        });
      }
    }, {
      key: "getDirectionUp",
      value: function getDirectionUp(matrix) {
        var _matrix = matrix._data;
        return new Vector({
          x: _matrix[0][1],
          y: _matrix[1][1],
          z: _matrix[2][1]
        });
      }
    }, {
      key: "getDirectionForward",
      value: function getDirectionForward(matrix) {
        var _matrix = matrix._data;
        return new Vector({
          x: _matrix[0][2],
          y: _matrix[1][2],
          z: _matrix[2][2]
        });
      }
    }, {
      key: "getMVP",
      value: function getMVP(model, world, camera) {
        var modelToWorld = this.multiply(model.matrix, world.matrix);
        var modelToView = this.multiply(camera.viewMatrix, modelToWorld);
        return modelToView;
      }
    }]);

    return Graphic;
  }();

  var Object3D =
  /*#__PURE__*/
  function () {
    function Object3D(obj) {
      _classCallCheck(this, Object3D);

      this.graphic = new Graphic();
      this.position = new Vector(obj.position, 0);
      this._rotationMatrix = this.graphic.rotate(new Vector(obj.rotation, 0));
      this._translationMatrix = this.graphic.translate(new Vector(obj.position, 0));
      this._scaleMatrix = this.graphic.scale(new Vector(obj.scale, 1));
      this._matrix = this.graphic.trasform(this);

      this.ViewAngleChange = function () {};

      this.ViewAngle = {
        x: 0,
        y: 0,
        z: 0
      };
    }

    _createClass(Object3D, [{
      key: "onViewAngleChange",
      value: function onViewAngleChange(callback) {
        this.ViewAngleChange = callback;
      }
    }, {
      key: "getPosition",
      value: function getPosition() {
        return this.graphic.getPosition(this._matrix);
      }
    }, {
      key: "getAngleToCamera",
      value: function getAngleToCamera(camera) {
        var x = this.getAngleToCameraX(camera);
        var y = this.getAngleToCameraY(camera);
        var z = this.getAngleToCameraZ(camera);
        this.ViewAngle = {
          x: x,
          y: y,
          z: z
        };
        return this.ViewAngle;
      }
    }, {
      key: "getAngleToCameraX",
      value: function getAngleToCameraX(camera) {
        var _this$graphic$getDire = this.graphic.getDirection(this._rotationMatrix),
            right = _this$graphic$getDire.right;

        var cameraRight = this.graphic.getDirection(camera._rotationMatrix).right;
        var angleX = Vector.getAngleBetweenTwoVectors(right, cameraRight);
        return Math.ceil(angleX);
      }
    }, {
      key: "getAngleToCameraY",
      value: function getAngleToCameraY(camera) {
        var _this$graphic$getDire2 = this.graphic.getDirection(this._rotationMatrix),
            up = _this$graphic$getDire2.up;

        var cameraUp = this.graphic.getDirection(camera._rotationMatrix).up;
        var angleY = Vector.getAngleBetweenTwoVectors(up, cameraUp);
        return Math.ceil(angleY);
      }
    }, {
      key: "getAngleToCameraZ",
      value: function getAngleToCameraZ(camera) {
        var _this$graphic$getDire3 = this.graphic.getDirection(this._rotationMatrix),
            forward = _this$graphic$getDire3.forward;

        var cameraForward = this.graphic.getDirection(camera._rotationMatrix).forward;
        var angleZ = Vector.getAngleBetweenTwoVectors(forward, cameraForward);
        return Math.ceil(angleZ);
      }
    }, {
      key: "matrix",
      get: function get() {
        return this._matrix;
      }
    }]);

    return Object3D;
  }();

  var graphic = new Graphic();

  var Scene =
  /*#__PURE__*/
  function (_Object3D) {
    _inherits(Scene, _Object3D);

    function Scene(obj) {
      var _this;

      _classCallCheck(this, Scene);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Scene).call(this, obj.transformation));
      _this.props = obj.props;
      _this.renderer = new Render();
      _this.models = [];
      _this.container = null;
      return _this;
    }

    _createClass(Scene, [{
      key: "add",
      value: function add() {
        var _this2 = this;

        for (var _len = arguments.length, models = new Array(_len), _key = 0; _key < _len; _key++) {
          models[_key] = arguments[_key];
        }

        models.forEach(function (model) {
          _this2.models.push(model);
        });
      }
    }, {
      key: "render",
      value: function render(camera) {
        var scene = this.renderer.html.render('div', {
          display: 'flex',
          verticalAlign: 'middle',
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          perspective: "".concat(camera.perspective),
          width: '100vw',
          height: '100vh'
        });
        this.container = scene;
        var point = this.renderer.html.render('div', {
          backgroundColor: 'white',
          width: '3px',
          height: '3px'
        });
        var container = this.renderModels(camera, point);
        scene.appendChild(container);
        return scene;
      }
    }, {
      key: "renderModels",
      value: function renderModels(camera, container) {
        var _this3 = this;

        this.models.forEach(function (model) {
          var element = _this3.renderer.html.render(model.type, _objectSpread({}, model.properties, {
            position: 'absolute',
            zIndex: model.position.z * camera.getDirection(camera.viewMatrix).forward.z,
            transformOrigin: 'top left' // transition: 'all 1s'

          }));

          if (model.src !== undefined) element.setAttribute('src', model.src);

          var matrix = _this3.graphic.getMVP(model, _this3, camera);

          _this3.renderer.html.setStyles(element, {
            transform: "matrix3d(".concat(_this3.renderer.html.getStylesOfMatrix(matrix), ")")
          });

          _this3.renderer.html.setClass(element, model.classList);

          model.ViewAngleChange(element, model);

          _this3.renderer.elements.push(element);

          container.appendChild(element);
        });
        return container;
      }
    }, {
      key: "updateModels",
      value: function updateModels(camera) {
        var _this4 = this;

        this.models.forEach(function (model, index) {
          var matrix = _this4.graphic.getMVP(model, _this4, camera);

          model.getAngle(camera);
          model.ViewAngleChange(_this4.renderer.elements[index], model);

          _this4.renderer.html.setStyles(_this4.renderer.elements[index], {
            transform: "matrix3d(".concat(_this4.renderer.html.getStylesOfMatrix(matrix), ")"),
            zIndex: graphic.getPosition(model.matrix).z
          });
        });
      }
    }]);

    return Scene;
  }(Object3D);

  var Camera =
  /*#__PURE__*/
  function () {
    function Camera(obj) {
      _classCallCheck(this, Camera);

      this.graphic = new Graphic();
      this._rotationMatrix = this.graphic.rotate(new Vector(obj.rotation, 0).reverse());
      this._translationMatrix = this.graphic.translate(new Vector(obj.position, 0).reverse());
      this._scaleMatrix = this.graphic.scale(new Vector(obj.scale, 1));
      this.perspective = obj.perspective;
      this._viewMatrix = this.view();
    }

    _createClass(Camera, [{
      key: "updateView",
      value: function updateView() {
        this._viewMatrix = this.view();
      }
    }, {
      key: "rotate",
      value: function rotate() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        this.rotateZ(z);
        this.rotateY(y);
        this.rotateX(x);
      }
    }, {
      key: "rotateX",
      value: function rotateX() {
        var angle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        this._rotationMatrix = this.graphic.multiply(this.graphic.rotateX(angle), this._rotationMatrix);
      }
    }, {
      key: "rotateY",
      value: function rotateY() {
        var angle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        this._rotationMatrix = this.graphic.multiply(this.graphic.rotateY(angle), this._rotationMatrix);
      }
    }, {
      key: "rotateZ",
      value: function rotateZ() {
        var angle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        this._rotationMatrix = this.graphic.multiply(this.graphic.rotateZ(-angle), this._rotationMatrix);
      }
    }, {
      key: "translate",
      value: function translate() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        this.translateX(x);
        this.translateY(y);
        this.translateZ(z);
      }
    }, {
      key: "translateX",
      value: function translateX() {
        var distance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

        var _this$getDirection = this.getDirection(this._rotationMatrix),
            right = _this$getDirection.right;

        var x = distance * right.x;
        var y = distance * right.y;
        var z = -distance * right.z;
        this._translationMatrix = this.graphic.multiply(this._translationMatrix, this.graphic.translate({
          x: x,
          y: y,
          z: z
        }));
      }
    }, {
      key: "translateY",
      value: function translateY(distance) {
        var _this$getDirection2 = this.getDirection(this._rotationMatrix),
            up = _this$getDirection2.up;

        var x = distance * up.x;
        var y = distance * up.y;
        var z = -distance * up.z;
        this._translationMatrix = this.graphic.multiply(this._translationMatrix, this.graphic.translate({
          x: x,
          y: y,
          z: z
        }));
      }
    }, {
      key: "translateZ",
      value: function translateZ(distance) {
        var _this$getDirection3 = this.getDirection(this._rotationMatrix),
            forward = _this$getDirection3.forward;

        var x = distance * forward.x;
        var y = distance * forward.y;
        var z = -distance * forward.z;
        this._translationMatrix = this.graphic.multiply(this._translationMatrix, this.graphic.translate({
          x: x,
          y: y,
          z: z
        }));
      }
    }, {
      key: "scale",
      value: function scale() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        this._scaleMatrix = this.graphic.scale({
          x: x,
          y: y,
          z: z
        });
      }
    }, {
      key: "getDirection",
      value: function getDirection() {
        return this.graphic.getDirection(this._viewMatrix);
      }
    }, {
      key: "getPosition",
      value: function getPosition() {
        return this.graphic.getPosition(this._viewMatrix);
      }
    }, {
      key: "view",
      value: function view() {
        var viewMatrix = this.graphic.primary();
        viewMatrix = this.graphic.multiply(viewMatrix, this._scaleMatrix);
        viewMatrix = this.graphic.multiply(viewMatrix, this._rotationMatrix);
        return this.graphic.multiply(viewMatrix, this._translationMatrix);
      }
    }, {
      key: "viewMatrix",
      get: function get() {
        return this._viewMatrix;
      }
    }]);

    return Camera;
  }();

  var Rectangle =
  /*#__PURE__*/
  function (_Object3D) {
    _inherits(Rectangle, _Object3D);

    function Rectangle(obj) {
      var _this;

      _classCallCheck(this, Rectangle);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Rectangle).call(this, obj.transformation));
      _this.properties = obj.properties;
      _this.classList = obj.classList;
      _this.src = obj.src;
      _this.type = obj.type;
      return _this;
    }

    _createClass(Rectangle, [{
      key: "getAngle",
      value: function getAngle(camera) {
        _get(_getPrototypeOf(Rectangle.prototype), "getAngleToCamera", this).call(this, camera);
      }
    }, {
      key: "onViewAngleChange",
      value: function onViewAngleChange(callback) {
        _get(_getPrototypeOf(Rectangle.prototype), "onViewAngleChange", this).call(this, callback);
      }
    }, {
      key: "getPosition",
      value: function getPosition() {
        return _get(_getPrototypeOf(Rectangle.prototype), "getPosition", this).call(this);
      }
    }]);

    return Rectangle;
  }(Object3D);

  exports.Camera = Camera;
  exports.Rectangle = Rectangle;
  exports.Scene = Scene;
  exports.Space = Space;

  return exports;

}({}));
