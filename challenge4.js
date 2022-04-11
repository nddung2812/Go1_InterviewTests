
//0 ======|==========1000
//     4=========================1400
//        5==========|============================2000
//        |Max number|                                    2500==========3000


[
  ["User_001", 0, 1000],            //0==========================10
  ["User_002", 500, 2000],          //              5======================================20
  ["User_003", 2500, 3000],         //                                                                    25============30
  ["User_004", 400, 1400],          //          4==============================14
  ["User_001", 1100, 1800],         //                              11=================18
  ["User_005", 1200, 1400],         //                                  12=====14
  ["User_006", 500, 2400],          //              5=================================================24
  ["User_003", 2100, 2300]          //                                                        21====23
]
// find out the maximum number of concurrent streams

//find the time frame where most people start and finish time are found within
//find the last person joins the stream before the first person finishes => start of the time frame
//find the

//find minimum length among all streams and treat it as a unit of measurement
//find startTime and Endtime
//check in each time unit to see the maximum number of concurrent streams
//find out the conditions to satisfy having the largest number of streams
//add the number of total concurrent streams after each unit checked
//find out the max number of concurrent streams through the entire time length of the stream

// const users = [
//   ["User_001", 0, 1000],
//   ["User_002", 500, 2000],
//   ["User_003", 2500, 3000],
//   ["User_004", 400, 1400]
// ]

// const times = []
// for (let [_userId, begin, finish] of users) {
//   times.push(begin, finish)
// }
// const min = Math.min(...times)
// const max = Math.max(...times)
// const unit = Math.min(...users.map(([_userId, start, end]) => end - start))
// //check each unit in the entire stream time length
// let range = {};
// for (let i = min; i < max; i = i + unit) {
//   const startTime = i;
//   const endTime = i + unit;
//   const rangeKey = `${startTime}_${endTime}`
//   if (!range[rangeKey]) range[rangeKey] = 0

//   for (j = 0; j < users.length; j++) {
//     const userStart = users[j][1]
//     const userEnd = users[j][2]
//     const isCut = [
//         userStart >= startTime && userEnd <= endTime,
//         userStart < startTime && userEnd > endTime,
//         userStart < startTime && userEnd > startTime,
//         userStart < endTime && userEnd > startTime
//       ].includes(true)
//     if (isCut) range[rangeKey]++
//   }
// }
// const count = Math.max(...Object.values(range))
// console.log(count)


const users = [
  ["User_001", 0, 1000],
  ["User_002", 500, 2000],
  ["User_003", 2500, 3000],
  ["User_004", 400, 1400]
]

const times = []
for (let [_userId ,begin, finish] of users) {
  times.push(begin, finish)
};

const min = Math.min(...times)
const max = Math.max(...times)
const unit = Math.min(...users.map(([_,start, end]) => end - start ))

let rangeObject = {};

for (let i = min; i <= max; i = i + unit) {
  const startTime = i;
  const endTime = i + unit;
  const rangeKey = `${startTime} to ${endTime}`;
  if (!rangeObject[rangeKey]) rangeObject[rangeKey] = 0

  for (let j = 0; j < users.length; j++) {
    const [id, userStart, userEnd] = users[j];
    const isCut = [
      userStart >= startTime && userEnd <= endTime,
      userStart < startTime && userEnd > endTime,
      userStart < startTime && userEnd > startTime,
      userStart < endTime && userEnd > startTime
    ].includes(true)
    if(isCut) rangeObject[rangeKey] = rangeObject[rangeKey] + 1;
  }
}

const count = Math.max(...Object.values(rangeObject))
console.log(count)