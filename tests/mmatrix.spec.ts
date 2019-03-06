import { MMatrix } from '../src/classes/MMatrix';
import Tile from '../src/classes/Tile';

describe('MMatrix test', () => {
  let mm=new MMatrix(3,2);
  
  test('Check the initialization and simple functions', () => {
  
    expect(mm.consumeRows([3], [2, 44] )).toBeFalsy();  
    expect(mm.consumeRows([2,3],[13,5],[7,7])).toBeTruthy();
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

  test('Other types',()=>{
    let mmm= new MMatrix<Tile>(3,4);
    
    expect(mmm.consumeRows(
      [new Tile('apple'),new Tile('orange'),new Tile('banana'),new Tile('apple')],
      [new Tile('apple'),new Tile('orange'),new Tile('orange'),new Tile('apple')],
      [new Tile('apple'),new Tile('orange'),new Tile('banana'),new Tile('apple')]
      )).toBeTruthy();

    expect(mmm.getDx()).toEqual(3);
    expect(mmm.getDy()).toEqual(4);
    expect(mmm.getIterator().name).toEqual('apple');
    expect(mmm.nextY()).toEqual(true);
    expect(mmm.getIterator().name).toEqual('orange');
 
  });

  test('Consume row',()=>{
      let mmm=new MMatrix<Tile>(3,2);
      expect(mmm.consumeRow([new Tile('gold'),new Tile('silver')] )).toBeTruthy();
      expect(mmm.consumeRow([new Tile('bronze'),new Tile('silver')] )).toBeTruthy();
      expect(mmm.consumeRow([new Tile('gold')] )).toBeFalsy();
      expect(mmm.consumeRow([new Tile('gold'), new Tile('silver'),new Tile('gold')] )).toBeFalsy();
      expect(mmm.consumeRow([new Tile('gold'),new Tile('silver')] )).toBeTruthy();
      expect(mmm.consumeRow([new Tile('gold'),new Tile('silver')] )).toBeFalsy();

      expect(mmm.getIterator().name).toEqual('gold');
      expect(mmm.getIterator().name==='silver').toBeFalsy();
      mmm.nextX();
      expect(mmm.getIterator().name).toEqual('bronze');
 

  });
});
