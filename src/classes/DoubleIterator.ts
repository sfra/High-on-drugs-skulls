import DoubleIteratorI from './DoubleIteratorI';

/**
 * 2-dimensional iterator.
 * @constructs DoubleIterator
 * @implements DoubleIteratorI
 */
export default abstract class DoubleIterator<T> implements DoubleIteratorI<T> {

	/**
   * Create a MMatrix.
   * @param {number} x - The x dimension of iterated matrix.
   * @param {number} y - The y dimension of iterated matrix.
   */
	constructor(x: number, y: number) {
		this.dx = x;
		this.dy = y;
		this.array = [];
		this.iteratorInit();
	}

	/**
 * iterator
 * @type {[number,number]}
 * @protected
 */
	protected iterator: [number, number];
	/**
	* x-dimension
	* @type {number}
	* @protected
	*/
	protected dx: number;

	/**
 * y-dimension
 * @type {number}
 * @protected
 */
	protected dy: number;

	/**
 * An array being in the scope of iterator
 * @type {T[][]}
 * @protected
 */
	protected array: T[][];

	/**
 * Put iterator on 0,0 coordinate
 * @public
 */
	public iteratorInit() {
		this.iterator = [0, 0];
	}

  /**
   * Checks if the indicated object is the last on the x-axis.
   *
	 * @returns {boolean} `
   *
   */
	public hasNextX(): boolean {
		return this.iterator[0] < this.dx - 1
	}

	/**
 * Checks if the indicated object is the last on the y-axis.
 *
 * @returns {boolean} `
 *
 */
	public hasNextY(): boolean {
		return this.iterator[1] < this.dy - 1;
	}

	/**
* Move one step right on the x-axis. It returns true or false according to the next element exists.
*
* @returns {boolean} `
*
*/
	public nextX(): boolean {

		if (!this.hasNextX()) {
			return false;
		}
		this.iterator[0] += 1;
		return true;
	}

	/**
	* Move one step right on the y-axis. It returns true or false according to the next element exists.
	*
	* @returns {boolean} `
	*
	*/
	public nextY(): boolean {
		if (!this.hasNextY()) {
			return false;
		}
		this.iterator[1] += 1;
		return true;
	}


	/**
   * 	Back to the x-beginnig of the array, preserving y-value
	 * @returns {boolean} `
   *
   */
	public rewindX(): number {
		this.iterator[0]=0;
		return 0;
	}

	/**
 * 	Back to the y-beginnig of the array, preserving x-value
 * @returns {boolean} `
 *
 */
	public rewindY(): number {
		this.iterator[1]=0;
		return 0;
	}

	/**
 * 	Returns currently indicated value
 * @returns {boolean} `
 *
 */
	public getIterator(): T {
		return this.array[this.iterator[0]][this.iterator[1]];
	}








}