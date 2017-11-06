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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, artist_model_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // console.log(title);
    // () => {
    //     /* code here */
    // }
    // console.log(testObj);
    let STORAGE_ID = 'artist-playlist';
    // get data from local storage
    let getFromLocalStorage = () => {
        return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
    };
    let artists = getFromLocalStorage();
    // update list of artist
    let updateList = () => {
        var ar = getFromLocalStorage();
        document.getElementById('list').innerHTML = '';
        console.log(artists);
        if (ar.length !== 0) {
            for (var i = 0; i < ar.length; i++) {
                let name = ar[i].artistName;
                let image = ar[i].image;
                let video = ar[i].videoUrl;
                document.getElementById('list').innerHTML += '<div class="card-columns"> <div class="card"> <img class="card-img-top img-fluid" src=" ' + image + ' " alt="  "> \
                <div class="card-block"> <h4 class="card-title">' + name + '</h4> <p class="card-text">' + video + '</p></div></div></div>';
            }
        }
    };
    updateList();
    // save data to local storage
    let saveToLocalStorage = () => {
        localStorage.setItem(STORAGE_ID, JSON.stringify(artists));
    };
    // click to add an artist
    document.querySelector("#addArtist").addEventListener("click", (event) => {
        let artistName = document.getElementById('artistName').value;
        let image = document.getElementById('imageUrl').value;
        let videoUrl = document.getElementById('youTubeUrl').value;
        let newArtist = new artist_model_1.default(artistName, image, videoUrl);
        console.log(newArtist);
        // let newArtist = {
        //     artistName: (<HTMLInputElement>document.getElementById('artistName')).value,
        //     image: (<HTMLInputElement>document.getElementById('imageUrl')).value,
        //     videoUrl:(<HTMLInputElement>document.getElementById('youTubeUrl')).value
        // }
        if (artists.length === 0) {
            newArtist.id = 0;
        }
        else {
            newArtist.id = artists[artists.length - 1].id + 1;
        }
        artists.push(newArtist);
        saveToLocalStorage();
        document.querySelector("span").innerHTML = "new artist had been added!";
        updateList();
        // clear input fields
        document.getElementById('artistName').value = " ",
            document.getElementById('imageUrl').value = "",
            document.getElementById('youTubeUrl').value = "";
    }, false);
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//ARTIST MODEL
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ArtistModel {
        constructor(name, image, youtubeUrl) {
            this.name = name;
            this.image = image;
            this.youtubeUrl = youtubeUrl;
        }
    }
    exports.default = ArtistModel;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })
/******/ ]);