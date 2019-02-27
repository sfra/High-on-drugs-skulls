import { MMatrix } from './MMatrix';
import SSet from './SSet';
import deepEqual from '../helpers/deepEqual';
/**
 *
 * Class aggregating and grouping functions for finding neighborhoods
 * @constructs Select
 */
export class Select<T> {

    /**
    * Create Select.
    * @param {MMatrix} MMatrix on which we will operate
    */
    constructor(mmatrix: MMatrix<T>) {
        this.array = mmatrix.getArray();
        this.mmatrix = mmatrix;
        this.checkedArray = [];

        /** init an array filled by falses*/

        for (let i = 0, max = mmatrix.getDx(); i < max; i++) {
            this.checkedArray.push(new Array<boolean>(mmatrix.getDy()).fill(false));
        }

        SSet.equality = deepEqual;

    }

    /**
     * an array abstracted from mmatrix
     * @type {T[][]}
     * @private
     */
    private array: T[][];

    /**
  * MMatrix on which this class operate
  * @type {T[][]}
  * @private
  */
    private mmatrix: MMatrix<T>;

    /**
    * Order defining an equivalence relation on mmatrix
    * @type {(a: T, b: T) => boolean}
    * @private
    */
    private order: (a: T, b: T) => boolean;

    /**
    * The family of equivalence classes
    * @type {Set<SSet<[number,number]>>}
    * @private
    */
    private neighborhoods: Set<SSet<[number, number]>>;


    /**
     * Neighborhoods getter. Setter is not needed
     * @returns {Set<SSet<[number, number]>>} quotient set defined by a given equvalence
     */
    public getNeighbourbhoods(): Set<SSet<[number, number]>> {
        return this.neighborhoods;
    };


    public getAbstractClass(x: number, y: number): SSet<[number, number]> {
        return new SSet<[number, number]>();
    }


    // /**
    //  * Neighborhoods getter. Setter is not needed
    //  * @returns {Set<SSet<[number, number]>>} quotient set defined by a given equvalence
    //  */ 
    // public setOrdering(order: (a: T, b: T) => boolean): void {
    //     this.order = order;

    // }

    /**
     * Two dimmensional boolean matrix containing false if the membership of element from mmatrix has been approved
     * @type {boolean[][]}
     * @private
     */
    private checkedArray: boolean[][];

    /**
       * Finds recursivelly items from neighbourhood containing the same value as item having coordinates (x,y).
       *
       * @param {x:number} x-coordinate of the given element
       * @param {y:number} y-coordinate of the given element
       * @param {neighbourhood:SSet<[number,number]>} passed by reference SSet of pairs [number,number] containing the given [x,y], extended though this method
       * @param {neighbourhoods:Set<SSet<[number, number]>>} the family of all neighbourhoods passed by reference
       * @returns {boolean} always false, according to the lambda usage
       *
       */
    private addFromNeighbourhood(x: number, y: number, neighbourhood: SSet<[number, number]>, neighbourhoods: Set<SSet<[number, number]>>): boolean {

        neighbourhood.sadd([x, y]);
        neighbourhoods.add(neighbourhood);

        [[0, 1], [0, -1], [1, 0], [1, 0]].forEach(c => {
            let i = c[0], j = c[1];
            if (!this.mmatrix.validateX(x + i) || !this.mmatrix.validateY(y + j) || this.checkedArray[x + i][y + j]) {
                return;
            }


            (this.array[x][y] !== this.array[x + i][y + j]) || !neighbourhood.sadd([x + i, y + j])
                || !(this.checkedArray[x + i][y + j] = true)
                || this.addFromNeighbourhood(x + i, y + j, neighbourhood, neighbourhoods);


        });

        return false;
    }

    /**
     * Divide matrix on the classes of abstraction w.r.t. an equvalence "have the same value"
     * @returns {Set<SSet<[number, number]>>} quotient set defined by a given equvalence
     */
    public findCoulpes(): Set<SSet<[number, number]>> {
        let neighbourhoods = new Set<SSet<[number, number]>>();

        let currentNeighbourhoodArr: SSet<[number, number]>[] = [];


        for (let i: number = 0, max: number = this.array.length; i < max; i++) {
            for (let j: number = 0, max0: number = this.array[0].length; j < max0; j++) {
                (this.checkedArray[i][j]) || !(this.checkedArray[i][j] = true) ||
                    !currentNeighbourhoodArr.push(new SSet<[number, number]>()) ||
                    this.addFromNeighbourhood(i, j, currentNeighbourhoodArr[currentNeighbourhoodArr.length - 1], neighbourhoods);

            }
        }
        this.neighborhoods = neighbourhoods;
        return neighbourhoods;
    }

}
