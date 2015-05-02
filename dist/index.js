'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _bind = Function.prototype.bind;
var _slice = Array.prototype.slice;

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x2,
    property = _x3,
    receiver = _x4; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _EventEmitter2 = require('event-emitter');

var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);

var _extend = require('simple-extend');

var _extend2 = _interopRequireDefault(_extend);

var CoreObject = (function (_EventEmitter) {
  function CoreObject() {
    var opts = arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, CoreObject);

    _get(Object.getPrototypeOf(CoreObject.prototype), 'constructor', this).apply(this, arguments);
    if (this.setup) this.setup.apply(this, arguments);
  }

  _inherits(CoreObject, _EventEmitter);

  _createClass(CoreObject, [{
    key: 'get',
    value: function get(prop) {
      return this[prop];
    }
  }, {
    key: 'set',
    value: function set(prop, val) {
      if (arguments.length > 1) {
        this[prop] = val;
        this.emit('set:' + prop, val, prop);
      } else {
        for (var item in prop) {
          this.set(item, prop[item]);
        }this.emit('set', prop);
      }
    }
  }], [{
    key: 'create',
    value: function create() {
      return new (_bind.apply(CoreObject, [null].concat(_slice.call(arguments))))();
    }
  }]);

  return CoreObject;
})(_EventEmitter3['default']);

exports['default'] = CoreObject;

CoreObject.extend = _extend2['default'];
module.exports = exports['default'];
