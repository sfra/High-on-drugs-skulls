import { MMatrix } from "./classes/MMatrix";
import { Select } from "./classes/Select";

const m: MMatrix<number> = new MMatrix<number>(6, 6);

//console.log(m.consumeColumns([1,1],[2,4],[3,6] ));
//

///  0,1,2,3,4,5
m.consumeColumns(
  /*0*/ [0, 2, 2, 2, 3, 4],
  /*1*/ [0, 3, 2, 3, 3, 4],
  /*2*/ [1, 3, 2, 1, 0, 0],
  /*3*/ [1, 2, 1, 3, 3, 2],
  /*4*/ [1, 2, 2, 3, 3, 4],
  /*5*/ [1, 2, 2, 3, 3, 4]
);

//console.log(m.getArray());
console.log("  ", " " + 0, " " + 1, " " + 2, " " + 3, " " + 4, " " + 5);
console.log(0, [0, 2, 2, 2, 3, 4]);
console.log(1, [0, 3, 2, 3, 3, 4]);
console.log(2, [1, 3, 2, 1, 0, 0]);
console.log(3, [1, 2, 1, 3, 3, 2]);
console.log(4, [1, 2, 2, 3, 3, 4]);
console.log(5, [1, 2, 2, 3, 3, 4]);
// console.log('=================');

const ss: Select<number> = new Select<number>(m);

console.dir(ss.findCoulpes());
