"use strict";
exports.__esModule = true;
var DoubleIterator = /** @class */ (function () {
    function DoubleIterator(x, y) {
        this.dx = x;
        this.dy = y;
        this.array = [];
        this.iteratorInit();
    }
    DoubleIterator.prototype.iteratorInit = function () {
        this.iterator = [0, 0];
    };
    DoubleIterator.prototype.hasNextX = function () {
        return this.iterator[0] >= this.dx - 1;
    };
    DoubleIterator.prototype.hasNextY = function () {
        return this.iterator[1] >= this.dy - 1;
    };
    DoubleIterator.prototype.nextX = function () {
        if (!this.hasNextX()) {
            return false;
        }
        this.iterator[0] += 1;
        return true;
    };
    DoubleIterator.prototype.nextY = function () {
        if (!this.hasNextY()) {
            return false;
        }
        this.iterator[1] += 1;
        return true;
    };
    DoubleIterator.prototype.getIterator = function () {
        return this.array[this.iterator[0]][this.iterator[1]];
    };
    return DoubleIterator;
}());
exports["default"] = DoubleIterator;
