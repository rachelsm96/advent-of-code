import { open } from "node:fs/promises"
myFileReader()

var nice = 0

async function myFileReader() {
  const file = await open("./day-05-input.txt")
  for await (const line of file.readLines()) {
    if (line.match("(.)\\1")) {
      if (line.match("[aeiou].*[aeiou].*[aeiou]")) {
        line.match("ab|cd|pq|xy") ? "do nothing" : nice++
      }
    }
  }
  console.log(nice)
}
