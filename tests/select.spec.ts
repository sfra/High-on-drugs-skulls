import { MMatrix } from "../src/classes/MMatrix";
import { Select } from "../src/classes/Select";
import SSet from "../src/classes/SSet";
import Tile from '../src/classes/Tile';

import deepEqual from "../src/helpers/deepEqual";

const mm = new MMatrix<number>(6, 6);

mm.consumeRows(
  [0, 2, 2, 2, 3, 4],
  [0, 3, 2, 3, 3, 4],
  [1, 3, 2, 1, 0, 0],
  [1, 2, 1, 3, 3, 2],
  [1, 2, 2, 3, 3, 4],
  [1, 2, 2, 3, 3, 4]
);

const select: Select<number> = new Select<number>(mm);

let overSetMock:Set<SSet<[number,number]>> = new Set<SSet<[number, number]>>();
  let currentSets:SSet<[number,number]>[] | null = [
    new SSet<[number, number]>(),
    new SSet<[number, number]>(),
    new SSet<[number, number]>(),
    new SSet<[number, number]>(),
    new SSet<[number, number]>(),
    new SSet<[number, number]>(),
    new SSet<[number, number]>(),
    new SSet<[number, number]>(),
    new SSet<[number, number]>(),
    new SSet<[number, number]>(),
    new SSet<[number, number]>(),
    new SSet<[number, number]>(),
    new SSet<[number, number]>(),
    new SSet<[number, number]>()
  ];


currentSets[0].add([0, 0]);
currentSets[0].add([1, 0]);
overSetMock.add(currentSets[0]);
currentSets[1].add([0, 1]);
currentSets[1].add([0, 2]);
currentSets[1].add([0, 3]);
currentSets[1].add([1, 2]);
currentSets[1].add([2, 2]);
overSetMock.add(currentSets[1]);

currentSets[2].add([0, 5]);
currentSets[2].add([1, 5]);
overSetMock.add(currentSets[2]);

currentSets[3].add([1, 1]);
currentSets[3].add([2, 1]);
overSetMock.add(currentSets[3]);

currentSets[4].add([2, 0]);
currentSets[4].add([3, 0]);
currentSets[4].add([4, 0]);
currentSets[4].add([5, 0]);

overSetMock.add(currentSets[4]);

currentSets[5].add([2, 3]);
overSetMock.add(currentSets[5]);

currentSets[6].add([2, 4]);
currentSets[6].add([2, 5]);
overSetMock.add(currentSets[6]);

currentSets[7].add([3, 1]);
currentSets[7].add([4, 1]);
currentSets[7].add([4, 2]);
currentSets[7].add([5, 2]);
currentSets[7].add([5, 1]);
overSetMock.add(currentSets[7]);

currentSets[8].add([3, 3]);
currentSets[8].add([3, 4]);
currentSets[8].add([4, 3]);
currentSets[8].add([4, 4]);
currentSets[8].add([5, 4]);
currentSets[8].add([5, 3]);
overSetMock.add(currentSets[8]);

currentSets[9].add([3, 5]);
overSetMock.add(currentSets[9]);

currentSets[10].add([4, 5]);
currentSets[10].add([5, 5]);
overSetMock.add(currentSets[10]);
currentSets[11].add([3, 2]);
overSetMock.add(currentSets[11]);

currentSets[12].add([0, 4]);
currentSets[12].add([1, 4]);
currentSets[12].add([1, 3]);
overSetMock.add(currentSets[12]);

describe('Select', () => {
  test('Find couples of simple objects', () => {
    expect(deepEqual(select.findCoulpes(), overSetMock)).toEqual(true);
  });

 
  
  //currentSets.fill(new SSet<[number,number]>());

  test('Find couples Tiles', () => {
    let mmm = new MMatrix<Tile>(4, 5);

    mmm.consumeRows(
      [new Tile('apple'), new Tile('apple'), new Tile('apple'), new Tile('banana'), new Tile('banana')],
      [new Tile('apple'), new Tile('orange'), new Tile('orange'), new Tile('banana'), new Tile('banana')],
      [new Tile('apple'), new Tile('orange'), new Tile('orange'), new Tile('banana'), new Tile('banana')],
      [new Tile('apple'), new Tile('orange'), new Tile('apple'), new Tile('orange'), new Tile('banana')]
    );

    let select0 = new Select<Tile>(mmm);
    Select.setEquivalence((t, s) => t.name === s.name);
    overSetMock.clear();
    
  
       currentSets = [
      new SSet<[number,number]>(),
      new SSet<[number,number]>(),
      new SSet<[number,number]>(),
      new SSet<[number,number]>(),
      new SSet<[number,number]>()];
    
      /*apple **/
      currentSets[0].add([0,0]);
      currentSets[0].add([1,0]);
      currentSets[0].add([2,0]);
      currentSets[0].add([3,0]);
      currentSets[0].add([0,1]);
      currentSets[0].add([0,2]);
       overSetMock.add(currentSets[0]);
      
{ /* banana */

      currentSets[1].add([0,3]);
      currentSets[1].add([0,4]);
      currentSets[1].add([1,3]);
      currentSets[1].add([1,4]);
      currentSets[1].add([2,3]);
      currentSets[1].add([2,4]);
      currentSets[1].add([3,4]);

      
      overSetMock.add(currentSets[1])
}
  { /* orange */
    currentSets[2].add([1,1]);
    currentSets[2].add([1,2]);
    currentSets[2].add([2,1]);
    currentSets[2].add([2,2]);
    currentSets[2].add([3,1]);
    overSetMock.add(currentSets[2]);
  }
  { /*apple */
    currentSets[3].add([3,3]);
    overSetMock.add(currentSets[3]);
  }
  { /* orange */
    currentSets[4].add([3,2])
    overSetMock.add(currentSets[4]);
  }
  


  

 expect( deepEqual(select0.findCoulpes(),overSetMock)).toBeTruthy();
}

  

  );
 
});
