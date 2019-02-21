export default interface DoubleIteratorI<T> {

    iteratorInit():void;
    nextX():void;
    nextY():void;
    hasNextX():boolean;
    hasNextY():boolean;
    getIterator():T;
    
}

;