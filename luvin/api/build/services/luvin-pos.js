'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOrder = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _xmlJs = require('xml-js');

var _xmlJs2 = _interopRequireDefault(_xmlJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createPosOrder = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(pos) {
    var ip, port, path, url, body, response, results, jsonObj;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            ip = pos.ip, port = pos.port, path = pos.path;
            url = 'https://' + ip + ':' + port + path;
            body = '\n    <?xml version="1.0" encoding="utf-8"?>\n      <RK7Query>\n          <RK7Command CMD="CreateOrder">\n              <Order persistentComment="Luvin web order" nonPersistentComment="Luvin web order">\n                  <OrderCategory code="2"/>\n                  <OrderType code="1"/>\n                  <Table code="19"/>\n                  <Waiter code="12"/>\n                  <GuestType code="2"/>\n                  <Guests count="1" />\n              </Order>\n          </RK7Command>\n      </RK7Query>\n    ';
            _context.next = 6;
            return (0, _nodeFetch2.default)(url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/xml',
                'Content-Length': Buffer.byteLength(body)
              },
              body: body
            });

          case 6:
            response = _context.sent;

            if (!(response.status === 200)) {
              _context.next = 13;
              break;
            }

            _context.next = 10;
            return response.text();

          case 10:
            results = _context.sent;
            jsonObj = _xmlJs2.default.xml2js(results, { compact: true, spaces: 4 });
            // return jsonObj;

            return _context.abrupt('return', jsonObj.RK7QueryResult.CommandResult._attributes);

          case 13:
            _context.next = 18;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context['catch'](0);
            throw _context.t0;

          case 18:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 15]]);
  }));

  return function createPosOrder(_x) {
    return _ref.apply(this, arguments);
  };
}();

var updatePosOrder = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(pos, posOrder, webOrder) {
    var ip, port, path, url, guid, orderDetails, body, response, results, jsonObj;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            ip = pos.ip, port = pos.port, path = pos.path;
            url = 'https://' + ip + ':' + port + path;
            // TODO: check

            guid = posOrder.guid;
            orderDetails = webOrder.orderDetails;
            body = '\n      <?xml version="1.0" encoding="utf-8"?> \n      <RK7Query>  \n        <RK7Command CMD="SaveOrder">   \n          <Order guid="' + guid + '" />   \n          <Session>   \n            <Author code="12" />\n            ' + orderDetails.map(function (item) {
              var _ref3 = item || {},
                  product = _ref3.productId,
                  quantity = _ref3.quantity;

              return '<Dish code="' + product.code + '" quantity="' + quantity * 1000 + '"/>  ';
            }).join('\n') + '\n          </Session>  \n        </RK7Command> \n      </RK7Query> \n    ';
            _context2.next = 8;
            return (0, _nodeFetch2.default)(url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/xml',
                'Content-Length': Buffer.byteLength(body)
              },
              body: body
            });

          case 8:
            response = _context2.sent;

            if (!(response.status === 200)) {
              _context2.next = 15;
              break;
            }

            _context2.next = 12;
            return response.text();

          case 12:
            results = _context2.sent;
            jsonObj = _xmlJs2.default.xml2js(results, { compact: true, spaces: 4 });
            return _context2.abrupt('return', jsonObj.RK7QueryResult.CommandResult.Order._attributes);

          case 15:
            _context2.next = 20;
            break;

          case 17:
            _context2.prev = 17;
            _context2.t0 = _context2['catch'](0);
            throw _context2.t0;

          case 20:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 17]]);
  }));

  return function updatePosOrder(_x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var createOrder = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(pos, webOrder) {
    var posOrder, updatedOrder;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return createPosOrder(pos, webOrder);

          case 3:
            posOrder = _context3.sent;
            _context3.next = 6;
            return updatePosOrder(pos, posOrder, webOrder);

          case 6:
            updatedOrder = _context3.sent;
            return _context3.abrupt('return', updatedOrder);

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3['catch'](0);
            throw _context3.t0;

          case 13:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined, [[0, 10]]);
  }));

  return function createOrder(_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();

exports.createOrder = createOrder;