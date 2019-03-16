import { MMatrix } from '../src/classes/MMatrix';
import SSet from '../src/classes/SSet';
import { Transition } from '../src/classes/Transition';
import deepEqual from '../src/helpers/deepEqual';

let mm = new MMatrix<number>(5, 5);
let upmm = new MMatrix<number>(5, 5);

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
  [0, 1, 3, 1, 0],
  [0, 1, 1, 1, 0],
  [0, 1, 2, 0, 0]
);

let trans = new Transition<number>(mm, upmm);
let neighbourhood = new SSet<[number, number]>();

describe('Transition', () => {

  test('Falling', () => {
  
    
    neighbourhood.add([0, 2]).add([1, 2]);
    trans.run(neighbourhood);
   
    
    expect(
      deepEqual(
        
        mm.getArray(), 
      
      
      
        [
         [0, 1, 3, 0, 0],
         [0, 1, 1, 1, 0],
         [0, 1, 2, 1, 0],
         [0, 1, 10, 1, 0],
         [0, 1, 11, 0, 0]
        ]
      
      )
    ).toBeTruthy();

    upmm = new MMatrix<number>(5, 5);
    upmm.consumeRows(
      [2, 1, 6, 0, 0],
      [3, 1, 1, 1, 0],
      [0, -1, 2, 0, 1],
      [0, 1, 7, 1, 0],
      [1, 2, 4, 2, 1]
    )


    neighbourhood = new SSet<[number, number]>();


    neighbourhood.add([0, 1]).add([1, 1]).add([2, 1]).add([3, 1]).add([4, 1])
      .add([1, 2]).add([1, 3]).add([2, 3]).add([3, 3]);

    trans = new Transition<number>(mm, upmm);
    trans.run(neighbourhood);


    

       expect(deepEqual(mm.getArray(), 
         [
           [0, 1,  3, 0, 0],
           [0, 1,  10, 0, 0],
           [0, -1, 11, 0, 0],
           [0,  1, 12, 1, 0],
           [0,  2, 6, 0, 0]
         ]
       )
     ).toBeTruthy();


  });


});
