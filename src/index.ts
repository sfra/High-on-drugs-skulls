import { MMatrix } from "./classes/MMatrix";
import { Select } from "./classes/Select";
import  SSet  from './classes/SSet';
import { Transition } from './classes/Transition';

let mm = new MMatrix<number>(5, 5);
let upmm = new MMatrix<number>(5, 5);
let trans = new Transition<number>(mm, upmm);


upmm.consumeRows(
  [2, 1, 10, 0, 0],
  [3, 1, 11, 1, 0],
  [0, 1, 12, 1, 0],
  [0, 1, 13, 1, 0],
  [1, 2, 14, 1, 1]
);

mm.consumeRows(
  [0, 1, 2, 0, 0],
  [0, 1, 2, 1, 0],
  [0, 1, 5, 1, 0],
  [0, 1, 6, 1, 0],
  [0, 1, 7, 0, 0]
);

let transition = new Transition<number>(mm, upmm);




   let neighbourhood = new SSet<[number,number]>();
   neighbourhood.add([0,2]).add([1,2]);
   console.log(mm.getArray()) 
   trans.run(neighbourhood);
   console.log(mm.getArray());