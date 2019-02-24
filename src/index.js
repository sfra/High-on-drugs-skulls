"use strict";
exports.__esModule = true;
var MMatrix_1 = require("./classes/MMatrix");
var Select_1 = require("./helpers/Select");
var m = new MMatrix_1.MMatrix(6, 6);
//console.log(m.consumeColumns([1,1],[2,4],[3,6] ));
//
m.consumeColumns([0, 2, 2, 2, 3, 4], [0, 3, 2, 3, 3, 4], [1, 3, 2, 1, 0, 0], [1, 2, 1, 3, 3, 2], [1, 2, 2, 3, 3, 4], [1, 2, 2, 3, 3, 4]);
var ss = new Select_1.Select(m);
console.log(ss.findCoulpes());
