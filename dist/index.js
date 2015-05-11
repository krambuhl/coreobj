'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = CoreObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _eventEmitter = require('event-emitter');

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

var _listentoEmitter = require('listento-emitter');

var _listentoEmitter2 = _interopRequireDefault(_listentoEmitter);

var _simpleExtend = require('simple-extend');

var _simpleExtend2 = _interopRequireDefault(_simpleExtend);

var _extend = require('extend');

var _extend2 = _interopRequireDefault(_extend);

var _hookie = require('hookie');

var _hookie2 = _interopRequireDefault(_hookie);

function CoreObject() {
  this._setup();
}

CoreObject.extend = _simpleExtend2['default'];
_extend2['default'](CoreObject.prototype, _eventEmitter2['default'].methods, _listentoEmitter2['default'], {
  _setup: _hookie2['default']('setup', function () {
    this.setupListeners();
    // this.setupBindings();
    this.setup.apply(this, arguments);
  }),

  destroy: _hookie2['default']('destroy', function () {
    this.cleanupListeners();
    // this.cleanupBindings();
    this.cleanup.apply(this, arguments);
  }),

  setup: function setup() {},
  cleanup: function cleanup() {},

  get: function get(prop) {
    return this[prop];
  },

  set: function set(prop, val) {
    if (arguments.length > 1) {
      this[prop] = val;
      this.emit('set:' + prop, val, prop);
    } else {
      for (var item in prop) {
        this.set(item, prop[item]);
      }this.emit('set', prop);
    }
  }
});
module.exports = exports['default'];
