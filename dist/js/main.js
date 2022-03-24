/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Animation.ts":
/*!*****************************!*\
  !*** ./src/js/Animation.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.animation = void 0;\nexports.animation = {\n  init: function init(canvas, snows) {\n    this.snows = snows;\n    this.canvas = canvas;\n    this.animate();\n    return this;\n  },\n  animate: function animate() {\n    var _this = this;\n\n    this.canvas.draw();\n    this.canvas.width = window.innerWidth;\n    this.snows.forEach(function (snow) {\n      snow.update();\n    });\n    requestAnimationFrame(function () {\n      _this.animate();\n    });\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvQW5pbWF0aW9uLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFFYUEsaUJBQUFBLEdBQVc7QUFFcEJDLE1BQUksZ0JBQUNDLE1BQUQsRUFBU0MsS0FBVCxFQUFjO0FBQ2QsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0QsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0UsT0FBTDtBQUNBLFdBQU8sSUFBUDtBQUNILEdBUG1CO0FBUXBCQSxTQUFPLEVBQVA7QUFBQTs7QUFDSSxTQUFLRixNQUFMLENBQVlHLElBQVo7QUFDQSxTQUFLSCxNQUFMLENBQVlJLEtBQVosR0FBb0JDLE1BQU0sQ0FBQ0MsVUFBM0I7QUFDQSxTQUFLTCxLQUFMLENBQVdNLE9BQVgsQ0FBbUIsVUFBQ0MsSUFBRCxFQUFlO0FBQzlCQSxVQUFJLENBQUNDLE1BQUw7QUFDSCxLQUZEO0FBR0FDLHlCQUFxQixDQUFDO0FBQ2xCQyxXQUFJLENBQUNULE9BQUw7QUFDSCxLQUZvQixDQUFyQjtBQUdIO0FBakJtQixDQUFYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV0LWl0LXNub3cvLi9zcmMvanMvQW5pbWF0aW9uLnRzPzdjZWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTbm93Zmxha2V9IGZyb20gXCIuL1Nub3dmbGFrZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFuaW1hdGlvbiA9e1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgaW5pdChjYW52YXMsIHNub3dzKXtcclxuICAgICAgICB0aGlzLnNub3dzID0gc25vd3M7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgYW5pbWF0ZSgpe1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmRyYXcoKTtcclxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIHRoaXMuc25vd3MuZm9yRWFjaCgoc25vdzpTbm93Zmxha2UpPT57XHJcbiAgICAgICAgICAgIHNub3cudXBkYXRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxufTtcclxuIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJpbml0IiwiY2FudmFzIiwic25vd3MiLCJhbmltYXRlIiwiZHJhdyIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImZvckVhY2giLCJzbm93IiwidXBkYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiX3RoaXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/Animation.ts\n");

/***/ }),

/***/ "./src/js/Main.ts":
/*!************************!*\
  !*** ./src/js/Main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\n\nvar Sky_1 = __webpack_require__(/*! ./Sky */ \"./src/js/Sky.ts\");\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/js/settings.ts\");\n\nvar Snowflake_1 = __webpack_require__(/*! ./Snowflake */ \"./src/js/Snowflake.ts\");\n\nvar Animation_1 = __webpack_require__(/*! ./Animation */ \"./src/js/Animation.ts\");\n\nvar Main = function () {\n  function Main() {\n    this.canvasElement = document.getElementById('my-canvas');\n    this.mouse = {\n      x: 0,\n      y: 0\n    };\n    this.ctx = this.canvasElement.getContext('2d');\n    this.snows = [];\n    this.canvas = new Sky_1.Sky(this.canvasElement, this.mouse);\n    this.loadSnow();\n    this.animation = Animation_1.animation.init(this.canvas, this.snows);\n  }\n\n  Main.prototype.loadSnow = function () {\n    for (var i = 0; i < settings_1.settings.snowflake.maxCount; i++) {\n      this.snows.push(new Snowflake_1.Snowflake(this.ctx, this.canvasElement, this.mouse));\n    }\n  };\n\n  return Main;\n}();\n\nnew Main();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvTWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7QUFRSTtBQUNJLFNBQUtBLGFBQUwsR0FBcUJDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQUFyQjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUFDQyxPQUFDLEVBQUUsQ0FBSjtBQUFPQyxPQUFDLEVBQUU7QUFBVixLQUFiO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLEtBQUtOLGFBQUwsQ0FBbUJPLFVBQW5CLENBQThCLElBQTlCLENBQVg7QUFDQSxTQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxJQUFJQyxTQUFKLENBQVEsS0FBS1YsYUFBYixFQUE0QixLQUFLRyxLQUFqQyxDQUFkO0FBQ0EsU0FBS1EsUUFBTDtBQUNBLFNBQUtDLFNBQUwsR0FBaUJDLHNCQUFVQyxJQUFWLENBQWUsS0FBS0wsTUFBcEIsRUFBNEIsS0FBS0QsS0FBakMsQ0FBakI7QUFDSDs7QUFFT08sNEJBQVI7QUFDSSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdDLG9CQUFTQyxTQUFULENBQW1CQyxRQUF2QyxFQUFpREgsQ0FBQyxFQUFsRCxFQUFzRDtBQUNsRCxXQUFLUixLQUFMLENBQVdZLElBQVgsQ0FBZ0IsSUFBSUMscUJBQUosQ0FBYyxLQUFLZixHQUFuQixFQUF3QixLQUFLTixhQUE3QixFQUE0QyxLQUFLRyxLQUFqRCxDQUFoQjtBQUNIO0FBQ0osR0FKTzs7QUFLWjtBQUFDLENBdkJEOztBQXdCQSxJQUFJWSxJQUFKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV0LWl0LXNub3cvLi9zcmMvanMvTWFpbi50cz8wMTIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2t5fSBmcm9tIFwiLi9Ta3lcIjtcclxuaW1wb3J0IHtzZXR0aW5nc30gZnJvbSBcIi4vc2V0dGluZ3NcIjtcclxuaW1wb3J0IHtTbm93Zmxha2V9IGZyb20gXCIuL1Nub3dmbGFrZVwiO1xyXG5pbXBvcnQge2FuaW1hdGlvbn0gZnJvbSBcIi4vQW5pbWF0aW9uXCI7XHJcblxyXG5jbGFzcyBNYWlue1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNhbnZhcyA6IFNreTtcclxuICAgIHByaXZhdGUgc25vd3M6IFNub3dmbGFrZVtdO1xyXG4gICAgcHJpdmF0ZSBtb3VzZTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9O1xyXG4gICAgcHJpdmF0ZSBhbmltYXRpb246IEFuaW1hdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXktY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5tb3VzZSA9IHt4OiAwLCB5OiAwfVxyXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXNFbGVtZW50LmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdGhpcy5zbm93cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gbmV3IFNreSh0aGlzLmNhbnZhc0VsZW1lbnQsIHRoaXMubW91c2UpO1xyXG4gICAgICAgIHRoaXMubG9hZFNub3coKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IGFuaW1hdGlvbi5pbml0KHRoaXMuY2FudmFzLCB0aGlzLnNub3dzKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9hZFNub3coKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXR0aW5ncy5zbm93Zmxha2UubWF4Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnNub3dzLnB1c2gobmV3IFNub3dmbGFrZSh0aGlzLmN0eCwgdGhpcy5jYW52YXNFbGVtZW50LCB0aGlzLm1vdXNlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbm5ldyBNYWluKCk7XHJcbiJdLCJuYW1lcyI6WyJjYW52YXNFbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm1vdXNlIiwieCIsInkiLCJjdHgiLCJnZXRDb250ZXh0Iiwic25vd3MiLCJjYW52YXMiLCJTa3lfMSIsImxvYWRTbm93IiwiYW5pbWF0aW9uIiwiQW5pbWF0aW9uXzEiLCJpbml0IiwiTWFpbiIsImkiLCJzZXR0aW5nc18xIiwic25vd2ZsYWtlIiwibWF4Q291bnQiLCJwdXNoIiwiU25vd2ZsYWtlXzEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/Main.ts\n");

/***/ }),

/***/ "./src/js/Sky.ts":
/*!***********************!*\
  !*** ./src/js/Sky.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Sky = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/js/settings.ts\");\n\nvar Sky = function () {\n  function Sky(canvasElement, mouse) {\n    this.canvasElement = canvasElement;\n    this.ctx = this.canvasElement.getContext('2d');\n    this.mouse = mouse;\n    this.resize();\n    this.addEventListeners();\n    this.generateGradient();\n    this.draw();\n    return this;\n  }\n\n  Sky.prototype.generateGradient = function () {\n    this.gradient = this.ctx.createLinearGradient(0, 0, this.canvasElement.width, this.canvasElement.height);\n    this.gradient.addColorStop(0, settings_1.settings.sky.gradient[0]);\n    this.gradient.addColorStop(1, settings_1.settings.sky.gradient[1]);\n    this.draw();\n    return this;\n  };\n\n  Sky.prototype.resize = function () {\n    this.canvasElement.width = window.innerWidth;\n    this.canvasElement.height = window.innerHeight;\n    this.generateGradient();\n    return this;\n  };\n\n  Sky.prototype.draw = function () {\n    this.ctx.save();\n    this.ctx.beginPath();\n    this.ctx.fillStyle = this.gradient;\n    this.ctx.fillRect(0, 0, this.canvasElement.width, this.canvasElement.height);\n    this.ctx.closePath();\n    this.ctx.restore();\n    return this;\n  };\n\n  Sky.prototype.addEventListeners = function () {\n    var _this = this;\n\n    window.addEventListener('resize', function (e) {\n      _this.resize();\n    });\n  };\n\n  return Sky;\n}();\n\nexports.Sky = Sky;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvU2t5LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFNSSxlQUFZQSxhQUFaLEVBQThDQyxLQUE5QyxFQUE2RTtBQUN6RSxTQUFLRCxhQUFMLEdBQXFCQSxhQUFyQjtBQUNBLFNBQUtFLEdBQUwsR0FBVyxLQUFLRixhQUFMLENBQW1CRyxVQUFuQixDQUE4QixJQUE5QixDQUFYO0FBQ0EsU0FBS0YsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0csTUFBTDtBQUNBLFNBQUtDLGlCQUFMO0FBQ0EsU0FBS0MsZ0JBQUw7QUFDQSxTQUFLQyxJQUFMO0FBQ0EsV0FBTyxJQUFQO0FBRUg7O0FBQ0RDO0FBQ0ksU0FBS0MsUUFBTCxHQUFnQixLQUFLUCxHQUFMLENBQVNRLG9CQUFULENBQThCLENBQTlCLEVBQWlDLENBQWpDLEVBQW9DLEtBQUtWLGFBQUwsQ0FBbUJXLEtBQXZELEVBQThELEtBQUtYLGFBQUwsQ0FBbUJZLE1BQWpGLENBQWhCO0FBQ0EsU0FBS0gsUUFBTCxDQUFjSSxZQUFkLENBQTJCLENBQTNCLEVBQThCQyxvQkFBU0MsR0FBVCxDQUFhTixRQUFiLENBQXNCLENBQXRCLENBQTlCO0FBQ0EsU0FBS0EsUUFBTCxDQUFjSSxZQUFkLENBQTJCLENBQTNCLEVBQThCQyxvQkFBU0MsR0FBVCxDQUFhTixRQUFiLENBQXNCLENBQXRCLENBQTlCO0FBQ0EsU0FBS0YsSUFBTDtBQUNBLFdBQU8sSUFBUDtBQUNILEdBTkQ7O0FBT0FDO0FBQ0ksU0FBS1IsYUFBTCxDQUFtQlcsS0FBbkIsR0FBMkJLLE1BQU0sQ0FBQ0MsVUFBbEM7QUFDQSxTQUFLakIsYUFBTCxDQUFtQlksTUFBbkIsR0FBNEJJLE1BQU0sQ0FBQ0UsV0FBbkM7QUFDQSxTQUFLWixnQkFBTDtBQUNBLFdBQU8sSUFBUDtBQUNILEdBTEQ7O0FBTUFFO0FBQ0ksU0FBS04sR0FBTCxDQUFTaUIsSUFBVDtBQUVBLFNBQUtqQixHQUFMLENBQVNrQixTQUFUO0FBQ0EsU0FBS2xCLEdBQUwsQ0FBU21CLFNBQVQsR0FBcUIsS0FBS1osUUFBMUI7QUFDQSxTQUFLUCxHQUFMLENBQVNvQixRQUFULENBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCLEtBQUt0QixhQUFMLENBQW1CVyxLQUEzQyxFQUFrRCxLQUFLWCxhQUFMLENBQW1CWSxNQUFyRTtBQUNBLFNBQUtWLEdBQUwsQ0FBU3FCLFNBQVQ7QUFDQSxTQUFLckIsR0FBTCxDQUFTc0IsT0FBVDtBQUNBLFdBQU8sSUFBUDtBQUNILEdBVEQ7O0FBVUFoQjtBQUFBOztBQUNJUSxVQUFNLENBQUNTLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFVBQUNDLENBQUQsRUFBRTtBQUNoQ0MsV0FBSSxDQUFDdkIsTUFBTDtBQUNILEtBRkQ7QUFHSCxHQUpEOztBQUtKO0FBQUMsQ0E3Q0Q7O0FBQWF3QixXQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xldC1pdC1zbm93Ly4vc3JjL2pzL1NreS50cz9kZTI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2V0dGluZ3N9IGZyb20gXCIuL3NldHRpbmdzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2t5IHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnRcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICBwcml2YXRlIGdyYWRpZW50OiBDYW52YXNHcmFkaWVudDtcclxuICAgIHByaXZhdGUgbW91c2U6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXNFbGVtZW50OiBIVE1MQ2FudmFzRWxlbWVudCwgbW91c2U6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzRWxlbWVudCA9IGNhbnZhc0VsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhc0VsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB0aGlzLm1vdXNlID0gbW91c2U7XHJcbiAgICAgICAgdGhpcy5yZXNpemUoKTtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUdyYWRpZW50KCk7XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgfVxyXG4gICAgZ2VuZXJhdGVHcmFkaWVudCgpIHtcclxuICAgICAgICB0aGlzLmdyYWRpZW50ID0gdGhpcy5jdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgdGhpcy5jYW52YXNFbGVtZW50LndpZHRoLCB0aGlzLmNhbnZhc0VsZW1lbnQuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCBzZXR0aW5ncy5za3kuZ3JhZGllbnRbMF0pO1xyXG4gICAgICAgIHRoaXMuZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsIHNldHRpbmdzLnNreS5ncmFkaWVudFsxXSk7XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICByZXNpemUoKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXNFbGVtZW50LndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgdGhpcy5jYW52YXNFbGVtZW50LmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCA7XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUdyYWRpZW50KCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuY3R4LnNhdmUoKTtcclxuICAgICAgICAvLyB0aGlzLmN0eC5yb3RhdGUoTWF0aC5QSS8xODApO1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuZ3JhZGllbnQ7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXNFbGVtZW50LndpZHRoLCB0aGlzLmNhbnZhc0VsZW1lbnQuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZXNpemUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJjYW52YXNFbGVtZW50IiwibW91c2UiLCJjdHgiLCJnZXRDb250ZXh0IiwicmVzaXplIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJnZW5lcmF0ZUdyYWRpZW50IiwiZHJhdyIsIlNreSIsImdyYWRpZW50IiwiY3JlYXRlTGluZWFyR3JhZGllbnQiLCJ3aWR0aCIsImhlaWdodCIsImFkZENvbG9yU3RvcCIsInNldHRpbmdzXzEiLCJza3kiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJzYXZlIiwiYmVnaW5QYXRoIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJjbG9zZVBhdGgiLCJyZXN0b3JlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJfdGhpcyIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/Sky.ts\n");

/***/ }),

/***/ "./src/js/Snowflake.ts":
/*!*****************************!*\
  !*** ./src/js/Snowflake.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Snowflake = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/js/settings.ts\");\n\nvar Snowflake = function () {\n  function Snowflake(ctx, canvas, mouse) {\n    this.ctx = ctx;\n    this.canvas = canvas;\n    this.mouse = mouse;\n    this.generate();\n    this.draw();\n  }\n\n  Snowflake.prototype.generate = function () {\n    this.opacity = settings_1.settings.snowflake.opacity.min + Math.random() * (settings_1.settings.snowflake.opacity.max - settings_1.settings.snowflake.opacity.min), this.speed = {\n      x: settings_1.settings.snowflake.speedX.min + Math.random() * (settings_1.settings.snowflake.speedX.max - settings_1.settings.snowflake.speedX.min),\n      y: settings_1.settings.snowflake.speedY.min + Math.random() * (settings_1.settings.snowflake.speedY.max - settings_1.settings.snowflake.speedY.min)\n    };\n    this.radius = settings_1.settings.snowflake.radius.min + Math.random() * (settings_1.settings.snowflake.radius.max - settings_1.settings.snowflake.radius.min);\n    this.position = {\n      x: this.radius + Math.random() * (this.canvas.width + this.radius - this.radius),\n      y: this.canvas.height * 1.5 + Math.random() * (this.canvas.height + this.radius * 2 - this.canvas.height * 1.5)\n    };\n    this.color = 'white';\n    this.draw();\n    return this;\n  };\n\n  Snowflake.prototype.draw = function () {\n    this.ctx.beginPath();\n    this.ctx.globalAlpha = this.opacity;\n    this.ctx.fillStyle = 'white';\n    this.ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);\n    this.ctx.fill();\n    this.ctx.globalAlpha = 1;\n  };\n\n  Snowflake.prototype.update = function () {\n    if (this.position.y <= -this.radius) {\n      this.speed.y = 0;\n      this.speed.x = 0;\n      this.position.y = this.speed.y;\n    }\n\n    this.position.y -= this.speed.y;\n    this.position.x += this.speed.x;\n    this.draw();\n  };\n\n  return Snowflake;\n}();\n\nexports.Snowflake = Snowflake;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztBQUNqQyxXQUFLTCxLQUFMLENBQVdHLENBQVgsR0FBZSxDQUFmO0FBQ0EsV0FBS0gsS0FBTCxDQUFXQyxDQUFYLEdBQWUsQ0FBZjtBQUNBLFdBQUtLLFFBQUwsQ0FBY0gsQ0FBZCxHQUFrQixLQUFLSCxLQUFMLENBQVdHLENBQTdCO0FBQ0g7O0FBQ0QsU0FBS0csUUFBTCxDQUFjSCxDQUFkLElBQW1CLEtBQUtILEtBQUwsQ0FBV0csQ0FBOUI7QUFDQSxTQUFLRyxRQUFMLENBQWNMLENBQWQsSUFBbUIsS0FBS0QsS0FBTCxDQUFXQyxDQUE5QjtBQUNBLFNBQUtWLElBQUw7QUFDSCxHQVREOztBQVVKO0FBQUMsQ0FuREQ7O0FBQWF5QixpQkFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXQtaXQtc25vdy8uL3NyYy9qcy9Tbm93Zmxha2UudHM/ZjU4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi9zZXR0aW5nc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNub3dmbGFrZXtcclxuICAgIHByaXZhdGUgcmFkaXVzOm51bWJlcjtcclxuICAgIHByaXZhdGUgcG9zaXRpb246e3g6bnVtYmVyLHk6bnVtYmVyfTtcclxuICAgIHByaXZhdGUgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIG9wYWNpdHk6bnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBzcGVlZDoge3g6bnVtYmVyLHk6bnVtYmVyfTtcclxuICAgIHByaXZhdGUgbW91c2U6IHt4Om51bWJlcix5Om51bWJlcn07XHJcbiAgICAvLyBwcml2YXRlIGh5cG90aGVudXNlOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGNvbG9yOiBzdHJpbmc7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBtb3VzZTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5tb3VzZSA9IG1vdXNlO1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGUoKTtcclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdlbmVyYXRlKCkge1xyXG4gICAgICAgIHRoaXMub3BhY2l0eSA9IHNldHRpbmdzLnNub3dmbGFrZS5vcGFjaXR5Lm1pbiArIE1hdGgucmFuZG9tKCkgKiAoc2V0dGluZ3Muc25vd2ZsYWtlLm9wYWNpdHkubWF4IC0gc2V0dGluZ3Muc25vd2ZsYWtlLm9wYWNpdHkubWluKSxcclxuICAgICAgICB0aGlzLnNwZWVkID0ge1xyXG4gICAgICAgICAgICB4OiBzZXR0aW5ncy5zbm93Zmxha2Uuc3BlZWRYLm1pbiArIE1hdGgucmFuZG9tKCkgKiAoc2V0dGluZ3Muc25vd2ZsYWtlLnNwZWVkWC5tYXggLSBzZXR0aW5ncy5zbm93Zmxha2Uuc3BlZWRYLm1pbiksXHJcbiAgICAgICAgICAgIHk6IHNldHRpbmdzLnNub3dmbGFrZS5zcGVlZFkubWluICsgTWF0aC5yYW5kb20oKSAqIChzZXR0aW5ncy5zbm93Zmxha2Uuc3BlZWRZLm1heCAtIHNldHRpbmdzLnNub3dmbGFrZS5zcGVlZFkubWluKSxcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yYWRpdXMgPSBzZXR0aW5ncy5zbm93Zmxha2UucmFkaXVzLm1pbiArIE1hdGgucmFuZG9tKCkgKiAoc2V0dGluZ3Muc25vd2ZsYWtlLnJhZGl1cy5tYXggLSBzZXR0aW5ncy5zbm93Zmxha2UucmFkaXVzLm1pbik7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHt4OiB0aGlzLnJhZGl1cyArIE1hdGgucmFuZG9tKCkgKiAoKHRoaXMuY2FudmFzLndpZHRoICsgdGhpcy5yYWRpdXMpIC0gdGhpcy5yYWRpdXMpICx5Oih0aGlzLmNhbnZhcy5oZWlnaHQqMS41KyBNYXRoLnJhbmRvbSgpICogKCh0aGlzLmNhbnZhcy5oZWlnaHQrIHRoaXMucmFkaXVzKjIpIC0gdGhpcy5jYW52YXMuaGVpZ2h0KjEuNSApKX1cclxuICAgICAgICAvLyB0aGlzLnBvc2l0aW9uID0ge3g6IHRoaXMucmFkaXVzICsgTWF0aC5yYW5kb20oKSAqICgodGhpcy5jYW52YXMud2lkdGggKyB0aGlzLnJhZGl1cykgLSB0aGlzLnJhZGl1cykgLHk6LSh0aGlzLmNhbnZhcy5oZWlnaHQqMS41KyBNYXRoLnJhbmRvbSgpICogKCh0aGlzLmNhbnZhcy5oZWlnaHQrIHRoaXMucmFkaXVzKjIpIC0gdGhpcy5jYW52YXMuaGVpZ2h0KjEuNSApKX1cclxuICAgICAgICB0aGlzLmNvbG9yID0gJ3doaXRlJ1xyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICBkcmF3KCl7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSB0aGlzLm9wYWNpdHk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ3doaXRlJztcclxuICAgICAgICB0aGlzLmN0eC5hcmModGhpcy5wb3NpdGlvbi54LHRoaXMucG9zaXRpb24ueSx0aGlzLnJhZGl1cywgMCwgMipNYXRoLlBJKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSAxO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKCl7XHJcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueTw9IC0gdGhpcy5yYWRpdXMpIHtcclxuICAgICAgICAgICAgdGhpcy5zcGVlZC55ID0gMFxyXG4gICAgICAgICAgICB0aGlzLnNwZWVkLnggPSAwXHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHRoaXMuc3BlZWQueTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55IC09IHRoaXMuc3BlZWQueTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy5zcGVlZC54O1xyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImN0eCIsImNhbnZhcyIsIm1vdXNlIiwiZ2VuZXJhdGUiLCJkcmF3IiwiU25vd2ZsYWtlIiwib3BhY2l0eSIsInNldHRpbmdzXzEiLCJzbm93Zmxha2UiLCJtaW4iLCJNYXRoIiwicmFuZG9tIiwibWF4Iiwic3BlZWQiLCJ4Iiwic3BlZWRYIiwieSIsInNwZWVkWSIsInJhZGl1cyIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJjb2xvciIsImJlZ2luUGF0aCIsImdsb2JhbEFscGhhIiwiZmlsbFN0eWxlIiwiYXJjIiwiUEkiLCJmaWxsIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/Snowflake.ts\n");

/***/ }),

/***/ "./src/js/settings.ts":
/*!****************************!*\
  !*** ./src/js/settings.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.settings = void 0;\nexports.settings = {\n  sky: {\n    gradient: [\"hsl(219,93%,11%)\", \"hsl(219,100%,19%)\"]\n  },\n  snowflake: {\n    radius: {\n      min: 2,\n      max: 12\n    },\n    opacity: {\n      min: 0.5,\n      max: 0.9\n    },\n    speedX: {\n      min: 1,\n      max: 4\n    },\n    speedY: {\n      min: 1,\n      max: 6\n    },\n    maxCount: 100\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFhQSxnQkFBQUEsR0FBVztBQUNwQkMsS0FBRyxFQUFFO0FBQ0RDLFlBQVEsRUFBRSxDQUFDLGtCQUFELEVBQXFCLG1CQUFyQjtBQURULEdBRGU7QUFJcEJDLFdBQVMsRUFBRTtBQUNQQyxVQUFNLEVBQUU7QUFBQ0MsU0FBRyxFQUFFLENBQU47QUFBU0MsU0FBRyxFQUFFO0FBQWQsS0FERDtBQUVQQyxXQUFPLEVBQUU7QUFBQ0YsU0FBRyxFQUFFLEdBQU47QUFBV0MsU0FBRyxFQUFFO0FBQWhCLEtBRkY7QUFHUEUsVUFBTSxFQUFFO0FBQUNILFNBQUcsRUFBRSxDQUFOO0FBQVNDLFNBQUcsRUFBRTtBQUFkLEtBSEQ7QUFJUEcsVUFBTSxFQUFFO0FBQUNKLFNBQUcsRUFBRSxDQUFOO0FBQVNDLFNBQUcsRUFBRTtBQUFkLEtBSkQ7QUFLUEksWUFBUSxFQUFDO0FBTEY7QUFKUyxDQUFYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV0LWl0LXNub3cvLi9zcmMvanMvc2V0dGluZ3MudHM/YzQyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICBza3k6IHtcclxuICAgICAgICBncmFkaWVudDogW1wiaHNsKDIxOSw5MyUsMTElKVwiLCBcImhzbCgyMTksMTAwJSwxOSUpXCJdXHJcbiAgICB9LFxyXG4gICAgc25vd2ZsYWtlOiB7XHJcbiAgICAgICAgcmFkaXVzOiB7bWluOiAyLCBtYXg6IDEyfSxcclxuICAgICAgICBvcGFjaXR5OiB7bWluOiAwLjUsIG1heDogMC45fSxcclxuICAgICAgICBzcGVlZFg6IHttaW46IDEsIG1heDogNH0sXHJcbiAgICAgICAgc3BlZWRZOiB7bWluOiAxLCBtYXg6IDZ9LFxyXG4gICAgICAgIG1heENvdW50OjEwMCxcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJleHBvcnRzIiwic2t5IiwiZ3JhZGllbnQiLCJzbm93Zmxha2UiLCJyYWRpdXMiLCJtaW4iLCJtYXgiLCJvcGFjaXR5Iiwic3BlZWRYIiwic3BlZWRZIiwibWF4Q291bnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/settings.ts\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV0LWl0LXNub3cvLi9zcmMvc2Nzcy9tYWluLnNjc3M/ZjdlNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/Main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunklet_it_snow"] = self["webpackChunklet_it_snow"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/js/Main.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;