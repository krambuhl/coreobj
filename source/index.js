import EventEmitter from 'event-emitter';
import ListenToEmitter from 'listento-emitter';
import objExtend from 'simple-extend';
import extend from 'extend';
import hookie from 'hookie';

export default function CoreObject() {
  this._setup();
}

CoreObject.extend = objExtend;

extend(CoreObject.prototype, EventEmitter.methods, ListenToEmitter, {
  _setup: hookie('setup', function() {
    this.setupListeners();
    // this.setupBindings();
    this.setup(...arguments);
  }),

  destroy: hookie('destroy', function() {
    this.cleanupListeners();
    // this.cleanupBindings();
    this.cleanup(...arguments);
  }),

  setup: function() { },
  cleanup: function() { },

  get: function (prop) {
    return this[prop];
  },

  set: function (prop, val) {
    if (arguments.length > 1) {
      this[prop] = val;
      this.emit('set:' + prop, val, prop);
    } else {
      for (let item in prop) this.set(item, prop[item]);
      this.emit('set', prop);
    }
  }
});
