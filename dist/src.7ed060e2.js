// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../src/index.js":[function(require,module,exports) {
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Site = /*#__PURE__*/function () {
  function Site() {
    _classCallCheck(this, Site);

    _defineProperty(this, "DOMElements", {
      // nav
      mainNav: document.querySelector('[data-main-nav]'),
      // modal
      modalBackground: document.querySelector('[data-modal-background]'),
      modalBox: document.querySelector('[data-hero-modal-box]'),
      modalClose: document.querySelector('[data-modal-close]'),
      // hero
      hero: document.querySelector('[data-hero]'),
      logo: document.querySelector('[data-hero-logo]'),
      hamburgerBoxes: document.querySelectorAll('[data-hamburger]'),
      heroImage: document.querySelector('[data-hero-image]'),
      heroTitle: document.querySelector('[data-hero-title]'),
      heroInfoElements: document.querySelectorAll('[data-hero-info-item]'),
      // page 2
      productsSection: document.querySelector('[data-products]'),
      productMainImage: document.querySelector('[data-product-main-image]'),
      productItems: document.querySelectorAll('[data-product-item]'),
      // page 3 - history
      historyHeader: document.querySelector('[data-history-header]'),
      historyArt: document.querySelectorAll('[data-history-section-art]')
    });
  }

  _createClass(Site, [{
    key: "InitializeApp",
    value: function InitializeApp() {
      this.scrollTriggerAnimation();
      this.addEventListeners();
      this.navOnScroll();
    }
  }, {
    key: "scrollTriggerAnimation",
    value: function scrollTriggerAnimation() {
      gsap.set([this.DOMElements.logo, this.DOMElements.heroInfoElements, this.DOMElements.historyArt, this.DOMElements.historyHeader], {
        autoAlpha: 0
      });
      gsap.set([this.DOMElements.heroImage], {
        autoAlpha: 0.2
      });
      var tl = gsap.timeline({
        defaults: {
          ease: 'power3.inOut'
        }
      });
      tl.fromTo(this.DOMElements.heroImage, {
        y: '+=50'
      }, {
        y: '-=50',
        duration: 0.75,
        autoAlpha: 1
      }).fromTo(this.DOMElements.logo, {
        x: '+=100'
      }, {
        x: '-=100',
        duration: 0.75,
        autoAlpha: 1
      }).fromTo(this.DOMElements.heroInfoElements, {
        y: '+=50'
      }, {
        y: '-=50',
        duration: 0.75,
        autoAlpha: 1,
        stagger: 0.2
      });
      gsap.fromTo(this.DOMElements.productMainImage, {
        x: "-=100",
        autoAlpha: 0
      }, {
        x: 0,
        autoAlpha: 1,
        duration: 0.75,
        ease: 'easeInOut',
        scrollTrigger: {
          trigger: this.DOMElements.productMainImage,
          start: 'top 85%' // markers: true,

        }
      });
      gsap.fromTo(this.DOMElements.historyHeader, {
        y: "+=75",
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        duration: 0.75,
        ease: 'easeInOut',
        scrollTrigger: {
          trigger: this.DOMElements.historyHeader,
          start: 'top 90%'
        }
      });
      [].concat(_toConsumableArray(this.DOMElements.productItems), _toConsumableArray(this.DOMElements.historyArt)).forEach(function (item, i) {
        gsap.fromTo(item, {
          x: "".concat(i % 2 ? '-' : '+', "=100"),
          autoAlpha: 0
        }, {
          x: 0,
          autoAlpha: 1,
          duration: 0.75,
          ease: 'easeInOut',
          scrollTrigger: {
            trigger: item,
            start: 'top 90%' // markers: true,

          }
        });
      });
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this = this;

      this.DOMElements.hamburgerBoxes.forEach(function (hamburger) {
        hamburger.addEventListener('click', function () {
          return _this.showModal();
        });
      });
      document.addEventListener('click', function (e) {
        return _this.closeModal(e);
      });
    }
  }, {
    key: "showModal",
    value: function showModal() {
      this.DOMElements.modalBackground.classList.add('modal__background--active');
      this.DOMElements.modalBox.classList.add('modal--active');
      document.body.style.overflow = 'hidden';
    }
  }, {
    key: "closeModal",
    value: function closeModal(e) {
      if (e.target.classList.contains('modal__background--active') || e.target.classList.contains('close__button')) {
        this.DOMElements.modalBackground.classList.remove('modal__background--active');
        this.DOMElements.modalBox.classList.remove('modal--active');
        document.body.style.overflow = 'visible';
      }
    }
  }, {
    key: "navOnScroll",
    value: function navOnScroll() {
      var _this2 = this;

      // slide scroll
      var options = {
        rootMargin: '40px 0px 0px 0px'
      };
      var heroObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            _this2.DOMElements.mainNav.style.transform = 'translateY(0%)';
          } else {
            _this2.DOMElements.mainNav.style.transform = 'translateY(-100%)';
          }
        });
      }, options);
      heroObserver.observe(this.DOMElements.hero);
    }
  }]);

  return Site;
}();

var app = new Site();
app.InitializeApp();
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49637" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../src/index.js"], null)
//# sourceMappingURL=/src.7ed060e2.js.map