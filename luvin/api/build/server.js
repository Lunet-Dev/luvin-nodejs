'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _methodOverride = require('method-override');

var _methodOverride2 = _interopRequireDefault(_methodOverride);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _keys = require('./config/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('tls').DEFAULT_MIN_VERSION = 'TLSv1';

var port = _keys2.default.port,
    appConfigs = _keys2.default.app;


var app = (0, _express2.default)();

app.use((0, _helmet2.default)());

app.use((0, _cors2.default)());

// if (!Constants.envs.test) {
//   app.use(morgan('dev'));
// }
app.use((0, _morgan2.default)('dev'));

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

app.use((0, _methodOverride2.default)());

app.use('/public', _express2.default.static(__dirname + '/public'));

// Mount API routes
app.use(appConfigs.apiPrefix, _routes2.default);

app.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('\n    Port: ' + port + '\n    Env: ' + app.get('env') + '\n  ');
});

exports.default = app;