import { readFileSync } from "fs";

let previousValue = valueArray[0];
let counter = 0;
const input = readFileSync("./puzzleInput.txt", "utf-8");
const valueArray = input.split("\n");

for (const value of valueArray) {
  if (parseInt(value) > parseInt(previousValue)) {
    counter++;
  }
  previousValue = value;
}

console.log(counter);
