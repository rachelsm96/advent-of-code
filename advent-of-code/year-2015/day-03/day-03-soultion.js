import { readFileSync } from "node:fs"

const input = readFileSync("./day-03-input.txt", "utf8").trimEnd()
var location = [0, 0]
var houses = new Set(["0,0"])

for (let i = 0; i < input.length; i++) {
  if (input[i] == "^") {
    location[0]++
  }
  if (input[i] == "v") {
    location[0]--
  }
  if (input[i] == ">") {
    location[1]++
  }
  if (input[i] == "<") {
    location[1]--
  }
  houses.add(location.toString())
}
console.log(
  "Houses that got at least one preset with only Santa: " + array2d.size
)

var santa_location = [0, 0]
var robo_santa_location = [0, 0]
var houses2 = new Set(["0,0"])

for (let i = 0; i < input.length; i++) {
  if (input[i] == "^") {
    i % 2 ? santa_location[0]++ : robo_santa_location[0]++
  }
  if (input[i] == "v") {
    i % 2 ? santa_location[0]-- : robo_santa_location[0]--
  }
  if (input[i] == ">") {
    i % 2 ? santa_location[1]++ : robo_santa_location[1]++
  }
  if (input[i] == "<") {
    i % 2 ? santa_location[1]-- : robo_santa_location[1]--
  }
  houses2.add(santa_location.toString())
  houses2.add(robo_santa_location.toString())
}

console.log(
  "Houses that got at least one preset with Robo-Santa help: " + houses2.size
)
