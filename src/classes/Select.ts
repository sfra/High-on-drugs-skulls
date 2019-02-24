import { MMatrix } from './MMatrix';

import  SSet  from './SSet';

import deepEqual from '../helpers/deepEqual';
export class Select<T> {
    constructor(mmatrix: MMatrix<T>) {
        this.array = mmatrix.getArray();
        this.mmatrix = mmatrix;
        this.checkedArray = [];

        /** init an array filled by falses*/
        //        this.checkedArray.fill((new Array<boolean>(this.array[0].length).fill(false)));

        for (let i = 0, max = mmatrix.getDx(); i < max; i++) {
            this.checkedArray.push(new Array<boolean>(mmatrix.getDy()).fill(false));
        }
        SSet.equality = deepEqual;

        // console.log(this.checkedArray);


    }


    private array: T[][];
    private mmatrix: MMatrix<T>;

    private order: (a: T, b: T) => boolean;




    public setOrdering(order: (a: T, b: T) => boolean): void {
        this.order = order;

    }





    private checkedArray: boolean[][];

    private addFromNeighbourhood(x: number, y: number, neighbourhood: SSet<[number, number]>, neighbourhoods:Set<SSet<[number, number]>>): boolean {

        neighbourhood.add([x, y]);
        neighbourhoods.add(neighbourhood);

        [-1, 0, 1].forEach(i => {

            if (!this.mmatrix.validateX(x + i)) {
                return;
            }

            [-1, 0, 1].forEach(j => {

                if (!this.mmatrix.validateY(y + j) || this.checkedArray[x + i][y + j] || (i === j && i === 0)) {
                    return;
                }

                if (this.array[x][y] === this.array[x + i][y + j]) {
                    neighbourhood.add([x + i, y + j]);
                    this.checkedArray[x + i][y + j] = true;
                    this.addFromNeighbourhood(x + i, y + i, neighbourhood,neighbourhoods);
                }

            });

        })


        return false;
    }


    public findCoulpes(): Set<SSet<[number, number]>> {
        let neighbourhoods = new Set<SSet<[number, number]>>();

        let currentNeighbourhoodArr: SSet<[number, number]>[] = [];



        for (let i: number = 0, max: number = this.array.length; i < max; i++) {

            for (let j: number = 0, max0: number = this.array[0].length; j < max0; j++) {

                if (!(this.checkedArray[i][j])) {
                    currentNeighbourhoodArr.push(new SSet<[number, number]>())
                    this.checkedArray[i][j] = true;
                    this.addFromNeighbourhood(i, j, currentNeighbourhoodArr[currentNeighbourhoodArr.length - 1],neighbourhoods);

                    ;
                }

                //                (this.checkedArray[i][j]) || this.addFromNeighbourhood(i, j, currentNeighbourhoodArr[0]) ||
                //                  ((this.checkedArray[i][j] = true) && (neighbourhoods.add(currentNeighbourhoodArr[0])));





            }

        }


        return neighbourhoods;
    }

}
