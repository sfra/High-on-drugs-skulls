import { MMatrix } from "../src/classes/MMatrix";
import { Select } from "../src/classes/Select";
import SSet from "../src/classes/SSet";
import deepEqual from "../src/helpers/deepEqual";

const mm = new MMatrix<number>(6, 6);

mm.consumeColumns(
  [0, 2, 2, 2, 3, 4],
  [0, 3, 2, 3, 3, 4],
  [1, 3, 2, 1, 0, 0],
  [1, 2, 1, 3, 3, 2],
  [1, 2, 2, 3, 3, 4],
  [1, 2, 2, 3, 3, 4]
);

const select: Select<number> = new Select<number>(mm);

let overSetMock = new Set<SSet<[number, number]>>();
let currentSets = [
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

/*0*/
currentSets[0].sadd([0, 0]);
currentSets[0].sadd([1, 0]);
overSetMock.add(currentSets[0]);
currentSets[1].sadd([0, 1]);
currentSets[1].sadd([0, 2]);
currentSets[1].sadd([0, 3]);
currentSets[1].sadd([1, 2]);
currentSets[1].sadd([2, 2]);
overSetMock.add(currentSets[1]);

currentSets[2].sadd([0, 5]);
currentSets[2].sadd([1, 5]);
overSetMock.add(currentSets[2]);

currentSets[3].sadd([1, 1]);
currentSets[3].sadd([2, 1]);
overSetMock.add(currentSets[3]);

currentSets[4].sadd([2, 0]);
currentSets[4].sadd([3, 0]);
currentSets[4].sadd([4, 0]);
currentSets[4].sadd([5, 0]);

overSetMock.add(currentSets[4]);

currentSets[5].sadd([2, 3]);
overSetMock.add(currentSets[5]);

currentSets[6].sadd([2, 4]);
currentSets[6].sadd([2, 5]);

overSetMock.add(currentSets[6]);

currentSets[7].sadd([3, 1]);
currentSets[7].sadd([4, 1]);
currentSets[7].sadd([4, 2]);
currentSets[7].sadd([5, 2]);
currentSets[7].sadd([5, 1]);
overSetMock.add(currentSets[7]);

currentSets[8].sadd([3, 3]);
currentSets[8].sadd([3, 4]);
currentSets[8].sadd([4, 3]);
currentSets[8].sadd([4, 4]);
currentSets[8].sadd([5, 4]);
currentSets[8].sadd([5, 3]);
overSetMock.add(currentSets[8]);

currentSets[9].sadd([3, 5]);
overSetMock.add(currentSets[9]);

currentSets[10].sadd([4, 5]);
currentSets[10].sadd([5, 5]);
overSetMock.add(currentSets[10]);
currentSets[11].sadd([3, 2]);
overSetMock.add(currentSets[11]);

currentSets[12].sadd([0, 4]);
currentSets[12].sadd([1, 4]);
currentSets[12].sadd([1, 3]);
overSetMock.add(currentSets[12]);

describe("Select", () => {
  test("Equality", () => {
    expect(deepEqual(select.findCoulpes(), overSetMock)).toEqual(true);
  });
});
