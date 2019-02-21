import { MMatrix } from './classes/MMatrix';


const m:MMatrix<number> = new MMatrix<number>(3,2);


console.log(m.consumeColumns([1,4],[2,4],[3,6] ));

