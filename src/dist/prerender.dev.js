"use strict";

require('zone.js/dist/zone-node');

require('reflect-metadata');

var _require = require('path'),
    join = _require.join;

var _require2 = require('@angular/core'),
    enableProdMode = _require2.enableProdMode; // Import module map for lazy loading


var _require3 = require('@nguniversal/module-map-ngfactory-loader'),
    provideModuleMap = _require3.provideModuleMap;

var _require4 = require('@angular/platform-server'),
    renderModuleFactory = _require4.renderModuleFactory; // leave this as require(), imported via webpack


var _require5 = require("./dist/server/main"),
    AppServerModuleNgFactory = _require5.AppServerModuleNgFactory,
    LAZY_MODULE_MAP = _require5.LAZY_MODULE_MAP;

var fs = require('fs-extra'); // Must manually define routes to prerender


var ROUTES = ['/', '/customers', '/customers/GiD4Q7mAlI91uH0zn3Jo', '/customers/Wu2BRnrAxnizSgGaJXhN', '/customers/qe7EtWu4UWiWfZgtmP3C', '/kanban', '/login']; // START prerender script

(function _callee() {
  var views, index, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, route, pageDir, html;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          enableProdMode(); // Get the app index

          views = 'dist/browser';
          _context.next = 4;
          return regeneratorRuntime.awrap(fs.readFile(join(views, 'index.html'), 'utf8'));

        case 4:
          index = _context.sent;
          // Loop over each route
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 8;
          _iterator = ROUTES[Symbol.iterator]();

        case 10:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 23;
            break;
          }

          route = _step.value;
          pageDir = join(views, route);
          _context.next = 15;
          return regeneratorRuntime.awrap(fs.ensureDir(pageDir));

        case 15:
          _context.next = 17;
          return regeneratorRuntime.awrap(renderModuleFactory(AppServerModuleNgFactory, {
            document: index,
            url: route,
            extraProviders: [provideModuleMap(LAZY_MODULE_MAP)]
          }));

        case 17:
          html = _context.sent;
          _context.next = 20;
          return regeneratorRuntime.awrap(fs.writeFile(join(pageDir, 'index.html'), html));

        case 20:
          _iteratorNormalCompletion = true;
          _context.next = 10;
          break;

        case 23:
          _context.next = 29;
          break;

        case 25:
          _context.prev = 25;
          _context.t0 = _context["catch"](8);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 29:
          _context.prev = 29;
          _context.prev = 30;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 32:
          _context.prev = 32;

          if (!_didIteratorError) {
            _context.next = 35;
            break;
          }

          throw _iteratorError;

        case 35:
          return _context.finish(32);

        case 36:
          return _context.finish(29);

        case 37:
          process.exit();
          console.log('prerendering complete');

        case 39:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[8, 25, 29, 37], [30,, 32, 36]]);
})();