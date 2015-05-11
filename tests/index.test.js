var CoreObject = require('../dist/index.js');
var test = require('tape');



test('simple comparisons', function (t) {
  var o1 = new CoreObject(),
    o2 = new CoreObject();

  t.plan(1);
  t.equal(1, 1);
});
