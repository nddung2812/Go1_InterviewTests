const correctAnswers = ["A", "B", "C"]

const learnerResponses = [
    ["A", "B", "B"],
    ["C", "B", "C"],
    ["A", "B", "C"],
    ["B", "B", "A"],
    ["A", "B", "C"]
]
//GO1 Test number 2
// find the easiest answer, easiest answer is the one that has the most correct answers
//loop through learnerResponse to get each response
//check if each element has the same response with correctAnswers array
//if it matches then add the response to the countResponseArray or Object
//the repsonse with the highest count is the easiest one

let correctAnswersArray = []
for (let i = 0; i < learnerResponses.length; i++) {
  const responses = learnerResponses[i]
  for (let j = 0; j < responses.length; j++) {
    // responses.length = correctAnswers.length
    const response = responses[j]
    if (response === correctAnswers[j])
    correctAnswersArray.push(response)
  }
}
console.log(correctAnswersArray)

//Count by Object
const correctAnswersCount = {}
for (let i = 0; i < correctAnswersArray.length; i++) {
  const answer = correctAnswersArray[i]
  if(!correctAnswersCount[answer]) {
    correctAnswersCount[answer] = 0
  }
  correctAnswersCount[answer] = correctAnswersCount[answer] + 1
}

console.log(correctAnswersCount)

const countArray = Object.values(correctAnswersCount)

const easiest = countArray.indexOf(Math.max(...countArray))

console.log(`the easiest answer index is ${easiest}`)