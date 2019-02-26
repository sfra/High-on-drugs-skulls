import { MMatrix } from "../src/classes/MMatrix";
import { Transition } from "../src/classes/Transition";
import deepEqual from "../src/helpers/deepEqual";

let mm = new MMatrix<number>(5, 5);
let upmm = new MMatrix<number>(5, 5);
let trans = new Transition<number>(mm, upmm);

mm.consumeColumns(
  [0, 1, 2, 0, 0],
  [0, 1, 2, 1, 0],
  [0, 1, 3, 1, 0],
  [0, 1, 1, 1, 0],
  [0, 1, 2, 0, 0]
);

upmm.consumeColumns(
  [2, 1, 2, 0, 0],
  [3, 1, 2, 1, 0],
  [0, 1, 2, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 2, 2, 1, 1]
);

let transition = new Transition<number>(mm, upmm);
describe("transition", () => {
  test("Removing tiles", () => {
    trans.run(1, 2);
    expect(
      deepEqual(mm.getArray(), [
        [
          [0, 1, 3, 0, 0],
          [0, 1, 1, 1, 0],
          [0, 1, 2, 1, 0],
          [0, 1, 1, 1, 0],
          [0, 1, 2, 0, 0]
        ]
      ])
    ).toBeTruthy();


  });
});

