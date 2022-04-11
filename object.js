const johnny = {
  'location': "Brisbane",
  'name': "Johnny",
  'friends': [1,2,3],
  'hasLicense': false,
  'bY': 1986,

  calcAge: function () {
    this.age = 2022 - this.bY
    return this.age
  },

  getSummary: function () {
    return `
    ${johnny.name} has ${johnny.friends.length}friends
    and his best friend is ${johnny.friends[0]}
    his age is ${johnny.calcAge()}
    he has ${johnny.hasLicense ? 'a': 'no'} driver licence
    `
  }
}
const message = `${johnny.name} has ${johnny.friends.length}friends
 and his best friend is ${johnny.friends[0]}
 his age is ${johnny.calcAge()}
 he has ${johnny.hasLicense ? 'a': 'no'} driver licence`
// console.log(johnny.getSummary())

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

const tips = []
const totals = []

for (let i = 0; i < bills.length; i++) {
  if (bills[i] > 10 && bills[i] < 300) {
    const tip = bills[i] * 0.15
    totals.push(bills[i]+tip)
    tips.push(tip)
  }
  else{
    const tip = bills[i] * 0.2
    totals.push(bills[i]+tip)
    tips.push(tip)
  }
}

console.log(tips)
console.log(totals)

const calcAverage = (array) => {
  let sum = 0;
  for (let i = 0; i< array.length; i++){
    sum = sum + array[i]
  }
  const avg = sum/array.length
  return avg
}

const test = [1,2,3,4,5]
// console.log(calcAverage(test))

const maxTemp = [17,21,23]
const maxTemp2 = [12, 4, -5, 0, 4]

const printForecast = (array) => {
  let str = ''
  for (let i = 0; i < array.length; i++){
    str += `${array[i]} degree in ${i+1} days ...`
  }
  console.log('...' + str)
}
console.log(printForecast(maxTemp2))