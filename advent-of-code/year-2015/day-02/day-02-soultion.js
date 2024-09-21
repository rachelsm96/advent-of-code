import { open } from "node:fs/promises"
myFileReader()
//const input = readFileSync("./day-01-input.txt", "utf8").trimEnd()
var wrapping_paper = 0
var numbers
var ribbon = 0
async function myFileReader() {
  const file = await open("./day-02-input.txt")
  for await (const line of file.readLines()) {
    numbers = line.split("x").map(Number)
    numbers.sort((a, b) => a - b)
    wrapping_paper +=
      2 * numbers[0] * numbers[1] +
      2 * numbers[1] * numbers[2] +
      2 * numbers[0] * numbers[2] +
      numbers[0] * numbers[1]
    ribbon += numbers[0] * numbers[1] * numbers[2]
    ribbon += numbers[0] + numbers[0] + numbers[1] + numbers[1]
  }
  console.log("Wrapping paper needed: " + wrapping_paper + " square feet")
  console.log("Ribbon needed: " + ribbon + " square feet")
}
