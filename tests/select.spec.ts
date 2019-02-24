import { MMatrix } from '../src/classes/MMatrix';
import { Select } from '../src/classes/Select';



const mm = new MMatrix<number>(6,6);
const select = new Select<number>(mm);
select.setOrdering(((a:number,b:number)=>{ return a<b}));
mm.consumeColumns(  [0,2,2,2,3,4],
                    [0,3,2,3,3,4],
                    [1,3,2,1,0,0],
                    [1,2,1,3,3,2],
                    [1,2,2,3,3,4],
                    [1,2,2,3,3,4]
    );


    let overSetMock = new Set<Set<[number,number]>>();
      

      
      
    let currentSets = [
      new Set<[number,number]>(),new Set<[number,number]>(),
      new Set<[number,number]>(),new Set<[number,number]>(),
      new Set<[number,number]>(),new Set<[number,number]>(),
      new Set<[number,number]>(),new Set<[number,number]>(),
      new Set<[number,number]>(),new Set<[number,number]>(),
      new Set<[number,number]>(),new Set<[number,number]>()
    
    ];
    
    /****0 */
    currentSets[0].add([0,0]);
    currentSets[0].add([0,1]);
    overSetMock.add(currentSets[0]);
  


    
    currentSets[1].add([0,1]);
    currentSets[1].add([0,2]);
    currentSets[1].add([0,3]);
    currentSets[1].add([2,1]);
    overSetMock.add(currentSets[1]);

    currentSets[2].add([0,4]);
    currentSets[2].add([1,3]);
    currentSets[2].add([1,4]);
    overSetMock.add(currentSets[2]);


    currentSets[3].add([0,5]);
    currentSets[3].add([1,5]);
    overSetMock.add(currentSets[3]);

    /****1 */      
    currentSets[4].add([1,1]);
    currentSets[4].add([1,2]);
    overSetMock.add(currentSets[4]);
    
    /***2 */
     currentSets[5].add([0,2]);
     currentSets[5].add([0,3]);
     currentSets[5].add([0,4]);
     currentSets[5].add([0,5]);

    overSetMock.add(currentSets[5]);
    
    
    
    /***3 */
    currentSets[6].add([1,3]);
    currentSets[6].add([1,4]);
    currentSets[6].add([1,5]);
    currentSets[6].add([2,4]);
    currentSets[6].add([2,5]);
    

    currentSets[7].add([3,3]);
    currentSets[7].add([3,4]);

    currentSets[7].add([5,3]);
    currentSets[7].add([5,4]);
    currentSets[7].add([5,3]);

    
   overSetMock.add(currentSets[6]);
    console.log(overSetMock);

describe('Select',()=>{
    test('',()=>{
    //   expect(select.findCoulpes()).toEqual(overSetMock);  
    });
});
