import { MMatrix } from './MMatrix';
import  SSet  from './SSet';
import deepEqual from '../helpers/deepEqual';

export class Select<T> {
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


    private array: T[][];
    private mmatrix: MMatrix<T>;
    private order: (a: T, b: T) => boolean;

    
    public setOrdering(order: (a: T, b: T) => boolean): void {
        this.order = order;
    }


    private checkedArray: boolean[][];

    private addFromNeighbourhood(x: number, y: number, neighbourhood: SSet<[number, number]>, neighbourhoods:Set<SSet<[number, number]>>): boolean {

        neighbourhood.sadd([x, y]);
        neighbourhoods.add(neighbourhood);
        
        [[0,1], [0,-1],[1,0],[1,0]].forEach(c=>{
            let i= c[0], j=c[1]; 
            if (!this.mmatrix.validateX(x + i) || !this.mmatrix.validateY(y + j) || this.checkedArray[x + i][y + j] ) {
                return;
            }


            (this.array[x][y] !== this.array[x + i][y + j]) ||  !neighbourhood.sadd([x + i, y + j])
             || !(this.checkedArray[x + i][y + j] = true)
             || this.addFromNeighbourhood(x + i, y + j, neighbourhood,neighbourhoods);


        });

        return false;
    }

    public findCoulpes(): Set<SSet<[number, number]>> {
        let neighbourhoods = new Set<SSet<[number, number]>>();

        let currentNeighbourhoodArr: SSet<[number, number]>[] = [];


        for (let i: number = 0, max: number = this.array.length; i < max; i++) {
            for (let j: number = 0, max0: number = this.array[0].length; j < max0; j++) {
                (this.checkedArray[i][j]) || !(this.checkedArray[i][j] = true) ||
                 !currentNeighbourhoodArr.push(new SSet<[number, number]>()) ||
                  this.addFromNeighbourhood(i, j, currentNeighbourhoodArr[currentNeighbourhoodArr.length - 1],neighbourhoods);
            
            }
        }

        return neighbourhoods;
    }

}
