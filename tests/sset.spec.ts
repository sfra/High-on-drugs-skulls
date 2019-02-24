

import  SSet from '../src/classes/SSet';
import deepEqual from '../src/helpers/deepEqual';




SSet.equality = deepEqual;
let sset = new SSet();

describe('SSet',()=>{
    test('add',()=>{
      sset.sadd([0,1]);
      expect(sset.size).toEqual(1);
      
      sset.sadd([0,1]);
      expect(sset.size).toEqual(1); 
      sset.sadd({x:11,y:['a',44]});
      expect(sset.size).toEqual(2);
      sset.sadd({x:11,y:['a',44]});
      expect(sset.size).toEqual(2);
    });
});
