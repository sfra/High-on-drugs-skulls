import { MMatrix } from './MMatrix';
import { Select } from './Select';
import SSet from './SSet';

export class Transition<T> {
    constructor(mmatrix: MMatrix<T>, uppermmatrix: MMatrix<T>) {

        this.mmatrix = mmatrix;
        this.uppermatrix = uppermmatrix;

        this.select = new Select<T>(this.mmatrix);

    }

    private mmatrix: MMatrix<T>;
    private uppermatrix: MMatrix<T>;
    private selected: Set<SSet<[number, number]>>;

    private select: Select<T>;
    public getMmatrix(): MMatrix<T> {

        return this.mmatrix;
    }

    public setMmatrix(mmatrix: MMatrix<T>) {
        this.mmatrix = mmatrix;
    }


    public getUpperMmatrix(): MMatrix<T> {

        return this.uppermatrix;
    }

    public setUpperMmatrix(uppermmatrix: MMatrix<T>) {
        this.uppermatrix = uppermmatrix;
    }

    public markSelected(x: number, y: number) {
        this.selected = this.select.findCoulpes();


    }

    public run(x: number, y: number): void {
        let container:SSet<[number,number]> | null;

        for(let cur of this.selected){
            if(cur.contains([x,y])) {
                container = cur;
                break;
            }
        }



 
    }

    public runSpecial(x: number, y: number, sset: Set<SSet<[number, number]>>): void {

    }


}