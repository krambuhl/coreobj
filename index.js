var extend = require('extend');
var hookie = require('hookie');

function Kerno() {
  this._setup();
}

Kerno.extend = require('simple-extend');
Kerno.create = function (proto, props) {
  var Obj = proto ? this.extend(proto) : this;
  return extend(new Obj(), props);
};

Kerno.prototype = {
  _setup: hookie('setup', function() {
    // this.setupBindings();
    this.setup.apply(this, arguments);
  }),

  destroy: hookie('cleanup', function() {
    this.stopListening();
    // this.cleanupBindings();
    this.cleanup.apply(this, arguments);
  }),

  setup: function() { },
  cleanup: function() { }
};

extend(Kerno.prototype,
  require('event-emitter').methods,
  require('listento-emitter'),
  require('mutators')
  // require('bind-box')
);


module.exports = Kerno;
