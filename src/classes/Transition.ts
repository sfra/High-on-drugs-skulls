import { MMatrix } from './MMatrix';
import { Select } from './Select';
import  SSet from './SSet';

export class Transition<T> {
    constructor(mmatrix:MMatrix<T>,uppermmatrix:MMatrix<T>) {
        this.mmatrix =  mmatrix;
        this.uppermatrix = uppermmatrix;
    }

    private mmatrix: MMatrix<T>;
    private uppermatrix:MMatrix<T>;

    public getMmatrix ():MMatrix<T>{

        return this.mmatrix;
    }

    public setMmatrix(mmatrix:MMatrix<T>) {
        this.mmatrix = mmatrix;
    }


    public getUpperMmatrix ():MMatrix<T>{

        return this.uppermatrix;
    }

    public setUpperMmatrix(uppermmatrix:MMatrix<T>) {
        this.uppermatrix = uppermmatrix;
    }

    public markSelected() {

    }

    public run(x:number,y:number):void{

    }

    public runSpecial(x:number,y:number,sset:Set<SSet<[number, number]>>):void{
        
    }


}