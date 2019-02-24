

import  SSet from '../src/classes/SSet';
import deepEqual from '../src/helpers/deepEqual';

let set = new Set();

set.add([0,1]).add({x:11,y:['a',44]});
SSet.equality = deepEqual;
let sset = new SSet(set);

describe('SSet',()=>{
    test('add',()=>{
      sset.add([0,1]);
      expect(set.size).toEqual(2);
      
      set.add([0,1]);
      expect(set.size).toEqual(3); 
      set.add({x:11,y:['a',44]});
      expect(set.size).toEqual(4);
      sset.add({x:11,y:['a',44]});
      expect(set.size).toEqual(4);
    });
});
