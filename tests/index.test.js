var Kerno = require('../index.js');
var test = require('tape');

test('object can be instantiated using .create()', function (t) {
  t.plan(2);
  var o1 = Kerno.create({
    bye: function (msg) {
      return msg;
    }
  }, { hello: 'world' });

  t.equal(o1.bye('ted'), 'ted');
  t.equal(o1.get('hello'), 'world');
});

test('object can be extended using .extend()', function (t) {
  t.plan(1);

  var Band = Kerno.extend({
    folkName: function () { return this.get('members').join(' ') },
    members: []
  });

  var daband = Band.create();

  daband.set('members', ['Crosby', 'Stills', 'Nash', 'Young']);
  t.equal(daband.folkName(), 'Crosby Stills Nash Young');
});


test('Constructor calls setup() & before/after hooks', function (t) {
  t.plan(1);

  var counter = 0, count = function () { counter++; };
  Kerno.create({
    beforeSetup: count,
    setup: count,
    afterSetup: count
  });

  t.equal(counter, 3);
});

test('.destroy() calls cleanup() & before/after hooks', function (t) {
  t.plan(1);

  var counter = 0, count = function () { counter++; };
  Kerno.create({
    beforeCleanup: count,
    cleanup: count,
    afterCleanup: count
  }).destroy();

  t.equal(counter, 3);
});
