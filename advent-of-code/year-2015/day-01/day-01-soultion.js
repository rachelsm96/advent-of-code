import { readFileSync } from "node:fs"

const input = readFileSync("./day-01-input.txt", "utf8").trimEnd()

var floor = 0

for (let i = 0; i < input.length; i++) {
  if (input[i] == "(") {
    floor = floor + 1
  }
  if (input[i] == ")") {
    floor = floor - 1
  }
  if (floor == -1) {
    console.log("When does Santa enter the basement: position  " + (i + 1))
  }
}
console.log("The floor Santa should go to is: " + floor)
