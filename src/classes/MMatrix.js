"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var DoubleIterator_1 = require("./DoubleIterator");
/**
 * Class representing a 2-dimensional matrix.
 * @constructs MMatrix
 * @extends DoubleIterator
 */
var MMatrix = /** @class */ (function (_super) {
    __extends(MMatrix, _super);
    /**
    * Create a MMatrix.
    * @param {number} x - The x dimension of MMatrix.
    * @param {number} y - The y dimension of MMatrix.
    */
    function MMatrix(x, y) {
        return _super.call(this, x, y) || this;
    }
    /**
     * Checks if provided data validate condition given by dx and dy.
     *
     * @param {T[][]} columns
     * @returns {boolean} `
     *
     */
    MMatrix.prototype.validateArray = function (columns) {
        var out = this.dx === columns.length;
        for (var i = 0, max = columns.length; i < max; i++) {
            out = out && this.dy === columns[i].length;
        }
        return out;
    };
    /**
     * Checks if the coordinate is in the scope of x.
     * @param {number} x coordinate
     * @returns {boolean}
    */
    MMatrix.prototype.validateX = function (x) {
        return 0 <= x && x < this.array.length;
    };
    /**
   * Checks if the coordinate is in the scope of y.
   * @param {number} y coordinate
   * @returns {boolean}
  */
    MMatrix.prototype.validateY = function (y) {
        return 0 <= y && y < this.array[0].length;
    };
    /**
     * Adds columns to an array.
     *
     * @param {...T[][]} columns
     * @returns {boolean} `
     *
     */
    MMatrix.prototype.consumeColumns = function () {
        var columns = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            columns[_i] = arguments[_i];
        }
        if (!this.validateArray(columns)) {
            return false;
        }
        for (var i = 0, max = columns.length; i < max; i++) {
            this.array.push(columns[i]);
        }
        return true;
    };
    /**
     * Returns an item at the given coordinates.
     *
     * @param {number} x
     * @param {number} y
     * @returns {T} `
     *
     */
    MMatrix.prototype.getItem = function (x, y) {
        return this.array[x][y];
    };
    /**
     * Write a value to item at the given coordinates.[1,2,2,3,3,4]
     *
     * @param {number} x
     * @param {number} y
     * @param {T} value
     *
     */
    MMatrix.prototype.setItem = function (x, y, value) {
        this.array[x][y] = value;
    };
    /**
     * Returns the x-dimension.
     *
     * @returns {number} `
     *
     */
    MMatrix.prototype.getDx = function () {
        return this.dx;
    };
    /**
     * Returns the y-dimension.
     *
     * @returns {number} `
     *
     */
    MMatrix.prototype.getDy = function () {
        return this.dy;
    };
    /**
     * Returns the whole array.
     *
     * @returns {T[][]} `
     *
     */
    MMatrix.prototype.getArray = function () {
        return this.array;
    };
    return MMatrix;
}(DoubleIterator_1["default"]));
exports.MMatrix = MMatrix;
