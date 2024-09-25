import crypto from "crypto"

const inputdata = "iwrupvqb"
var x = -1
var string_to_hash = ""
var hash_val = ""

do {
  x++
  string_to_hash = `${inputdata}${x}`
  hash_val = crypto.createHash("md5").update(string_to_hash).digest("hex")
} while (hash_val.substring(0, 6) !== "000000")

// chnage above to hash_val.substring(0, 5) !== "00000"
// to solve for Part I

console.log("The hash value is:" + hash_val)
console.log("Puzzle answer: " + x)
