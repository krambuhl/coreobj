import EventEmitter from 'event-emitter';
import ListenToEmitter from 'listeto-emitter';
import extend from 'simple-extend';

export default class CoreObject extends EventEmitter {
  constructor(opts={}) {
    if (this.beforeSetup) this.beforeSetup(...arguments);
    super(...arguments);
    ListenToEmitter.mixin(this);

    if (this.setup) this.setup(...arguments);
    if (this.afterSetup) this.afterSetup(...arguments);
  }

  get(prop) {
    return this[prop]
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
