'use strict';
var i = Object.defineProperty;
var l = Object.getOwnPropertyDescriptor;
var s = Object.getOwnPropertyNames;
var x = Object.prototype.hasOwnProperty;
var n = (r, m) => {
    for (var o in m) i(r, o, { get: m[o], enumerable: !0 });
  },
  f = (r, m, o, u) => {
    if ((m && typeof m == 'object') || typeof m == 'function')
      for (let e of s(m))
        !x.call(r, e) &&
          e !== o &&
          i(r, e, {
            get: () => m[e],
            enumerable: !(u = l(m, e)) || u.enumerable
          });
    return r;
  };
var b = (r) => f(i({}, '__esModule', { value: !0 }), r);
var a = {};
n(a, { Complex: () => t, utils: () => p });
module.exports = b(a);
var t = class {
  constructor(m, o) {
    (this.re = m), (this.im = o);
  }
};
var p = {};
n(p, { logComplex: () => c });
function c(r) {
  return `${r.re}+${r.im}i`;
}
0 && (module.exports = { Complex, utils });
