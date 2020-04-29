const lowerEnd = 264793
const higherEnd = 803935

let totalPasswords = 0

for (let possibility = lowerEnd; possibility <= higherEnd; possibility++) {
  const pointerToArray = possibility.toString().split('').map(character => Number(character))

  if (/(.)\1/.test(possibility) && pointerToArray.sort().join('') === possibility.toString()) {
    console.log(possibility)
    totalPasswords++
  }
}

console.log("total passwords", totalPasswords)
