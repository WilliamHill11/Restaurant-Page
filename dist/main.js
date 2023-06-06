/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ 'use strict';
  /******/ var __webpack_modules__ = {
    /***/ './src/contact.js':
      /*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContact() {\r\n  const name = document.createElement('h2');\r\n  name.textContent = 'Contact: William Hill';\r\n  const picture = document.createElement('div');\r\n  picture.classList.add('contactPicture');\r\n  name.appendChild(picture);\r\n\r\n  return name;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact());\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?"
        );

        /***/
      },

    /***/ './src/home.js':
      /*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHome() {\r\n  const home = document.createElement('div');\r\n\r\n  const title = document.createElement('h1');\r\n  title.textContent = 'Chef La Ras';\r\n  title.classList.add('title');\r\n  home.append(title);\r\n\r\n  const homeText = document.createElement('p');\r\n  homeText.textContent =\r\n    'There was something in the tree. It was difficult to tell from the ground, but Rachael could see movement. She squinted her eyes and peered in the direction of the movement, trying to decipher exactly what she had spied. The more she peered, however, the more she thought it might be a figment of her imagination. Nothing seemed to move until the moment she began to take her eyes off the tree. Then in the corner of her eye, she would see the movement again and begin the process of staring again.';\r\n  homeText.classList.add('homeText');\r\n  home.append(homeText);\r\n\r\n  return home;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome());\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?"
        );

        /***/
      },

    /***/ './src/index.js':
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadFile */ \"./src/loadFile.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n\r\nconst home = document.querySelector('.home');\r\nconst menu = document.querySelector('.menu');\r\nconst contact = document.querySelector('.contact');\r\nconst content = document.querySelector('.body');\r\n\r\nmenu.addEventListener('click', createMenu);\r\nhome.addEventListener('click', createHome);\r\ncontact.addEventListener('click', createContact);\r\n\r\nfunction createHome() {\r\n  //   if (content.textContent === HOME) return;\r\n  content.textContent = '';\r\n  content.append(_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n}\r\n\r\nfunction createMenu() {\r\n  //   if (content.textContent === MENU) return;\r\n  content.textContent = '';\r\n  content.append(_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n}\r\n\r\nfunction createContact() {\r\n  //   if (content.textContent === CONTACT) return;\r\n  content.textContent = '';\r\n  content.append(_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?"
        );

        /***/
      },

    /***/ './src/loadFile.js':
      /*!*************************!*\
  !*** ./src/loadFile.js ***!
  \*************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   body: () => (/* binding */ body),\n/* harmony export */   container: () => (/* binding */ container),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\r\n\r\n\r\nconst container = document.querySelector('#content');\r\nconst body = document.createElement('div');\r\nbody.classList.add('body');\r\n\r\nfunction createNav() {\r\n  const header = document.createElement('header');\r\n  header.classList.add('header');\r\n\r\n  const navBar = document.createElement('nav');\r\n  navBar.classList.add('nav');\r\n  header.append(navBar);\r\n\r\n  const home = document.createElement('p');\r\n  home.textContent = 'HOME';\r\n  home.classList.add('home');\r\n\r\n  const menu = document.createElement('p');\r\n  menu.textContent = 'MENU';\r\n  menu.classList.add('menu');\r\n\r\n  const contact = document.createElement('p');\r\n  contact.textContent = 'CONTACT';\r\n  contact.classList.add('contact');\r\n\r\n  navBar.append(home, menu, contact);\r\n\r\n  return header;\r\n}\r\n\r\ncontainer.appendChild(createNav());\r\ncontainer.appendChild(_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\ncontainer.appendChild(body);\r\nbody.appendChild(_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNav());\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/loadFile.js?"
        );

        /***/
      },

    /***/ './src/menu.js':
      /*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _loadFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadFile */ \"./src/loadFile.js\");\n\r\n\r\nfunction createMenu() {\r\n  const firstItem = document.createElement('h2');\r\n  firstItem.textContent = 'Espresso Martini';\r\n  const itemPicture = document.createElement('div');\r\n  itemPicture.classList.add('coffee');\r\n  firstItem.appendChild(itemPicture);\r\n\r\n  return firstItem;\r\n}\r\n\r\n_loadFile__WEBPACK_IMPORTED_MODULE_0__[\"default\"].append(createMenu());\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu());\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?"
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module',
        });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__('./src/index.js');
  /******/
  /******/
})();
