import DoubleIterator from "./DoubleIterator";
/**
 * Class representing a 2-dimensional matrix.
 * @constructs MMatrix
 * @extends DoubleIterator
 */
export class MMatrix<T> extends DoubleIterator<T> {
  
   /**
   * Create a MMatrix.
   * @param {number} x - The x dimension of MMatrix.
   * @param {number} y - The y dimension of MMatrix.
   */
  public constructor(x: number, y: number) {
    super(x, y);
  }

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
   * Checks if provided data validate condition given by dx and dy.
   *
   * @param {T[][]} columns
   * @returns {boolean} `
   *
   */
  public validateArray(columns: T[][]): boolean {
    let out = this.dx === columns.length;

    for (let i = 0, max = columns.length; i < max; i++) {
      out = out && this.dy === columns[i].length;
    }

    return out;
  }

  /** 
   * Checks if the coordinate is in the scope of x.
   * @param {number} x coordinate
   * @returns {boolean}
  */

  public validateX(x:number):boolean{

        return  0<=x && x<this.array.length;
  }

    /** 
   * Checks if the coordinate is in the scope of y.
   * @param {number} y coordinate
   * @returns {boolean}
  */
  public validateY(y:number):boolean {
    return 0<=y && y<this.array[0].length;
  }


  /**
   * Adds columns to an array.
   *
   * @param {...T[][]} columns
   * @returns {boolean} `
   *
   */

  public consumeColumns(...columns: T[][]): any {
    if (!this.validateArray(columns)) {
      return false;
    }

    for (let i: number = 0, max: number = columns.length; i < max; i++) {
      this.array.push(columns[i]);
    }

    return true;
  }

  /**
   * Returns an item at the given coordinates.
   *
   * @param {number} x
   * @param {number} y
   * @returns {T} `
   *
   */
  public getItem(x: number, y: number): T {
    return this.array[x][y];
  }

  /**
   * Write a value to item at the given coordinates.[1,2,2,3,3,4]
   *
   * @param {number} x
   * @param {number} y
   * @param {T} value
   *
   */
  public setItem(x: number, y: number, value: T): void {
    this.array[x][y] = value;
  }

  /**
   * Returns the x-dimension.
   *
   * @returns {number} `
   *
   */
  public getDx(): number {
    return this.dx;
  }

  /**
   * Returns the y-dimension.
   *
   * @returns {number} `
   *
   */
  public getDy(): number {
    return this.dy;
  }

  /**
   * Returns the whole array.
   *
   * @returns {T[][]} `
   *
   */
  public getArray(): T[][] {
    return this.array;
  }
}
