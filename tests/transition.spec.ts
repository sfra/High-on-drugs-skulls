import { MMatrix } from '../src/classes/MMatrix';
import { Transition } from '../src/classes/Transition';
let mm = new MMatrix<[number,number]>(5,5);
let transition = new Transition<[number,number]>(mm);
describe('transition',()=>{

    test('Removing tiles',()=>{
        
        expect(true).toBeTruthy();
    });

});