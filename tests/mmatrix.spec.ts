import { MMatrix } from '../src/classes/MMatrix';

describe('MMatrix test', () => {
  let mm=new MMatrix(3,2);
  
  test('Check the initialization and simple functions', () => {
  
    expect(mm.consumeColumns([3], [2, 44] )).toBeFalsy();  
    expect(mm.consumeColumns([2,3],[13,5],[7,7])).toBeTruthy();
    expect(mm.getDx()).toEqual(3); // check dimmensionyx
    expect(mm.getDy()).toEqual(2);// check dimmension y
    expect(mm.getItem(1,1)).toEqual(5);
  
    expect(mm.validateX(1)).toBeTruthy();
    expect(mm.validateY(10)).toBeFalsy();
    mm.setItem(2,1,88);
    expect(mm.getArray()).toEqual([[2,3],[13,5],[7,88]]);
  });
  test('Check iterator',()=>{

    expect(mm.getIterator()).toEqual(2);
    expect(mm.nextX()).toBeTruthy();
    expect(mm.getIterator()).toEqual(13);
    expect(mm.hasNextY()).toBeTruthy();
    expect(mm.nextY()).toBeTruthy(); 
    expect(mm.getIterator()).toEqual(5);
    expect(mm.nextX()).toBeTruthy();


    
    expect(mm.nextX()).toBeFalsy();
    expect(mm.nextY()).toBeFalsy();

    expect(mm.getIterator()).toEqual(88); //check range of the iterator
    mm.rewindX();
    expect(mm.getDx()).toEqual(3);
    mm.rewindY();
    expect(mm.getDy()).toEqual(2);    
  });

  test('Extend MMatrix',()=>{
   // expect(mm.consumeColumns([21,33],[33,23])).toBeTruthy();
    
  });
});
