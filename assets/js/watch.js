/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/public/js/watch.js":
/*!********************************!*\
  !*** ./src/public/js/watch.js ***!
  \********************************/
/***/ (() => {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar video = document.querySelector(\"video\");\nvar playIcon = document.getElementById(\"playIcon\");\nvar volumeIcon = document.getElementById(\"volumeIcon\");\nvar volumeInput = document.getElementById(\"volumeInput\");\nvar expandIcon = document.getElementById(\"expandIcon\");\nvar videoPlayer = document.getElementById(\"videoPlayer\");\nvar totalTimeSpan = document.getElementById(\"totalTimeSpan\");\nvar currentTimeSpan = document.getElementById(\"currentTimeSpan\");\nvar views = document.getElementById(\"views\");\nvar likeIcon = document.getElementById(\"likeIcon\");\nvar dislikeIcon = document.getElementById(\"dislikeIcon\");\nvar likedCount = document.getElementById(\"likedCount\");\nvar subscribeBtn = document.getElementById(\"subscribeBtn\");\nvar playTimeInterval;\n\nfunction killPlayTimeInterval() {\n  if (playTimeInterval) {\n    clearInterval(playTimeInterval);\n    playTimeInterval = null;\n  }\n}\n\nfunction savePlayTime() {\n  var id = video.dataset.id;\n  playTimeInterval = setInterval( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(\"/api/record/playtime\", {\n              method: \"post\",\n              headers: {\n                \"Content-Type\": \"application/json\"\n              },\n              body: JSON.stringify({\n                id: id\n              })\n            });\n\n          case 2:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), 1000);\n}\n\nfunction handleClickPlay() {\n  if (video.paused) {\n    video.play();\n    playIcon.className = \"fa-solid fa-pause\";\n    savePlayTime();\n  } else {\n    video.pause();\n    playIcon.className = \"fa-solid fa-play\";\n    killPlayTimeInterval();\n  }\n}\n\nfunction displayVolumeIcon(input) {\n  if (input >= 20) {\n    volumeIcon.className = \"fa-solid fa-volume-high\";\n  } else if (input >= 10 && input < 20) {\n    volumeIcon.className = \"fa-solid fa-volume-low\";\n  } else if (input > 0 && input < 10) {\n    volumeIcon.className = \"fa-solid fa-volume-off\";\n  } else {\n    volumeIcon.className = \"fa-solid fa-volume-xmark\";\n  }\n}\n\nfunction handleClickVolume() {\n  if (!video.muted) {\n    video.muted = true;\n    volumeInput.value = 0;\n  } else {\n    video.muted = false;\n    volumeInput.value = video.volume * 100;\n  }\n\n  displayVolumeIcon(volumeInput.value);\n}\n\nfunction handleInputVolume() {\n  video.volume = volumeInput.value / 100;\n  displayVolumeIcon(volumeInput.value);\n}\n\nfunction handleClickExpand() {\n  if (!document.fullscreenElement) {\n    videoPlayer.requestFullscreen();\n  } else {\n    if (document.exitFullscreen) {\n      document.exitFullscreen();\n    }\n  }\n}\n\nfunction displayTimeSpan(time) {\n  if (time < 60) {\n    return new Date(time * 1000).toISOString().substring(14, 19);\n  } else if (time >= 3600) {\n    return new Date(time * 1000).toISOString().substring(11, 19);\n  }\n}\n\nfunction handleLoadedmetadataTotalTime() {// totalTimeSpan.innerText = displayTimeSpan(Math.ceil(video.duration));\n}\n\nfunction handleEnded() {\n  return _handleEnded.apply(this, arguments);\n}\n\nfunction _handleEnded() {\n  _handleEnded = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n    var id;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            id = video.dataset.id;\n            _context2.next = 3;\n            return fetch(\"/api/views\", {\n              method: \"post\",\n              headers: {\n                \"Content-Type\": \"application/json\"\n              },\n              body: JSON.stringify({\n                id: id\n              })\n            });\n\n          case 3:\n            if (playTimeInterval) {\n              clearInterval(playTimeInterval);\n              playTimeInterval = null;\n            }\n\n          case 4:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _handleEnded.apply(this, arguments);\n}\n\nfunction handleClickLike() {\n  likedCount.innerText = parseInt(likedCount, 10) + 1;\n}\n\nfunction handleKeydown(e) {\n  e.preventDefault();\n  var key = e.key,\n      metaKey = e.metaKey;\n\n  if (key === \"ArrowRight\") {\n    video.currentTime += 5;\n  } else if (key === \"ArrowLeft\") {\n    video.currentTime -= 5;\n  } else if (key === \"ArrowUp\") {\n    volumeInput.value += 5;\n    handleInputVolume();\n  } else if (key === \"ArrowDown\") {\n    volumeInput.value -= 5;\n    handleInputVolume();\n  } else if (key === \" \") {\n    handleClickPlay();\n  } else if (key === \"f\") {\n    handleClickExpand();\n  } else if (metaKey && key === \"r\") {\n    window.location.reload();\n  }\n}\n\nfunction handleClickSubscribe(_x) {\n  return _handleClickSubscribe.apply(this, arguments);\n}\n\nfunction _handleClickSubscribe() {\n  _handleClickSubscribe = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {\n    var id;\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            id = video.dataset.id;\n            _context3.next = 3;\n            return fetch(\"/api/subscribe\", {\n              method: \"post\",\n              headers: {\n                \"Content-Type\": \"application/json\"\n              },\n              body: JSON.stringify({\n                id: id\n              })\n            });\n\n          case 3:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n  return _handleClickSubscribe.apply(this, arguments);\n}\n\nplayIcon.addEventListener(\"click\", handleClickPlay);\nvolumeIcon.addEventListener(\"click\", handleClickVolume);\nvolumeInput.addEventListener(\"input\", handleInputVolume);\nexpandIcon.addEventListener(\"click\", handleClickExpand);\nvideo.addEventListener(\"loadedmetadata\", handleLoadedmetadataTotalTime);\nvideo.addEventListener(\"ended\", handleEnded);\ndocument.addEventListener(\"keydown\", handleKeydown);\nlikeIcon.addEventListener(\"click\", handleClickLike);\nsubscribeBtn.addEventListener(\"click\", handleClickSubscribe); // let totalTimeInterval = setInterval(() => {\n//   if (totalTimeSpan.innerText === \"00:00\") {\n//     window.location.reload();\n//   }\n//   killPlayTimeInterval();\n// }, 500);\n\n//# sourceURL=webpack://wetube/./src/public/js/watch.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/public/js/watch.js"]();
/******/ 	
/******/ })()
;