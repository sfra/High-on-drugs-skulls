import '../src/helpers/deepEqual';
import deepEqual from '../src/helpers/deepEqual';
import SSet from '../src/classes/SSet';


describe('Deep equality', () => {

    let a = [0, 1];
    let b:any[] = [1, 1];

    let s0 = new Set();
    let s1 = new Set();

    s0.add((new Set().add(3).add([5, 4]))).add(a).add({ c: [1, 2], d: { s: 'hello' } }).add(b);
    s1.add(a).add(b).add({ c: [1, 2], d: { s: 'hello' } }).add((new Set().add(3).add([5, 4])));
    test('Basic equalities', () => {

        expect(deepEqual([], [])).toBeTruthy();
        expect(deepEqual([], [1])).toBeFalsy();
        expect(deepEqual([], [0])).toBeFalsy();
        expect(deepEqual([1], [0])).toBeFalsy();
        expect(deepEqual('dda', 'dda')).toBeTruthy();
        expect(deepEqual(a, b)).toBeFalsy();

        expect(deepEqual([0], [1])).toBeFalsy();
        expect(deepEqual([0, {}], [1])).toBeFalsy();

    });

    test('Sets and SSets', () => {
        // console.log(s0);
        // console.log(s1);
        expect(deepEqual(s0,s1)).toBeTruthy();
                /**checking reference */
        b[1]='FAULT';

        expect(deepEqual(s0,s1)).toBeTruthy();

        s1.add([[],[]]);
        // console.log(s0);
        // console.log(s1);
        expect(deepEqual(s0,s1)).toBeFalsy();

    });
});