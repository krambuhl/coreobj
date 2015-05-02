import EventEmitter from 'event-emitter';
import extend from 'simple-extend';

export default class CoreObject extends EventEmitter {
  constructor(opts={}) {
    super(...arguments);
    if (this.setup) this.setup(...arguments);
  }

  get(prop) {
    return this[prop];
  }

  set(prop, val) {
    if (arguments.length > 1) {
      this[prop] = val;
      this.emit('set:' + prop, val, prop);
    } else {
      for (let item in prop) this.set(item, prop[item]);
      this.emit('set', prop);
    }
  }

  static create() {
    return new CoreObject(...arguments);
  }
}

CoreObject.extend = extend;
