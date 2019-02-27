"use strict";
exports.__esModule = true;
function deepEqual(a, b) {
    var eq = true;
    if (Array.isArray(a)) {
        if (a.length === 0) {
            if (b.length === 0) {
                return true;
            }
            return false;
        }
        ;
        return true === ((typeof a === typeof b) && a.length === b.length &&
            ((a.length === 1 && a[0] === b[0]) || a.reduce(function (p, n, i) {
                return eq && deepEqual(n, b[i]) && deepEqual(a[0], b[0]);
            })));
    }
    ;
    if (a instanceof Set) {
        return (b instanceof Set) && a.size === b.size &&
            (function () {
                // let _a = Array.from(a), _b = Array.from(b);
                var eq2 = false;
                for (var x in a) {
                    eq = eq && eq2;
                    for (var y in b) {
                        eq2 = eq2 || deepEqual(x, y);
                    }
                }
                return eq;
            })();
    }
    if (typeof a === 'object') {
        for (var prop in a) {
            eq = eq && deepEqual(a[prop], b[prop]);
        }
        ;
        for (var prop in b) {
            eq = eq && !(typeof b[prop] !== 'undefined' && typeof a[prop] === 'undefined');
        }
        return eq;
    }
    return a === b;
}
exports["default"] = deepEqual;
;
var a = [];
var b = { f: [1, 2, 'Cześć'] };
var s0 = new Set();
var s1 = new Set();
s0.add(1).add((new Set().add(3).add([5, 4])));
s1.add((new Set().add(3).add([5, 4]))).add(1);
console.log(deepEqual([1], [1]));
console.log(deepEqual(s0, s1));
