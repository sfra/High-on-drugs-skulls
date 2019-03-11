

import  SSet from '../src/classes/SSet';
import deepEqual from '../src/helpers/deepEqual';

SSet.equality = deepEqual;
let sset = new SSet();

describe('SSet',()=>{
    test('add',()=>{
      sset.add([0,1]);
      expect(sset.size).toEqual(1);

      sset.add([0,1]);
      expect(sset.size).toEqual(1);

      sset.add({x:11,y:['a',44]});
      expect(sset.size).toEqual(2);

      sset.add({x:11,y:['a',44]});
      expect(sset.size).toEqual(2);

      expect(sset.has([0,1]));

      sset.add(3);

      expect(sset.has(3)).toBeTruthy();
      expect(sset.has({x:11,y:['a',44]})).toBeTruthy();
      expect(sset.has({x:11,y:['a',-44]})).toBeFalsy();

    });

    /*    test('forEach',()=>{
      let s= new SSet<Array<number>>();

      s.add([8,56,-1]);
      s.add([4,1]);
      console.log(s);
      s.forEach((item)=>{
        console.log(item);
      });



      });*/
});
