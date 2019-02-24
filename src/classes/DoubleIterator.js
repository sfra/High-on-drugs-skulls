"use strict";
exports.__esModule = true;
/**
 * 2-dimensional iterator.
 * @constructs DoubleIterator
 * @implements DoubleIteratorI
 */
var DoubleIterator = /** @class */ (function () {
    /**
   * Create a MMatrix.
   * @param {number} x - The x dimension of iterated matrix.
   * @param {number} y - The y dimension of iterated matrix.
   */
    function DoubleIterator(x, y) {
        this.dx = x;
        this.dy = y;
        this.array = [];
        this.iteratorInit();
    }
    /**
 * Put iterator on 0,0 coordinate
 * @public
 */
    DoubleIterator.prototype.iteratorInit = function () {
        this.iterator = [0, 0];
    };
    /**
     * Checks if the indicated object is the last on the x-axis.
     *
       * @returns {boolean} `
     *
     */
    DoubleIterator.prototype.hasNextX = function () {
        return this.iterator[0] < this.dx - 1;
    };
    /**
 * Checks if the indicated object is the last on the y-axis.
 *
 * @returns {boolean} `
 *
 */
    DoubleIterator.prototype.hasNextY = function () {
        return this.iterator[1] < this.dy - 1;
    };
    /**
* Move one step right on the x-axis. It returns true or false according to the next element exists.
*
* @returns {boolean} `
*
*/
    DoubleIterator.prototype.nextX = function () {
        if (!this.hasNextX()) {
            return false;
        }
        this.iterator[0] += 1;
        return true;
    };
    /**
    * Move one step right on the y-axis. It returns true or false according to the next element exists.
    *
    * @returns {boolean} `
    *
    */
    DoubleIterator.prototype.nextY = function () {
        if (!this.hasNextY()) {
            return false;
        }
        this.iterator[1] += 1;
        return true;
    };
    /**
   * 	Back to the x-beginnig of the array, preserving y-value
     * @returns {boolean} `
   *
   */
    DoubleIterator.prototype.rewindX = function () {
        return 0;
    };
    /**
 * 	Back to the y-beginnig of the array, preserving x-value
 * @returns {boolean} `
 *
 */
    DoubleIterator.prototype.rewindY = function () {
        return 0;
    };
    /**
 * 	Returns currently indicated value
 * @returns {boolean} `
 *
 */
    DoubleIterator.prototype.getIterator = function () {
        return this.array[this.iterator[0]][this.iterator[1]];
    };
    return DoubleIterator;
}());
exports["default"] = DoubleIterator;
