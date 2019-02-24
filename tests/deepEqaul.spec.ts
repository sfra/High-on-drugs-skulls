import '../src/helpers/deepEqual';
import deepEqual from '../src/helpers/deepEqual';
describe('Deep equality',()=>{
    
    let a=[0,1];
    let b=[1,1];
    test('(1)',()=>{
        expect(deepEqual(a,b)).toBeFalsy();

    });
});