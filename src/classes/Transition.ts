import { MMatrix } from './MMatrix';
import { Select } from './Select';

export  class Transition<T> {
    constructor(mmatrix:MMatrix<T>) {
        this.mmatrix =  mmatrix;
    }
    private mmatrix: MMatrix<T>;
}