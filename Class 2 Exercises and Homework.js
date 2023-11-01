// 1. Create an object representation of yourself
// Should include:
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)

const mhansiPandhi = {
  firstName: "Mhansi",
  lastName: "Pandhi",
  "favorite food": "Indian",
  bestFriend: {
    firstName: "Richa",
    lastName: "Pandhi",
    "favorite food": "Salad",
  },
};
console.log(mhansiPandhi);
// 2. console.log best friend's firstName and your favorite food
console.log(
  mhansiPandhi.bestFriend["firstName"],
  mhansiPandhi["favorite food"]
);

// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X
const ticTacToe = [
  ["-", "O", "-"],
  ["-", "X", "O"],
  ["X", "-", "X"],
];
console.log(ticTacToe);

// 4. After the array is created, 'O' claims the top right square.
// Update that value.
ticTacToe[0][2] = "O";
console.log(ticTacToe);
// 5. Log the grid to the console.
console.log(ticTacToe[0]);
console.log(ticTacToe[1]);
console.log(ticTacToe[2]);

// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
const regEx = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/im;
const test1 = regEx.test("jdkl@yahoo.com");
console.log(test1); //true
const test2 = regEx.test("reachthestars@yahoo.com");
console.log(test2); //true
const test3 = regEx.test("reacgmail.com");
console.log(test3); //false

// 7. You are given an assignmentDate as a string in the format 'month/day/year'
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = "1/21/2019";
const givenDate = new Date(assignmentDate);
console.log(givenDate);
// 8. Create a new Date instance to represent the dueDate.
// This will be exactly 7 days after the assignment date.
const dueDate = new Date(givenDate);
dueDate.setDate(dueDate.getDate() + 7);
console.log(dueDate);

// 9. Use dueDate values to create an HTML time tag in format
// <time datetime='YYYY-MM-DD'>Month day, year</time>
// I have provided a months array to help
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const giveYear = dueDate.getFullYear();
const giveMonth = dueDate.getMonth();
const giveDate = dueDate.getDate();
const monthWrittenOut = months[giveMonth];

const statement = `<time datetime= '${giveYear}-${
  giveMonth + 1
}-${giveDate}'> ${monthWrittenOut} ${giveDate}, ${giveYear}'</time>`;
console.log(statement);

// 10. log this value using console.log
console.log(statement);
