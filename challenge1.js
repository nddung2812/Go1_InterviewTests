const data = {
  "Learner-0001": [
    "Course-0001",
    "Course-0002",
    "Course-0003"
  ],
  "Learner-0002": [
    "Course-0002",
    "Course-0003",
    "Course-0004"
  ]
}
const learnerIds = Object.values(data)
let countCourses = {}

for (let i = 0; i < learnerIds.length; i++) {
  const courseIds = learnerIds[i]

  for (j = 0; j < courseIds.length; j++) {

    const course = courseIds[j]
    if (!countCourses[course]) {
      countCourses[course] = 0
    }
    countCourses[course]=countCourses[course]+1
  }
}
const countCoursesArray = Object.entries(countCourses)
singleCompletedCourse = []
for (let i = 0; i < countCoursesArray.length; i++) {

  const [courseId, count] = countCoursesArray[i]
  if (count === 1) {
    singleCompletedCourse.push(courseId)
  }
}
console.log(singleCompletedCourse)