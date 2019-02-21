import { MMatrix } from '../classes/MMatrix';



export class Select<T> {
    constructor(mmatrix:MMatrix<T>){
        this.array = mmatrix.getArray();
    }
    private array:T[][];
    
    private order: (a:T,b:T) => boolean;
    public setOrdering(order: (a:T,b:T) => boolean) : void {
        this.order = order;
        
    }


    
    // public findCoulpes():T[][]{
    //     return [[]];
    // }

    public findCoulpes():Set<Set<T>>{
        let set = new Set<Set<T>>(); 
//        set.add(this.array[0][0])
        return set ;
    }

}
