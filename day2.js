const input = [1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,10,19,1,6,19,23,2,23,6,27,2,6,27,31,2,13,31,35,1,10,35,39,2,39,13,43,1,43,13,47,1,6,47,51,1,10,51,55,2,55,6,59,1,5,59,63,2,9,63,67,1,6,67,71,2,9,71,75,1,6,75,79,2,79,13,83,1,83,10,87,1,13,87,91,1,91,10,95,2,9,95,99,1,5,99,103,2,10,103,107,1,107,2,111,1,111,5,0,99,2,14,0,0]

function launchProgram (input) {
  const program = [...input]

  for (let pointer = 0; pointer <= program.length; pointer += 4) {
    const opCode = program[pointer]
    if (opCode === 99) return program

    const firstInputPosition = program[pointer + 1]
    const secondInputPosition = program[pointer + 2]
    const targetPositionPointer = pointer + 3

    // console.log('opCode', opCode)
    // console.log('firstInputPosition', firstInputPosition)
    // console.log('secondInputPosition', secondInputPosition)
    // console.log('targetPositionPointer', targetPositionPointer)

    const firstValue = program[firstInputPosition]
    const secondValue = program[secondInputPosition]
    const targetPosition = program[targetPositionPointer]

    // console.log('firstValue', firstValue)
    // console.log('secondValue', secondValue)
    // console.log('targetPosition', targetPosition)

    let result = null

    switch (program[pointer]) {
      case 1 :
        result = firstValue + secondValue
        break
      case 2 :
        result = firstValue * secondValue
        break
      default :
        console.log(`program at position ${pointer} is ${program[pointer]}`)
    }

    program[targetPosition] = result
  }

  return program
}

//const programResult = launchProgram(input)

function foundTheNounAndVerb (input) {
  const targetValue = 19690720

  let result = [0, 0]

  for (let i = 1; i <= 99; i++) {
    for (let j = 1; j <= 99; j++) {
      const inputTest = [...input]
      inputTest[1] = i
      inputTest[2] = j
      const testResult = launchProgram(inputTest)

      if (testResult[0] === targetValue) {
        result = [i, j]
        return result
      }
    }
  }

  console.log("No solutions found")
}

//const testResult = foundTheNounAndVerb(input)
