import { readFileSync } from "fs";

let value = 0;
let counter = 0;
const input = readFileSync("./puzzleInput.txt", "utf-8");
const valueArray = input.split("\n");
let previousValue =
  parseInt(valueArray[0]) +
  parseInt(valueArray[1]) +
  parseInt(valueArray[2]);

for (let i = 0; i < valueArray.length - 2; i++) {
  value =
    parseInt(valueArray[i]) +
    parseInt(valueArray[i + 1]) +
    parseInt(valueArray[i + 2]);

  if (value > previousValue) {
    counter++;
  }
  previousValue = value;
}

console.log(counter);
