const learnerResponses = [
  ["Course_001","Course_002","Course_003","Course_004"],
  ["Course_001","Course_003"],
  ["Course_002","Course_004","Course_001"],
  ["Course_004","Course_002","Course_003","Course_001"],
  ["Course_004","Course_003","Course_002","Course_001"]
]

// 1st step find all courses that can have next course
const allNextCourses = [];
for (let i = 0; i < learnerResponses.length; i++) {
  for (let j = 0; j < learnerResponses[i].length - 1; j++) {
    allNextCourses.push(learnerResponses[i][j])
  }
}
const countEachNextCourse = {};

for (i = 0; i < allNextCourses.length; i++){
  if (countEachNextCourse[allNextCourses[i]]) {
    countEachNextCourse[allNextCourses[i]] ++;
  } else {
    countEachNextCourse[allNextCourses[i]] = 1;
  }
}
const coursesHaveNextCourse = Object.keys(countEachNextCourse);
console.log(coursesHaveNextCourse)
// 2nd step check each course in step 1, find out what the actual next courses are
const next1 = []
const next2 = [];
const next3 = [];
const next4 = [];
const courseNames = [];
for (let j = 0; j < learnerResponses.length; j++) {
  for (let i = 0; i < learnerResponses[j].length - 1; i++) {
    if (learnerResponses[j][i] === 'Course_001') {
      next1.push(learnerResponses[j][i + 1]);
    } else if (learnerResponses[j][i] === 'Course_002') {
      next2.push(learnerResponses[j][i + 1]);
    } else if (learnerResponses[j][i] === 'Course_003') {
      next3.push(learnerResponses[j][i + 1]);
    } else if (learnerResponses[j][i] === 'Course_004') {
      next4.push(learnerResponses[j][i + 1]);
    }
  }
}
const findMostCommonCourse = (courses) => {
  const obj = {};
  const answer = [];

  for (let course of courses) {
    if (obj[course]) {
      obj[course]++;
    } else {
      obj[course] = 1;
    }
  }

  const hightest = Math.max(...Object.values(obj));

  for (let key in obj) {
    if (obj[key] === hightest) answer.push(key);
  }
  return answer[0];
};
console.log(findMostCommonCourse(next1));
console.log(findMostCommonCourse(next2));
console.log(findMostCommonCourse(next3));
console.log(findMostCommonCourse(next4));
// 3rd final answer
const finalAnswer = {}
