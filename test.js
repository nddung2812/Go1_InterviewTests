const users = require('./users.json');
const fetch = require('node-fetch')

const run = async () => {
  // const users = await fetch('http://172.20.10.3:8080/users').then(response => response.json())

  const gmailUsers = users.filter(user => user.email.includes("@gmail"))
  console.log(gmailUsers.length)

  const mobile = gmailUsers.find(user => user.email === "cras@gmail.com")?.phone
  console.log(mobile)

  for (i = 0; i < users.length; i++) {
    const indexOfAt = users[i].email.indexOf("@");
    const emailFromAt = users[i].email.slice(indexOfAt);
    const indexOfDot = emailFromAt.indexOf(".");
    const emailType = emailFromAt.slice(1, indexOfDot);
    users[i].emailType = emailType;
  }
  // console.log(users);

  const emailTypeUsers = {
    // gmail: [],
    // hotmail: [],
    // yahoo: [],
  }
  for (i = 0; i < users.length; i++) {
    const indexOfAt = users[i].email.indexOf("@");
    const emailFromAt = users[i].email.slice(indexOfAt);
    const indexOfDot = emailFromAt.indexOf(".");
    const emailType = emailFromAt.slice(1, indexOfDot);

    if (!emailTypeUsers[emailType]) emailTypeUsers[emailType] = []

    emailTypeUsers[emailType].push(users[i])
  }
  console.log(emailTypeUsers.hotmail.length)
  console.log(emailTypeUsers.yahoo.length)
}
run()

