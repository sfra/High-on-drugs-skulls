"use strict";
exports.__esModule = true;
var Select = /** @class */ (function () {
    function Select(mmatrix) {
        this.array = mmatrix.getArray();
        this.mmatrix = mmatrix;
        this.checkedArray = new Array(this.array.length);
        /** init an array filled by falses*/
        this.checkedArray.fill((new Array(this.array[0].length).fill(false)));
        // console.log(this.checkedArray);
    }
    Select.prototype.setOrdering = function (order) {
        this.order = order;
    };
    Select.prototype.addFromNeighbourhood = function (x, y, neighbourhood) {
        var _this = this;
        neighbourhood.add([x, y]);
        [-1, 1].forEach(function (i) {
            if (!_this.mmatrix.validateX(x + i) || !i) {
                return;
            }
            [-1, 1].forEach(function (j) {
                if (!_this.mmatrix.validateY(y + j) || !j) {
                    return;
                }
                if (_this.array[x][y] === _this.array[x + i][y + j]) {
                    neighbourhood.add([x + i, y + j]);
                    _this.checkedArray[x + i][y + j] = true;
                    _this.addFromNeighbourhood(x + i, y + i, neighbourhood);
                }
            });
        });
        return false;
    };
    Select.prototype.findCoulpes = function () {
        var neighbourhoods = new Set();
        var currentNeighbourhood = new Set();
        for (var i = 0, max = this.array.length; i < max; i++) {
            for (var j = 0, max0 = this.array[0].length; j < max0; j++) {
                (this.checkedArray[i][j]) || this.addFromNeighbourhood(i, j, currentNeighbourhood) ||
                    ((this.checkedArray[i][j] = true) && (neighbourhoods.add(currentNeighbourhood)));
                //   neighbourhoods.add(currentNeighbourhood);
                currentNeighbourhood = new Set();
            }
        }
        return neighbourhoods;
    };
    return Select;
}());
exports.Select = Select;
