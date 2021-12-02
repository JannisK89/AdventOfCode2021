import { readFileSync } from "fs";

let counter = 0;
const input = readFileSync("./puzzleInput.txt", "utf-8");
const valueArray = input.split("\n");
let previousValue = valueArray[0];

for (const value of valueArray) {
  if (parseInt(value) > parseInt(previousValue)) {
    counter++;
  }
  previousValue = value;
}

console.log(counter);
