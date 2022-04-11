// Reduce

const array1 = [1, 2, 3, 4];
const initial = 0;
const sum = array1.reduce((pre, current) =>
  pre + current, initial
);

console.log(sum)

//No Initial
const arrayNoInitial = [15, 16, 17, 18, 19];

function reducer(previous, current, index) {
  const returns = previous + current;
  console.log(`previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`);
  return returns;
}

arrayNoInitial.reduce(reducer);


//flattened array
let array = [[0, 1], [2, 3], [4, 5]];

console.log(array.reduce((pre, current) => {
  return pre.concat(current)
}));


// Count Names
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

let countedNames = names.reduce((allNames,name) => {
  if (name in allNames) {
    allNames[name]++
  }
  else {
    allNames[name] = 1;
  }
  return allNames
},{})

console.log(countedNames)

//sum an object values

let initialA = 0;
let sumA = [{a: 1}, {a:2}, {a:3}].reduce((previous, current) => {return previous+ current.a},initialA)
console.log(sumA)

//Group Object by key

let people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];

const GroupByProp = (objectArray,prop) => {
  return objectArray.reduce((accumulation, obj) => {
    let key = obj[prop]
    if (!accumulation[key]){
      accumulation[key] = []
    }
    accumulation[key].push(obj)
    return accumulation
  }, {})
};

let groupPeople = GroupByProp(people, 'age');
console.log(groupPeople)