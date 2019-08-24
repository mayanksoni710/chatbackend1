require("source-map-support").install();
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/constants/StaticConstants.js":
/*!******************************************!*\
  !*** ./src/constants/StaticConstants.js ***!
  \******************************************/
/*! exports provided: NOT_FOUND_ERROR, STUDENTS_DATA_FETCH_ERROR, STUDENT_DATA_FETCH_ERROR, STUDENT_ID_MISSING, STUDENT_ID_INVALID, STUDENT_NOT_FOUND */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NOT_FOUND_ERROR\", function() { return NOT_FOUND_ERROR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STUDENTS_DATA_FETCH_ERROR\", function() { return STUDENTS_DATA_FETCH_ERROR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STUDENT_DATA_FETCH_ERROR\", function() { return STUDENT_DATA_FETCH_ERROR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STUDENT_ID_MISSING\", function() { return STUDENT_ID_MISSING; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STUDENT_ID_INVALID\", function() { return STUDENT_ID_INVALID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STUDENT_NOT_FOUND\", function() { return STUDENT_NOT_FOUND; });\nvar NOT_FOUND_ERROR = 'Invalid Api call: Api not found';\nvar STUDENTS_DATA_FETCH_ERROR = 'Could not fetch Students data';\nvar STUDENT_DATA_FETCH_ERROR = 'Could not fetch Student data';\nvar STUDENT_ID_MISSING = 'Student Id Missing';\nvar STUDENT_ID_INVALID = 'Invalid Student Id Format';\nvar STUDENT_NOT_FOUND = 'Student Not Found';\n\n//# sourceURL=webpack:///./src/constants/StaticConstants.js?");

/***/ }),

/***/ "./src/database/config.js":
/*!********************************!*\
  !*** ./src/database/config.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var mongoURI = 'mongodb://localhost/';\nvar mongoPort = '27017';\nvar dbName = 'chat';\nvar dbConfig = {\n  conStr: 'mongodb+srv://micky007:micky007@cluster0-2z5en.mongodb.net/test?retryWrites=true&w=majority',\n  // `mongodb+srv://micky007:micky007@inventorymanagement-2z5en.mongodb.net/${dbName}?retryWrites=true`\n  mongoPort: mongoPort\n};\nmodule.exports = dbConfig;\n\n//# sourceURL=webpack:///./src/database/config.js?");

/***/ }),

/***/ "./src/database/index.js":
/*!*******************************!*\
  !*** ./src/database/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./src/database/config.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var _dbConfig$conStr = _config__WEBPACK_IMPORTED_MODULE_1___default.a.conStr,\n      conStr = _dbConfig$conStr === void 0 ? '' : _dbConfig$conStr;\n  mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(conStr, {\n    useNewUrlParser: true\n  });\n  mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection.on('connected', function () {\n    console.log(\"DB connection Successful\"); // eslint-disable-line\n  });\n  mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection.on('error', function (err) {\n    console.log('DB connection Failed..', err); // eslint-disable-line\n  });\n});\n\n//# sourceURL=webpack:///./src/database/index.js?");

/***/ }),

/***/ "./src/database/models/msgs.model.js":
/*!*******************************************!*\
  !*** ./src/database/models/msgs.model.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar msgSchema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  _id: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.SchemaTypes.ObjectId,\n  name: String,\n  msg: String\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('students', msgSchema, 'msgs'));\n\n//# sourceURL=webpack:///./src/database/models/msgs.model.js?");

/***/ }),

/***/ "./src/httpServer/config.js":
/*!**********************************!*\
  !*** ./src/httpServer/config.js ***!
  \**********************************/
/*! exports provided: port */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"port\", function() { return port; });\n// Skipping default export as we can have multiple caonfig variable later\n// eslint-disable-next-line import/prefer-default-export\nvar port = 3001;\n\n//# sourceURL=webpack:///./src/httpServer/config.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var express_robots_txt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! express-robots-txt */ \"express-robots-txt\");\n/* harmony import */ var express_robots_txt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(express_robots_txt__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./database */ \"./src/database/index.js\");\n/* harmony import */ var _middlewares_errorHandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./middlewares/errorHandler */ \"./src/middlewares/errorHandler.js\");\n/* harmony import */ var _middlewares_notFoundError__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./middlewares/notFoundError */ \"./src/middlewares/notFoundError.js\");\n/* harmony import */ var _httpServer_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./httpServer/config */ \"./src/httpServer/config.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes */ \"./src/routes/index.js\");\n/* harmony import */ var _database_models_msgs_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./database/models/msgs.model */ \"./src/database/models/msgs.model.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nvar chat = _routes__WEBPACK_IMPORTED_MODULE_10__[\"default\"].chat;\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n\nvar http = __webpack_require__(/*! http */ \"http\").Server(app);\n\nvar io = __webpack_require__(/*! socket.io */ \"socket.io\")(http);\n\nObject(_database__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\napp.use(morgan__WEBPACK_IMPORTED_MODULE_2___default()('dev'));\napp.use(cors__WEBPACK_IMPORTED_MODULE_3___default()());\nexpress__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"]('/static');\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_4___default.a.urlencoded({\n  extended: false\n}));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_4___default.a.json());\napp.use(express_robots_txt__WEBPACK_IMPORTED_MODULE_5___default()({\n  UserAgent: '*',\n  Disallow: '/'\n}));\napp.get('/', function (req, res) {\n  res.render('index.ejs');\n});\napp.use('/chat', chat);\napp.use('/static', express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"]('public'));\napp.use(_middlewares_notFoundError__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\napp.use(_middlewares_errorHandler__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\nio.sockets.on('connection', function (socket) {\n  socket.on('username', function (username) {\n    // eslint-disable-next-line no-param-reassign\n    socket.username = username;\n    _database_models_msgs_model__WEBPACK_IMPORTED_MODULE_11__[\"default\"].find().exec().then(function (res) {\n      return io.emit('refresh', {\n        name: username,\n        res: res\n      });\n    });\n  });\n  socket.on('disconnect', function () {\n    io.emit('is_online', \"\\uD83D\\uDD34 <i>\\u2665\".concat(socket.username, \"\\u2665 left the chat..</i>\"));\n  });\n  socket.on('chat_message', function (message) {\n    var newMsg = new _database_models_msgs_model__WEBPACK_IMPORTED_MODULE_11__[\"default\"]({\n      _id: new mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.Types.ObjectId(),\n      name: socket.username,\n      msg: message\n    });\n    newMsg.save().then(function () {\n      io.emit('chat_message', {\n        name: socket.username,\n        msg: message,\n        saved: true\n      });\n    })[\"catch\"](function () {\n      io.emit('chat_message', {\n        name: socket.username,\n        msg: message,\n        saved: false\n      });\n    });\n  });\n});\nhttp.listen(process.env.PORT || _httpServer_config__WEBPACK_IMPORTED_MODULE_9__[\"port\"], function () {\n  console.log('Server Started on port: ', process.env.PORT || _httpServer_config__WEBPACK_IMPORTED_MODULE_9__[\"port\"]); // eslint-disable-line\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/middlewares/errorHandler.js":
/*!*****************************************!*\
  !*** ./src/middlewares/errorHandler.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (error, req, res, next) {\n  res.status(error.status || 500);\n  res.json({\n    message: error.message\n  });\n  next();\n});\n\n//# sourceURL=webpack:///./src/middlewares/errorHandler.js?");

/***/ }),

/***/ "./src/middlewares/notFoundError.js":
/*!******************************************!*\
  !*** ./src/middlewares/notFoundError.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities */ \"./src/utilities.js\");\n/* harmony import */ var _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/StaticConstants */ \"./src/constants/StaticConstants.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (req, res, next) {\n  next(Object(_utilities__WEBPACK_IMPORTED_MODULE_0__[\"createError\"])(404, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_1__[\"NOT_FOUND_ERROR\"]));\n});\n\n//# sourceURL=webpack:///./src/middlewares/notFoundError.js?");

/***/ }),

/***/ "./src/routes/chat.js":
/*!****************************!*\
  !*** ./src/routes/chat.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _database_models_msgs_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database/models/msgs.model */ \"./src/database/models/msgs.model.js\");\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.get('/', function (req, res) {\n  _database_models_msgs_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find().exec().then(function (response) {\n    return res.status(200).json(response);\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/routes/chat.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat */ \"./src/routes/chat.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  chat: _chat__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/routes/index.js?");

/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/*! exports provided: createError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createError\", function() { return createError; });\n// skipping default export as we can have multiple utility function later\n// eslint-disable-next-line import/prefer-default-export\nvar createError = function createError(status, errMsg) {\n  var error = new Error(errMsg);\n  error.status = status;\n  return error;\n};\n\n//# sourceURL=webpack:///./src/utilities.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-robots-txt":
/*!*************************************!*\
  !*** external "express-robots-txt" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-robots-txt\");\n\n//# sourceURL=webpack:///external_%22express-robots-txt%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"socket.io\");\n\n//# sourceURL=webpack:///external_%22socket.io%22?");

/***/ })

/******/ });